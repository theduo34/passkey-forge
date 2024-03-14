import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
 
  //memorized function(cached) to generate password 
  const generatePassword = useCallback( () => {         //generatePassword  is a reference to memoized function
    let newPass = " ";
    let str = 
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if( numberAllowed ) str += "0123456789";
    if( charAllowed ) str += "!@#$%^&*()_+{}:|<>?~`[];',./-=";

    for(let i = 1; i <= length; i++) {
      let randomGeneratedPassword = Math.floor(Math.random() * str.length + 1);
      newPass += str.charAt(randomGeneratedPassword);           //random generated password
    }

    setPassword(newPass);
  }, [length, charAllowed, numberAllowed]);

  //generated password copied to clipboard
  const generatedPasswordCopyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
        alert('Password Copied');
    });
  };

  //useEffect hook to automatically  call the function when the component is mounted 
  useEffect( () => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className='container-fluid bg-info py-4'>
         <h1 className='text-danger'>Password Generator</h1>
         <div className='input-group rounded-4 flex pt-4 align-items-center justify-content-center'>
            <input
            className="custom-width outline-none overflow-hidden"
            type='text'
            value={password}
            htmlFor='length'
            readOnly
            placeholder='Password'
            onChange={(e) => setLength(e.target.value)}
            />
            <button 
            className='btn btn-primary btn-copy outline-none' 
            type='button'
            onClick = {generatedPasswordCopyToClipboard}
            >Copy</button>
         </div>

         <div className='input-group d-flex align-items-center justify-content-center pt-4'>
            <div className='input-group mx-4 align-items-center'>
               <input
               type='range'
               min={8}
               max={100}
               id='slider'
               name='slider '
               value= {length}
               onChange = {(e) => setLength(e.target.value)}
               />
               <label htmlFor='slider' 
               className='form-label ms-2' id='lengthLabel'>Length:{length}</label>
            </div>
            <div className='input-group d-flex mx align-items-center justify-content-center'>
               <input
               type='checkbox'
               name='numbers'
               defaultChecked={numberAllowed}
               onChange = {() => {
                  setNumberAllowed((prevValue) => !prevValue)
                }}
               />
               <label htmlFor='numbers'>Number</label>
            </div>
            <div className='input-group d-flex mx align-items-center justify-content-center'>
               <input
               type='checkbox'
               value= ''
               name='char'
               defaultChecked={charAllowed}
               onChange = {() => {
                setCharAllowed((prevValue) => !prevValue);
               }}
               />
               <label htmlFor='char'>Characters</label>
            </div>
            
         </div>

      </div>
    </>
  )
}

export default App
