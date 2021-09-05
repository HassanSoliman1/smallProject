
var userEmailInput = document.getElementById("userEmail");
var userNameInput = document.getElementById("userName");
var userDomainInput = document.getElementById("userDomain");


function clicable()
{       
    
    userEmailInputValue = userEmailInput.value;

    var att = userEmailInputValue.indexOf("@");
   
    var userEmailN =userEmailInputValue.substring(0,att);

    document.getElementById("userName").value = userEmailN;

    var userEmailD =userEmailInputValue.substring(att+1);

    document.getElementById("userDomain").value = userEmailD;

}
