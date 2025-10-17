import { NextRequest, NextResponse } from "next/server";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { auth } from "@/auth";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as HandleUploadBody;

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        // Authenticate and authorize users here
        return {
          allowedContentTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
          maximumSizeInBytes: 4 * 1024 * 1024, // 4MB
          addRandomSuffix: true,
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Handle post-upload actions
        console.log('Upload completed:', blob);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ 
      error: "Failed to upload file" 
    }, { status: 500 });
  }
}
