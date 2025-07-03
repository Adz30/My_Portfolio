import React from "react";

type ModalProps = {
  url: string;
  onClose: () => void;
};

export default function NotionModal({ url, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-11/12 max-w-4xl h-[80vh] shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // prevent modal close on iframe click
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕ Close
        </button>
        <iframe
          src={url}
          className="w-full h-full rounded-b-lg"
          frameBorder="0"
          title="Notion Page"
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>
    </div>
  );
}
