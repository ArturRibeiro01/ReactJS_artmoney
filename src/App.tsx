import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

export function App() {
  // Comportamentode abertura e fechamento do modal
  const [isNewTransationModalOpen, setIsNewTransationModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransationModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransationModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
