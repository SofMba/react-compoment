import React from 'react';
import './App.css';
import Profilphoto from './compoment/profile/Profilphoto.js';
import Fullname from './compoment/profile/Fullname.js';
import Address from './compoment/profile/Address.js';

function App() {
  return <div>
  <h1 className='bigdiv'>hello world !!</h1>
   <Fullname></Fullname>
   <Address></Address>
   <Profilphoto></Profilphoto>
   
  </div>
}

export default App;
