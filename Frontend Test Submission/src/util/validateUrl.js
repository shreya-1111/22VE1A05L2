export default function validateUrl(url){
    try{
      new URL(url);
      return true;
    }catch(err){
      return false;
    }
  }
