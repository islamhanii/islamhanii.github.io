/*global document, console*/
/*jslint plusplus:true, unused:false*/

var text = '', calc = [], sub = '', num=0, sum=0, index=0,
    output   = document.getElementById('output'), 
    zero     = document.getElementById('zero'),
    one      = document.getElementById('one'),
    two      = document.getElementById('two'),
    three    = document.getElementById('three'),
    four     = document.getElementById('four'),
    five     = document.getElementById('five'),
    six      = document.getElementById('six'),
    seven    = document.getElementById('seven'),
    eight    = document.getElementById('eight'),
    nine     = document.getElementById('nine'),
    dot      = document.getElementById('dot'),
    clear    = document.getElementById('clear'),
    equal    = document.getElementById('equal'),
    plus     = document.getElementById('plus'),
    minus    = document.getElementById('minus'),
    multiply = document.getElementById('multiply'),
    power    = document.getElementById('power'),
    divide   = document.getElementById('divide');

zero.onclick = function() {
    text += '0';
    sub +='0';
    output.innerText = text;
};

one.onclick = function() {
    text += '1';
    sub += '1';
    output.innerText = text;
};

two.onclick = function() {
    text += '2';
    sub += '2';
    output.innerText = text;
};

three.onclick = function() {
    text += '3';
    sub += '3';
    output.innerText = text;
};

four.onclick = function() {
    text += '4';
    sub += '4';
    output.innerText = text;
};

five.onclick = function() {
    text += '5';
    sub += '5';
    output.innerText = text;
};

six.onclick = function() {
    text += '6';
    sub += '6';
    output.innerText = text;
};

seven.onclick = function() {
    text += '7';
    sub += '7';
    output.innerText = text;
};

eight.onclick = function() {
    text += '8';
    sub += '8';
    output.innerText = text;
};

nine.onclick = function() {
    text += '9';
    sub += '9';
    output.innerText = text;
};

dot.onclick = function() {
    if(sub.indexOf('.') === -1){
        text += '.';
        sub += '.';
        output.innerText = text;
    }
};

plus.onclick = function() {
    if(sub.length>0 && sub !== '.')
    {
        text += '+';
        calc.push(sub);
        calc.push('+');
        output.innerText = text;
        sub = '';
    }
};

minus.onclick = function() {
    if(sub.length>0 && sub !== '.')
    {
        text += '-';
        calc.push(sub);
        calc.push('-');
        output.innerText = text;
        sub = '';
    }
};

multiply.onclick = function() {
    if(sub.length>0 && sub !== '.')
    {
        text += '*';
        calc.push(sub);
        calc.push('*');
        output.innerText = text;
        sub = '';
    }
};

power.onclick = function() {
    if(sub.length>0 && sub !== '.')
    {
        text += '^';
        calc.push(sub);
        calc.push('^');
        output.innerText = text;
        sub = '';
    }
};

divide.onclick = function() {
    if(sub.length>0 && sub !== '.')
    {
        text += '/';
        calc.push(sub);
        calc.push('/');
        output.innerText = text;
        sub = '';
    }
};

clear.onclick = function() {
    output.innerHTML = '&nbsp';
    text='';
    sub ='';
    calc = [];
};

/*---------------------------------------------------------------------------------------*/

equal.onclick = function() {
    if(text[text.length-1]==='.' || text[text.length-1]==='*'  || text[text.length-1]==='/' || text[text.length-1]==='-' || 
       text[text.length-1]==='+')
    {
        output.innerText = 'Syntax Error';
        text = '';
        sub ='';
        calc = [];
    }
    
    else {
        calc.push(sub);
        console.log(calc);
        while(true)
        {
            index = calc.indexOf('^');
            if(index > -1)
            {
                num = Math.pow(parseFloat(calc[index-1]), parseFloat(calc[index+1]));
                sum += num;
                calc.splice(index-1, 3, num);
                console.log(calc);
            }
            
            else
            {
                index = calc.indexOf('*');
                if(index>-1)
                {
                    num = parseFloat(calc[index-1]) * parseFloat(calc[index+1]);
                    sum += num;
                    calc.splice(index-1, 3, num);
                    console.log(calc);
                }
                
                else
                {
                    index = calc.indexOf('/');
                    if(index>-1)
                    {
                        num = parseFloat(calc[index-1]) / parseFloat(calc[index+1]);
                        sum += num;
                        calc.splice(index-1, 3, num);
                        console.log(calc);
                    }
                    
                    else
                    {
                        index = calc.indexOf('+');
                        if(index>-1)
                        {
                            num = parseFloat(calc[index-1]) + parseFloat(calc[index+1]);
                            sum += num;
                            calc.splice(index-1, 3, num);
                            console.log(calc);
                        }
                        
                        else
                        {
                            index = calc.indexOf('-');
                            if(index>-1)
                            {
                                num = parseFloat(calc[index-1]) - parseFloat(calc[index+1]);
                                sum += num;
                                calc.splice(index-1, 3, num);
                                console.log(calc);
                            }
                            
                            else{break;}
                        }
                    }
                }
            }
            
        }
        
        output.innerText = calc[0];
        text = calc[0].toString();
        calc = [];
        sub = text;
        sum = 0;
    }
};