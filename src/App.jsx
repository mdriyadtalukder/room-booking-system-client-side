import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import Signup from './components/signup/Signup'
import Roomid from './components/house/Roomid'
import Form from './components/house/Form'
import AddPost from './components/addPost/AddPost'
import Pendings from './components/pending/Pendings'
import Approveds from './components/approved/Approveds'
import Bookeds from './components/booked/Bookeds'
import RequireAuth from './components/requireAuth/RequireAuth'

function App() {

  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add' element={
          <RequireAuth>
            <AddPost></AddPost>
          </RequireAuth>
        }></Route>
        <Route path='/pending' element={
          <RequireAuth><Pendings></Pendings></RequireAuth>
        }></Route>
        <Route path='/view' element={<RequireAuth><Approveds></Approveds></RequireAuth>}></Route>
        <Route path='/booked' element={<RequireAuth><Bookeds></Bookeds></RequireAuth>}></Route>
        <Route path='/rooms/:rid' element={<Roomid></Roomid>}></Route>
        <Route path='/form/:fid' element={<RequireAuth><Form></Form></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  )
}

export default App
