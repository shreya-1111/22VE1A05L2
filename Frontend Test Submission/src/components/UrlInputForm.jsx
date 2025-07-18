import React from 'react';
export default function ShortLink({url}){
  const handleCopy=()=>{
    navigator.clipboard.writeText(url);
    alert('copied');
  };
  return(
    <div style={styles.container}>
      <p>Shortened URL:</p>
      <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      <br />
      <button onClick={handleCopy} style={styles.button}>Copy</button>
    </div>
  );
}
const styles={
  container:{
    marginTop:'20px',
  },
  button:{
    marginTop:'10px',
    padding:'5px 15px',
  },
};
