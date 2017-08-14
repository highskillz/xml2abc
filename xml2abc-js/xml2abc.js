//~ Version: 66, Copyright (C) 2014-2017: Willem Vree
//~ This program is free software; you can redistribute it and/or modify it under the terms of the
//~ Lesser GNU General Public License as published by the Free Software Foundation;
//~ This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
//~ without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//~ See the Lesser GNU General Public License for more details. <http://www.gnu.org/licenses/lgpl.html>.
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(n,r,q){if(q.get||q.set)throw new TypeError("ES3 does not support getters and setters.");n!=Array.prototype&&n!=Object.prototype&&(n[r]=q.value)};$jscomp.getGlobal=function(n){return"undefined"!=typeof window&&window===n?n:"undefined"!=typeof global&&null!=global?global:n};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(n){return $jscomp.SYMBOL_PREFIX+(n||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var n=$jscomp.global.Symbol.iterator;n||(n=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[n]&&$jscomp.defineProperty(Array.prototype,n,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(n){var r=0;return $jscomp.iteratorPrototype(function(){return r<n.length?{done:!1,value:n[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(n){$jscomp.initSymbolIterator();n={next:n};n[$jscomp.global.Symbol.iterator]=function(){return this};return n};$jscomp.iteratorFromArray=function(n,r){$jscomp.initSymbolIterator();n instanceof String&&(n+="");var q=0,p={next:function(){if(q<n.length){var v=q++;return{value:r(v,n[v]),done:!1}}p.next=function(){return{done:!0,value:void 0}};return p.next()}};p[Symbol.iterator]=function(){return p};return p};
$jscomp.polyfill=function(n,r,q,p){if(r){q=$jscomp.global;n=n.split(".");for(p=0;p<n.length-1;p++){var v=n[p];v in q||(q[v]={});q=q[v]}n=n[n.length-1];p=q[n];r=r(p);r!=p&&null!=r&&$jscomp.defineProperty(q,n,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(n){return n?n:function(){return $jscomp.iteratorFromArray(this,function(n){return n})}},"es6-impl","es3");
$jscomp.findInternal=function(n,r,q){n instanceof String&&(n=String(n));for(var p=n.length,v=0;v<p;v++){var z=n[v];if(r.call(q,z,v,n))return{i:v,v:z}}return{i:-1,v:void 0}};$jscomp.polyfill("Array.prototype.find",function(n){return n?n:function(n,q){return $jscomp.findInternal(this,n,q).v}},"es6-impl","es3");xml2abc_VERSION=66;
(function(){function n(b,a){for(var c=[];b;)c.push(a),--b;return c}function r(b,a){for(var c=0,d={};c<b.length;++c)d[b[c]]=a[c];return d}function q(b,a){var c=b.split(/%[ds]/);c.length>a.length&&a.push("");return a.map(function(a,b){return c[b]+a}).join("")}function p(b,a){t.info(q(b,a))}function v(b,a){return-1!==b.indexOf(a,b.length-a.length)}function z(b){return Object.keys(b).map(function(a){return parseInt(a)})}function H(b,a){var c=[],d;if(Array.isArray(b))for(d=0;d<b.length;++d)d in b&&c.push([d,
b[d]]);else for(d in b)c.push([d,b[d]]);c.sort(a?function(a,b){return a[0]-b[0]}:function(a,b){return a[1]-b[1]||b[0]-a[0]});return c}function I(b){this.reset();this.ixp=b;this.divs=this.mdur=this.ixm=0}function A(b,a){this.tijd=0;this.dur=b;this.fact=null;this.tup=[""];this.tupabc="";this.grace=this.beam=0;this.after=this.before="";this.ns=a?[a]:[];this.lyrs={};this.pos=0}function B(b){this.tijd=0;this.str=b;this.pos=0}function D(){}function w(b){this.maxtime=this.tijd=0;this.gMaten=[];this.gLyrics=
[];this.vnums={};this.cnt=new D;this.vceCnt=1;this.lastnote=null;this.bpl=b.b;this.cpl=b.n;this.repbra=0;this.nvlt=b.v}function E(b,a,c,d){this.fnmext=b;this.outlist=[];this.infolist=[];this.title="T:Title";this.key="none";this.clefs={};this.mtr="none";this.tempo=0;this.pad=a;this.X=c+1;this.denL=d.d;this.volpan=d.m;this.cmpL=[];this.rightmargin=this.leftmargin=this.pagewidth=this.scale="";4==d.p.length&&(this.scale=""!=d.p[0]?parseFloat(d.p[0]):"",this.pagewidth=""!=d.p[1]?parseFloat(d.p[1]):"",
this.leftmargin=""!=d.p[2]?parseFloat(d.p[2]):"",this.rightmargin=""!=d.p[3]?parseFloat(d.p[3]):"")}function Q(b,a){if(!b.join(""))return["",0];for(var c=[],d=0;d<b.length;++d){var f=b[d];""==f?f=a?"_":"*":v(f,"_")&&!v(f,"\\_")?(f=f.replace("_",""),a=1):a=0;c.push(f)}return[c.join(" "),a]}function G(b,a){for(var c=b,d=a,f;a;)f=b%a,b=a,a=f;return[c/b,d/b]}function J(b,a,c){if(0==b.dur)return"";var d;d=G(c*b.dur,4*a);a=d[0];c=d[1];b.fact&&(d=b.fact[0],b=b.fact[1],d=G(a*d,c*b),a=d[0],c=d[1]);64<c&&(b=
a/c,d=Math.floor(b),b-d<.1*b&&(a=d,c=1),d=G(Math.round(64*a/c)||1,64),p("denominator too small: %d/%d rounded to %d/%d",[a,c,d[0],d[1]]),a=d[0],c=d[1]);return 1==a?1==c?"":2==c?"/":"/"+c:1==c?""+a:a+"/"+c}function K(b){var a=b.match(/([_^]*)([A-Ga-g])([',]*)/);if(!a)return-1;b=a[1];var c=a[2],a=a[3],d;d=c.toUpperCase();c=60+[0,2,4,5,7,9,11]["CDEFGAB".indexOf(d)]+(d!=c?12:0);b&&(c+=("^"==b[0]?1:-1)*b.length);a&&(c+=("'"==a[0]?12:-12)*a.length);return c}function R(b,a,c,d){var f;f=0;0<=c.indexOf("stafflines=1")&&
(f+=4);!d&&0<=c.indexOf("bass")&&(f+=12);f&&(c="CDEFGAB".split(""),f=c.indexOf(b)+f,b=c[f%7],a+=Math.floor(f/7));4<a&&(b=b.toLowerCase());5<a&&(b+=Array(a-5+1).join("'"));4>a&&(b+=Array(4-a+1).join(","));return b}function L(b,a,c){var d=0,f,e,g=a[b];e=g.tup.indexOf("start");-1<e&&g.tup.splice(e,1);var h=b;for(c=[g.fact[0]/c[0],g.fact[1]/c[1]];b<a.length;){g=a[b];if(!(g instanceof B||g.grace)){-1<g.tup.indexOf("start")?(e=L(b,a,c),b=e[0],e=e[1],d+=e):g.fact&&(d+=1);e=g.tup.indexOf("stop");if(-1<e){g.tup.splice(e,
1);break}if(!g.fact){b=f;break}f=b}b+=1}f=[c[0],c[1],d];f="3,2,3"==f.toString()?"(3":q("(%d:%d:%d",f);a[h].tupabc=f+a[h].tupabc;return[b,d]}function S(b){b=b.filter(function(a){return a instanceof A});for(var a=0;a<b.length-1;){var c=b[a],d=b[a+1];!c.fact&&!d.fact&&0<c.dur&&d.beam&&(3*c.dur==d.dur?(d.dur=2*d.dur/3,c.dur*=2,c.after="<"+c.after,a+=1):3*d.dur==c.dur&&(c.dur=2*c.dur/3,d.dur*=2,c.after=">"+c.after,a+=1));a+=1}}function T(b,a,c,d,f){for(d=0;d<b.length;)c=b[d],c instanceof A&&c.fact&&(c=
L(d,b,[1,1]),d=c[0]),d+=1;d=[];for(var e,g=0;g<b.length;++g){c=b[g];if(c instanceof A){var h=J(c,a,f),l=1<c.ns.length;e=c.ns.filter(function(a){return v(a,"-")});e=e.map(function(a){return a.slice(0,-1)});var k="";l&&e.length==c.ns.length&&(c.ns=e,k="-");e=c.tupabc+c.before;l&&(e+="[");e+=c.ns.join("");l&&(e+="]"+k);v(e,"-")&&(e=e.slice(0,-1),k="-");e+=h+k;e+=c.after;c=c.beam}else e=c.str,c=1;c?d.push(e):d.push(" "+e)}for(d=d.join("");0<=d.indexOf("!ped!!ped!");)d=d.replace(/!ped!!ped!/g,"!ped!");
for(;0<=d.indexOf("!ped-up!!ped-up!");)d=d.replace(/!ped-up!!ped-up!/g,"!ped-up!");return d}function U(b,a){b.map(function(a,b){a.pos=b});b.sort(function(a,b){return a.tijd-b.tijd||a.pos-b.pos});for(var c=0,d=[],f=0;f<b.length;++f){var e=b[f];e.tijd>c&&d.push(new A(e.tijd-c,"x"));if(e instanceof B)e.tijd<c&&(e.tijd=c),d.push(e),c=e.tijd;else{if(e.tijd<c){if("z"==e.ns[0])continue;var g=d[d.length-1];if(g.tijd<=e.tijd)if("z"==g.ns[0])g.dur=e.tijd-g.tijd,0==g.dur&&d.pop(),p("overlap in part %d, measure %d: rest shortened",
[a.ixp+1,a.ixm+1]);else{g.ns=g.ns.concat(e.ns);p("overlap in part %d, measure %d: added chord",[a.ixp+1,a.ixm+1]);e.dur=e.tijd+e.dur-c;if(0>=e.dur)continue;e.tijd=c}else{p("overlapping notes in one voice! part %d, measure %d, note %s discarded",[a.ixp+1,a.ixm+1,e instanceof A?e.ns:e.str]);continue}}d.push(e);c=e.tijd+e.dur}}0==c&&p("empty measure in part %d, measure %d, it should contain at least a rest to advance the time!",[a.ixp+1,a.ixm+1]);return d}function V(b){function a(a){a=q('<part-group number="%d" type="%s"></part-group>',
[a,"stop"]);a=$.parseXML(a).firstChild;return $(a)}var c,d,f,e,g,h,l;c=[];d=[];h=b.children();for(g=0;g<h.length;g++)b=$(h[g]),"part-group"==b[0].nodeName?(f=b.attr("number"),e=b.attr("type"),l=d.indexOf(f),"start"==e?-1<l?(c.push(a(f)),c.push(b)):(c.push(b),d.push(f)):-1<l&&(d.splice(l,1),c.push(b))):c.push(b);for(g=d.length-1;0<=g;--g)f=d[g],c.push(a(f));return c}function F(b,a,c){var d,f,e,g;if(0==b.length)return[[],[]];d=b.shift();if("part-group"==d[0].nodeName){f=d.attr("number");e=d.attr("type");
if("start"==e){e=[];for(g in{"group-symbol":0,"group-barline":0,"group-name":0,"group-abbreviation":0})e.push(d.find(g).text()||"");a[f]=e;c.push(f);g=F(b,a,c);b=g[0];d=g[1];g=F(d,a,c);a=g[0];c=g[1];return[[b].concat(a),c]}c=c.pop();b.length&&"stop"==b[0].attr("type")&&f!=c&&(g=a[c],a[c]=a[f],a[f]=g);a=a[f];return[[a],b]}g=F(b,a,c);a=g[0];b=g[1];return[[["name_tuple",d.find("part-name").text()||"",d.find("part-abbreviation").text()||""]].concat(a),b]}function M(b){var a,c,d,f;if(0==b.length)return[];
a=[];for(d=0;d<b.length;++d){c=b[d];if(1==c.length)a.push(""+c[0]);else{a.push("(");for(f=0;f<c.length;++f)a.push(""+c[f]);a.push(")")}a.push("|")}a.splice(-1,1);1<b.length&&(a=["{"].concat(a).concat(["}"]));return a}function N(b,a,c,d,f,e){if("name_tuple"==b[0])d=d.shift(),a[0]&&(b[1]=a[0]+":"+b[1],b[2]=a[1]+":"+b[2]),f.push(b),e.push.apply(e,M(d));else if(2==b.length)d=d.shift(),c=["name_tuple","",""],c[1]=b[0][1]+":"+b[1][2],c[2]=b[0][2]+":"+b[1][3],f.push(c),e.push.apply(e,M(d));else{var g,h,
l;l=b[b.length-1];a=l[0];g=l[1];h=l[2];l=l[3];g="yes"==g||c;e.push("brace"==a?"{":"[");for(c=0;c<b.length-1;++c)N(b[c],[h,l],g,d,f,e),g&&e.push("|");g&&e.splice(-1,1);e.push("brace"==a?"}":"]")}}function W(b){for(var a="",c=b.children(),d=0;d<c.length;++d){var f=c[d];switch(f.nodeName){case "elision":a+="~";break;case "text":a+=$(f).text().replace(/_/g,"\\_").replace(/-/g,"\\-").replace(/ /g,"~")}}if(!a)return a;c=b.find("syllabic").text();if("begin"==c||"middle"==c)a+="-";b.find("extend").length&&
(a+="_");return a}function u(b){this.slurBuf={};this.dirStk={};this.ingrace=0;this.msc=new w(b);this.unfold=b.u;this.ctf=b.c;this.gStfMap=[];this.midiMap=[];this.drumInst={};this.drumNotes={};this.instMid=[];this.midDflt=[-1,-1,-1,-91];this.msralts={};this.curalts={};this.stfMap={};this.clefMap={};this.curClef={};this.clefOct={};this.curStf={};this.nolbrk=b.x;this.doPageFmt=1==b.p.length;this.tstep=b.t;this.dirtov1=b.v1;this.ped=!b.noped;this.pedVce=null}var X=Math.pow(2,53),O={"ornaments>trill-mark":"T",
"ornaments>mordent":"M","ornaments>inverted-mordent":"P","ornaments>turn":"!turn!","ornaments>inverted-turn":"!invertedturn!","ornaments>tremolo":"!///!","technical>up-bow":"u","technical>down-bow":"v","technical>harmonic":"!open!","technical>open-string":"!open!","technical>stopped":"!plus!","articulations>accent":"!>!","articulations>strong-accent":"!>!","articulations>staccato":".","articulations>staccatissimo":"!wedge!",fermata:"!fermata!",arpeggiate:"!arpeggio!","articulations>tenuto":"!tenuto!",
"articulations>spiccato":"!wedge!","articulations>breath-mark":"!breath!","articulations>detached-legato":"!tenuto!."},P={p:"!p!",pp:"!pp!",ppp:"!ppp!",f:"!f!",ff:"!ff!",fff:"!fff!",mp:"!mp!",mf:"!mf!",sfz:"!sfz!"},t;I.prototype.reset=function(){this.lline=this.attr="";this.rline="|";this.lnum=""};D.prototype.inc=function(b,a){this.counters[b][a]=(this.counters[b][a]||0)+1};D.prototype.clear=function(b){b=Object.keys(b);var a=n(b.length,0);this.counters={note:r(b,a),nopr:r(b,a),nopt:r(b,a)}};D.prototype.getv=
function(b,a){return this.counters[b][a]};D.prototype.prcnt=function(b){for(var a in this.counters.note)0!=this.getv("nopr",a)&&p("part %d, voice %d has %d skipped non printable notes",[b,a,this.getv("nopr",a)]),0!=this.getv("nopt",a)&&p("part %d, voice %d has %d notes without pitch",[b,a,this.getv("nopt",a)]),0==this.getv("note",a)&&p("part %d, skipped empty voice %d",[b,a])};w.prototype.initVoices=function(b){this.vtimes={};this.voices={};this.lyrics={};for(var a in this.vnums)this.vtimes[a]=0,
this.voices[a]=[],this.lyrics[a]=[];b&&this.cnt.clear(this.vnums)};w.prototype.incTime=function(b){this.tijd+=b;this.tijd>this.maxtime&&(this.maxtime=this.tijd)};w.prototype.appendElemCv=function(b,a){for(var c in b)this.appendElem(c,a)};w.prototype.insertElem=function(b,a){var c=new B(a);c.tijd=0;this.voices[b].unshift(c)};w.prototype.appendObj=function(b,a,c){a.tijd=this.tijd;this.voices[b].push(a);this.incTime(c);this.tijd>this.vtimes[b]&&(this.vtimes[b]=this.tijd)};w.prototype.appendElemT=function(b,
a,c){a=new B(a);a.tijd=c;this.voices[b].push(a)};w.prototype.appendElem=function(b,a,c){this.appendObj(b,new B(a),0);c&&this.cnt.inc("note",b)};w.prototype.appendNote=function(b,a,c){a.ns.push(c);this.appendObj(b,a,parseInt(a.dur));"z"!=c&&"x"!=c&&(this.lastnote=a,this.cnt.inc("note",b),a.grace||this.lyrics[b].push(a.lyrs))};w.prototype.getLastRec=function(b){return this.gMaten.length?(b=this.gMaten[this.gMaten.length-1][b],b[b.length-1]):null};w.prototype.getLastMelis=function(b,a){if(this.gLyrics.length){var c=
this.gLyrics[this.gLyrics.length-1][b];if(a in c)return c[a][1]}return 0};w.prototype.addChord=function(b){this.lastnote.ns.push(b)};w.prototype.addBar=function(b,a){a.mdur&&this.maxtime>a.mdur&&p("measure %d in part %d longer than metre",[a.ixm+1,a.ixp+1]);this.tijd=this.maxtime;for(var c in this.vnums){if(a.lline||a.lnum){var d=this.getLastRec(c);if(d){var f=d.str;a.lline&&(f=(f+a.lline).replace(/:\|:/g,"::").replace(/\|\|/g,"|"));3==this.nvlt?a.ixp+parseInt(c)==Math.min.apply(null,z(this.vnums))&&
(f+=a.lnum):4==this.nvlt?parseInt(c)==Math.min.apply(null,z(this.vnums))&&(f+=a.lnum):a.lnum&&(f+=a.lnum,this.repbra=1);d.str=f}else a.lline&&this.insertElem(c,"|:")}b&&(d=this.getLastRec(c))&&(d.str+=b);a.attr&&this.insertElem(c,""+a.attr);this.appendElem(c," "+a.rline);this.voices[c]=U(this.voices[c],a);for(var d=this.lyrics[c],f={},e=d.reduce(function(a,b){return a.concat(z(b))},[]),g=Math.max.apply(null,e.concat([0]));0<g;--g){var e=d.map(function(a){return a[g]||""}),h=this.getLastMelis(c,g);
f[g]=Q(e,h)}this.lyrics[c]=f;S(this.voices[c])}this.gMaten.push(this.voices);this.gLyrics.push(this.lyrics);this.tijd=this.maxtime=0;this.initVoices()};w.prototype.outVoices=function(b,a){var c,d,f,e,g,h,l,k,m;g={};l=Math.min.apply(null,z(this.vnums));for(k in this.vnums)if(0!=this.cnt.getv("note",k)){if(t.denL)h=t.denL;else{var x,p;h=k;m=this.gMaten;e=b;c=0;d=X;for(var q=[4,8,16];q.length;){var y=q.shift(),r=0;for(p=0;p<m.length;++p){var C=m[p][h];for(x=0;x<C.length;++x){var u=C[x];u instanceof B||
0==u.dur||(r+=J(u,e,y).length)}}r<d&&(c=y,d=r)}h=c}t.cmpL.push(h);x=[];p={};for(m=0;m<this.gMaten.length;++m){e=this.gMaten[m][k];x.push(T(e,b,m,a,h));e=void 0;q=this.gLyrics;if(0!=m)for(e in c=this.gMaten[m][k],d=q[m][k],q=q[m-1][k],q)if(y=q[e][1],!(e in d)&&y){y=c;r=[];for(C=0;C<y.length;++C)if(u=y[C],u instanceof A&&!u.grace){if("z"==u.ns[0]||"x"==u.ns[0])break;r.push("_")}(y=r.join(" "))&&(d[e]=[y,0])}c=this.gLyrics[m][k];for(f in c)if(e=c[f],e=e[0],f in p){for(;p[f].length<m;)p[f].push("");p[f].push(e)}else p[f]=
n(m,"").concat([e])}for(f in p)e=p[f],h=x.length-e.length,p[f]=e.concat(n(h,""));t.add("V:"+this.vceCnt);this.repbra&&(1==this.nvlt&&1<this.vceCnt&&t.add("I:repbra 0"),2==this.nvlt&&parseInt(k)>l&&t.add("I:repbra 0"));0<this.cpl?this.bpl=0:0==this.bpl&&(this.cpl=100);for(h=0;x.length;){m=1;for(e=x[0];m<x.length&&!(0<this.cpl&&e.length+x[m].length>=this.cpl)&&!(0<this.bpl&&m>=this.bpl);)e+=x[m],m+=1;h+=m;t.add(e+" %"+h);x.splice(0,m);c=H(p,1);for(d=0;d<c.length;++d)e=c[d],f=e[0],e=e[1],t.add("w: "+
e.slice(0,m).join("|")+"|"),e.splice(0,m)}g[k]=this.vceCnt;this.vceCnt+=1}this.gMaten=[];this.gLyrics=[];this.cnt.prcnt(a+1);return g};E.prototype.add=function(b){this.outlist.push(b+"\n")};E.prototype.info=function(b,a){this.infolist.push(("undefined"==typeof a||a?"-- ":"")+b)};E.prototype.mkHeader=function(b,a,c){var d=[],f=[],e,g,h,l,k,m;l=b.slice();for(m=0;m<a.length;++m){e=a[m];try{N(e,["",""],"",b,d,f)}catch(x){p("lousy musicxml: error in part-list",[])}}a=f.join(" ");b={};for(m=0;m<l.length;++m)g=
l[m],e=d[m],h=e[1],e=e[2],0!=g.length&&(g=g[0][0],h=h.replace(/\n/g,"\\n").replace(/\.:/g,".").replace(/^:|:$/g,""),e=e.replace(/\n/g,"\\n").replace(/\.:/g,".").replace(/^:|:$/g,""),b[g]=(h?'nm="'+h+'"':"")+(e?' snm="'+e+'"':""));d=[q("X:%d\n%s\n",[this.X,this.title])];""!==this.scale&&d.push("%%scale "+this.scale+"\n");""!==this.pagewidth&&d.push("%%pagewidth "+this.pagewidth+"cm\n");""!==this.leftmargin&&d.push("%%leftmargin "+this.leftmargin+"cm\n");""!==this.rightmargin&&d.push("%%rightmargin "+
this.rightmargin+"cm\n");a&&1<f.length&&d.push("%%score "+a+"\n");l=this.tempo?"Q:1/4="+this.tempo+"\n":"";f=[];for(m=0;m<this.cmpL.length;++m)e=this.cmpL[m],f[e]=(f[e]||0)+1;f=H(f);f=f[f.length-1][0];f=this.denL?this.denL:f;d.push(q("L:1/%d\n%sM:%s\n",[f,l,this.mtr]));d.push(q("I:linebreak $\nK:%s\n",[this.key]));for(k in this.clefs){e=c[k-1];m=e[0];a=e[1];h=e[1];g=e[3];l=e.slice(4);e=this.clefs[k];l.length&&0>e.indexOf("perc")&&(e=(e+" map=perc").trim());d.push(q("V:%d %s %s\n",[k,e,b[k]||""]));
1<this.volpan?(0<m&&m!=k&&d.push("%%MIDI channel "+m+"\n"),0<a&&d.push("%%MIDI program "+(a-1)+"\n"),0<=h&&d.push("%%MIDI control 7 "+h+"\n"),0<=g&&d.push("%%MIDI control 10 "+g+"\n")):0<this.volpan&&(l.length&&0<m&&d.push("%%MIDI channel "+m+"\n"),0<a&&d.push("%%MIDI program "+(a-1)+"\n"));for(m=0;m<l.length;++m)if(e=l[m].nt,h=l[m].step,a=l[m].midi,(g=l[m].nhd)||(g="normal"),K(e)!=a||e!=h)0<this.volpan&&d.push("%%MIDI drummap "+e+" "+a+"\n"),d.push("I:percmap "+e+" "+h+" "+a+" "+g+"\n");f!=this.cmpL[k-
1]&&d.push("L:1/"+this.cmpL[k-1]+"\n")}this.outlist=d.concat(this.outlist)};u.prototype.matchSlur=function(b,a,c,d,f,e){if(-1!=["start","stop"].indexOf(b))if(a||(a="1"),a in this.slurBuf){var g=this.slurBuf[a],h=g[0],l=g[1],k=g[2],g=g[3];b!=h?(c!=l||"start"!=h||g&&e||(k.before="("+k.before,d.after+=")"),delete this.slurBuf[a]):(p("double slur numbers %s-%s in part %d, measure %d, voice %d note %s, first discarded",[b,a,this.msr.ixp+1,this.msr.ixm+1,c,d.ns]),this.slurBuf[a]=[b,c,d,f])}else this.slurBuf[a]=
[b,c,d,f]};u.prototype.doNotations=function(b,a){for(var c=Object.keys(O).sort(),d=0;d<c.length;++d){var f=c[d],e=O[f];a.find(f).length&&(b.before+=e)}a.find("technical>fingering").each(function(){b.before+="!"+$(this).text()+"!"});c=a.find("ornaments>wavy-line");if(c.length)switch(c.attr("type")){case "start":b.before="!trill(!"+b.before;break;case "stop":b.after+="!trill)!"}};u.prototype.ntAbc=function(b,a,c,d){var f={"double-flat":-2,"flat-flat":-2,flat:-1,natural:0,sharp:1,"sharp-sharp":2,"double-sharp":2};
a+=this.clefOct[this.curStf[d]]||0;var e=b;4<a&&(e=b.toLowerCase());5<a&&(e+=Array(a-5+1).join("'"));4>a&&(e+=Array(4-a+1).join(","));a=c.find("accidental").text();var g=c.find("pitch>alter").text();!g&&this.msralts[b]&&(g=0);var h=e+"#"+d;!g&&h in this.curalts&&(g=0);if(""===a&&""===g)return e;if(""!=a)g=f[a];else{g=parseInt(g);if(h in this.curalts){if(g==this.curalts[h])return e}else if(g==(this.msralts[b]||0))return e;if(c.find("tie").add(c.find("notations>tied")).get().some(function(a){return"stop"==
a.getAttribute("type")}))return e;p("accidental %d added in part %d, measure %d, voice %d note %s",[g,this.msr.ixp+1,this.msr.ixm+1,d+1,e])}this.curalts[h]=g;return e=["__","_","=","^","^^"][g+2]+e};u.prototype.doNote=function(b){var a=new A(0,null),c=parseInt(b.find("voice").text()||"1");this.isSib&&(c+=100*(b.find("staff").text()||1));var d=0<b.find("chord").length,f=b.find("pitch>step").text()||b.find("unpitched>display-step").text(),e=b.find("pitch>octave").text()||b.find("unpitched>display-octave").text(),
g=0<b.find("rest").length,h=b.find("time-modification>actual-notes").text();if(h){var l=b.find("time-modification>normal-notes").text();a.fact=[parseInt(h),parseInt(l)]}a.tup=b.find("notations>tuplet").map(function(){return $(this).attr("type")}).get();l=b.find("duration").text();h=b.find("grace");a.grace=0<h.length;a.before="";a.after="";a.grace&&!this.ingrace&&(this.ingrace=1,a.before="{","yes"==h.attr("slash")&&(a.before+="/"));if(h=!a.grace&&this.ingrace)this.ingrace=0,this.msc.lastnote.after+=
"}";if(!l||a.grace)l=0;if(g||"no"!=b.attr("print-object")){a.dur=parseInt(l);g||f&&e||(this.msc.cnt.inc("nopt",c),e=5,f="E");l=b.find("notations");l.length&&this.doNotations(a,l);g=g?"no"==b.attr("print-object")?"x":"z":this.ntAbc(f,parseInt(e),b,c);if(b.find("unpitched").length){var l=this.curClef[this.curStf[c]],f=R(f,parseInt(e),l,this.tstep),e=b.find("instrument"),e=e.length?e.attr("id"):"dummyId",e=this.drumInst[e]||K(g),l=b.find("notehead"),k=l.text().replace(" ","-");"yes"==l.attr("filled")&&
(k+="+");"x"==k&&(g="^"+g.replace(/\^/g,"").replace(/_/g,""));if("circle-x"==k||"diamond"==k)g="_"+g.replace(/\^/g,"").replace(/_/g,"");this.drumNotes[c+";"+g]=[f,e,k]}f=b.find("tie").add(b.find("notations>tied")).get();f.some(function(a){return"start"==a.getAttribute("type")})&&(g+="-");f=b.find("beam").map(function(){return $(this).text()}).get();a.beam=-1<f.indexOf("continue")||-1<f.indexOf("end")||a.grace;f=b.find("lyric");for(e=l=0;e<f.length;++e){var k=$(f[e]),m=parseInt((k.attr("number")||
"1").replace(/^.*verse/,""));0==m?m=l+1:l=m;a.lyrs[m]=W(k)}d?this.msc.addChord(g):(d=parseInt(b.find("staff").text()||"1"),this.curStf[c]!=d&&(f=d-this.curStf[c],this.curStf[c]=d,this.msc.appendElem(c,"[I:staff "+(0<f?"+":"")+f+"]")),this.msc.appendNote(c,a,g));f=b.find("notations>slur");for(e=0;e<f.length;++e)b=$(f[e]),this.matchSlur(b.attr("type"),b.attr("number"),c,this.msc.lastnote,a.grace,h)}else d||this.msc.incTime(parseInt(l)),this.msc.cnt.inc("nopr",c)};u.prototype.doAttr=function(b){var a,
c,d,f,e,g,h,l,k,m,p,q;a={C1:"alto1",C2:"alto2",C3:"alto",C4:"tenor",F4:"bass",F3:"bass3",G2:"treble",TAB:"",percussion:"perc"};if(c=b.find("divisions").text())this.msr.divs=parseInt(c);c=parseInt(b.find("transpose>chromatic").text()||"0");d=b.find("key>fifths").first().text();f=0==this.msc.tijd&&0==this.msr.ixm;d&&(e=parseInt(d),g=b.find("key>mode").first().text()||"major",k="FCGDAEB".split(""),l="Cb Gb Db Ab Eb Bb F C G D A E B F# C#".split(" "),h="Ab Eb Bb F C G D A E B F# C# G# D# A#".split(" "),
d="","major"==g&&(d=l[7+e]),"minor"==g&&(d=h[7+e]+"min"),e=0<=e?r(k.slice(0,e),n(e,1)):r(k.slice(e),n(-e,-1)),e=[d,e],d=e[0],this.msralts=e[1],f&&!c&&"none"==t.key?t.key=d:d==t.key&&f||(this.msr.attr+="[K:"+d+"]"));if(d=b.find("time>beats").text())e=b.find("time>beat-type").text(),g=d+"/"+e,f?t.mtr=g:this.msr.attr+="[M:"+g+"]",this.msr.mdur=this.msr.divs*parseInt(d)*4/parseInt(e);(d=b.find("transpose>octave-change").text()||"")&&(c+=12*parseInt(d));g=b.find("clef");for(e=0;e<g.length;e++)if(h=$(g[e]),
d=parseInt(h.attr("number")||"1"),l=h.find("sign").text(),k="percussion"!=l?h.find("line").text()||"":"",k=a[l+k]||"",l=h.find("clef-octave-change").text()||"0",k+={"-2":"-15","-1":"-8",1:"+8",2:"+15"}[l]||"",this.clefOct[d]=-parseInt(l),c&&(k+=" transpose="+c),(l=b.find("staff-details>staff-lines").text())&&(k+=" stafflines="+l),this.curClef[d]=k,f)this.clefMap[d]=k;else for(h=this.stfMap[d],q=0;q<h.length;++q)m=h[q],d!=this.curStf[m]&&(p=d-this.curStf[m],this.curStf[m]=d,l=0<p?"+":"",this.msc.appendElem(m,
"[I:staff "+l+p+"]")),this.msc.appendElem(m,"[K:"+k+"]")};u.prototype.findVoice=function(b,a){var c,d,f,e;f=a.eq(b);c=parseInt(f.find("staff").text()||"1");d=this.stfMap[c][0];if(this.dirtov1)return{sn:c,v:d,v1:d};for(e=b;e<a.length;++e){f=a.eq(e);if("note"==f.prop("nodeName"))return c=parseInt(f.find("staff").text()||"1"),f=parseInt(f.find("voice").text()||"1"),this.isSib&&(f+=100*c),{sn:c,v:f,v1:d};if("backup"==f.prop("nodeName"))break}return{sn:c,v:d,v1:d}};u.prototype.doDirection=function(b,a,
c){function d(a,b,c,d,e){b&&(c=0<=b.indexOf("!8v")?a.stfMap[e]:[c],c.forEach(function(c){null!=d?a.msc.appendElemT(c,b.replace("(",")").replace("ped","ped-up"),d):a.msc.appendElem(c,b)}))}function f(a,b,c,e){var f,h,k;typmap={down:"!8va(!",up:"!8vb(!",crescendo:"!<(!",diminuendo:"!>(!",start:"!ped!"};l=g.attr("type")||"";f=b+(g.attr("number")||"1");if(l in typmap)k=typmap[l],f in a.dirStk?(h=a.dirStk[f],delete a.dirStk[f],"stop"==h.type?d(a,k,c,h.tijd,e):(p("%s direction %s has no stop in part %d, measure %d, voice %d",
[b,h.type,a.msr.ixp+1,a.msr.ixm+1,c+1]),a.dirStk[f]={type:l,vs:c})):a.dirStk[f]={type:l,vs:c};else if("stop"==l)f in a.dirStk?(h=a.dirStk[f],delete a.dirStk[f],l=h.type,c=h.vs,"stop"==l?(p("%s direction %s has double stop in part %d, measure %d, voice %d",[b,l,a.msr.ixp+1,a.msr.ixm+1,c+1]),k=""):k=typmap[h.type].replace("(",")").replace("ped","ped-up")):(a.dirStk[f]={type:"stop",tijd:a.msc.tijd},k="");else throw"wrong direction type";d(a,k,c,null,e)}var e,g,h,l,k,m,n,q,r;e=b.attr("placement");k=this.findVoice(a,
c);c=k.sn;a=k.v;k=k.v1;g=b.find("sound");if(g.length){if(n=g.find("midi-instrument")){q=g.find("midi-instrument>midi-program").text();r=g.find("midi-instrument>midi-channel").text();for(h in this.vceInst)this.vceInst[h]==n.attr("id")&&(a=h);(h=(q?q-1:r)+"")&&0<t.volpan&&this.msc.appendElem(a,"[I:MIDI= "+(q?"program":"channel")+" "+h+"]")}if(h=g.attr("tempo"))h=-1<h.indexOf(".")?parseFloat(h).toFixed(2):parseInt(h),0==this.msc.tijd&&0==this.msr.ixm?t.tempo=h:this.msc.appendElem(k,"[Q:1/4="+h+"]")}b=
b.children("direction-type");if(b.length){g=b.find("wedge");g.length&&f(this,"wedge",a);h=b.find("words").eq(0);0==h.length&&(h=b.find("rehearsal").eq(0));h.length&&(e="below"==e?"_":"^",0>parseFloat(h.attr("default-y")||"0")&&(e="_"),(h=h.text().replace(/"/g,'\\"').replace(/\n/g," ").trim())&&this.msc.appendElem(a,'"'+e+h+'"',1));for(m in P)e=P[m],b.find("dynamics>"+m).length&&this.msc.appendElem(a,e,1);b.find("coda").length&&this.msc.appendElem(a,"O",1);b.find("segno").length&&this.msc.appendElem(a,
"S",1);g=b.find("octave-shift");g.length&&f(this,"octave-shift",a,c);g=b.find("pedal");g.length&&this.ped&&(this.pedVce||(this.pedVce=a),f(this,"pedal",this.pedVce))}};u.prototype.doHarmony=function(b,a,c){var d,f,e,g,h,l,k;c=this.findVoice(a,c).v;d={major:"",minor:"m",augmented:"+",diminished:"dim",dominant:"7","half-diminished":"m7b5"};a={major:"maj",dominant:"",minor:"m",diminished:"dim",augmented:"+",suspended:"sus"};f={second:"2",fourth:"4",seventh:"7",sixth:"6",ninth:"9","11th":"11","13th":"13"};
e={1:"#",0:"","-1":"b"};g=b.find("root>root-step","").text();h=e[b.find("root>root-alter").text()]||"";l="";k=b.find("kind").text();k in d?k=d[k]:-1<k.indexOf("-")?(d=k.split("-"),k=d[0],d=d[1],k=(a[k]||"")+(f[d]||""),0==k.indexOf("sus")&&(l=k,k="")):"none"==k&&(k=b.find("kind").attr("text"));f=b.find("degree");for(a=0;a<f.length;++a)d=$(f[a]),k+=(e[d.find("degree-alter").text()]||"")+d.find("degree-value").text();k=k.replace("79","9").replace("713","13").replace("maj6","6");b=b.find("bass>bass-step").text()+
(e[b.find("bass>bass-alter").text()]||"");this.msc.appendElem(c,'"'+g+h+k+l+(b&&"/"+b)+'"',1)};u.prototype.doBarline=function(b){var a=b.find("repeat"),c=0;a.length&&(c=a.attr("direction"));if(this.unfold)return c?"forward"==c?1:2:0;"right"==b.attr("location")&&(a=b.find("bar-style").text(),"light-light"==a?this.msr.rline="||":"light-heavy"==a&&(this.msr.rline="|]"));c&&("forward"==c?this.msr.lline=":":this.msr.rline=":|");b=b.find("ending");b.length&&("start"==b.attr("type")?(b=(b.attr("number")||
"1").replace(/\./g,"").replace(/ /g,""),/^[\d,]+$/.test(b)||(b='"'+b.trim()+'"'),this.msr.lnum=b):"|"==this.msr.rline&&(this.msr.rline="||"));return 0};u.prototype.doPrint=function(b){if("yes"==b.attr("new-system")||"yes"==b.attr("new-page"))return this.nolbrk?"":"$"};u.prototype.doPartList=function(b){var a,c,d,f,e,g,h,l,k,m;f=b.find("part-list>score-part");for(a=0;a<f.length;++a){c=f[a];e={};g=$(c).find("midi-instrument");for(c=0;c<g.length;++c){h=$(g[c]);k=["midi-channel","midi-program","volume",
"pan"];l=[];for(d=0;d<k.length;++d)m=k[d],l.push(h.find(m).text()||this.midDflt[d]);d=l[3];-90<=d&&90>=d&&(d=(d+90)/180*127);e[h.attr("id")]=[parseInt(l[0]),parseInt(l[1]),parseFloat(l[2]),d];(l=h.find("midi-unpitched").text())&&(this.drumInst[h.attr("id")]=l-1)}this.instMid.push(e)}b=b.find("part-list");l=V(b);return F(l,{},[])[0]};u.prototype.mkTitle=function(b){var a,c,d=[],f=[],e=[],g,h,l,k,m;a=b.find("work>work-title").text().trim();c=b.find("movement-title").text().trim();g=b.find("identification>creator");
for(h=0;h<g.length;++h)l=$(g[h]),k=l.text(),l=l.attr("type"),k&&(k=k.split("\n").map(function(a){return a.trim()}),"composer"==l?d.push.apply(d,k):"lyricist"!=l&&"transcriber"!=l||f.push.apply(f,k));g=b.find("identification>rights");for(h=0;h<g.length;++h)k=$(g[h]).text(),k=k.split("\n").map(function(a){return a.trim()}),f.push.apply(f,k);g=b.find("credit");for(h=0;h<g.length;++h){k="";l=$(g[h]).find("credit-words");for(m=0;m<l.length;++m)k+=$(l[m]).text();e.push(k.replace(/\s*[\r\n]\s*/g," "))}e=
function(b){function g(a){return a&&-1<k.indexOf(a)}var h=[],k,l;for(l=0;l<e.length;++l)k=e[l],6>b&&(k&&-1<a.indexOf(k)||k&&-1<c.indexOf(k))||5>b&&(k&&-1<d.indexOf(k)||k&&-1<f.indexOf(k))||4>b&&(a&&-1<k.indexOf(a)||c&&-1<k.indexOf(c))||3>b&&(d.some(g)||f.some(g))||2>b&&/^[\d\W]*$/.test(k)||h.push(k);0==b&&a+c&&(h="");return h}(this.ctf);a&&(a="T:"+a.replace(/\n/g,"\nT:")+"\n");c&&(a+="T:"+c.replace(/\n/g,"\nT:")+"\n");e.length&&(a+=e.map(function(a){return"T:"+a}).join("\n")+"\n");d.length&&(a+=d.map(function(a){return"C:"+
a}).join("\n")+"\n");f.length&&(a+=f.map(function(a){return"Z:"+a}).join("\n")+"\n");a&&(t.title=a.substr(0,a.length-1));(this.isSib=0<=b.find("identification>encoding>software").text().indexOf("Sibelius"))&&p("Sibelius MusicXMl is unreliable",[])};u.prototype.doDefaults=function(b){var a,c,d,f;this.doPageFmt&&(a=b.find("defaults"),a.length&&(b=a.find("scaling>millimeters").text(),c=a.find("scaling>tenths").text(),c=b/c/10,b=a.find("page-layout>page-width").text()*c,d=a.find("page-layout>page-margins").first(),
a=d.find("left-margin").text(),d=d.find("right-margin").text(),f=10*c/.2117,!t.scale&&f&&(t.scale=f.toFixed(2)),!t.pagewidth&&b&&(t.pagewidth=b.toFixed(2)),t.leftmargin||""==a||(t.leftmargin=(a*c).toFixed(2)),t.rightmargin||""==d||(t.rightmargin=(d*c).toFixed(2))))};u.prototype.locStaffMap=function(b,a){var c={};this.vceInst={};this.msc.vnums={};for(var d=b.find("measure>note"),f=0;f<d.length;f++){var e=$(d[f]),g=parseInt(e.find("voice").text()||"1");this.isSib&&(g+=100*(e.find("staff").text()||1));
this.msc.vnums[g]=1;var h=parseInt(e.find("staff").text()||"1");if(g in c){var l=c[g];l[h]=(l[h]||0)+1}else{var k={};k[h]=1;c[g]=k}k=e.find("instrument");k.length&&(this.vceInst[g]=$(k).attr("id"))}this.stfMap={};this.clefMap={};for(g in c){d=[];f=c[g];for(h in f)d.push([f[h],h]);d.sort(function(a,b){return b[0]-a[0]});d=d[0][1];this.stfMap[d]=(this.stfMap[d]||[]).concat([g]);this.curStf[g]=d}k=function(b){for(var c=0;c<a.length;++c)for(var d=a.eq(c).children(),e=0;e<d.length;e++){var f=d.eq(e).find("direction-type>octave-shift");
if(f.length&&"stop"!=f.attr("type"))return b.findVoice(e,d)}return{sn:null,v:null,v1:null}}(this);k.v&&(this.stfMap[k.sn]=[k.v].concat(this.stfMap[k.sn].filter(function(a){return a!=k.v})))};u.prototype.addStaffMap=function(b){var a,c,d,f,e,g,h=[],l=Object.keys(this.stfMap).sort();for(c=0;c<l.length;++c){e=l[c];f=this.stfMap[e];g=[];for(a=0;a<f.length;++a)d=f[a],d in b&&g.push(b[d]);if(g.length)for(h.push(g),f=(e in this.clefMap)?this.clefMap[e]:"treble",a=0;a<g.length;++a)d=g[a],t.clefs[d]=f}this.gStfMap.push(h)};
u.prototype.addMidiMap=function(b,a){var c=this.instMid[b],d,f=Object.keys(c);d=f.length?c[f[0]]:this.midDflt;var e=[],g,h,l,k=this;for(g in a)f=Object.keys(this.drumNotes).sort().filter(function(a){return a.split(";")[0]==g}),l=f.map(function(a){return{nt:a.split(";")[1],step:k.drumNotes[a][0],midi:k.drumNotes[a][1],nhd:k.drumNotes[a][2]}}),f=a[g],h=this.vceInst[g]||"",h in c?e.push([f,c[h].concat(l)]):e.push([f,d.concat(l)]);e.sort(function(a,b){return a[0]-b[0]});for(c=0;c<e.length;++c)f=e[c][0],
d=e[c][1],this.midiMap.push(d)};u.prototype.parse=function(b){var a=$(b);this.mkTitle(a);this.doDefaults(a);partlist=this.doPartList(a);b=a.find("part");for(var c=0;c<b.length;++c){var a=b.eq(c),d=a.find("measure");this.locStaffMap(a,d);this.drumNotes={};this.clefOct={};this.msc.initVoices(1);var f=0,e=0;for(this.msr=new I(c);this.msr.ixm<d.length;){var g=d.eq(this.msr.ixm),h=0,l="";this.msr.reset();this.curalts={};for(var k=g.children(),m=0;m<k.length;m++)switch(a=k.eq(m),a[0].nodeName){case "note":this.doNote(a);
break;case "attributes":this.doAttr(a);break;case "direction":this.doDirection(a,m,k);break;case "sound":this.doDirection(g,m,k);break;case "harmony":this.doHarmony(a,m,k);break;case "barline":h=this.doBarline(a);break;case "backup":a=parseInt(a.find("duration").text());this.msc.incTime(-a);break;case "forward":a=parseInt(a.find("duration").text());this.msc.incTime(a);break;case "print":l=this.doPrint(a)}this.msc.addBar(l,this.msr);1==h?(e=this.msr.ixm,this.msr.ixm+=1):2==h?1>f?(this.msr.ixm=e,f+=
1):(f=0,this.msr.ixm+=1):this.msr.ixm+=1}d=this.msc.outVoices(this.msr.divs,c);this.addStaffMap(d);this.addMidiMap(c,d)}Object.keys(d).length?t.mkHeader(this.gStfMap,partlist,this.midiMap):p("nothing written, %s has no notes ...",[t.fnmext])};vertaal=function(b,a){var c={u:0,b:0,n:0,c:0,v:0,d:0,m:0,x:0,t:0,v1:0,noped:0,p:"f"},d;for(d in a)c[d]=a[d];c.p=c.p?c.p.split(","):[];t=new E(".abc","",0,c);c=new u(c);try{c.parse(b)}catch(f){p("** exception occurred: %s",[f])}return[t.outlist.join(""),t.infolist.join("\n")]}})();
