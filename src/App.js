import React from 'react';
import './App.css';
import './index.css'
import About from '../src/components/About';
import Contact from '../src/components/Contact'
import Project from './components/Project'
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './components/Resume'
function App() {

  const [page, setPage] = React.useState('');

  const showPage = () => {
    if (page === "about") {
      return <About />
    } else if (page === "contact") {
      return <Contact />
    }else if (page === "portfolio") {
      return <Project /> 
    }else if (page === "resume") {
      return <Resume /> 
    }else {
      return (
       <About/>
      )
    }
  }

  return (
    <div> 
        <Header setPage={setPage}/>

      <main>
        {showPage()}
      </main>  
      <Footer/>
    </div>
  );
}

export default App;
