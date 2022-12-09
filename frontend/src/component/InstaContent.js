import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const InstaContent = (props) => {

 
    
    const {caption, media_url} = props.feed
   
    const history = useNavigate();
    const SaveData  = async (e) =>{
        e.preventDefault();
        const res = await fetch("/savedata" , {
          method: "POST", 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            'imgURL':`${media_url}`,
            'caption': `${caption}`
          })
          
        })
      window.alert("data saved in database")
        
    }
    const verifyPage=async()=>{
      
      try{
          const res=await fetch('/displaydata',{
              method:"GET",
              headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
              },
              credentials:"include"
          });
          const data=await res.json();
        
          
          if(!res.status===200){
              const err=new Error(res.error);
              throw err;
          }
      }catch(err) {
          console.log(err);
         
          history("/login");
          
      }
      
  }
 
  
  useEffect(()=>{
      verifyPage();
  },[])
 
      

    return (
        <>
        <section>
         <form method='POST'>
          
<div className=" row p-3">
    <div className="ms-5 col-6">
    <img className='' style={{'width':'600px'}} src={media_url} alt={caption} />
    <h4 >Caption: {caption}</h4>
    <button className='btn btn-primary' onClick={SaveData} >Save Data to Database</button>
        
</div>
</div>

</form>
</section>

        </>
    );
}

export default InstaContent;