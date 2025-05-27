import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import AllBlog from './pages/AllBlog'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import MyBlog from './pages/MyBlog'
import CreateBlog from './pages/CreateBlog'

function App() {
 

  return (
    <>
    
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/all-blog" element={<AllBlog/>} />
          <Route path="/create-blog" element={<CreateBlog/>} />
          <Route path="/my-blog" element={<MyBlog/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
   
    </>
  )
}

export default App;
