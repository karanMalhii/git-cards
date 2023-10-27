import React from 'react'
import Userdata from './Components/Userdata'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function App() {
  return (
    <div>
      <h2>This is app.jsx</h2>
      {/* <Button variant="outline-primary">Primary</Button>{' '} */}
      <Userdata/>
    </div>
  )
}
