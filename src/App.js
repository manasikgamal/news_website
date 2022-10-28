import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { Navigate, Route, Routes} from "react-router-dom";
import { Main } from './components/Main';
import { Story } from './components/Story';
import { Profile } from './components/Profile';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  console.log("apppppp",isLoggedIn)
  return (
    <div >
      <Header/>
      <Routes>
      <Route path="/" element={isLoggedIn?<Navigate to="/main"/>:<Login/>}/>
      <Route path="/main" element={isLoggedIn?<Main/>:<Navigate to="/"/>}/>
      <Route path="/story/:title" element={isLoggedIn?<Story/>:<Navigate to="/"/>}/>
      <Route path="/profile" element={isLoggedIn?<Profile/>:<Navigate to="/"/>}/>
      <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
