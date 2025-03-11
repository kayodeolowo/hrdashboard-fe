import React, { useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import Image from "next/image";

interface MediaUploadProps {
  onUploadSuccess: (imageUrl: string) => void;
  existingImageUrl?: string;
  className?: string;
}

interface UploadResponse {
  success: boolean;
  message: string;
  data: {
    imageUrl: string;
  };
}

const MediaUpload: React.FC<MediaUploadProps> = ({
  onUploadSuccess,
  existingImageUrl,
  className = "",
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(
    existingImageUrl || null
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];

    try {
      setIsUploading(true);
      setUploadError(null);

      // Create FormData & append file
      const formData = new FormData();
      formData.append("file", file); // Ensure it's 'file', as backend expects

      // Get authentication details
      const token = localStorage.getItem("hrToken");
      const apiKey = process.env.NEXT_PUBLIC_APP_ID;
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

      // Send request
      const response = await axios.post<UploadResponse>(
        `${baseUrl}/upload/media`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            "x-api-key": apiKey,
          },
        }
      );

      if (response.data.success) {
        const uploadedImageUrl = response.data.data.imageUrl;
        setImageUrl(uploadedImageUrl);
        onUploadSuccess(uploadedImageUrl);
      } else {
        setUploadError("Upload failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadError("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Upload Button / Preview */}
      <div onClick={handleFileSelect} className="relative cursor-pointer group">
        {imageUrl ? (
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-yellow">
            <Image src={imageUrl} alt="Profile" fill className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-white text-sm">Change</span>
            </div>
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-200 border-2 border-dashed border-yellow flex items-center justify-center">
            {isUploading ? (
              <div className="text-center">
                <div className="w-5 h-5 border-2 border-t-2 border-yellow rounded-full animate-spin mx-auto mb-1"></div>
                <span className="text-xs">Uploading...</span>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-auto mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="text-xs">Upload File</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Error message */}
      {uploadError && <p className="text-red-500 text-xs mt-2">{uploadError}</p>}
    </div>
  );
};

export default MediaUpload;
