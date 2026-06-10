'use client';

import { IoCaretBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import Heading from '@/components/ui/Heading';

export default function GeneralConditions() {
  const router = useRouter();

  const list = [
    'Las actividades ofertadas están sujetas a las condiciones del medio en que se desarrollan y de las personas que participan, por lo que pueden sufrir cambios antes o incluso durante la actividad (meteorología, cambios bruscos del caudal, problemas físicos de los participantes, etc.). En caso de anulación por parte de AIGUAROCA, el cliente tendrá derecho al aplazamiento, a la sustitución por otra actividad de su conformidad o a la devolución del importe abonado.',
    'El cliente tiene la obligación de informar sobre posibles estados de gestación, paraplejías o enfermedades cardiovasculares antes de contratar cualquier actividad. Asimismo se compromete a no estar bajo los efectos del alcohol, drogas y/o estupefacientes, así como cualquier otra medicación que pueda incidir en su capacidad de reacción. Para participar en las actividades acuáticas es imprescindible saber nadar. En la ficha técnica de cada actividad se especifica las condiciones y edades mínimas. Los menores de edad deberán contar con autorización ó estar acompañados por persona responsable. En todo caso, y especialmente para las actividades de nivel avanzado, la organización podrá optar por realizar una prueba previa, quedando reservado el derecho de admisión.',
    'El compromiso de AIGUAROCA comienza con la actividad contratada, por lo que es responsabilidad del cliente su transporte hasta las instalaciones o hasta el lugar de inicio de la actividad, en su caso. El contrato y la responsabilidad de la empresa afectan exclusivamente al trabajo directo de sus técnicos y a la organización de la actividad.',
    'Los precios son por persona e incluyen los servicios directos de AIGUAROCA con IVA incluido y para el grupo mínimo indicado. Salvo que se exprese literalmente lo contrario, la contratación de los servicios externos (alojamiento, transporte,….) será a cargo del cliente, si bien para facilitar dichos servicios, la organización puede gestionarlos en su nombre.',
    'Exclusividad en la actividad: Los grupos que no quieran mezclarse con otros participantes en la actividad y tener monitores especificos para su grupo pagaran 15€ por persona de suplemento.',
    'Como norma general, el precio incluye el material técnico individual y colectivo necesario, siendo la referencia final la ficha técnica de cada programa.',
    'En el precio está incluido el seguro de asistencia con coberturas en caso de enfermedad y accidentes durante la actividad. Seguro de Asistencia: Póliza Nº CLWACC- TA-1001-09-00077  contratada con la empresa Hübener',
  ];

  const list2 = [
    'Para hacer efectiva una reserva, cada participante deberá abonar el 20% del importe total.',
    'El cliente podrá desistir de los servicios solicitados o contratados, teniendo derecho a la devolución de las cantidades abonadas, siempre y cuando avise 48 horas antes del inicio de dicha actividad.',
    'Desde la confirmación de la reserva, el cliente asumirá de modo expreso la totalidad de las presentes Condiciones Generales. En el caso de que una persona inscriba a otra/s, asume en su/s nombre/s todas y cada una de estas Condiciones Generales.',
  ];

  return (
    <>
      <div className="custom-container py-10 space-y-10 lg:text-2xl leading-relaxed">
        <div
          className="lg:text-xl align-center cursor-pointer flex items-center gap-2"
          onClick={() => router.back()}
        >
          <IoCaretBackOutline />
          <p>Volver</p>
        </div>
        <Heading className="font-medium" text="Condiciones generales" />
        <p>
          A continuación se detallan las Condiciones Generales aplicables a
          todas las actividades desarrolladas por AIGUAROCA.
        </p>
        <p className="font-medium">NOTA PREVIA</p>
        <p>
          En el campo del turismo activo y los deportes de aventura existe un
          riesgo potencial derivado de supropia naturaleza. Los guías y técnicos
          cuentan con la preparación y experiencia adecuada a la actividad que
          desarrollan. de seguir sus instrucciones y directrices depende, en
          gran medida, la seguridad durante la actividad.
        </p>
        <p className="font-medium">Condiciones generales</p>
        <ul className="list-disc space-y-5 lg:space-y-10 pl-5">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="font-medium">CONDICIONES DE CONTRATACIÓN Y CANCELACION</p>
        <ul className="list-disc space-y-5 lg:space-y-10 pl-5">
          {list2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
