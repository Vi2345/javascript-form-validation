const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document .getElementById("password");
const password2 = document .getElementById("password2");

form.addEventListener('submit',e => {
   e.preventDefault();


   checkInputs();
});





const checkInputs =() => {
    const usernameValue = username.value.trim();
    const emailValue =    email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

       if(usernameValue === '')
       {
         setError(username, 'Username Cannot Be Blank');
       }
      else
       {
         setSuccess(username);
       }

       if(emailValue === '')
       {
          setError(email, 'Email Cannot be Blank');
       }
   
      else  
       {
        setSuccess(email);
       }

        if(passwordValue === '')
         {
              setError(password, 'Password Cannot Be Blank');
         }
         
       else
        {
             setSuccess(password);
        }
 
       if(password2Value === '') 
         {
             setError(password2, 'Password Cannot Be Blank');
         }
       else if (passwordValue  !== password2Value)
        {
           setError(password2,'Password Does Not Match');
        }
       else  
        {
            setSuccess(password2);
        }
    } 
 

 

     function setError(input,message)
     {
         const formcontrol = input.parentElement;
        formcontrol.className = 'form-control error';
         small.innerText=message;
        
     }

     function setSuccess(input)
     {
     const formcontrol = input.parentElement;
     formcontrol.className="form-control success"
     small.innerText=input;
     }

     











 
       

    

