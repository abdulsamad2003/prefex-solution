import { Helmet } from 'react-helmet';
import './App.scss';
import Nav from './componets/Nav';
import Home from './pages/landingpage/Home';


function App() {
  return (
   <>
   {/*for preloading fonts */}
     <Helmet>
     <link rel="preload" as="font" href="https://fonts.googleapis.com" crossorigin="anonymous"/>
     <link rel="preload" as="font" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
     <link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" />
      </Helmet>
      <Nav/>
      <Home/>
   </>
  );
}

export default App;
