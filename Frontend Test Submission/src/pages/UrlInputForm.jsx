import React,{useState} from 'react';
import validateUrl from '../util/validateUrl';
export default function UrlInputForm({onShorten}){
  const [inputUrl,setInputUrl]=useState('');
  const [error,setError]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!validateUrl(inputUrl)){
      setError('Please enter a valid URL.');
      return;
    }
    setError('');
    onShorten(inputUrl);
    setInputUrl('');
  };
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputUrl}
        onChange={(e)=>setInputUrl(e.target.value)}
        placeholder="Enter your URL here"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Shorten URL</button>
      {error&&<p style={styles.error}>{error}</p>}
    </form>
  );
}
const styles={
  input:{
    padding:'10px',
    width:'300px',
    marginRight:'10px',
  },
  button:{
    padding:'10px 20px',
  },
  error:{
    color:'red',
    marginTop:'10px',
  },
};
