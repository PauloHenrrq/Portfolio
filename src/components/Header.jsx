import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import barras from '../assets/barraCelular.png'
import X from '../assets/X.png'
import SetaCima from '../assets/seta-para-cima.png'

export default function Header () {
  const [show, setShow] = useState()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header className='flex flex-col justify-center bg-indigo-950 bg-opacity-[0.5] h-20 shadow-[inset_0_-8px_20px_-15px_rgba(0,0,0,0.5)] shadow-purple-600 mb-14'>
      <div className='relative'>
        {show && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-40'
            onClick={handleClose}
          ></div>
        )}

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-fuchsia-950 from-10% shadow-lg z-50 transform transition-transform ${
            show ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex items-center justify-end p-4 border-b'>
            <img src={X} className='invert' onClick={handleClose}></img>
          </div>

          <div className='p-4'>
            <ul className='flex flex-col gap-5 text-right text-2xl'>
              <li>
                <a href='#home' className='text-white hover:underline'>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' className='text-white hover:underline'>
                  Sobre
                </a>
              </li>
              <li>
                <a href='#services' className='text-white hover:underline'>
                  Serviços
                </a>
              </li>
              <li>
                <a href='#contact' className='text-white hover:underline'>
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className='flex justify-between items-center mx-12'>
        <button className=''>
          <h1 className='PH text-5xl bg-clip-text text-transparent transition-all bg-gradient-to-r from-fuchsia-900 from-20% to-rose-500 via-100% via-rose-600  w-24 h-[3.1rem] drop-shadow-[0px_5px_rgba(0,0,0,0.60)] hover:scale-110'>
            PH
          </h1>
        </button>

        <img
          src={barras}
          className='hidden h-8 items-center invert max-md:flex'
          onClick={handleShow}
        ></img>

        <ul className='flex text-white gap-14 items-center max-md:hidden'>
          <li className='cursor-pointer hover:scale-105 transition-transform hover:border-b-2 h-6'>
            Início
          </li>
          <li className='cursor-pointer hover:scale-105 transition-transform hover:border-b-2 h-6'>
            Sobre mim
          </li>
          <li className='cursor-pointer hover:scale-105 transition-transform hover:border-b-2 h-6'>
            Projetos
          </li>
          <li className='cursor-pointer hover:scale-105 transition-transform hover:border-b-2 h-6'>
            Contato
          </li>
        </ul>
      </nav>
      {visible && (
        <div
          onClick={scrollToTop}
          className='group z-10 w-16 h-16 fixed flex justify-center items-center bottom-8 right-5 bg-gradient-to-tr rounded-full from-fuchsia-900 from-20% to-rose-500 via-rose-800 border border-dashed border-white cursor-pointer max-sm:w-12 max-sm:h-12'
        >
          <img
            src={SetaCima}
            alt='Seta para cima'
            className='w-12 invert group-hover:animate-upDown max-sm:w-9 max-sm:animate-upDown'
          />
        </div>
      )}
    </header>
  )
}
