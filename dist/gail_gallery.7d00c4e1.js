parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"m5fX":[function(require,module,exports) {
console.log("Hola from gail");var e="https://gateway.marvel.com:443/v1/public/creators/519/comics?ts=1&apikey=".concat("7e9ea0fa0845e4b10a585fcfb8e26916","&hash=").concat("1b2a3ef1a10f270c584ae16338b2987b"),t=document.querySelector("#gail-comics");fetch(e).then(function(e){return e.json()}).then(function(e){e.data.results.map(function(e){var a=document.createElement("div"),c=document.createElement("img");c.src="".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),t.appendChild(a),a.appendChild(c);var n=document.createElement("a");n.href="".concat(e.urls[0].url);var o=document.createElement("h3");o.textContent="".concat(e.title),t.appendChild(a),a.appendChild(n),n.appendChild(o)})});
},{}]},{},["m5fX"], null)
//# sourceMappingURL=/gail_gallery.7d00c4e1.js.map