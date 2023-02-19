"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),l=t.n(s),c=new URL(t(519),t.b),d=new URL(t(332),t.b),p=new URL(t(606),t.b),m=i()(r());m.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]);var f=l()(c),h=l()(d),u=l()(p);m.push([n.id,":root {\n  --yellow-color: #eec128;\n  --light-yellow: #eec028;\n  --dark-yellow-color: #a69456;\n  --banana-yellow: #ffe599;\n  --grey-color: #d3d3d3;\n  --grey-white-color: #dad9d9;\n  --white-color: #fff;\n  --black-color: #273a33;\n  --dark-grey-color: #707070;\n  --grey-tone-color: #adadad;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Lato', sans-serif;\n  scroll-behavior: smooth;\n}\n\nbody {\n  background-color: var(--white-color);\n}\n\n/* header section  */\n#header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.wrapper {\n  width: 80%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.nav-mobile {\n  width: 100%;\n  height: 100vh;\n  background-color: #707070;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n}\n\n.footer-logo img {\n  width: 100%;\n  border-radius: 20px;\n}\n\n/* change color of menu icon */\n.icon-menu-mobile img {\n  filter: invert(66%) sepia(0%) saturate(0%) hue-rotate(333deg) brightness(66%) contrast(66%);\n  height: 66%;\n  object-fit: cover;\n}\n\n.main-nav .icon-nav img {\n  height: 100%;\n  object-fit: cover;\n}\n\n.nav-mobile .cross img {\n  position: absolute;\n  right: 40px;\n  top: 40px;\n  width: 30px;\n  height: auto;\n  cursor: pointer;\n  object-fit: cover;\n  filter: invert(82%) sepia(68%) saturate(632%) hue-rotate(337deg) brightness(98%) contrast(91%);\n}\n\n.nav-mobile .container {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 20px;\n  height: 100vh;\n  width: 100%;\n  padding-right: 100px;\n}\n\n/* ===============================*\\\n        Transitions/Animations\n*\\=============================== */\n\n/* Adds a hover effect to a link by animating a line that starts from the bottom center of the link and moves towards both the left and right edges */\n.bottom-nav a {\n  position: relative;\n  padding-bottom: 5px;\n}\n\n.bottom-nav a::before,\n.bottom-nav a::after {\n  content: '';\n  width: 100%;\n  transform-origin: bottom; /* modify transform origin to start from right */\n  transform: scaleX(0);\n  transition: all 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);\n  background-color: #eec028;\n  height: 3px;\n  bottom: 1px;\n  right: 0; /* modify left to right */\n  position: absolute;\n}\n\n.bottom-nav a:hover::before,\n.bottom-nav a:hover::after {\n  transform-origin: bottom left; /* modify transform origin to move to left */\n  transform: scaleX(1);\n}\n\n.bottom-nav a:hover::after {\n  transition-delay: 0.2s; /* add delay to start animation after :before */\n}\n\n/* end animations */\n\n.bottom-nav li a {\n  color: var(--black-color);\n  text-decoration: none;\n}\n\n/* ===============================*\\\n        Transitions/Animations\n*\\=============================== */\n\n/* transition- increase font size and change color on hover */\n.bottom-nav a:hover {\n  color: #707070;\n  cursor: pointer;\n  transform: scale(1.15);\n  font-size: 1.3em;\n}\n\n.nav-mobile .container li a {\n  text-decoration: none;\n  color: #eec028;\n  font-size: 2em;\n}\n\n/* end animation */\n\n/* mobile menu hover */\n.nav-mobile ul li a:hover {\n  color: white;\n}\n\n.main-nav {\n  height: 72px;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 25px;\n}\n\n.main-nav .icon-nav {\n  height: 72px;\n  display: none;\n}\n\n/* move mobile menu to the right */\n.icon-menu-mobile {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n\n.bottom-nav {\n  list-style-type: none;\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n}\n\n/* banner */\n.banner {\n  margin-top: 15px;\n  padding: 6em 0 8em 0;\n  text-align: center;\n  width: 100%;\n  background-image: url("+f+");\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.103);\n}\n\n.border {\n  width: 60%;\n  margin: 0 auto;\n  height: 47px;\n  border: 2px solid #eec028;\n  border-bottom: 0;\n}\n\n.banner h2 {\n  margin: 0;\n  font-size: 1.5em;\n  color: #eec028;\n  text-align: center;\n  font-weight: 300;\n  text-transform: uppercase;\n  letter-spacing: 0.5em;\n  padding: 0.5em 0 0 0;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.banner p {\n  color: #273a33;\n  text-transform: uppercase;\n  font-size: 1.1em;\n  font-weight: bold;\n  margin: 1em 0 0 0;\n  line-height: 2em;\n  letter-spacing: 2px;\n  padding: 0 0 2em 0;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.border-bottom {\n  border-top: 0;\n  border-bottom: 2px solid #eec028;\n}\n\n/* headline */\n#headline {\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: center;\n  width: 100%;\n  padding-top: 38px;\n  padding-bottom: 38px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.525), rgba(255, 255, 255, 0.5)), url("+h+");\n}\n\n.headline-content {\n  color: #273a33;\n  max-width: 100%;\n  text-align: center;\n}\n\n.headline-title {\n  font-size: 1.7rem;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  margin: 0;\n}\n\n.headline-description {\n  padding: 16px;\n  border: 2px solid #eec028;\n  color: #273a33;\n  text-align: center;\n  max-width: 100%;\n  border-radius: 8px;\n  font-size: 1rem;\n  margin-top: 25px;\n}\n\n.headline-description p {\n  line-height: 1.5;\n}\n\n.headline-image {\n  display: flex;\n  justify-content: center;\n  margin: 25px 0;\n}\n\n.build {\n  max-width: 100%;\n}\n\n/* footer */\n#footer {\n  display: none;\n  justify-content: center;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  padding-bottom: 25px;\n  padding-top: 25px;\n  align-items: center;\n}\n\n.footer-logo {\n  width: 100px;\n  border-radius: 20px;\n}\n\n.footer-content p {\n  font-weight: 600;\n  text-transform: capitalize;\n  padding-top: 15px;\n  padding-right: 15px;\n  padding-left: 10px;\n  color: var(--black-color);\n}\n\n/* desktop version */\n@media all and (min-width: 768px) {\n  /* home page  */\n\n  /* header  */\n  .main-nav .icon-nav,\n  .main-nav .bottom-nav {\n    display: flex;\n  }\n\n  .main-nav .icon-menu-mobile {\n    display: none;\n  }\n\n  .nav-mobile {\n    display: none !important;\n  }\n\n  /* banner */\n  .banner h2 {\n    font-size: 5em;\n  }\n\n  .banner p {\n    font-size: 3em;\n  }\n\n  .banner {\n    margin-top: 15px;\n    padding: 6em 0 8em 0;\n    text-align: center;\n    width: 100%;\n    background-image: url("+u+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.103);\n  }\n\n  /* headline */\n  #headline {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .headline-title {\n    font-size: 3rem;\n  }\n\n  /* transition- increase font size and change color on hover */\n  .headline-title:hover {\n    color: #eec028;\n    cursor: pointer;\n    transform: scale(1.05);\n    font-size: 3rem;\n  }\n\n  .headline-description {\n    font-size: 1.3rem;\n  }\n\n  .build {\n    width: 100%;\n    max-width: 700px;\n    border-radius: 5px;\n    border: #eec028;\n    cursor: pointer;\n  }\n\n  /* transition */\n\n  /* transition from left to center */\n  .wrapper.headline-content,\n  .headline-image {\n    animation: slideLeftRight 2s;\n    animation-delay: 0s, 0.5s;\n  }\n\n  @keyframes slideLeftRight {\n    0% {\n      transform: translateX(-100%);\n    }\n\n    100% {\n      transform: translateX(0);\n    }\n  }\n\n  /* image transition */\n  .build:hover {\n    transform: scale(1.05);\n  }\n\n  /* footer */\n  #footer {\n    display: flex;\n  }\n\n  .about-footer .footer-content p {\n    color: var(--black-color);\n  }\n\n  @media only screen and (max-width: 767px) {\n    #footer {\n      display: none;\n    }\n  }\n}\n",""]);const g=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var m=t(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=o(n,r),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},987:(n,e,t)=>{var o=t(379),r=t.n(o),a=t(795),i=t.n(a),s=t(569),l=t.n(s),c=t(565),d=t.n(c),p=t(216),m=t.n(p),f=t(589),h=t.n(f),u=t(426),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),r()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;const b=document.querySelector(".icon-menu-mobile img"),v=document.querySelector(".cross img"),x=document.querySelector(".nav-mobile"),y=document.querySelectorAll(".nav-mobile .container li");b.addEventListener("click",(()=>{x.style.display="flex",b.style.display="none"})),v.addEventListener("click",(()=>{x.style.display="none",b.style.display="block"})),y.forEach((n=>{n.addEventListener("click",(()=>{x.style.display="none",b.style.display="block"}))}))},332:(n,e,t)=>{n.exports=t.p+"c44e8b455ebf756437c3.jpg"},519:(n,e,t)=>{n.exports=t.p+"359f42aee358fa54100a.jpg"},606:(n,e,t)=>{n.exports=t.p+"1d7989b2b54d53a6f6ad.jpg"}},n=>{n(n.s=987)}]);