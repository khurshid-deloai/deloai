
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

type TabType = 'round1' | 'grande_finale' | 'prize_distribution' | 'product_launch';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

interface GalleryImageWithSize extends GalleryImage {
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

// (use the exact galleryData you already have) — replace this placeholder with your galleryData import or copy
const galleryData: Record<TabType, GalleryImageWithSize[]> = {
  round1: [
    { id: 1, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.24.18 PM.webp', alt: 'Round 1 — Moment 1', size: 'small' },
    { id: 2, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.24.20 PM.webp', alt: 'Round 1 — Moment 2', size: 'medium' },
    { id: 3, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.24.25 PM.webp', alt: 'Round 1 — Moment 3', size: 'tall' },
    { id: 4, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.24.27 PM.webp', alt: 'Round 1 — Moment 4', size: 'wide' },
    { id: 5, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.24.28 PM.webp', alt: 'Round 1 — Moment 5', size: 'large' },
    { id: 6, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.24.44 PM.webp', alt: 'Round 1 — Moment 6', size: 'small' },
    { id: 7, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.24.46 PM.webp', alt: 'Round 1 — Moment 7', size: 'medium' },
    { id: 8, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.24.57 PM.webp', alt: 'Round 1 — Moment 8', size: 'small' },
    { id: 9, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.24.59 PM.webp', alt: 'Round 1 — Moment 9', size: 'wide' },
    { id: 10, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.00 PM.webp', alt: 'Round 1 — Moment 10', size: 'medium' },
    { id: 11, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.02 PM.webp', alt: 'Round 1 — Moment 11', size: 'small' },
    { id: 12, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.14 PM.webp', alt: 'Round 1 — Moment 12', size: 'large' },
    { id: 13, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.19 PM.webp', alt: 'Round 1 — Moment 13', size: 'small' },
    { id: 14, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.22 PM.webp', alt: 'Round 1 — Moment 14', size: 'medium' },
    { id: 15, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.23 PM.webp', alt: 'Round 1 — Moment 15', size: 'small' },
    { id: 16, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.27 PM.webp', alt: 'Round 1 — Moment 16', size: 'tall' },
    { id: 17, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.34 PM.webp', alt: 'Round 1 — Moment 17', size: 'small' },
    { id: 18, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.35 PM.webp', alt: 'Round 1 — Moment 18', size: 'medium' },
    { id: 19, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.36 PM.webp', alt: 'Round 1 — Moment 19', size: 'wide' },
    { id: 20, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.38 PM (1).webp', alt: 'Round 1 — Moment 20', size: 'small' },
    { id: 21, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.38 PM.webp', alt: 'Round 1 — Moment 21', size: 'small' },
    { id: 22, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.41 PM (1).webp', alt: 'Round 1 — Moment 22', size: 'medium' },
    { id: 23, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.25.41 PM.webp', alt: 'Round 1 — Moment 23', size: 'small' },
    { id: 24, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.08 PM.webp', alt: 'Round 1 — Moment 24', size: 'medium' },
    { id: 25, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.09 PM (1).webp', alt: 'Round 1 — Moment 25', size: 'small' },
    { id: 26, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.09 PM.webp', alt: 'Round 1 — Moment 26', size: 'small' },
    { id: 27, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.10 PM (1).webp', alt: 'Round 1 — Moment 27', size: 'tall' },
    { id: 28, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.10 PM.webp', alt: 'Round 1 — Moment 28', size: 'medium' },
    { id: 29, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.11 PM (1).webp', alt: 'Round 1 — Moment 29', size: 'small' },
    { id: 30, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.11 PM (2).webp', alt: 'Round 1 — Moment 30', size: 'small' },
    { id: 31, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.11 PM.webp', alt: 'Round 1 — Moment 31', size: 'wide' },
    { id: 32, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.12 PM (1).webp', alt: 'Round 1 — Moment 32', size: 'medium' },
    { id: 33, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.12 PM.webp', alt: 'Round 1 — Moment 33', size: 'small' },
    { id: 34, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.13 PM (1).webp', alt: 'Round 1 — Moment 34', size: 'small' },
    { id: 35, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.13 PM (2).webp', alt: 'Round 1 — Moment 35', size: 'medium' },
    { id: 36, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.13 PM.webp', alt: 'Round 1 — Moment 36', size: 'small' },
    { id: 37, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.14 PM (1).webp', alt: 'Round 1 — Moment 37', size: 'small' },
    { id: 38, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.14 PM.webp', alt: 'Round 1 — Moment 38', size: 'large' },
    { id: 39, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.15 PM.webp', alt: 'Round 1 — Moment 39', size: 'small' },
    { id: 40, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.16 PM (1).webp', alt: 'Round 1 — Moment 40', size: 'wide' },
    { id: 41, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.16 PM.webp', alt: 'Round 1 — Moment 41', size: 'small' },
    { id: 42, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.17 PM (1).webp', alt: 'Round 1 — Moment 42', size: 'medium' },
    { id: 43, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.17 PM.webp', alt: 'Round 1 — Moment 43', size: 'small' },
    { id: 44, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.26.18 PM.webp', alt: 'Round 1 — Moment 44', size: 'small' },
    { id: 45, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.50.38 PM (1).webp', alt: 'Round 1 — Moment 45', size: 'medium' },
    { id: 46, url: 'https://d2saegmz0kzo1a.cloudfront.net/ROUND 1/WhatsApp Image 2025-05-25 at 5.50.38 PM (2).webp', alt: 'Round 1 — Moment 46', size: 'small' },
  ],

  grande_finale: [
    { id: 100, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/WhatsApp Image 2025-05-25 at 5.50.29 PM.webp', alt: 'Grand Finale — Moment 1', size: 'medium' },
    { id: 101, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/WhatsApp Image 2025-05-25 at 5.50.30 PM (1).webp', alt: 'Grand Finale — Moment 2', size: 'small' },
    { id: 102, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/WhatsApp Image 2025-05-25 at 5.50.30 PM.webp', alt: 'Grand Finale — Moment 3', size: 'large' },
    { id: 103, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/WhatsApp Image 2025-05-25 at 5.50.31 PM.webp', alt: 'Grand Finale — Moment 4', size: 'tall' },
    { id: 104, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/WhatsApp Image 2025-05-25 at 5.50.32 PM.webp', alt: 'Grand Finale — Moment 5', size: 'small' },
    { id: 105, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/WhatsApp Image 2025-05-25 at 5.50.33 PM.webp', alt: 'Grand Finale — Moment 6', size: 'medium' },
    { id: 106, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/WhatsApp Image 2025-05-25 at 5.50.35 PM (1).webp', alt: 'Grand Finale — Moment 7', size: 'small' },
    { id: 107, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/WhatsApp Image 2025-05-25 at 5.50.35 PM.webp', alt: 'Grand Finale — Moment 8', size: 'wide' },
    { id: 108, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/WhatsApp Image 2025-05-25 at 5.50.36 PM.webp', alt: 'Grand Finale — Moment 9', size: 'small' },
    { id: 109, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/WhatsApp Image 2025-05-25 at 5.50.37 PM.webp', alt: 'Grand Finale — Moment 10', size: 'medium' },
    { id: 110, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0217.webp', alt: 'Grand Finale — Moment 11', size: 'small' },
    { id: 111, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0218.webp', alt: 'Grand Finale — Moment 12', size: 'small' },
    { id: 112, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0219.webp', alt: 'Grand Finale — Moment 13', size: 'medium' },
    { id: 113, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0220.webp', alt: 'Grand Finale — Moment 14', size: 'small' },
    { id: 114, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0221.webp', alt: 'Grand Finale — Moment 15', size: 'large' },
    { id: 115, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0222.webp', alt: 'Grand Finale — Moment 16', size: 'small' },
    { id: 116, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0223.webp', alt: 'Grand Finale — Moment 17', size: 'small' },
    { id: 117, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0224.webp', alt: 'Grand Finale — Moment 18', size: 'medium' },
    { id: 118, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0225.webp', alt: 'Grand Finale — Moment 19', size: 'small' },
    { id: 119, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0226.webp', alt: 'Grand Finale — Moment 20', size: 'small' },
    { id: 120, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0227.webp', alt: 'Grand Finale — Moment 21', size: 'wide' },
    { id: 121, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0228.webp', alt: 'Grand Finale — Moment 22', size: 'medium' },
    { id: 122, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0229.webp', alt: 'Grand Finale — Moment 23', size: 'small' },
    { id: 123, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0230.webp', alt: 'Grand Finale — Moment 24', size: 'small' },
    { id: 124, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0231.webp', alt: 'Grand Finale — Moment 25', size: 'medium' },
    { id: 125, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0232.webp', alt: 'Grand Finale — Moment 26', size: 'small' },
    { id: 126, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0233.webp', alt: 'Grand Finale — Moment 27', size: 'small' },
    { id: 127, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0234.webp', alt: 'Grand Finale — Moment 28', size: 'large' },
    { id: 128, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0235.webp', alt: 'Grand Finale — Moment 29', size: 'small' },
    { id: 129, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0239.webp', alt: 'Grand Finale — Moment 30', size: 'medium' },
    { id: 130, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0241.webp', alt: 'Grand Finale — Moment 31', size: 'small' },
    { id: 131, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0242.webp', alt: 'Grand Finale — Moment 32', size: 'tall' },
    { id: 132, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0243.webp', alt: 'Grand Finale — Moment 33', size: 'small' },
    { id: 133, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0244.webp', alt: 'Grand Finale — Moment 34', size: 'wide' },
    { id: 134, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0245.webp', alt: 'Grand Finale — Moment 35', size: 'small' },
    { id: 135, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0246.webp', alt: 'Grand Finale — Moment 36', size: 'medium' },
    { id: 136, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0247.webp', alt: 'Grand Finale — Moment 37', size: 'small' },
    { id: 137, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0248.webp', alt: 'Grand Finale — Moment 38', size: 'small' },
    { id: 138, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0249.webp', alt: 'Grand Finale — Moment 39', size: 'medium' },
    { id: 139, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0250.webp', alt: 'Grand Finale — Moment 40', size: 'large' },
    { id: 140, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0251.webp', alt: 'Grand Finale — Moment 41', size: 'small' },
    { id: 141, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0252.webp', alt: 'Grand Finale — Moment 42', size: 'small' },
    { id: 142, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0253.webp', alt: 'Grand Finale — Moment 43', size: 'medium' },
    { id: 143, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0256.webp', alt: 'Grand Finale — Moment 44', size: 'small' },
    { id: 144, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0258.webp', alt: 'Grand Finale — Moment 45', size: 'small' },
    { id: 145, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0259.webp', alt: 'Grand Finale — Moment 46', size: 'medium' },
    { id: 146, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0260.webp', alt: 'Grand Finale — Moment 47', size: 'small' },
    { id: 147, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0261.webp', alt: 'Grand Finale — Moment 48', size: 'small' },
    { id: 148, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0262.webp', alt: 'Grand Finale — Moment 49', size: 'large' },
    { id: 149, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0268.webp', alt: 'Grand Finale — Moment 50', size: 'small' },
    { id: 150, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0269.webp', alt: 'Grand Finale — Moment 51', size: 'small' },
    { id: 151, url: 'https://d2saegmz0kzo1a.cloudfront.net/Event/_DSC0270.webp', alt: 'Grand Finale — Moment 52', size: 'medium' },
  ],

  prize_distribution: [
    { id: 200, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/PXL_20250405_101408005.MP.webp', alt: 'Prize Distribution — Moment 1', size: 'small' },
    { id: 201, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/PXL_20250405_101410737.MP.webp', alt: 'Prize Distribution — Moment 2', size: 'medium' },
    { id: 202, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/PXL_20250405_101412035.webp', alt: 'Prize Distribution — Moment 3', size: 'small' },
    { id: 203, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/PXL_20250405_103353615.MP.webp', alt: 'Prize Distribution — Moment 4', size: 'tall' },
    { id: 204, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/PXL_20250405_103354271.webp', alt: 'Prize Distribution — Moment 5', size: 'medium' },
    { id: 205, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/PXL_20250405_103605376.MP.webp', alt: 'Prize Distribution — Moment 6', size: 'small' },
    { id: 206, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/PXL_20250405_103606563.webp', alt: 'Prize Distribution — Moment 7', size: 'small' },
    { id: 207, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/PXL_20250405_103606911.webp', alt: 'Prize Distribution — Moment 8', size: 'medium' },
    { id: 208, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/PXL_20250405_103607081.webp', alt: 'Prize Distribution — Moment 9', size: 'small' },
    { id: 209, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/Panorama-2.webp', alt: 'Prize Distribution — Panorama 2', size: 'wide' },
    { id: 210, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/Panorama-3.webp', alt: 'Prize Distribution — Panorama 3', size: 'wide' },
    { id: 211, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/Panorama-6.webp', alt: 'Prize Distribution — Panorama 6', size: 'wide' },
    { id: 212, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0269.webp', alt: 'Prize Distribution — Moment 13', size: 'small' },
    { id: 213, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0270.webp', alt: 'Prize Distribution — Moment 14', size: 'medium' },
    { id: 214, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0271.webp', alt: 'Prize Distribution — Moment 15', size: 'small' },
    { id: 215, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0272.webp', alt: 'Prize Distribution — Moment 16', size: 'small' },
    { id: 216, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0273.webp', alt: 'Prize Distribution — Moment 17', size: 'large' },
    { id: 217, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0274.webp', alt: 'Prize Distribution — Moment 18', size: 'medium' },
    { id: 218, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0275.webp', alt: 'Prize Distribution — Moment 19', size: 'small' },
    { id: 219, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0276.webp', alt: 'Prize Distribution — Moment 20', size: 'small' },
    { id: 220, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0277.webp', alt: 'Prize Distribution — Moment 21', size: 'medium' },
    { id: 221, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0278.webp', alt: 'Prize Distribution — Moment 22', size: 'small' },
    { id: 222, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0279.webp', alt: 'Prize Distribution — Moment 23', size: 'small' },
    { id: 223, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0280.webp', alt: 'Prize Distribution — Moment 24', size: 'medium' },
    { id: 224, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0281.webp', alt: 'Prize Distribution — Moment 25', size: 'small' },
    { id: 225, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0282.webp', alt: 'Prize Distribution — Moment 26', size: 'tall' },
    { id: 226, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0283.webp', alt: 'Prize Distribution — Moment 27', size: 'small' },
    { id: 227, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0284.webp', alt: 'Prize Distribution — Moment 28', size: 'medium' },
    { id: 228, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0285.webp', alt: 'Prize Distribution — Moment 29', size: 'small' },
    { id: 229, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0286.webp', alt: 'Prize Distribution — Moment 30', size: 'wide' },
    { id: 230, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0287.webp', alt: 'Prize Distribution — Moment 31', size: 'small' },
    { id: 231, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0288.webp', alt: 'Prize Distribution — Moment 32', size: 'medium' },
    { id: 232, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0289.webp', alt: 'Prize Distribution — Moment 33', size: 'small' },
    { id: 233, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0290.webp', alt: 'Prize Distribution — Moment 34', size: 'small' },
    { id: 234, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0291.webp', alt: 'Prize Distribution — Moment 35', size: 'large' },
    { id: 235, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0292.webp', alt: 'Prize Distribution — Moment 36', size: 'small' },
    { id: 236, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0293.webp', alt: 'Prize Distribution — Moment 37', size: 'medium' },
    { id: 237, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0294.webp', alt: 'Prize Distribution — Moment 38', size: 'small' },
    { id: 238, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0295.webp', alt: 'Prize Distribution — Moment 39', size: 'small' },
    { id: 239, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0296.webp', alt: 'Prize Distribution — Moment 40', size: 'medium' },
    { id: 240, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0297.webp', alt: 'Prize Distribution — Moment 41', size: 'small' },
    { id: 241, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0298.webp', alt: 'Prize Distribution — Moment 42', size: 'small' },
    { id: 242, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0299.webp', alt: 'Prize Distribution — Moment 43', size: 'medium' },
    { id: 243, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0300.webp', alt: 'Prize Distribution — Moment 44', size: 'small' },
    { id: 244, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0301.webp', alt: 'Prize Distribution — Moment 45', size: 'small' },
    { id: 245, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 02/_DSC0302.webp', alt: 'Prize Distribution — Moment 46', size: 'large' },
  ],

  product_launch: [
    { id: 300, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/IMG_20250525_173745.webp', alt: 'Product Launch — Entrance', size: 'medium' },
    { id: 301, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/Panorama-1.webp', alt: 'Product Launch — Panorama 1', size: 'wide' },
    { id: 302, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/WhatsApp Image 2025-05-25 at 5.50.38 PM.webp', alt: 'Product Launch — Candid', size: 'small' },
    { id: 303, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0079.webp', alt: 'Product Launch — Moment 1', size: 'small' },
    { id: 304, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0080.webp', alt: 'Product Launch — Moment 2', size: 'medium' },
    { id: 305, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0081.webp', alt: 'Product Launch — Moment 3', size: 'small' },
    { id: 306, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0082.webp', alt: 'Product Launch — Moment 4', size: 'tall' },
    { id: 307, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0083.webp', alt: 'Product Launch — Moment 5', size: 'medium' },
    { id: 308, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0084.webp', alt: 'Product Launch — Moment 6', size: 'small' },
    { id: 309, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0085.webp', alt: 'Product Launch — Moment 7', size: 'medium' },
    { id: 310, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0087.webp', alt: 'Product Launch — Moment 8', size: 'small' },
    { id: 311, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0089.webp', alt: 'Product Launch — Moment 9', size: 'wide' },
    { id: 312, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0090.webp', alt: 'Product Launch — Moment 10', size: 'small' },
    { id: 313, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0091.webp', alt: 'Product Launch — Moment 11', size: 'small' },
    { id: 314, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0093.webp', alt: 'Product Launch — Moment 12', size: 'medium' },
    { id: 315, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0094.webp', alt: 'Product Launch — Moment 13', size: 'small' },
    { id: 316, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0096.webp', alt: 'Product Launch — Moment 14', size: 'small' },
    { id: 317, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0097.webp', alt: 'Product Launch — Moment 15', size: 'large' },
    { id: 318, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0098.webp', alt: 'Product Launch — Moment 16', size: 'small' },
    { id: 319, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0099.webp', alt: 'Product Launch — Moment 17', size: 'medium' },
    { id: 320, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0101.webp', alt: 'Product Launch — Moment 18', size: 'small' },
    { id: 321, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0102.webp', alt: 'Product Launch — Moment 19', size: 'small' },
    { id: 322, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0103.webp', alt: 'Product Launch — Moment 20', size: 'medium' },
    { id: 323, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0104.webp', alt: 'Product Launch — Moment 21', size: 'small' },
    { id: 324, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0105.webp', alt: 'Product Launch — Moment 22', size: 'tall' },
    { id: 325, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0106.webp', alt: 'Product Launch — Moment 23', size: 'small' },
    { id: 326, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0107.webp', alt: 'Product Launch — Moment 24', size: 'medium' },
    { id: 327, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0108.webp', alt: 'Product Launch — Moment 25', size: 'small' },
    { id: 328, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0111.webp', alt: 'Product Launch — Moment 26', size: 'small' },
    { id: 329, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0112.webp', alt: 'Product Launch — Moment 27', size: 'large' },
    { id: 330, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0113.webp', alt: 'Product Launch — Moment 28', size: 'small' },
    { id: 331, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0114.webp', alt: 'Product Launch — Moment 29', size: 'medium' },
    { id: 332, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0116.webp', alt: 'Product Launch — Moment 30', size: 'small' },
    { id: 333, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0117.webp', alt: 'Product Launch — Moment 31', size: 'wide' },
    { id: 334, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0118.webp', alt: 'Product Launch — Moment 32', size: 'small' },
    { id: 335, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0119.webp', alt: 'Product Launch — Moment 33', size: 'small' },
    { id: 336, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0120.webp', alt: 'Product Launch — Moment 34', size: 'medium' },
    { id: 337, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0121.webp', alt: 'Product Launch — Moment 35', size: 'small' },
    { id: 338, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0123.webp', alt: 'Product Launch — Moment 36', size: 'small' },
    { id: 339, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0124.webp', alt: 'Product Launch — Moment 37', size: 'medium' },
    { id: 340, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0125.webp', alt: 'Product Launch — Moment 38', size: 'small' },
    { id: 341, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0126.webp', alt: 'Product Launch — Moment 39', size: 'small' },
    { id: 342, url: 'https://d2saegmz0kzo1a.cloudfront.net/Card 01/_DSC0129.webp', alt: 'Product Launch — Moment 40', size: 'large' },
  ],
};
export default function GalleryPageLazy() {
  const [activeTab, setActiveTab] = useState<TabType>('round1');

  // number of items to load per batch
  const BATCH_SIZE = 12;

  // how many items are currently rendered
  const [renderCount, setRenderCount] = useState(BATCH_SIZE);

  // sentinel ref observed by IntersectionObserver
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // reset renderCount whenever tab changes
  useEffect(() => {
    setRenderCount(BATCH_SIZE);
    // scroll to top of gallery area (optional UX)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // observe the sentinel to load more items when it becomes visible
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRenderCount((prev) => {
            const total = galleryData[activeTab].length;
            const next = Math.min(prev + BATCH_SIZE, total);
            return prev >= total ? prev : next;
          });
        }
      });
    }, {
      root: null,
      rootMargin: '400px', // start loading early
      threshold: 0.01,
    });

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [activeTab]);

  const tabs = [
    { id: 'round1' as TabType, label: 'Round 1' },
    { id: 'grande_finale' as TabType, label: 'Grand Finale' },
    { id: 'prize_distribution' as TabType, label: 'Prize Distribution' },
    { id: 'product_launch' as TabType, label: 'Product Launch' },
  ];

  const imagesToShow = galleryData[activeTab].slice(0, renderCount);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Event Gallery</h1>
              <p className="text-sm text-gray-600 mt-1">Capturing memorable moments</p>
            </div>
          </div>

          <div className="flex gap-1 overflow-x-auto pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'text-gray-900 border-b-2 border-green-400'
                    : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-4">
          {imagesToShow.map((image, index) => {
            const sizeClasses = {
              small: 'col-span-1 row-span-1',
              medium: 'col-span-2 row-span-1',
              large: 'col-span-2 row-span-2',
              wide: 'col-span-2 md:col-span-3 row-span-1',
              tall: 'col-span-1 row-span-2',
            } as Record<GalleryImageWithSize['size'], string>;

            return (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl bg-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ${sizeClasses[image.size]}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Use native lazy loading plus a tiny JS safety: image src only set when it's within the batch we're rendering. */}
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Show skeleton placeholders when there are fewer rendered items than the batch size to keep layout stable */}
          {imagesToShow.length < renderCount &&
            Array.from({ length: renderCount - imagesToShow.length }).map((_, i) => (
              <div key={`skeleton-${i}`} className="rounded-2xl bg-gray-100 animate-pulse col-span-1 row-span-1 h-full" />
            ))}
        </div>

        <div ref={sentinelRef} className="h-6" />

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">
              {galleryData[activeTab].length} photos in {tabs.find(t => t.id === activeTab)?.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
