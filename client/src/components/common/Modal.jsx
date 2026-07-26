import React from "react";

const Modal = ({
  isOpen,
  title,
  children,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-lg w-[95%] md:w-[500px]">

        <div className="flex justify-between items-center border-b p-4">

          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            ✕
          </button>

        </div>

        <div className="p-5">

          {children}

        </div>

      </div>

    </div>
  );
};

export default Modal;