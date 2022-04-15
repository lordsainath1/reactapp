import Contact from "./components/Center/Contact";
import Content from "./components/Center/Content";
import Hero from "./components/Center/Hero";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navigation";



function App() {
  return (
    <>
    <Navigation/>
    <Hero/>
    <div className='text-red-400 text-6xl flex justify-center items-center'>
      Hello Sainath 
    </div>

<Content/>

<Contact/>

    <Footer/>

    
    </>
  );
}

export default App;
