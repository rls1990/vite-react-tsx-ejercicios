/* eslint-disable @typescript-eslint/no-explicit-any */

import "./Modal.css";

export const Modal = ({ children, isOpen, closeModal }: any) => {
  //   const { children } = props;

  const handleModalContainerClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => e.stopPropagation();

  return (
    <>
      <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          {children}
        </div>
      </article>
    </>
  );
};
