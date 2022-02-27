import Post from '../components/Post';
import recursos from '../recursos';

export default function Home() {
  return (
    <div className='container pt-48 p-4'>
      <div id='scroll_top_sentry' />
      {/* INTRO */}
      <p className='text-3xl pb-2 font-bold md:text-4xl'>Guia Micelio Abolicionista</p>
      <p className='text text-slate-600 pb-8'>Septiembre 2021</p>
      {/* DESCRIPTION */}
      <p className='text md:text-lg'>
        Micelio Abolicionista es una corilla de educadores, artistas, activistas,
        gestores, estudiantes y personas de diversas disciplinas en Puerto Rico unidas por
        un interés en reflexionar sobre y proponer alternativas para atender los
        conflictos desde una perspectiva abolicionista. Con esto nos referimos a que
        rechazamos el complejo carcelario industrial, sus instituciones y sus lógicas que
        nos ubican en binarios de “personas buenas” vs “personas malas”, fomentando que
        huyamos de los conflictos o que los asumamos como el fin de nuestras relaciones,
        en lugar de verlos como oportunidades para fortalecerlas y crecer en comunidad.
        Ofrecemos este recurso con la intención de aportar a conversaciones que han
        surgido en torno a las maneras en que abordamos los daños que nos causamos sin
        sentir que tenemos que escoger entre las partes involucradas y sin causarnos más
        daño en el proceso. No es una lista exhaustiva. Es un documento vivo que, al
        momento de su publicación, reúne algunos materiales que nos vienen apoyando en
        nuestras reflexiones y trabajos desde principios del 2021.
      </p>
      <p className='text md:text-lg pt-4'>
        Para proponer otros recursos, comunicar dudas y/o compartirnos cómo te fue usando
        este recurso, te puedes comunicar a{' '}
        <span className='text-[#3B8D8F]'>micelioabolicionista@gmail.com</span>
      </p>

      <div className='container my-4'>
        {recursos.map((r, i) => {
          return <Post key={`post-${i}`} data={r} />;
        })}
      </div>
    </div>
  );
}
