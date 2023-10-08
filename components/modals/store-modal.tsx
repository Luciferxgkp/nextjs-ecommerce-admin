import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/modals/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
      title="Create Store"
      description="Add a new store to manage products and customers"
    >
      <div>Store Modal Content</div>
    </Modal>
  );
};
