import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import useIsAndroid from "./hooks/useIsAndroid";
import { About, Contact, Experience, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components";

const App = () => {
  const isAndroid = useIsAndroid();

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Projects />
        {!isAndroid  && <Tech />}
        <Experience />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Analytics />
    </BrowserRouter>
  );
};


export default App;