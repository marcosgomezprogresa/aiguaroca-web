"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Card from "../ui/Card";

const CumpleañosCardsSwip: React.FC = () => {
  const cards = [
    {
      title: "1. Tenemos actividades para todas las edades!",
      des: (
        <span>
          <span className="highlighted__text">
            No importa si cumples 6 o 60 años....
          </span>{" "}
          !Organizaremos la{" "}
          <span className="highlighted__text">actividad perfecta</span> para tu
          grupo{" "}
          <span className="highlighted__text">y la adaptaremos a vosotros</span>{" "}
          para que lo paseis en grande! Si eres nuev@ en el rafting o nunca lo
          ha probado antes, no te preocupes hay un tramo que{" "}
          <span className="highlighted__text">
            es ideal para todos los niveles…
          </span>{" "}
          Aquí podrás encantarte con las vistas del impresionante{" "}
          <span className="highlighted__text">
            Parque Natural de las Hoces del Cabriel
          </span>{" "}
          durante 7 kilometros, mientras{" "}
          <span className="highlighted__text">
            disfrutas de las salpicaduras y los emocionanteses rápidos
          </span>{" "}
          que el río tiene para ofrecernos.
        </span>
      ),
    },
    {
      title: "2. Sera una experiencia inolvidable.",
      des: (
        <span>
          Esta{" "}
          <span className="highlighted__text">
            no será una fiesta de cumpleaños cualquiera!
          </span>{" "}
          Será una experiencia inolvidable, recordada para toda la vida.{" "}
          <span className="highlighted__text">Te garantizamos </span> que esta
          vez{" "}
          <span className="highlighted__text">
            tu cumpleaños no se parecerá a ninguna de tus anteriores
            celebraciones.
          </span>{" "}
          Reúne a tus queridos o amigos y ven a pasar un{" "}
          <span className="highlighted__text">
            día de diversión al aire libre.
          </span>{" "}
          Si los rápidos no te impresionan lo suficiente, ¡el magnífico entorno
          debería hacerlo! Ubicado dentro del{" "}
          <span className="highlighted__text">
            Parque Natural de Las Hoces del Cabriel, es el lugar perfecto
          </span>{" "}
          para hacer Rafting o pasar un día simplemente{" "}
          <span className="highlighted__text">disfrutando al aire libre.</span>
        </span>
      ),
    },
    {
      title: "3. No importa el mes que naciste.",
      des: (
        <span>
          Tenemos actividades para{" "}
          <span className="highlighted__text">
            pasarlo bien durante todo el año.
            <br />
          </span>{" "}
          ¡Da igual que eres del Febrero o del Agosto! hacemos{" "}
          <span className="highlighted__text">
            actividades para la época mas calurosa
          </span>{" "}
          y también para{" "}
          <span className="highlighted__text">los meses mas frescos</span> del
          año. <br />
          ¿Prefieres no mojarte? Tenemos varias opciones pero os{" "}
          <span className="highlighted__text">
            recomendamos el Circuito Multiaventura!
          </span>{" "}
          Un lugar en el bosque donde podéis estar a vuestras anchas. <br />{" "}
          <span className="highlighted__text">Un dia en plena naturaleza,</span>{" "}
          trepando y balanceándonos en alturas{" "}
          <span className="highlighted__text">
            por las copas de los arboles,
          </span>{" "}
          con el canto de los pajaritos de fondo. Esto podría ser
          <span className="highlighted__text"> una de las mejores ideas</span>{" "}
          para tu cumpleaños.
          <br />
          Al acabar el Circuito Multiaventura podréis optar por quedaros y
          aprovechar este bonito sitio para comer el Picnik, abrir un Cava y
          comer la tarta o simplemente repartir las cervezas que traes para tus
          invitados!
        </span>
      ),
    },
    {
      title: "4. Puedes traer un grupo grande.",
      des: (
        <span>
          ¡Más invitados,
          <span className="highlighted__text"> mas alegria!</span> <br />
          Sabemos que algunos de vosotros teneis muchos amigos, aunque{" "}
          <span className="highlighted__text">
            puede que alguno sea mas de mirar…{" "}
          </span>{" "}
          no tendrás que dejar a nadie fuera de la fiesta cuando pases el día
          con nosotros. Los que no queran participar en las actividades podrán
          quedarse de lado y solo mirar, siempre que transporten ellos la nevera
          de las bebidas…😄 <br />
          ¡Tenemos opciones de alojamiento disponibles si
          <br /> quieres que la fiesta continúe!
          <br /> ¡Consultanos!
        </span>
      ),
    },
  ];
  return (
    <div className="custom-container mt-10">
      <div className="w-full max-w-xl mx-auto space-y-20">
        <p className="text-2xl px-2 font-medium leading-tight text-center text-neutral-800">
          <span className="text-brand-400">4 razones</span> para pasar tu
          cumpleaños haciendo Actividades Multiaventura en Venta del Moro con{" "}
          <span className="font-semibold text-black">
            <span className="text-brand-300">AIGUA</span>ROCA
          </span>
        </p>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          initialSlide={0}
          modules={[EffectCards]}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Card title={card.title} description={card.des} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CumpleañosCardsSwip;
