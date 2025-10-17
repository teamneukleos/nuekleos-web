"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Upload, Link as LinkIcon, X } from "lucide-react";
import ImageUpload from "./ImageUpload";

interface ImageUploadModalProps {
  onImageSelect: (url: string) => void;
  children: React.ReactNode;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ onImageSelect, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [activeTab, setActiveTab] = useState("upload");
  const { toast } = useToast();

  const handleUrlSubmit = () => {
    if (!urlInput.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid image URL",
        variant: "destructive",
      });
      return;
    }

    // Basic URL validation
    try {
      new URL(urlInput);
      onImageSelect(urlInput);
      setIsOpen(false);
      setUrlInput("");
    } catch {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
    }
  };

  const handleUploadSuccess = (url: string) => {
    setUploadedUrl(url);
    onImageSelect(url);
    setIsOpen(false);
    setUploadedUrl("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setUrlInput("");
    setUploadedUrl("");
    setActiveTab("upload");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Add Image
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Mode selector buttons */}
          <div className="flex gap-2">
            <Button
              type="button"
              variant={activeTab === "upload" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("upload")}
              className="flex items-center gap-2"
            >
              <Upload className="h-4 w-4" />
              Upload File
            </Button>
            <Button
              type="button"
              variant={activeTab === "url" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("url")}
              className="flex items-center gap-2"
            >
              <LinkIcon className="h-4 w-4" />
              From URL
            </Button>
          </div>
          
          {/* Upload mode */}
          {activeTab === "upload" && (
            <div className="space-y-2">
              <Label>Upload an image from your device</Label>
              <ImageUpload
                value={uploadedUrl}
                onChange={handleUploadSuccess}
                disabled={false}
              />
            </div>
          )}
          
          {/* URL mode */}
          {activeTab === "url" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="image-url">Image URL</Label>
                <Input
                  id="image-url"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUrlSubmit();
                    }
                  }}
                />
                <p className="text-sm text-gray-500">
                  Enter the URL of an image you want to embed
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button onClick={handleUrlSubmit}>
                  Add Image
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUploadModal;
