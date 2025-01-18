import { Helmet } from 'react-helmet';
import './App.scss';
import Nav from './componets/Nav';
import Home from './pages/landingpage/Home';
import Footer from './componets/Footer';
import LoadingAnim from './componets/LoadingAnim';
import { useState,useEffect } from 'react';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for 4 seconds and then start the animation to remove the loading animation
    setTimeout(() => {
      setLoading(false);
      // Animate the loading animation to move off-screen
   
    }, 4000); // 4 seconds loading time
  }, []);

  return (
    <>
      {/*for preloading fonts */}
      <Helmet>
        <link rel="preload" as="font" href="https://fonts.googleapis.com" crossorigin="anonymous" />
        <link rel="preload" as="font" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link rel="preload stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" />
      </Helmet>
      {loading ? (
        <LoadingAnim></LoadingAnim>
      ) : ("")
      }
      
     <Nav/>
      <Home/>
      <Footer/>
    </>

  );
}

export default App;
