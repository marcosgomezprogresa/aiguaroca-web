'use client';

import { IoCaretBackOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import Heading from '@/components/ui/Heading';

export default function CookiesPolicy() {
  const router = useRouter();

  return (
    <>
      <div className="custom-container py-10 space-y-10 lg:text-2xl leading-relaxed overflow-x-hidden">
        <div
          className="lg:text-xl align-center cursor-pointer flex items-center gap-2"
          onClick={() => router.back()}
        >
          <IoCaretBackOutline />
          <p>Volver</p>
        </div>
        <Heading className="font-medium" text="Política de Cookies" />
        <p>
          ¿Qué son las cookies?
          <br /> Una cookie es un fichero informativo que se descarga en su
          ordenador al acceder a la mayoría de páginas web. Las cookies permiten
          a una página web, entre otras cosas, almacenar y recuperar información
          sobre los hábitos de navegación de un usuario o de su equipo; o la
          capacidad de recordar al usuario con el fin de mejorar el servicio
          web.
        </p>
        <p>
          Cuando accedas, también instalaremos varias cookies para guardar tu
          información de acceso y tus opciones de visualización de pantalla. Las
          cookies de acceso duran dos días, y las cookies de opciones de
          pantalla duran un año. Si seleccionas «Recuérdarme», tu acceso
          perdurará durante dos semanas. Si sales de tu cuenta, las cookies de
          acceso se eliminarán. Si editas o publicas un artículo se guardará una
          cookie adicional en tu navegador. Esta cookie no incluye datos
          personales y simplemente indica el ID del artículo que acabas de
          editar. Caduca después de 1 día.
        </p>
        <p className="font-medium">
          ¿Para qué se utilizan las cookies en este sitio web?
        </p>
        <p>
          Las cookies son una parte esencial de cómo funciona nuestro sitio web.
          El objetivo principal de nuestras cookies es mejorar su experiencia en
          la navegación. Por ejemplo, a recordar sus preferencias (idioma, país,
          etc.) durante la navegación y en futuras visitas. La información
          recogida en las cookies nos permite además mejorar la web, mediante
          estimaciones sobre números y patrones de uso, la adaptación del sitio
          web a los intereses individuales de los usuarios, la aceleración de
          las búsquedas, etc.
          <br /> En ocasiones, si hemos obtenido su previo consentimiento
          informado, podremos utilizar cookies, tags u otros dispositivos
          similares para obtener información que nos permita mostrarle desde
          nuestro sitio web, los de terceros, o cualquier otro medio, publicidad
          basada en el análisis de sus hábitos de navegación.
        </p>
        <p>
          El acceso a este sitio puede implicar la utilización de cookies. Las
          cookies son pequeñas cantidades de información que se almacenan en el
          navegador utilizado por cada usuario para que el servidor recuerde
          cierta información que posteriormente pueda utilizar.
          <br />
          Esta información en ocasiones permite identificarle a usted como un
          usuario concreto de forma anónima. Aquellos usuarios que no deseen
          recibir cookies o quieran ser informados antes de que se almacenen en
          su ordenador, pueden configurar su navegador a tal efecto sin que se
          vea afectada la visualización general de este sitio web.
        </p>
        <p>
          Adicionalmente sete sitio puede albergar elementos en el código fuente
          de las páginas que se utilizan para medir el tráfico de usuarios que
          visitan una página web y poder sacar un patrón de visitas de los
          usuarios. Esta información anónima puede ser compartida con empresas
          clientes, proveedores, patrocinadores y anunciantes.
        </p>
        <p>
          Actualmente utilizamos los servicios de Google Analytics para la
          medición del tráfico de este sitio que puede capturar la información
          descrita anteriormente.
          <br />
          Google almacena la información recogida por las cookies en servidores
          ubicados en Estados Unidos y se compromete a no compartirla con
          terceros, excepto cuando la ley le obligue a ello o sea necesario para
          el funcionamiento del sistema. Google no asocia su dirección IP con
          ninguna otra información que tenga.
        </p>
        <p className="font-medium">¿Qué tipos de cookies existen?</p>
        <p>
          Cookies técnicas: Son las más elementales y permiten, entre otras
          cosas, saber cuándo está navegando un humano o una aplicación
          automatizada, cuándo navega un usuario anónimo y uno registrado,
          tareas básicas para el funcionamiento de cualquier web dinámica.
          <br />
          Cookies de análisis: Recogen información sobre el tipo de navegación
          que está realizando, las secciones que más utiliza, productos
          consultados, franja horaria de uso, idioma, etc.
          <br />
          Cookies publicitarias: Muestran publicidad en función de su
          navegación, su país de procedencia, idioma, etc.
        </p>
        <p className="font-medium">¿Y si quiero desactivar las cookies?</p>
        <p>
          Para que entienda el alcance que puede tener desactivar las cookies le
          mostramos unos ejemplos: No podrá compartir contenidos de esa web en
          Facebook, Twitter o cualquier otra red social. El sitio web no podrá
          adaptar los contenidos a sus preferencias personales, como suele
          ocurrir en las tiendas online.
        </p>
        <p>
          No podrá acceder al área personal de esa web, como por ejemplo Mi
          cuenta, o Mi perfil oMis pedidos. Tiendas online: Le será imposible
          realizar compras online, tendrán que ser telefónicas o visitando la
          tienda física si es que dispone de ella. Tiendas online: Le será
          imposible realizar compras online, tendrán que ser telefónicas o
          visitando la tienda física si es que dispone de ella. No será posible
          personalizar sus preferencias geográficas como franja horaria, divisa
          o idioma.
        </p>
        <p>
          El sitio web no podrá realizar analíticas web sobre visitantes y
          tráfico en la web, lo que dificultará que la web sea competitiva.
          <br />
          No podrá escribir en el blog, no podrá subir fotos, publicar
          comentarios, valorar o puntuar contenidos. La web tampoco podrá saber
          si usted es un humano o una aplicación automatizada que publica spam.
          <br />
          No se podrá mostrar publicidad sectorizada, lo que reducirá los
          ingresos publicitarios de la web. Todas las redes sociales usan
          cookies, si las desactiva no podrá utilizar ninguna red social
        </p>
        <p className="font-medium">¿Puedo borrar las cookies?</p>
        <p>
          Si, en cualquier momento puede eliminar las cookies de su dispositivo
          en la sección de configuración de su navegador.
          <br />
          Quiero desactivar las cookies Si deseas cambiar tu configuración de
          cookies en el navegador aquí tienes las referencias oficiales,
        </p>
        <p className="font-medium">de los navegadores más comunes:</p>
        <div>
          <p>Safari: http://support.apple.com/kb/HT1677?viewlocale=es_ES</p>
          <p>
            Firefox:
            http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
          </p>
          <p>Chrome: https://support.google.com/chrome/answer/95647?hl=es-es</p>
          <p>Opera: http://www.opera.com/help/tutorials/security/privacy/</p>
          <p>Internet Explorer: http://support.microsoft.com/kb/260971</p>
        </div>
        <p>
          Consentimiento y revocación para el uso de cookies
          <br /> Si sigue usted haciendo uso de nuestra página sin modificar su
          configuración, entendemos que presta su consentimiento para el uso de
          las cookies creadas por la misma. Puede usted revocar su
          consentimiento en cualquier momento, desactivando las cookies de
          nuestra web tal y como se indica en el apartado anterior. Esta
          revocación del consentimiento puede impedir el uso de algunos
          servicios de nuestra web.
        </p>
        <p>
          Cookies que utiliza este sitio web y sus finalidades Cookies técnicas
          y de personalización: de identificación y autenticación, de
          navegación, de
          <br />
          personalización de la interfaz, de favoritos. Estas cookies se
          utilizan para identificar al usuario durante la sesión, evitar que el
          usuario tenga que repetir procesos de autenticación en la web,
          acelerar algunos procesos del sitio web, recordar selecciones
          realizadas durante la sesión o en posteriores accesos, recordar las
          páginas ya visitadas, etc.
        </p>
        <p>
          <span className="font-medium">Identificación del usuario:</span> Se
          utilizan para identificar y autenticar al usuario. Contiene además
          datos técnicos de la sesión de usuario como, por ejemplo, tiempo de
          espera de conexión, identificador de sesión, etc. Gestión propia.
        </p>
        <p>
          <span className="font-medium">Identificación de la sesión: </span>
          Identifica la sesión http del usuario. Es común en todas las
          aplicaciones
          <br />
          web para identificar peticiones de un usuario en una sesión. Gestión
          propia.
        </p>
        <p>
          <span className="font-medium">Estado de la navegación: </span> Permite
          identificar en qué estado de navegación se encuentra el usuario
          (inicio de la sesión, primera página, primer acceso, estado de un
          scroll, estado de una votación, etc.). Gestión propia.
        </p>
        <p>
          <span className="font-medium">Selecciones del usuario: </span>
          Almacenan los valores de sesión seleccionados por el usuario tales
          como la
          <br /> tienda, el idioma, la moneda, los productos, la talla, etc.
          Gestión propia.
        </p>
        <p>
          <span className="font-medium">Favoritos y últimas selecciones:</span>{' '}
          Permite recordar las selecciones favoritas del usuario (detiendas, por
          ejemplo) o las últimas selecciones (de tiendas, productos,
          consentimiento para la instalación decookies, etc.) en posteriores
          accesos a la web. Gestión propia.
        </p>
        <p>
          <span className="font-medium">Protocolos: </span>
          Permite gestionar cambios entre dominio (protocolo) seguro (https) y
          no seguro (http). Gestión propia.
        </p>
        <p>
          <span className="font-medium">
            Cookies de análisis de navegación:
          </span>{' '}
          Estas cookies obtienen información genérica sobre los accesos de los
          usuarios al sitio web (no al contenido del mismo) para proporcionarnos
          posteriormente información agregada de dichos accesos con fines
          estadísticos.
        </p>
        <p>
          Google Analytics (_utma, __utmb,utmc, __utmd,_utmv, __utmz…): Permiten
          realizar el seguimiento del sitio web mediante la herramienta Google
          Analytics, que es un servicio proporcionado por Google para obtener
          información de los accesos de los usuarios a los sitios web. Alguno de
          los datos guardados para análisis posteriores son: número de veces que
          un usuario visita la web, fechas de la primera y última visita del
          usuario, duración de las visitas, desde qué página ac cedió el usuario
          a la web, qué motor de búsqueda utilizó el usuario para llegar a la
          web o qué enlace hizo click, desde qué lugar del mundo accedió el
          usuario, desde que dispositivo accedió, etc.
          <br /> La configuración de estas cookies está predeterminada por el
          servicio ofrecido por Google, por lo que le sugerimos que consulte la
          página de privacidad de Google Analytics, http://
          www.google.com/intl/es/analytics/privacyoverview.html, para obtener
          más información de las cookies que utiliza y de cómo inhabilitarlas
          (teniendo en consideración que no somos responsables
          <br /> del contenido ni la veracidad de los sitios web de terceros).
          Gestión de terceros.
        </p>
      </div>
    </>
  );
}
