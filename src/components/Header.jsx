import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import barras from '../assets/barraCelular.png'
import X from '../assets/X.png'

export default function Header () {
  const list = [
    { name: 'Início', href: '#' },
    { name: 'Sobre mim', href: '#SobreMim' },
    { name: 'Projetos', href: '#Projetos' },
    { name: 'Contato', href: '#Contato' }
  ]

  const [show, setShow] = useState()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   })
  // }

  return (
    <header
      id='Header'
      className='fixed top-0 left-0 w-full z-50 md:backdrop-blur-md flex flex-col justify-center bg-indigo-950 bg-opacity-[0.5] h-20 shadow-[inset_0_-8px_20px_-15px_rgba(0,0,0,0.5)] shadow-purple-600'
    >
      <div className='relative'>
        {show && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-40'
            onClick={handleClose}
          ></div>
        )}

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-fuchsia-950 from-[2%] shadow-lg z-50 transform transition-transform ${
            show ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex items-center justify-end p-4 border-b'>
            <img src={X} className='invert' onClick={handleClose}></img>
          </div>

          <div className='p-4'>
            <ul className='flex flex-col gap-5 text-right text-2xl'>
              {list.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className='text-white hover:underline'
                    onClick={handleClose}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
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
          {list.map((item, index) => (
            <li
              key={index}
              className='cursor-pointer hover:scale-105 transition-transform hover:border-b-2 h-6'
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
