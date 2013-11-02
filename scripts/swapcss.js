//http://stackoverflow.com/a/6348597/2219970
function addEvent(element, evnt, funct){
    if (element.attachEvent) {
        return element.attachEvent('on'+evnt, funct);
    } else {
        return element.addEventListener(evnt, funct, false);
    }
}

var csslink = document.getElementById('stylesheet');
var csschange = document.getElementById('changecss');

addEvent(csschange, 'click', 
    function() { 
    console.log("something");
        if(csslink.href == window.location.href + 'css/default.css') {
            csslink.href = 'css/silvange.css';
        } else {
            csslink.href = 'css/default.css';
        }
    }
);