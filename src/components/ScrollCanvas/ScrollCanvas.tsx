import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 240;
const PX_PER_FRAME = 6;
const FOLDER = "/ezgif-4ee0f0625a261146-jpg";

export function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      redraw();
    };
    window.addEventListener("resize", resize, { passive: true });

    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);

    const load = (i: number) => {
      const img = new Image();
      const n = String(i + 1).padStart(3, "0");
      img.onload = () => {
        images[i] = img;
        if (i === 0) resize();
      };
      img.onerror = () => {};
      img.src = `${FOLDER}/ezgif-frame-${n}.jpg`;
    };

    load(0);
    for (let i = 1; i < TOTAL_FRAMES; i++) load(i);

    let lastDrawnIdx = -1;

    const drawImg = (img: HTMLImageElement) => {
      const iw = img.naturalWidth || 1;
      const ih = img.naturalHeight || 1;
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / iw, ch / ih);
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - iw * scale) / 2, (ch - ih * scale) / 2, iw * scale, ih * scale);
    };

    const redraw = () => {
      const idx = Math.min(Math.max(Math.round(displayIndex), 0), TOTAL_FRAMES - 1);
      if (images[idx]) drawImg(images[idx]!);
    };

    const getTarget = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0 && scrollTop >= maxScroll - 1) return TOTAL_FRAMES - 1;
      return Math.min(scrollTop / PX_PER_FRAME, TOTAL_FRAMES - 1);
    };

    let displayIndex = 0;
    let rafId: number;

    const animate = () => {
      const target = getTarget();
      displayIndex += (target - displayIndex) * 0.14;
      const rounded = Math.round(displayIndex);
      if (rounded !== lastDrawnIdx) {
        lastDrawnIdx = rounded;
        const idx = Math.min(Math.max(rounded, 0), TOTAL_FRAMES - 1);
        if (images[idx]) drawImg(images[idx]!);
      }
      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
