import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Nutan = () => {
    const { theme, dispatch } = useContext(ThemeContext);
  return (
    <div>
        <button onClick={() => dispatch({ type: 'THEME_TOGGLE'})}>
            {theme === 'dark' ? 'light' : 'dark'}
          </button>
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

export default Nutan
