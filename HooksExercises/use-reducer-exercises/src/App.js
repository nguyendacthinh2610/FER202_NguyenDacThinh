import './App.css';
import CounterComponent from './Components/CounterComponents';
import LightSwitch from './Components/LightSwitch';
import QuestionBank from './Components/QuestionBank';
import LoginForm from './Components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';  
import SignUpForm from './Components/SignUpForm';
function App() {
  return (
    <div className="App">
      <CounterComponent />
      <LightSwitch />
      <QuestionBank />
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default App;
