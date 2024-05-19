//Component
//Types -      Classbase & functional


import Service  from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Demo from './components/Demo'
import Sample from './components/Sample'
import Com from './components/Com'
import Frag from './components/Frag'
import Close from './components/Close'
import Dev from './components/Dev'
import NavbarComp from './components/NavbarComp'
import Home from './components/Home'

// import Login from './components/Login'

function App(){
  // const id = window.prompt("Enter username: ");
  // const password = parseInt(window.prompt("Enter password: "));

  // const id = "Felix";
  // const password = 123;

  //  return id === "Felix" && password === 123 ? <Home/> : <Login/> ;


  // if(id === "Felix" && password === 123){
  //   return(
  //     <>
  //      <Home/>
  //      </>
     
  //   );
  // }
  //   else{
  //     return(
  //       <>
  //       <Login/>
  //       </>
        
  //     );
  //   }
  

  return(
    <>
    {/* <h1>Hello from React</h1> */}
    <NavbarComp/>
      <Home/>
      
      {/* <Service/>
      <About/>
      <Contact/>
      <Demo/>
      <Sample/>
      <Com/>
      <Frag/>
      <Close/>
      <Dev/> */}
      
      
    </>
    
  );
}
export default App;


