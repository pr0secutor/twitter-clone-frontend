import { BrowserRouter,Route,Routes } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;