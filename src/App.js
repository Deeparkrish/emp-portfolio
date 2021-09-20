import React from 'react';
import './App.css';
import About from '../src/components/About';
import Contact from '../src/components/Contact'

import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  const [page, setPage] = React.useState('');

  const showPage = () => {
    if (page === "about") {
      return <About />
    } else if (page === "contact") {
      return <Contact />
    } else {
      return (
        <h1>Hello world page</h1>
      )
    }
  }

  return (
    <div> 
        <Header setPage={setPage}/>

      <main>
        {showPage()}
        {/* <About/>
        <Contact/> */}
      </main>  
      <Footer/>
    </div>
  );
}

export default App;
