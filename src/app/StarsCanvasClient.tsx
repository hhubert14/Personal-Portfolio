// app/StarsCanvasClient.tsx
"use client";

import dynamic from 'next/dynamic';

const StarsCanvas = dynamic(() => import('../components/main/StarBackground'), {
  ssr: false,
});

export default StarsCanvas;
