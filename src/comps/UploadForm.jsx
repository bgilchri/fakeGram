import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
 const [file, setFile] = useState(null);
 const [error, setError] = useState(null);
 const types = ['image/png', 'image/jpeg'];

 const changeHandler = (e) => {
  let selected = e.target.files[0]; // allows you to select 1st file

  if(selected && types.includes(selected.type)) { //truthy if we have a file
    setFile(selected)
    setError('');
  } else {
   setFile(null); 
   setError('Please select an image file (png or jpeg).');
   
  }
 }

 return (
  <form>
   <label>
   <input type='file'  onChange={changeHandler}/>
   <span>+</span>
   </label>
   <div className='output'>
    {error && <div>{error}</div>}
    {file && <div>{file.name}</div>} 
    { file && <ProgressBar file={file} setFile={setFile}/>}
    </div>
  </form>
 )
}

export default UploadForm;