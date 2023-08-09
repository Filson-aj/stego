import { Routes, Route } from 'react-router-dom';

import './App.css';
import Wrapper from './hocs/Wrapper/Wrapper';
import Landing from './components/Pages/Landing/Landing';
import Encryption from './components/Pages/Encryption/Encryption';
import Decryption from './components/Pages/Decryption/Decryption';

const App = () =>(
  <Wrapper>
    <Routes>
      <Route index path='/' element={<Landing />} />
      <Route path='/encryption' element={<Encryption />} />
      <Route path='/decryption' element={<Decryption />} />
    </Routes>
  </Wrapper>
);

export default App;
