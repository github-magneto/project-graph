!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(()=>(()=>{"use strict";var e={};function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}function n(){return React.createElement("div",{style:{width:24,height:"100%",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}},React.createElement("div",{style:{position:"absolute",background:"gray",width:6*Math.sqrt(2),height:2,transform:"translateX(3px) rotateZ(-45deg)"}}),React.createElement("div",{style:{position:"absolute",background:"gray",width:6*Math.sqrt(2),height:2,transform:"translateX(-3px) rotateZ(45deg)"}}))}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var i,a={Render:function(e){var r=window.React,i=window.MaterialUI,a=i.Accordion,o=i.AccordionSummary,l=i.AccordionDetails,d=i.Divider,s=e.compound,c=e.inner,u=e.listen,p=e.dispatch,f=e.children,m=e.pure,y=e.update;return r.useEffect((function(){if(u&&u.setExpandedOpen){var e=u.setExpandedOpen((function(e){c.expanded=!0,y()}));return function(){e()}}}),[]),r.useEffect((function(){if(u&&u.setExpandedClose){var e=u.setExpandedClose((function(e){c.expanded=!1,y()}));return function(){e()}}}),[]),r.createElement(a,t({},s,{expanded:c.expanded,onChange:function(e){m&&(c.expanded=!c.expanded,y(),p&&p.onChange&&p.onChange(c.expanded,e))},disabled:c.disabled}),r.createElement(o,{style:{minHeight:"auto",height:isNaN(c.summaryHeight)?c.summaryHeight:c.summaryHeight+"px",transition:"0.5s all"},expandIcon:c.expandIcon?r.createElement(n,null):void 0},c.title),c.divider?r.createElement(d,null):null,r.createElement(l,{style:{position:"relative",height:isNaN(c.detailsHeight)?c.detailsHeight:c.detailsHeight+"px",padding:0,transition:"0.5s all",overflow:"scroll"}},f&&f.main?f.main():null))},license:{key:"Material-Accordion",dependencies:["MaterialUI"]}};return window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return r(e)}(i=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[a]):[a],e})()));