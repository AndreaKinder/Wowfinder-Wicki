import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import Footer from './footer.jsx'
import '../css/estilos.css'
import SpellRenderSelect from './selectSpells.jsx'

ReactDOM.createRoot



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header text={'Hechizos'}/>
    <main>
      <SpellRenderSelect />
    </main>
    <Footer/>
  </>  
)