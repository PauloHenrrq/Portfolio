import { Link } from 'react-router-dom'
import ProjetoFurto from '../assets/Projeto-Furto.jpeg'
import Janela from './Window'

export default function Projects () {
  const Projects = [
    {
      id: 1,
      img: ProjetoFurto,
      p: 'Ver mais',
      h1: 'Furtos Fortaleza',
      p2: 'Projeto realizado com intuito acadêmico para geração de gráficos a partir do tratamento de dados.',
      tecnologia: ['REACT', 'VITE', 'BOOTSTRAP', 'DASHBOARD', 'ANIMAÇÃO']
    }
  ]

  return (
    <Janela>
      <h1 className='text-center text-7xl mb-7 text-white drop-shadow-[4px_4px_rgba(0,0,0,0.60)] max-lg:text-5xl'>
        Projetos
      </h1>
      <Link to='https://analise-furtos.vercel.app/' target='_blank'>
        <div className='flex justify-evenly gap-5 flex-wrap'>
          {Projects.map((projects, index) => (
            <div
              key={index}
              className='group flex flex-row w-[580px] cursor-pointer border border-[#7e0058] shadow-[0_0_10px_2px_#7e0058] rounded-md max-sm:flex-col 2xl:w-[680px]'
            >
              <div className='relative w-fit'>
                <img
                  src={projects.img}
                  alt='Imagem do Projeto'
                  className='h-full object-cover rounded-l-md object-[75%] blur-[0.6px] transition-all group-hover:blur-[1.5px] max-sm:w-full'
                />

                <p className='absolute inset-0 flex font-bold text-white text-lg underline items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 max-sm:opacity-100 max-sm:bg-black max-sm:bg-opacity-50'>
                  {projects.p}
                </p>
              </div>
              <div className='flex flex-col w-[90%] gap-6 items-center bg-[#7e0058] bg-opacity-[0.2] p-4 max-sm:w-full'>
                <h1 className='text-3xl text-white drop-shadow-[4px_4px_rgba(0,0,0,0.60)] text-center 2xl:text-4xl'>
                  {projects.h1}
                </h1>
                <p className='text-zinc-200 text-center 2xl:text-xl drop-shadow-[2px_3px_rgba(0,0,0,0.60)]'>
                  {projects.p2}
                </p>

                <div className='grid grid-cols-2 gap-y-3 gap-x-5'>
                  {projects.tecnologia.map((technology, index) => (
                    <div
                      key={index}
                      className={`w-fit bg-clip-text text-transparent transition-all m-auto ${
                        index === 4 ? 'col-span-2 ml-16' : ''
                      }`}
                    >
                      <div className='p-[2px] bg-gradient-to-tr from-fuchsia-900 to-rose-500'>
                        <p className='p-[3px] bg-indigo-950 bg-opacity-[0.7] text-white tracking-wider'>
                          {technology}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </Janela>
  )
}
