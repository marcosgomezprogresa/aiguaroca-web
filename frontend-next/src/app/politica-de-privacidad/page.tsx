'use client';

import { IoCaretBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import Heading from '@/components/ui/Heading';

export default function PrivacyPolicy() {
  const router = useRouter();

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
        <Heading className="font-medium" text="Política de privacidad" />
        <p>Dirección de la página web: https://aiguaroca.com/</p>
        <p>
          Ciprian Nap Solomonean con NIE: X6048679R, con residencia en Calle
          Norte número 9 de Venta del Moro en Valencia, es responsable del
          tratamiento de los datos de carácter personal de sus usuarios y
          clientes, así como de los datos que puedan ser recabados a través del
          sitio web.
        </p>
        <p>
          Atención al Cliente:{' '}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@aiguaroca.com"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="cursor-pointer w-fit"
          >
            info@aiguaroca.com
          </a>
        </p>
        <p>
          En Aiguaroca aseguramos la confidencialidad de todos los datos
          facilitados por nuestros clientes.
        </p>
        <p>
          En Aiguaroca cumplimos con todo lo dispuesto en la Ley Orgánica
          3/2018, de 5 de diciembre, de Protección de Datos Personales y de
          Garantía de Derechos Digitales (LOPD GDD). Cumple también con el
          Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de
          abril de 2016 relativo a la protección de las personas físicas (RGPD).
        </p>
        <p>
          Todos los datos facilitados por nuestros clientes son incluidos en un
          fichero electrónico con el objeto de facilitar la relación comercial
          con los mismos
        </p>
        <p>
          En cumplimiento de lo dispuesto en el Art. 5 del mismo precepto legal,
          los clientes de Aiguaroca pueden ejercitar los derechos de acceso,
          rectificación, cancelación y oposición sobre sus datos personales
          comunicándolo por escrito a{' '}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@aiguaroca.com"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="cursor-pointer w-fit"
          >
            info@aiguaroca.com
          </a>
        </p>
        <p>
          En el caso que los datos suministrados estén asociados a una compra,
          la legislación española nos obliga a mantenerlos al menos durante
          cinco años, por lo que no se podrán borrar ni rectificar, aunque sí
          bloquear (cancelar), a pesar de que el cliente así lo solicite.
        </p>
        <p>
          Los datos personales de nuestros clientes serán tratados conforme a la
          Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos de
          Carácter (LOPD).
        </p>
        <p>
          Este Reglamento se aplica tanto en caso que usted acceda a nuestro
          sitio web y decida simplemente navegar por sus contenidos y utilizar
          sus servicios, sin llegar a adquirir ningún producto, como si, usted
          accede a aiguaroca.com y decide navegar por sus contenidos
          utilizando los servicios que ofrece y adquiriendo uno o varios
          productos.
        </p>
        <p>
          En virtud de lo dispuesto en la LOPD, le informamos que mediante el
          llenado de nuestro formulario sus datos personales quedarán
          incorporados y serán tratados en los ficheros de titularidad de
          Aiguaroca , con el fin de permitir la ejecución de los servicios
          solicitados y/o enviar material informativo, (así como para mantenerle
          informado, incluso por medios electrónicos, sobre cuestiones
          relacionadas a la actividad de la Compañía y sus servicios). Los datos
          serán transferidos a servidores seguros alojados en territorio
          europeo.
        </p>
        <p>
          Usted puede ejercer, en cualquier momento, los derechos de acceso,
          rectificación, cancelación y oposición de sus datos de carácter
          personal mediante correo electrónico dirigido a
          actividades@aiguaroca.com, acompañando siempre una fotocopia de su
          D.N.I.
        </p>
        <p>
          La recogida de datos en aiguaroca.com tendrá como único fin la
          gestión y ejecución de la transacción comercial, y en ningún otro caso
          serán utilizados para otras finalidades.
        </p>
        <p>
          Las cookies que puedan enviarse, no se utilizarán en ningún caso para
          elaborar perfiles del usuario, sino únicamente para facilitar el uso
          del sitio y la gestión de los pedidos.
        </p>
      </div>
    </>
  );
}
