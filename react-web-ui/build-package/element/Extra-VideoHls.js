!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("React"),require("Hls"));else if("function"==typeof define&&define.amd)define(["React","Hls"],r);else{var t="object"==typeof exports?r(require("React"),require("Hls")):r(e.React,e.Hls);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(self,((e,r)=>(()=>{"use strict";var t={344:e=>{e.exports=r},24:r=>{r.exports=e}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{o.r(a);var e=o(24),r=o.n(e),t=o(344),n=o.n(t);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var c,s={Render:function(e){var t=e.event,o=e.style,a=e.property,u=e.monitor,c=e.update;r().useEffect((function(){if(u&&u.setSrc){var e=u.setSrc((function(e){a.src=e,c()}));return function(){e()}}}),[]);var s=r().useRef();return r().useEffect((function(){if(a.src.endsWith(".m3u8")){var e=new(n());return e.loadSource(a.src),e.attachMedia(s.current),e.on(n().Events.MANIFEST_PARSED,(function(){a.autoplay&&s.current.play()})),function(){e.destroy()}}}),[a.src]),r().useEffect((function(){if(u&&u.setPlay){var e=u.setPlay((function(e){s.current.play(),c()}));return function(){e()}}}),[]),r().useEffect((function(){if(u&&u.setPause){var e=u.setPause((function(e){s.current.pause(),c()}));return function(){e()}}}),[]),r().createElement("video",i({},t,o,{ref:function(e){return s.current=e},src:a.src,poster:a.poster,controls:a.controls,autoPlay:a.autoplay,loop:a.loop,onEnded:function(e){trigger&&trigger.onEnded&&trigger.onEnded(void 0,e)}}))},license:{key:"Extra-VideoHls",dependencies:["Hls"]}};window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return u(e)}(c=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(c)||function(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[s]):[s]})(),a})()));