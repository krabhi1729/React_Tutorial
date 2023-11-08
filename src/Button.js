 import React,{memo} from 'react'
 
 const Button =memo((props) => {
  console.log("rendering Button")
   
      const {children , clickAction}=props;
     
      const handleClick=()=>{
   clickAction()
}
   return (

     <button onClick={handleClick}>{children}</button>
     
   )
 })
 
 export default Button