"use client";
import { useCallback, useState } from "react";
import { ArrowL, ArrowR } from "./Icon";
import Modal from "./Modal";

/** Galerie de photos avec visionneuse (flèches, clavier) */
export default function Gallery({ images, alt }) {
  const [i, setI] = useState(-1);
  const n = images.length;
  const onKey = useCallback((e) => {
    if (e.key === "ArrowRight") setI((k) => (k + 1) % n);
    if (e.key === "ArrowLeft") setI((k) => (k - 1 + n) % n);
  }, [n]);
  return (
    <>
      <div className="gallery">
        {images.map((src, k) => (
          <button key={src} onClick={() => setI(k)} aria-label={`Open photo ${k + 1}`}>
            <img src={src} alt={`${alt} — photo ${k + 1}`} loading="lazy" />
          </button>
        ))}
      </div>
      {i >= 0 && (
        <Modal onClose={() => setI(-1)} label="Photo viewer" onKey={onKey}>
          <img className="modal__img" src={images[i]} alt={`${alt} — photo ${i + 1}`} />
          {n > 1 && (<>
            <button className="modal__nav modal__nav--prev" aria-label="Previous photo" onClick={() => setI((i - 1 + n) % n)}><ArrowL /></button>
            <button className="modal__nav modal__nav--next" aria-label="Next photo" onClick={() => setI((i + 1) % n)}><ArrowR /></button>
          </>)}
        </Modal>
      )}
    </>
  );
}
