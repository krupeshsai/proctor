
import './App.css';
import Login from './Login/Login';
import Spash from './Spash/Spash';
import {BrowserRouter as Router,
  Routes,
  Route,} from "react-router-dom"
import LoginBox from './Spash/LoginBox';
import PasswordReset from './Login/PasswordReset';
// import EmptyHome from './Home/EmptyHome';
import Guideline from "./Onboard/Carousel"
import DemoExam from './Home/DemoExam';
import Check from './Exam/Check';
import Exam from './Exam/Exam';


function App() {
  return (
    <div className="App">
    <Router>
    
   <Spash/>


      <Routes>


      <Route path="/proctor" element={<LoginBox/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/passwordReset" element={<PasswordReset/>} />
      <Route path="/guideline" element={<Guideline/>} />
      {/* <Route path="/emptyhome" element={<EmptyHome/>}/> */}
      <Route path="/demoexam" element={<DemoExam/>} />
      <Route path="/check" element={<Check/>}/>
      <Route path="/exam" element={<Exam/>} />
    
      </Routes>

  
    </Router>
   
     
    </div>
  );
}

export default App;
