"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { upload } from "@vercel/blob/client";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  onError?: (error: string) => void;
  disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  onError,
  disabled = false,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 100);

      // Generate a unique filename
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 15);
      const fileExtension = file.name.split('.').pop();
      const filename = `blog-images/${timestamp}-${randomString}.${fileExtension}`;

      // Upload to Vercel Blob using client-side upload
      const blob = await upload(filename, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      onChange(blob.url);

      toast({
        title: "Success",
        description: "Image uploaded successfully!",
        variant: "default",
      });

    } catch (error) {
      console.error("Upload error:", error);
      const errorMessage = error instanceof Error ? error.message : "Upload failed";
      
      toast({
        title: "Upload Failed",
        description: errorMessage,
        variant: "destructive",
      });

      onError?.(errorMessage);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  }, [onChange, onError, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp", ".gif"],
    },
    maxFiles: 1,
    maxSize: 4 * 1024 * 1024, // 4MB
    disabled: disabled || isUploading,
  });

  const removeImage = () => {
    onChange("");
  };

  return (
    <div className="w-full">
      {value ? (
        <div className="relative">
          <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-gray-200">
            <img
              src={value}
              alt="Uploaded cover image"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={removeImage}
              disabled={disabled || isUploading}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Click the X to remove this image
          </p>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`
            w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors
            ${isDragActive 
              ? "border-orange-500 bg-orange-50" 
              : "border-gray-300 hover:border-gray-400"
            }
            ${disabled || isUploading ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            {isUploading ? (
              <div className="flex flex-col items-center space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Uploading... {uploadProgress}%
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  {isDragActive ? (
                    <Upload className="h-8 w-8 text-orange-600" />
                  ) : (
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    {isDragActive ? "Drop the image here" : "Upload cover image"}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Drag and drop an image, or click to select
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Supports: JPEG, PNG, WebP, GIF (max 4MB)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
