(window.webpackJsonpmyfirstsoloapp=window.webpackJsonpmyfirstsoloapp||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(62),c=n(72),u=n(63),l=n(2),i=n(9),m=n.n(i),s=a.a.createContext(),f=n(24),p=n(3),d=n(134),g=n(135),b=n(136),v=n(137),h=n(138),E=n(139),y=n(140),x=n(141),O=n(142),j=n(143);function w(){var e=Object(l.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-evenly;\n"]);return w=function(){return e},e}var k=p.a.div(w());var P=function(e){var t=e.url;return a.a.createElement(k,null,a.a.createElement(d.a,{url:t},a.a.createElement(g.a,null)),a.a.createElement(b.a,{url:t},a.a.createElement(v.a,null)),a.a.createElement(h.a,{url:t},a.a.createElement(E.a,null)),a.a.createElement(y.a,{url:t},a.a.createElement(x.a,null)),a.a.createElement(O.a,{url:t},a.a.createElement(j.a,null)))};function C(){var e=Object(l.a)(["\nbackground: rgba(131, 126, 127, 0.5);\nborder: 1px solid black;\nfont-family: georgia;\n"]);return C=function(){return e},e}var A=p.a.span(C());var M=function(e){var t=e.url;return a.a.createElement(A,{url:t},t||"Your shareable meme URL will appear here!")};function D(){var e=Object(l.a)(["\n    max-width: 300px;\n    font-family: georgia;\n    max-height: 20px;\n"]);return D=function(){return e},e}var I=p.a.select(D());function S(e,t){return a.a.createElement("option",{value:t,key:t},e.name)}var U=function(){var e=a.a.useContext(s),t=e.dispatch,n=e.memesMap;return a.a.createElement(I,{onChange:function(e){t({memeUrl:"",textArray:[],memeId:e.target.value,inputs:m.a.fill(Array(n[e.target.value].box_count),"")})}},a.a.createElement("option",null,"*Pick A Meme*"),m.a.map(n,S))};function _(){var e=Object(l.a)(["\n    display: block;\n    margin: 0.5em;\n"]);return _=function(){return e},e}var T=p.a.label(_());var R=function(e){var t=e.index,n=a.a.useContext(s),r=n.dispatch,o=n.inputs,c=a.a.useCallback(function(e){r({inputs:[].concat(Object(f.a)(o.slice(0,t)),[e.target.value],Object(f.a)(o.slice(t+1)))})},[t,r,o]);return a.a.createElement(T,null,a.a.createElement("input",{placeholder:"Text box ".concat(t+1),type:"text",onChange:c,value:o[t]}))};function z(){var e=Object(l.a)(["\nbackground: rgba(13, 8, 59, 0.75);\n"]);return z=function(){return e},e}function F(){var e=Object(l.a)(["\nfont-family: georgia;\nborder: solid 1px black;\n"]);return F=function(){return e},e}function J(){var e=Object(l.a)(["\nobject-fit: contain;\nwidth: 50vw;\nheight: 60vh;\ntext-align: center;\npadding: 1em;\nbox-sizing: border-box;\nwidth: 100%\nimage-border: solid 1px black;\nfont-family: georgia;\n"]);return J=function(){return e},e}var B=p.a.img(J()),G=p.a.button(F()),L=p.a.form(z());function Y(e,t){return"boxes[".concat(t,"][text]=").concat(e.text)}var q=function(){var e=a.a.useContext(s),t=e.memeId,n=e.memesMap,o=e.memeUrl,c=e.dispatch,u=e.textArray,l=e.inputs;a.a.useEffect(function(){if(u.some(function(e){return!!e})){var e="https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image?template_id=".concat(t,"&").concat((n=u,m.a.map(n,Y).join("&")),"&username=IvyDoyle&password=mypassword");fetch(e,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8","Access-Control-Allow-Origin":"*"}}).then(function(e){return e.json()}).then(function(e){c({memeUrl:e.data.url}),console.log("response for memeeditor",e)})}var n},[t,u,c]);for(var i=m.a.get(n,t,{box_count:0,memeId:""}),p=[],d=0;d<i.box_count;d++)p.push(a.a.createElement(R,{key:d,index:d}));return a.a.createElement(r.Fragment,null,a.a.createElement(L,{onSubmit:function(e){e.preventDefault();var t=m.a.reduce(l,function(e,t){return e.push({text:t}),e},[]);c({textArray:Object(f.a)(t)})}},a.a.createElement(U,null),p,a.a.createElement(G,{type:"submit"},"Submit")),a.a.createElement(B,{src:o||i.url,alt:"Edited meme goes here!"}),a.a.createElement(M,{url:o}),a.a.createElement(P,{url:o}))};function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function N(){var e=Object(l.a)(["\n    font-family: georgia;\n    display: grid;\n    grid-template-columns: 1fr;\n    background: rgba(57, 50, 118, 0.5);\n    text-align: center;\n    height: 100%;\n    grid-row-gap: 1em;\n"]);return N=function(){return e},e}var Q=p.a.main(N()),V="https://api.imgflip.com/get_memes";function W(e,t){var n=e;return n[t.id]=t,n}var X={memesMap:{},memeId:-1,memeUrl:"",textArray:[],inputs:[]};function Z(e,t){return K({},e,{},t)}var $=function(e){e.children;var t=a.a.useReducer(Z,X),n=Object(c.a)(t,2),r=n[0],o=n[1],u=r.memesMap;return a.a.useEffect(function(){0===m.a.size(u)&&(console.log("true"),fetch(V,{method:"GET"}).then(function(e){return e.json()}).then(function(e){console.log("Response",e);var t=e.data.memes;o({memesMap:K({},t.reduce(W,u))})}).catch(function(e){console.log("Caught error getting memes",e)}))},[u]),console.log("render",r),a.a.createElement(Q,null,a.a.createElement(s.Provider,{value:K({},r,{dispatch:o})},a.a.createElement(q,null)))};n(130);var ee=function(){return a.a.createElement(a.a.StrictMode,null,a.a.createElement("header",null),a.a.createElement($,null),a.a.createElement("footer",null))},te=(n(131),document.getElementById("root"));Object(o.render)(Object(r.createElement)(ee),te)},75:function(e,t,n){e.exports=n(132)}},[[75,1,2]]]);
//# sourceMappingURL=main.20c5c890.chunk.js.map