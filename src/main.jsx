import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import LinkPage from './linkPageButton.jsx'
import Footer from './footer.jsx'
import '../css/estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header text={'Wowfinder Wicki'}/>
    <main>
      <LinkPage href={'../html/Class.html'} text={'Classes'}/>
      <LinkPage href={'../html/spells.html'} text={'Spells'}/>
      <LinkPage href={'../html/objects.html'} text={'Objects'}/>
    </main>
    <Footer/>
  </>  
)
