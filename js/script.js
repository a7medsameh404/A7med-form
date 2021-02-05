


// Sign Up Inputs && btns
let signUpNameInput = document.getElementById("signUpNameInput");
let signUpEmailInput = document.getElementById("signUpEmailInput");
let signUpPasswordInput = document.getElementById("signUpPasswordInput");
let signUpBtn = document.getElementById("signUpBtn");

// Log In Inputs
let loginEmailInput = document.getElementById("loginEmailInput");
let loginPasswordInput = document.getElementById("loginPasswordInput");
let loginBtn = document.getElementById("loginBtn");


let emailAlreadyExists = document.getElementById("emailAlreadyExists");
let seccess = document.getElementById("seccess");
let incorrectEmailOrPass = document.getElementById("incorrectEmailOrPass");
let inputIsRequired = document.getElementById("inputIsRequired");



let formContainer ;

if( localStorage.getItem("userData") == null )
{
    formContainer = [];
}
else
{
    formContainer = JSON.parse( localStorage.getItem("userData") );
}


function signup()
{
    if( signUpEmailInput.value == "" || signUpNameInput.value == "" || signUpPasswordInput.value == "" )
    {
        inputIsRequired.classList.replace("d-none" , "d-flex");
        emailAlreadyExists.classList.replace("d-flex" , "d-none");
        seccess.classList.replace("d-flex" , "d-none");
    }
    else
    {
        inputIsRequired.classList.replace("d-flex" , "d-none");

        if( localStorage.getItem("userData") == null )
        {
            seccess.classList.replace("d-none" , "d-flex");
            let form =
            {
                name: signUpNameInput.value,
                email: signUpEmailInput.value,
                password: signUpPasswordInput.value,
            }
            formContainer.push( form );
            localStorage.setItem("userData" , JSON.stringify( formContainer ) );
            
        }
        else
        {
            if( localStorage.getItem("userData").toLowerCase().includes(signUpEmailInput.value.toLowerCase()) )
            {
                emailAlreadyExists.classList.replace("d-none" , "d-flex")
                seccess.classList.replace("d-flex" , "d-none");
            }
            else
            {
                emailAlreadyExists.classList.replace("d-flex" , "d-none");
                seccess.classList.replace("d-none" , "d-flex");
                
                let form =
                {
                    name: signUpNameInput.value,
                    email: signUpEmailInput.value,
                    password: signUpPasswordInput.value,
                }
                formContainer.push( form );
                localStorage.setItem("userData" , JSON.stringify( formContainer ) );
            }
        }
    }

    console.log( formContainer );
}


function login()
{
    
    if( loginEmailInput.value == "" || loginPasswordInput.value == "" )
    {
        inputIsRequired.classList.replace("d-none" , "d-flex");
        incorrectEmailOrPass.classList.replace("d-flex" , "d-none");
    }
    else
    {
        inputIsRequired.classList.replace("d-flex" , "d-none");


        if( localStorage.getItem("userData") == null )
        {
            incorrectEmailOrPass.classList.replace("d-none" , "d-flex");
        }
        else
        {
            formContainer = JSON.parse( localStorage.getItem("userData") );
        
            for( let i=0 ; i<formContainer.length ; i++)
            {
                if( formContainer[i].email == loginEmailInput.value && formContainer[i].password == loginPasswordInput.value )
                {
                    homePage();
                    userName();
                    incorrectEmailOrPass.classList.replace("d-flex" , "d-none");
                }
                else
                {
                    incorrectEmailOrPass.classList.replace("d-none" , "d-flex");
                }
            }
        }
    } 
}


function homePage()
{
    window.location.replace("home.html");
}


function userName()
{
    for( let i=0 ; i<formContainer.length ; i++)
    {
        if( formContainer[i].email == loginEmailInput.value && formContainer[i].password == loginPasswordInput.value )
        {
            localStorage.setItem("userName" , JSON.stringify( formContainer[i].name ) )
        }
    }
}

function logout()
{
    localStorage.removeItem("userName")
    window.location.replace("index.html")
}



function loginIconShow()
{
    loginPasswordInput.setAttribute("type" , "text");
    document.getElementById("iconEyeHide").classList.replace("d-none", "d-flex");
    document.getElementById("iconEyeShow").classList.replace("d-flex" , "d-none");
}

function loginIconHide()
{
    loginPasswordInput.setAttribute("type" , "password");
    document.getElementById("iconEyeHide").classList.replace("d-flex" , "d-none");
    document.getElementById("iconEyeShow").classList.replace("d-none", "d-flex");
}


function signupIconShow()
{
    signUpPasswordInput.setAttribute("type" , "text");
    document.getElementById("iconEyeHide").classList.replace("d-none", "d-flex");
    document.getElementById("iconEyeShow").classList.replace("d-flex" , "d-none");
}
function signupIconHide()
{
    signUpPasswordInput.setAttribute("type" , "password");
    document.getElementById("iconEyeHide").classList.replace("d-flex" , "d-none");
    document.getElementById("iconEyeShow").classList.replace("d-none", "d-flex");
}