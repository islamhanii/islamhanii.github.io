/*global document, window*/
/*jslint plusplus:true, unused:false*/

var body = document.body,
    header = document.getElementById('header'),
    select = document.getElementById('elements'),
    secondselect = document.getElementById('second'),
    element = document.querySelectorAll('#main article'),
    goUp = document.getElementById('goUp'),
    listbutton = document.getElementById('list-button'),
    list = document.getElementById('down-header'),
    i, selecting="", index, arrayselected, valueUp;

var blacken = document.getElementById('blacken'),
    display = document.getElementById('display'),
    loading = document.getElementById('loading');

/*---------------------------------------------------------------------------------------------------*/

function pauseLoading()
{
    loading.classList.add("pause-load");
    loading.style.display = "none";
    document.body.style.overflow = "auto";
}

/*---------------------------------------------------------------------------------------------------*/

function setDefault() { select.value = 'All'; }

/*---------------------------------------------------------------------------------------------------*/

function headerDisplayEvent()
{
    "use strict";
    
    if(window.pageYOffset>75){header.style.backgroundColor = 'rgba(34, 34, 34, 0.85)';}

    else{header.style.backgroundColor = '#333';}
}

/*---------------------------------------------------------------------------------------------------*/

function goUpDisplayEvent()
{
    "use strict";
    
    if(window.scrollY > 500){goUp.style.display = 'block';}
    
    else{goUp.style.display = 'none';}
}

/*---------------------------------------------------------------------------------------------------*/

function goUpEvent()
{
    "use strict";
    
    valueUp = (window.pageYOffset/250) * -1;
    
    var interval = window.setInterval(function() {
        
        if(window.pageYOffset===0) {window.clearInterval(interval);}
        
        else {window.scrollBy(0, valueUp);}
        
    }, 1);
}

/*---------------------------------------------------------------------------------------------------*/

function elements()
{
    "use strict";
    
    var selector = select.value;
    arrayselected = [];
    
    for(i=0; i<element.length; i++)
    {
        if(selector === "All"){element[i].style.display = 'block';}
        
        else if(element[i].querySelector('div').innerText.search(selector)>-1)
        {
            element[i].style.display = 'block';
            arrayselected.push(i);
        }

        else{element[i].style.display = 'none';}
    }

    /*-------------------------------------------------------------------------*/
    
    if(selector === "All"){secondselect.innerHTML = ''; selecting="";}
    else
    {
        selecting = "<select>\n";
        selecting += "<option>All</option>";
        
        for(i=0; i<arrayselected.length; i++)
        {
            var name = element[arrayselected[i]].querySelector('span').innerText;
            index = selecting.indexOf(name);
            
            if(index===-1 && selecting.charAt(index-1)!=='<')
            {
                selecting += '<option>' + name + '</option>\n';
            }
        }
        
        selecting += "</select>";
        secondselect.innerHTML = selecting;
    }
}

/*---------------------------------------------------------------------------------------------------*/

function elements2()
{
    "use strict";
    
    var selector = secondselect.firstChild.value;
    
    for(i=0; i<arrayselected.length; i++)
    {
        var name = element[arrayselected[i]].querySelector('span');
        
        if(selector === "All"){element[arrayselected[i]].style.display = 'block';}
        else if(name.innerText === selector){element[arrayselected[i]].style.display = 'block';}
        else{element[arrayselected[i]].style.display = 'none';}
    }
}

/*---------------------------------------------------------------------------------------------------*/

function openImage(name)
{
    "use strict";
    
    blacken.style.display = 'block';
    display.firstElementChild.firstElementChild.setAttribute('src', name);
    display.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/*---------------------------------------------------------------------------------------------------*/

function closeImage()
{
    "use strict";
    
    blacken.style.display = 'none';
    display.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/*---------------------------------------------------------------------------------------------------*/

function listDisplayEvent()
{
    "use strict";
    
    if(list.style.height === '1px' || list.style.height === '') {list.style.height = 'auto';}
    else {list.style.height = '1px';}
}

/*---------------------------------------------------------------------------------------------------*/

window.onscroll = headerDisplayEvent;
window.addEventListener('scroll',goUpDisplayEvent);

window.onload = headerDisplayEvent;
window.addEventListener('load',goUpDisplayEvent);
window.addEventListener('load',setDefault);
window.addEventListener('load',pauseLoading);

goUp.onclick = goUpEvent;

listbutton.onclick = listDisplayEvent;

listbutton.onmouseover = function() {
    listbutton.style.backgroundColor = '#ffffff30';
};
listbutton.onmouseout = function() {
    if(list.style.height === '1px' || list.style.height === '') {listbutton.style.background = 'none';}
};





