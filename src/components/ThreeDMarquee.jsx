"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import "@/styles/ThreeDMarquee.css";

export const ThreeDMarquee = ({ images, className }) => {
  // Ensure we have enough images to fill all grid positions
  // We need at least 4 images per column to fill the visible grid
  const minImagesPerColumn = 4;
  const totalColumns = 4;
  const minTotalImages = minImagesPerColumn * totalColumns;
  
  // If we don't have enough images, duplicate some to fill the grid
  let processedImages = [...images];
  if (processedImages.length < minTotalImages) {
    const needed = minTotalImages - processedImages.length;
    for (let i = 0; i < needed; i++) {
      processedImages.push(processedImages[i % processedImages.length]);
    }
  }
  
  // Split the images array into 4 equal parts, ensuring each column has enough images
  const chunkSize = Math.ceil(processedImages.length / totalColumns);
  const chunks = Array.from({ length: totalColumns }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return processedImages.slice(start, start + chunkSize);
  });

  return (
    <div className={cn("threed-marquee", className)}>
      <div className="threed-marquee-center">
        <div className="threed-marquee-stage">
          <div className="threed-marquee-grid">
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 7 : 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="threed-marquee-col">
                <GridLineVertical className="grid-line-v offset-left" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="threed-card" key={imageIndex + image}>
                    <GridLineHorizontal className="grid-line-h offset-top" offset="20px" />
                    <motion.img
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      key={imageIndex + image}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="threed-img"
                      width={970}
                      height={700}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({ className, offset }) => {
  return (
    <div
      style={{
        "--background": "#ffffff",
        "--color": "rgba(0, 0, 0, 0.2)",
        "--height": "1px",
        "--width": "5px",
        "--offset": offset || "200px",
      }}
      className={cn("grid-line-h", className)}
    />
  );
};

const GridLineVertical = ({ className, offset }) => {
  return (
    <div
      style={{
        "--background": "#ffffff",
        "--color": "rgba(0, 0, 0, 0.2)",
        "--height": "5px",
        "--width": "1px",
        "--offset": offset || "150px",
      }}
      className={cn("grid-line-v", className)}
    />
  );
};
