import { TransactionsProvider } from "./hooks/useTransactions";
import { useState } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransationModalOpen, setIsNewTransationModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransationModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransationModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
