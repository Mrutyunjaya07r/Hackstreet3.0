import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Signup from './Signup'
import Signin from './Signin'
import Level1 from './Level1'
import Level2 from './Level2'
import Level3 from './Level3'
import Post from './Post'
import Getdata from './Getdata'
import Learning from './Learning'
import Adult from './Adult'
import Kids from './Kids'
import Kidslearning from './Kidslearning'
import Chatbot from './Chatbot'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path='/level1' element={<Level1/>}/>
      <Route path='/level2' element={<Level2/>}/>
      <Route path='/level3' element={<Level3/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/showpost' element={<Getdata/>}/>
      <Route path='/showarticle' element={<Learning/>}/>
      <Route path='/adults' element={<Adult/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/kidslearning' element={<Kidslearning/>}/>
      <Route path='/chatbot' element={<Chatbot/>}/>


     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
