/*global document*/
/*jslint unused:false, plusplus:true */

/*Start Button Hover*/
var left = document.getElementById('left'),
    right = document.getElementById('right'),
    signin = document.getElementById('signin'),
    signup = document.getElementById('signup'),
    signinscreen = document.getElementById('signinscreen'),
    signupscreen = document.getElementById('signupscreen');

left.onmouseover = function()
{
    "use strict";
    if(signin.style.display === 'none')
    {
        left.style.color = '#111';
        left.style.backgroundColor = '#d1eed1';
    }
};

left.onmouseout = function()
{
    "use strict";
    if(signin.style.display === 'none')
    {
        left.style.color = '#00c799';
        left.style.backgroundColor = '#fff';
    }
};

right.onmouseover = function()
{
    "use strict";
    if(signup.style.display === 'none')
    {
        right.style.color = '#111';
        right.style.backgroundColor = '#d1eed1';
    }
};

right.onmouseout = function()
{
    "use strict";
    if(signup.style.display === 'none')
    {
        right.style.color = '#00c799';
        right.style.backgroundColor = '#fff';
    }
};
/*Start Button Hover*/

/*------------------------------------------------------------------------------------------------------*/

/*Start Sign Swap*/
function swap(num)
{
    "use strict";
    
    if(num === 0)
    {
        if(left.className.search("boxshadowinleft") === -1)
        {
            
            left.className += ' boxshadowinleft';
            right.className = right.className.replace('boxshadowinright', '');
            
            left.style.backgroundColor = '#b1ccb1';
            right.style.backgroundColor = '#fff';
            
            left.style.color = '#111';
            right.style.color = '#00c799';
            
            signin.style.display = 'block';
            signup.style.display = 'none';
            
            signinscreen.parentElement.style.display = 'none';
            signupscreen.parentElement.style.display = 'block';
            
            ///Initailize
            var pass2 = document.getElementById('pass2'),
            signuppass = document.getElementById('showpass2'),
            mail2 = document.getElementById('mail2'),
            user = document.getElementById('user');
            
            signuppass.innerText = 'Show';
            pass2.type = 'password';
            pass2.value = '';
            mail2.value = '';
            user.value = '';
        }
    }
    
    else
    {
        if(right.className.search("boxshadowinright") === -1)
        {
            
            right.className += ' boxshadowinright';
            left.className = left.className.replace('boxshadowinleft', '');
            
            right.style.backgroundColor = '#b1ccb1';
            left.style.backgroundColor = '#fff';
            
            right.style.color = '#111';
            left.style.color = '#00c799';
            
            signup.style.display = 'block';
            signin.style.display = 'none';
            
            signupscreen.parentElement.style.display = 'none';
            signinscreen.parentElement.style.display = 'block';
            
            ///Initialize
            var pass1 = document.getElementById('pass1'),
            signinpass = document.getElementById('showpass1'),
            mail1 = document.getElementById('mail1');
            
            signinpass.innerText = 'Show';
            pass1.type = 'password';
            pass1.value = '';
            mail1.value = '';
        }
    }
}
/*End Sign Swap*/

/*------------------------------------------------------------------------------------------------------*/

/*Start Password*/
function password(num)
{
    "use strict";
    if(num === 0)
    {
        var signinpass = document.getElementById('showpass1'),
            pass1 = document.getElementById('pass1');
        
        if(signinpass.innerText == 'Show')
        {
            pass1.type = 'text';
            signinpass.innerText = 'Hide';
        }
        
        else
        {
            
            pass1.type = 'password';
            signinpass.innerText = 'Show';
        }
    }
    
    else
    {
        var signuppass = document.getElementById('showpass2'),
            pass2 = document.getElementById('pass2');
        
        if(signuppass.innerText == 'Show')
        {
            pass2.type = 'text';
            signuppass.innerText = 'Hide';
        }
        
        else
        {
            
            pass2.type = 'password';
            signuppass.innerText = 'Show';
        }
    }
}
/*Start Password*/







