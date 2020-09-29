/*global document*/
/*jslint plusplus:true, unused:false*/

var name = "", section, span, content,
    localstorage = [],
    input = document.getElementById('input'),
    check = document.getElementById('check'),
    add = document.getElementById('add'),
    dlt = document.getElementById('delete'),
    show = document.getElementById('show'),
    output = document.getElementById('output'),
    i;


function checkinput(item) {
    if(name.length === 0)
    {
        output.innerHTML = 'Input Cant Be Empty';
        input.value = '';
        return false;
    }
    
    return true;
}

/*------------------------------------------------------------------*/

function message(before, item, after) {
    section = document.createElement('section');
    section.innerHTML = before;
    span = document.createElement('span');
    span.innerHTML = item;
    section.appendChild(span);
    after = document.createTextNode(after);
    section.appendChild(after);

    return section;
}

/*------------------------------------------------------------------*/

function checkEvent() {
    "use strict";
    name = input.value;
    name = name.trim();
    output.innerHTML = '';
    
    if(checkinput(name))
    {
        var found = false;
        for(i=0; i<localstorage.length; i++)
        {
            if(localstorage[i] === name)
            {
                content = message('Found Local Storage Item Called ', name, '');
                output.appendChild(content);
                found = true;
                break;
            }
        }

        if(!found)
        {
            content = message('No Local Storage Item With This Name ', name, '');
            output.appendChild(content);
        }
    }
}

/*------------------------------------------------------------------*/

function addEvent() {
    "use strict";
    name = input.value;
    name = name.trim();
    output.innerHTML = '';
    
    if(checkinput(name))
    {
        localstorage[localstorage.length] = name;
        content = message('Local Storage Item ', name, ' Added');
        output.appendChild(content);
    }
}

/*------------------------------------------------------------------*/

function deleteEvent() {
    "use strict";
    name = input.value;
    name = name.trim();
    output.innerHTML = '';
    
    if(checkinput(name))
    {
        var found = false;
        for(i=0; i<localstorage.length; i++)
        {
            if(localstorage[i] === name)
            {
                localstorage.splice(i, 1);
                content = message('Deleted Local Storage Item ', name, '');
                output.appendChild(content);
                found = true;
                break;
            }
        }

        if(!found)
        {
            content = message('No Local Storage Item With This Name ', name, '');
            output.appendChild(content);
        }
    }
}

/*------------------------------------------------------------------*/

function showEvent() {
    "use strict";
    
    output.innerHTML = '';
    if(localstorage.length > 0)
    {
        for(i=0; i<localstorage.length; i++)
        {
            content = message('', localstorage[i], '');
            output.appendChild(content);
        }
    }
    
    else 
    {
        content = message('Local Storage Is Empty ', '', '');
        output.appendChild(content);
    }
}


check.onclick = checkEvent;
add.onclick = addEvent;
dlt.onclick = deleteEvent;
show.onclick = showEvent;