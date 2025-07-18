import React,{useState} from 'react';
import UrlInputForm from '../components/UrlInputForm';
import ShortLink from '../components/ShortLink';
export default function Home(){
  const [shortUrl,setShortUrl]=useState('');
  const handleShorten=(originalUrl)=>{
    const fakeShortUrl='https://sho.rt/'+Math.random().toString(36).substring(7);
    setShortUrl(fakeShortUrl);
  };
  return(
    <div style={styles.container}>
      <h1>URL Shortener</h1>
      <UrlInputForm onShorten={handleShorten} />
      {shortUrl&&<ShortLink url={shortUrl} />}
    </div>
  );
}
const styles={
  container:{
    padding:'40px',
    textAlign:'center',
    fontFamily:'Arial,sans-serif',
  },
};
