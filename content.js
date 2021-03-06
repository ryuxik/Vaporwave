var replaceTextInNode = function(parentNode){
    for(var i = parentNode.childNodes.length-1; i >= 0; i--){
        var node = parentNode.childNodes[i];

        
        //  Make sure this is a text node
                     
               
        if(node.nodeType == Element.TEXT_NODE){
            node.textContent = node.textContent.replace(/\bthe\b/i, 't h e');
            node.textContent = node.textContent.replace(/\band\b/i, '粗 シ テ');
            node.textContent = node.textContent.replace(/\bof\b/i, 'k e k');
            node.textContent = node.textContent.replace(/\bor\b/i, 'nornor');
            node.textContent = node.textContent.replace(/\baesthetic\b/i, 'a e s t h e t i c');
            node.textContent = node.textContent.replace(/\bis\b/i, 'MAYHAPS BE');
            node.textContent = node.textContent.replace(/\bbasic\b/i, 'p H 1 4');
            node.textContent = node.textContent.replace(/\ba\b/i, 'ァァ唖々ア');
            node.textContent = node.textContent.replace(/e/i, '3');
            node.textContent = node.textContent.replace(/o/i, '0');
            node.textContent = node.textContent.replace(/a/i, '4');
            node.textContent = node.textContent.replace(/\bi\b/i, 'ワ タ シ ');
            node.textContent = node.textContent.replace(/!/i, ' ！！');
            node.textContent = node.textContent.replace(/thing/i, 'boop');
            node.textContent = node.textContent.replace(/s/i, '§');
        } else if(node.nodeType == Element.ELEMENT_NODE){
            //  Check this node's child nodes for text nodes to act on

            replaceTextInNode(node);
        }
    }
};

var replaceImages = function(document){
  var imageSRCS = ['https://upload.wikimedia.org/wikipedia/en/e/e9/Floral_Shoppe_Alt_Cover.jpg',
  'http://i.imgur.com/lTO9Plf.png',
  'https://thump-images.vice.com/images/tracks/meta/2015/09/15/prepare-to-get-deliriously-dreamy-with-vaporwave-sensation-2814s-beyond-blissful-shinjitsu-no-koi-1442324234.png?crop=1xw:0.9542220113852xh;center,top&resize=800:*&output-quality=75',
  'http://neologisms.blogs.wm.edu/files/2016/03/vaporwave-2.jpg',
  'http://esq.h-cdn.co/assets/16/33/1600x800/landscape-1471537670-es-081716-vaporwave.jpg',
  'https://i.ytimg.com/vi/wWR74mMKv8Q/maxresdefault.jpg'];
  
  var images = document.getElementsByTagName('img');
  for (var a = []; i=0;i<images.length-1, i++) a[i]=i;

  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  }

  for(var i = images.length-1; i >= 0; i--){
    images[i].src = imageSRCS[getRandomInt(0,imageSRCS.length)]
  }
};

replaceTextInNode(document.body);
replaceImages(document);

// Creating a div element
var divElement = document.createElement("div2");
divElement.id = "div2";

// Styling it
divElement.style.background = "url('http://i.imgur.com/K8B84OT.png') no-repeat";
divElement.style.position = "fixed";
divElement.style.backgroundSize = "100%";
divElement.style.width = "250px";
divElement.style.height = "200px";
divElement.style.right = "0px";
divElement.style.bottom = "0px";
divElement.onclick = function() {
    window.location.href = 'http://www.clickhole.com/clickventure/pleasure-fern-4688';
};


// Appending the div element to body
document.getElementsByTagName("body")[0].appendChild(divElement);


var colour="#00baff";
var sparkles=120;

/****************************
*  Tinkerbell Magic Sparkle *
* (c) 2005 mf2fm web-design *
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  if (x!=ox || y!=oy) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      starx[i]+=(i%5-2)/5;
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tinyx[i]+=(i%5-2)/5;
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  set_scroll();
  y=(e)?e.pageY:event.y+sdown;
  x=(e)?e.pageX:event.x+sleft;
}

function set_scroll() {
  if (typeof(self.pageYOffset)=="number") {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
	sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  if (typeof(self.innerWidth)=="number") {
    swide=self.innerWidth;
    shigh=self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
    swide=document.documentElement.clientWidth;
    shigh=document.documentElement.clientHeight;
  }
  else if (document.body.clientWidth) {
    swide=document.body.clientWidth;
    shigh=document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div1=document.createElement("div1");
  div1.style.position="absolute";
  div1.style.height=height+"px";
  div1.style.width=width+"px";
  div1.style.overflow="hidden";
  div1.style.backgroundColor="#00baff";
  return (div1);
}


