/*global document*/
/*jslint unused:false, plusplus: true*/

/*Start See More*/
function seeMore(name) {
    
    "use strict";
    var see = document.getElementById(name), 
        overflow = document.getElementById(name).previousElementSibling;
    see.style.display = "none";
    overflow.style.textOverflow = "clip";
    overflow.style.whiteSpace = "normal";
}
/*End See More*/

/*---------------------------------------------------------------------------------*/

/*Start FlexDivs Dimensions*/
function divheight() {
    
    "use strict";
    var divs = document.getElementById('flexbox').children,
        divnum = document.getElementById('divheight').value,
        hvalue = document.getElementById('height').value;
    
    divs[divnum-1].style.height = hvalue;
}

function divwidth() {
    
    "use strict";
    var divs = document.getElementById('flexbox').children,
        divnum = document.getElementById('divwidth').value,
        wvalue = document.getElementById('width').value;
    
    divs[divnum-1].style.width = wvalue;
}
/*End FlexDivs Dimensions*/

/*---------------------------------------------------------------------------------*/

/*Start FlexBox Direction*/
function boxdirection(dir) {
    
    "use strict";
    document.getElementById('flexbox').style.direction = dir;
}
/*End FlexBox Direction*/

/*---------------------------------------------------------------------------------*/

/*Start FlexBox Direction*/
function flexdirection(dir) {
    
    "use strict";
    document.getElementById('flexbox').style.flexDirection = dir;
}
/*End FlexBox Direction*/

/*---------------------------------------------------------------------------------*/

/*Start Flex Wrap*/
function flexwrap(wrap) {
    
    "use strict";
    document.getElementById('flexbox').style.flexWrap = wrap;
}
/*End Flex Wrap*/

/*---------------------------------------------------------------------------------*/

/*Start Justify Content*/
function justify(content) {
    
    "use strict";
    document.getElementById('flexbox').style.justifyContent = content;
}
/*End Justify Content*/

/*---------------------------------------------------------------------------------*/

/*Start Align Content*/
function aligncontent(content) {
    
    "use strict";
    document.getElementById('flexbox').style.alignContent = content;
}
/*End Align Content*/

/*---------------------------------------------------------------------------------*/

/*Start Align Item*/
function alignitems(item) {
    
    "use strict";
    document.getElementById('flexbox').style.alignItems = item;
}
/*End Align Item*/

/*---------------------------------------------------------------------------------*/

/*Start Flex Grow*/
function flexgrow() {
    
    "use strict";
    var divs = document.getElementById('flexbox').children,
        divnum = document.getElementById('grow').value,
        gvalue = document.getElementById('gvalue').value;
    
    divs[divnum-1].style.flexGrow = gvalue;
}
/*End Flex Grow*/