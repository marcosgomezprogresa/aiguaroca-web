"use client";

import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import Button from "./Button";
import Modal from "./Modal";
import ActivityModal from "./ActivityModal";

interface ActivityBookingActionsProps {
  activityName: string;
  activityPrize?: string;
  modalTitle: string;
  priceLabel?: string;
  isKid?: boolean;
  modalVariant?: "default" | "activity";
}

const ActivityBookingActions = ({
  activityName,
  activityPrize,
  modalTitle,
  priceLabel = "Precio",
  isKid = false,
  modalVariant = "default",
}: ActivityBookingActionsProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const displayPrice = isKid ? "30" : activityPrize;

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {modalOpen &&
        (modalVariant === "activity" ? (
          <ActivityModal title={modalTitle} closeModal={closeModal} />
        ) : (
          <Modal title={modalTitle} closeModal={closeModal} />
        ))}

      <div className="fixed bottom-0 left-0 z-20 flex w-full items-center justify-between border-t border-neutral-100 bg-white/95 p-5 text-black shadow-2xl backdrop-blur lg:hidden">
        <p className="text-xl font-black">
          {priceLabel} {displayPrice}
        </p>
        <Button icon={<GoDotFill />} onClick={openModal} className="w-fit p-3 gap-2">
          Reservar
        </Button>
      </div>

    </>
  );
};

export default ActivityBookingActions;
