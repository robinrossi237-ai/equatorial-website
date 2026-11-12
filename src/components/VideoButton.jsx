"use client";
import { useState } from "react";
import { Play } from "./Icon";
import Modal from "./Modal";

/** Bouton "Play video" qui ouvre la vidéo YouTube dans une fenêtre */
export default function VideoButton({ id, label = "Watch our video", tabIndex }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="play" onClick={() => setOpen(true)} tabIndex={tabIndex}>
        <span className="play__circle"><Play /></span>
        <span>{label}</span>
      </button>
      {open && (
        <Modal onClose={() => setOpen(false)} label="Company video">
          <div className="modal__video">
            <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title="Equatorial Oilfield Services video"
              allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          </div>
        </Modal>
      )}
    </>
  );
}
