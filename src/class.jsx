import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import Footer from './footer.jsx'
import '../css/estilos.css'
import ClassRenderSelect from './selectClass.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header text={'Classes'}/>
    <main>
      <ClassRenderSelect />
    </main>
    <Footer/>
  </>  
)
