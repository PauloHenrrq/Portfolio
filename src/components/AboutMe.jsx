import perfil from '../assets/foto-perfil.jpg'
import GitHub from '../assets/logo-github.svg'
import Instagram from '../assets/logo-instagram.svg'
import LinkedIn from '../assets/logo-linkedin.svg'
import Janela from './Window'

export default function AboutMe () {
  const icons = [GitHub, Instagram, LinkedIn]

  return (
    <Janela margin="100px">
      <div id='SobreMim' className='flex justify-between gap-24 max-lg:flex-wrap-reverse max-lg:gap-10 max-lg:justify-center'>
        <div className='flex flex-col gap-7 w-[60%] max-lg:w-auto'>
          <h1 className='text-7xl text-white drop-shadow-[4px_4px_rgba(0,0,0,0.60)] mt-3 max-lg:m-auto max-lg:text-5xl'>
            Sobre Mim
          </h1>
          <p className='w-auto text-justify text-zinc-200 drop-shadow-[2px_3px_rgba(0,0,0,0.60)] text-xl font-medium 2xl:text-4xl max-lg:text-center max-lg:px-10 max-sm:p-0'>
            &nbsp;Meu nome é Paulo Henrique e atualmente estou cursando Ciências
            da Computação e me especializando como Desenvolvedor Web Full Stack.
            <br />
            &nbsp;Meu objetivo é continuar evoluindo nessa área, buscando sempre
            novas oportunidades para aprender e contribuir para o
            desenvolvimento de soluções inovadoras e eficientes.
          </p>
          <div className='flex gap-10 max-lg:justify-center'>
            {icons.map((icons, index) => (
              <img
                key={index}
                src={icons}
                alt='logo'
                className='w-10 invert cursor-pointer rounded-lg 2xl:w-16 hover:scale-110 transition-all'
              />
            ))}
          </div>

          <button className='w-52 h-14 bg-rose-700 text-zinc-200 rounded-lg bg-opacity-[0.8] text-xl hover:scale-105 transition-all hover:shadow-[3px_3px_10px_0.1px_rgba(0,0,0,0.5)] hover:shadow-black hover:bg-opacity-100 max-lg:m-auto 2xl:text-2xl 2xl:w-52 2xl:h-20 2xl:bg-opacity-100 2xl:scale-105'>
            Contato
          </button>
        </div>
        <div className='w-fit'>
          <img
            src={perfil}
            alt='teste'
            className='w-[22.5rem] h-[30rem] rounded-xl animate-img shadow-[0_0_10px_2px_#7e0058] 2xl:w-[30rem] 2xl:h-fit max-sm:h-[28rem]'
          />
        </div>
      </div>
    </Janela>
  )
}
