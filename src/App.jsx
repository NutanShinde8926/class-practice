import React, { useContext } from 'react'
import Counter from './hooks/usestate/Counter'
import UseState2 from './hooks/usestate/useState2'
import UseState3 from './hooks/usestate/UseState3'
import Mobiles from './revision/Mobiles'
import MyComp from './hooks/useeffect/MyComp'
import EffectCounter from './hooks/useeffect/EffectCounter'
import NewComp from './hooks/usecontext/NewComp'
import UserProvider from './hooks/usecontext/UserProvider'
import MyForm from './hooks/formvalidation/MyForm'
import FormValidation from './hooks/formvalidation/FormValidation'
import HookForm from './hooks/formvalidation/HookForm'
import ChangeColor from './hooks/useeffect/ChangeColor'
import ExternalCompenent from './hooks/usecontext/ExternalComponent'
import BatchProvider from './hooks/usecontext/BatchProvider'
import UseReducerCounter from './hooks/usereducer/UseReducerCounter'
import { ThemeContext, ThemeProvider } from './ThemeContext'
import Nutan from './Nutan'



// const App = () => {
//   return (
//     <div>
       {/* <Counter />
      <UseState2 />
      <UseState3 />
      <Mobiles />
      <MyComp />
      <NewComp />
     <UserProvider />
     <MyForm />
      <FormValidation /> 
     <HookForm /> 
      <ChangeColor />
     <ExternalCompenent />
     <BatchProvider />
     <UseReducerCounter />
       <EffectCounter /> */}
       {/* <ThemeContext />
     </div>
  )
} */}





function AppContent(){

  const { theme } = useContext(ThemeContext);
  return(
   <div className={theme}>
    <Nutan />
   </div>
  )
}


function App(){
  return(
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App















































// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
