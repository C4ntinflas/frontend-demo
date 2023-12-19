import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Display, Home, NewPersonForm, Navbar } from './Components/index'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/new' element={<NewPersonForm />} />
          <Route path='/person/:id' element={<Display />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;