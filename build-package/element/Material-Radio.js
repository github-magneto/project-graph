!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("React"),require("MaterialUI"));else if("function"==typeof define&&define.amd)define(["React","MaterialUI"],r);else{var t="object"==typeof exports?r(require("React"),require("MaterialUI")):r(e.React,e.MaterialUI);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(self,((e,r)=>(()=>{"use strict";var t={864:e=>{e.exports=r},24:r=>{r.exports=e}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{o.r(a);var e=o(24),r=o.n(e),t=o(864);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var c,u={Render:function(e){var o=e.event,a=e.property,i=e.monitor,c=e.trigger,u=e.env,l=e.update;return r().useEffect((function(){if(i&&i.setCheckedOpen){var e=i.setCheckedOpen((function(e){a.checked=!0,l()}));return function(){e()}}}),[]),r().useEffect((function(){if(i&&i.setCheckedClose){var e=i.setCheckedClose((function(e){a.checked=!1,l()}));return function(){e()}}}),[]),r().createElement(t.Radio,n({},o,style,{checked:a.checked,onChange:function(e){"dev"!==u&&(a.checked=!0,l(),c&&c.onChange&&c.onChange(a.checked,e))},size:a.size,color:a.color,disabled:a.disabled}))},license:{key:"Material-Radio",dependencies:["MaterialUI"]}};window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return i(e)}(c=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(c)||function(e,r){if(e){if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[u]):[u]})(),a})()));