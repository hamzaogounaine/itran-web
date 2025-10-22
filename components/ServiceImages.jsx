"use client";
import { useState } from "react";
import Image from "next/image";

export default function ServiceImages({ mainImage, additionalImages = [] }) {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={selectedImage}
          alt="Service preview"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Thumbnail Images */}
      {additionalImages.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setSelectedImage(mainImage)}
            className={`relative aspect-video overflow-hidden rounded-lg transition-all duration-200 ${
              selectedImage === mainImage
                ? "ring-2 ring-yellow-400 ring-offset-2"
                : "hover:opacity-80"
            }`}
          >
            <Image
              src={mainImage}
              alt="Main service image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 11vw"
            />
          </button>
          {additionalImages.slice(0, 2).map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative aspect-video overflow-hidden rounded-lg transition-all duration-200 ${
                selectedImage === image
                  ? "ring-2 ring-yellow-400 ring-offset-2"
                  : "hover:opacity-80"
              }`}
            >
              <Image
                src={image}
                alt={`Service image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 11vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
