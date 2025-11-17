export const validationCheck=(email,pass,name)=>{
    if(name!==undefined) {
    if(!name || name.trim()===0) return "Name is empty"
    const clientName=/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
    if(!clientName) return "Name is not valid";
   }
   const emailId=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   const password=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(pass);
   if(!emailId) return "Email is not valid";
   if(!password) return "Password is not valid";
   

  

   return null;
}