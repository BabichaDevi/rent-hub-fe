import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Filter from './Components/Filter';
import FormRooms from './Components/FormRooms';
import Navbar from './Components/Navbar';
import PropertyList from './Components/PropertyList';
import PropertyDetails from './Components/PropertyDetails';
import CreateAccount from './Components/CreateAccount';
import LoginPage from './Components/LoginPage';
import useUser from './Hooks/useUser';
import Footer from './Components/Footer';
import About from './pages/about';
import Contact from './pages/contact';
import Services from './pages/services';
import FAQs from './pages/FAQ';
import NotFound from './pages/NotFound';
function App() {
  const {user, isLoading} = useUser()
  return (
    <Router>
      <div className=''>
        <Navbar />
         <div className="w-[80%] mx-auto">
          <Routes>
            <Route path="/" element={<PropertyList/>} />
            <Route path="/form-room" element={user ? <FormRooms/> : <LoginPage/> } />
            <Route path="/property/:id" element={<PropertyDetails/>} />
            <Route path="/Loginpage" element={<LoginPage/>} />
            <Route path="/CreateAccount" element={<CreateAccount/>} />
            <Route path="/about" element={<About/>}/>
               
               <Route path="/services" element={<Services/>}/>
               <Route path="/contact" element={<Contact/>}/>
               <Route path="/FAQs" element={<FAQs/>}/>

               <Route Path="*" element={<NotFound/>}/>
          </Routes>
        </div> 
        
       
               
          <Footer/>
      </div>
    </Router>
  );
}

export default App;