
import NavigationBar from './component/NavigationBar/NavigationBar';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <div className="sectionWrapper">
        <BrowserRouter>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/test" component={LandingPage}/>
        </BrowserRouter>
      </div>
      
    </div>
    
    
  );
}

export default App;
