import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState("")
  const [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState("false");
  const [numberAllowed, setNumberAllowed] = useState("false")

  return (
    <>
      <div className='container-fluid bg-info py-4'>
         <h1 className='text-danger'>Password Generator</h1>
         <div className='input-group rounded-4 flex pt-4 align-items-center justify-content-center'>
            <input
            className="custom-width"
            type='text'
            value={password}
            htmlFor='length'
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className='btn btn-primary btn-copy' 
            type='button'
            >Copy</button>
         </div>

         <div className='input-group flex align-items-center justify-content-center pt-4'>
            <div className='input-group mx-4 align-items-center justify-content-start'>
               <input
               type='range'
               min='8'
               max='50'
               id='slider'
               name='slider'
               value= {length}
               onChange= {(e) => setLength(e.target.value)}
               />
               <label htmlFor='slider' 
               className='form-label ms-2' id='lengthLabel'>Length:{length}</label>
            </div>
            <div className='input-group mx align-items-center justify-content-center'>
               <input
               type='checkbox'
               value={numberAllowed}
               name='numbers'
               defaultChecked={numberAllowed}
               onChange= {()=>setNumberAllowed(!numberAllowed)}
               />
               <label htmlFor='numbers'>Number</label>
            </div>
            <div className='input-group mx align-items-center justify-content-center'>
               <input
               type='checkbox'
               value= ''
               name='char'
               defaultChecked={charAllowed}
               onChange={()=>setCharAllowed(!charAllowed)}
               />
               <label htmlFor='char'>Characters</label>
            </div>
            
         </div>

      </div>
    </>
  )
}

export default App
