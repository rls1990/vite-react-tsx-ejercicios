import React, { useState } from "react";

// export const useNodal: (arg1: boolean) => void = (initialValue = false) => {
//   const [isOpen, setIsOpen] = useState(false);
// };

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};
