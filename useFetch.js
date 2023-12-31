import { useEffect, useState } from "react";


const useFetch = (url)=>{

    
    const [data, setData]= useState (null);
    const [ispending, setIspending]= useState(true);
    const [error, setError]= useState(null);
    
    useEffect(()=>{

      const abortCont = new AbortController();
      
        fetch(url, {signal: abortCont.signal})
        .then(res => {
          if (!res.ok){
            throw Error('Could not fetch');
          }
          return res.json();
        })
        .then(data =>{
          //console.log(data);
          setData(data);
          setIspending(false);
          setError(null);
        })
        .catch((e)=> {

          if(e.name === 'AbortError'){
            console.log("fetch aborted");
          }else{
          setIspending(false);
          setError(e.message);
          }
        })

        return ()=>{
          abortCont.abort();
        }
      

      },[url]);

      return {data,ispending,error};
}

export default useFetch