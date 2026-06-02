"use client";

import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
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

      <div className="col-span-1 hidden lg:flex items-start justify-end">
        <div className="sticky top-8 w-full max-w-md space-y-7 rounded-[2rem] border border-neutral-100 bg-white p-8 shadow-2xl shadow-black/10">
          <Button className="bg-brand-300 text-neutral-950 text-xl 2xl:text-3xl w-full p-4 font-black">
            <p>
              {priceLabel} {displayPrice}
            </p>
          </Button>
          <div className="space-y-14 text-base 2xl:text-xl">
            <div className="space-between items-start text-neutral-800 border-b-2 border-neutral-200 pb-6">
              <p className="font-medium">Actividad</p>
              <p className="font-light max-w-48">{activityName}</p>
            </div>
            <div className="space-y-7">
              <Button icon={<GoDotFill />} onClick={openModal} className="w-full p-4 gap-2">
                Contáctanos para reservar
              </Button>
              <a
                href="https://wa.me/+34649047282"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
              >
                <Button
                  icon={<FaWhatsapp size={28} color="#25D366" />}
                  className="w-full text-neutral-950 bg-neutral-100 p-4 gap-2"
                >
                  Contáctanos por Whatsapp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityBookingActions;
