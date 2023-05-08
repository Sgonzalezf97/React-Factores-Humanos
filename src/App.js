import React from 'react'
import Banner from './Components/Banner'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import './Components/NavStyle.css'



function App() {
  return (
        <>
          <Nav />
          <Banner />
          <Cards />
          <Footer />
        </>
  )
}
export default App





// import logo from './logo.svg';
// import './App.css';

// export function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export function Greatings(){
//   return <h1>Hola mundo</h1>
// }

// export function Navbar(){
//   return(
//     <nav>
//       navegation
//     </nav>
//   );

// }
