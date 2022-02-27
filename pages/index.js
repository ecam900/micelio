import Post from '../components/Post';

const recursos = [
  {
    titulo: 'Zine: GLosario Abolicionista',
    autores: ['Micelio Abolicionista'],
    links: [
      {
        nombre: 'Versión para imprimir (pdf)',
        link: 'https://drive.google.com/file/d/1VcoaIhOqbvn7iQuXFekSSwp7QNLfe_PD/view?usp=sharing',
      },
      {
        nombre: 'Video del Zine',
        link: 'https://drive.google.com/file/d/1IUE1WGseiXIMJpH3msZRMeLBnJdN0Znv/view?usp=sharing',
      },
    ],
    tags: ['zine', 'español', 'abolicionismo'],
    sinopsis:
      '[ZINE, español] A tu izquierda encontrarás dos enlaces con las opciones disponibles para acceder al primer Zine del Micelio Abolicionista: Glosario Abolicionista. En el primer enlace tienes la opción de visitar el video donde hacemos lectura del Zine mientras grabamos la opción impresa que te aparece en el segundo enlace en caso de que intereses imprimir para leer y/o compartir con tus comunidades. También encontrarás el QR Code que te lleva al tablero en la cajita de abajo donde podrás responder la pregunta: ¿Qué significa JUSTICIA para ti? En este primer Zine se encuentran definidos conceptos básicos ya estudiados y practicados por varies abolicionistas del Complejo Industrial Carcelario, maestres, estudiantes, colectives y comunidades con el propósito de reflexionar, practicar y proponer alternativas para atender los conflictos desde una perspectiva abolicionista. Estas definiciones son pensadas por Micelio Abolicionista en procesos de aprendizaje colectivo, al momento son generales y están abiertas a ampliarse, profundizar y transformar. ',
  },
  {
    titulo: 'El titulo',
    autores: ['autor1', 'autor2', 'autor3'],
    links: [
      { nombre: 'Nombre de Link', link: 'link.com' },
      { nombre: 'Nombre de Link', link: 'link.com' },
    ],
    tags: ['tag1', 'tag2'],
    sinopsis: 'esto es una sinopsis.',
  },
  {
    titulo: 'El titulo',
    autores: ['autor1', 'autor2', 'autor3'],
    links: [
      { nombre: 'Nombre de Link', link: 'link.com' },
      { nombre: 'Nombre de Link', link: 'link.com' },
    ],
    tags: ['tag1', 'tag2'],
    sinopsis: 'esto es una sinopsis.',
  },
  {
    titulo: 'El titulo',
    autores: ['autor1', 'autor2', 'autor3'],
    links: [
      { nombre: 'Nombre de Link', link: 'link.com' },
      { nombre: 'Nombre de Link', link: 'link.com' },
    ],
    tags: ['tag1', 'tag2'],
    sinopsis: 'esto es una sinopsis.',
  },
  {
    titulo: 'El titulo',
    autores: ['autor1', 'autor2', 'autor3'],
    links: [
      { nombre: 'Nombre de Link', link: 'link.com' },
      { nombre: 'Nombre de Link', link: 'link.com' },
    ],
    tags: ['tag1', 'tag2'],
    sinopsis: 'esto es una sinopsis.',
  },
];

export default function Home() {
  return (
    <div className='container pt-48 p-4'>
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
