import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Dashborad } from './components/Dashborad';
import { Layout } from './Layout';
import { PagenotFound } from './components/PagenotFound';
import { ProtectedRoutes } from './ProtectedRoutes';
function App() {
  return (
    <BrowserRouter>
       
        
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path="/SignUp" element={<Signup/>}/>
            <Route path='/Dashborad' element={<Dashborad/>}/>
              <Route element={<ProtectedRoutes/>}>
                <Route index element ={<Dashborad/>} />
              </Route>
            <Route path='*' element={<PagenotFound/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
