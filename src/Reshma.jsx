import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext';

const Reshma = () => {
    const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>

        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? 'light' : 'dark'}
        </button>
        {/* <button onClick={() => setTheme({ type: 'THEME_TOGGLE'})}>
            {theme === 'dark' ? 'light' : 'dark'}
          </button> */}


      <h2>Heading</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem iure deleniti nobis distinctio necessitatibus sequi at porro perspiciatis a et ratione molestias magni adipisci, dolorum rem molestiae recusandae ea!</p>

       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem iure deleniti nobis distinctio necessitatibus sequi at porro perspiciatis a et ratione molestias magni adipisci, dolorum rem molestiae recusandae ea!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem iure deleniti nobis distinctio necessitatibus sequi at porro perspiciatis a et ratione molestias magni adipisci, dolorum rem molestiae recusandae ea!</p>

         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem iure deleniti nobis distinctio necessitatibus sequi at porro perspiciatis a et ratione molestias magni adipisci, dolorum rem molestiae recusandae ea!</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem iure deleniti nobis distinctio necessitatibus sequi at porro perspiciatis a et ratione molestias magni adipisci, dolorum rem molestiae recusandae ea!</p>

           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem iure deleniti nobis distinctio necessitatibus sequi at porro perspiciatis a et ratione molestias magni adipisci, dolorum rem molestiae recusandae ea!</p>
    </div>
  )
}

export default Reshma
