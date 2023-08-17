(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=React;var n=t.n(e),o={eventMonitor:[],addEventMonitor:function(t){var e={name:t.name,event:t.event,env:t.env};return o.eventMonitor.push(e),function(){o.eventMonitor=o.eventMonitor.filter((function(t){return t!==e}))}},triggerEvent:function(t){var e=t.name,n=t.event,r=t.env,i=t.data,a=function(t){o.eventMonitor.forEach((function(n){if(n.name===e&&("function"==typeof n.event&&n.event(t,n.env),"string"==typeof n.event))try{new Function("data","env","(".concat(n.event,")(data, env)"))(t,n.env)}catch(t){console.error(t)}}))};if(n)try{new Function("data","env","resolve","(".concat(n,")(data, env, resolve)"))(i,r,a)}catch(t){console.error(t)}else a(i)}},r=function(t){return isNaN(t)?t:t+"px"},i=function(t){if(t){var e={};return e.className=t.className,void 0!==t.visible&&(e.visible=t.visible),void 0!==t.display&&(e.display=t.display),void 0!==t.overflow&&(e.overflow=t.overflow),void 0!==t.verticalAlign&&(e.verticalAlign=t.verticalAlign),void 0!==t.position&&(e.position=t.position),void 0!==t.zIndex&&(e.zIndex=t.zIndex),void 0!==t.cursor&&(e.cursor=t.cursor),void 0!==t.width&&(e.width=r(t.width)),void 0!==t.height&&(e.height=r(t.height)),void 0!==t.minWidth&&(e.minWidth=r(t.minWidth)),void 0!==t.minHeight&&(e.minHeight=r(t.minHeight)),void 0!==t.maxWidth&&(e.maxWidth=r(t.maxWidth)),void 0!==t.maxHeight&&(e.maxHeight=r(t.maxHeight)),void 0!==t.padding&&(t.padding.includes("")?(t.padding[0]&&(e.paddingTop=r(t.padding[0])),t.padding[1]&&(e.paddingRight=r(t.padding[1])),t.padding[2]&&(e.paddingBottom=r(t.padding[2])),t.padding[3]&&(e.paddingLeft=r(t.padding[3]))):e.padding=t.padding.map((function(t){return r(t)})).join(" ")),void 0!==t.margin&&(t.margin.includes("")?(t.margin[0]&&(e.marginTop=r(t.margin[0])),t.margin[1]&&(e.marginRight=r(t.margin[1])),t.margin[2]&&(e.marginBottom=r(t.margin[2])),t.margin[3]&&(e.marginLeft=r(t.margin[3]))):e.margin=t.margin.map((function(t){return r(t)})).join(" ")),void 0!==t.inset&&(e.top=t.inset[0]?r(t.inset[0]):"auto",e.right=t.inset[1]?r(t.inset[1]):"auto",e.bottom=t.inset[2]?r(t.inset[2]):"auto",e.left=t.inset[3]?r(t.inset[3]):"auto"),t.flex&&(e.flexDirection=t.flex.flexDirection,e.flexWrap=t.flex.flexWrap,e.justifyContent=t.flex.justifyContent,e.alignItems=t.flex.alignItems,e.alignContent=t.flex.alignContent,e.flexGrow=t.flex.flexGrow,e.flexShrink=t.flex.flexShrink,e.flexBasis=t.flex.flexBasis),void 0!==t.transform&&(e.perspective=t.transform.perspective,e.transformStyle=t.transform.transformStyle,e.transformOrigin=t.transform.transformOrigin.map((function(t){return r(t)})).join(" "),e.transform="\n        translateX(".concat(r(t.transform.transformTranslate[0]),")\n        translateY(").concat(r(t.transform.transformTranslate[1]),")\n        translateZ(").concat(r(t.transform.transformTranslate[2]),")\n        rotateX(").concat(t.transform.transformRotate[0],"deg)\n        rotateY(").concat(t.transform.transformRotate[1],"deg)\n        rotateZ(").concat(t.transform.transformRotate[2],"deg)\n        scaleX(").concat(t.transform.transformScale[0],")\n        scaleY(").concat(t.transform.transformScale[1],")\n        scaleZ(").concat(t.transform.transformScale[2],")\n      ")),void 0!==t.transition&&(e.transition="".concat(t.transition.transitionTime,"s all")),void 0!==t.filter&&(e.filter="blur(".concat(t.filter.filterBlur,"px) brightness(").concat(t.filter.filterBrightness,"%) opacity(").concat(t.filter.filterOpacity,"%)")),void 0!==t.border&&(t.border.borderPosition.includes("top")&&Object.assign(e,{borderTop:"".concat(t.border.borderColor," ").concat(t.border.borderStyle," ").concat(t.border.borderWidth,"px")}),t.border.borderPosition.includes("bottom")&&Object.assign(e,{borderBottom:"".concat(t.border.borderColor," ").concat(t.border.borderStyle," ").concat(t.border.borderWidth,"px")}),t.border.borderPosition.includes("left")&&Object.assign(e,{borderLeft:"".concat(t.border.borderColor," ").concat(t.border.borderStyle," ").concat(t.border.borderWidth,"px")}),t.border.borderPosition.includes("right")&&Object.assign(e,{borderRight:"".concat(t.border.borderColor," ").concat(t.border.borderStyle," ").concat(t.border.borderWidth,"px")})),void 0!==t.borderRadius&&Object.assign(e,{borderRadius:"\n        ".concat(r(t.borderRadius[0]),"\n        ").concat(r(t.borderRadius[1]),"\n        ").concat(r(t.borderRadius[2]),"\n        ").concat(r(t.borderRadius[3]),"\n      ")}),void 0!==t.boxShadow&&Object.assign(e,{boxShadow:"".concat(t.boxShadow.boxShadowPosition[0],"px ").concat(t.boxShadow.boxShadowPosition[1],"px ").concat(t.boxShadow.boxShadowSize,"px ").concat(t.boxShadow.boxShadowColor," ").concat(t.boxShadow.boxShadowInset?"inset":"")}),void 0!==t.outline&&Object.assign(e,{outline:"".concat(t.outline.outlineColor," ").concat(t.outline.outlineStyle," ").concat(t.outline.outlineWidth,"px")}),void 0!==t.background&&Object.assign(e,{background:"\n        ".concat(t.background.backgroundColor," \n        ").concat(t.background.backgroundPosition[0]).concat(t.background.backgroundPosition[1],"/").concat(t.background.backgroundSize[0]).concat(t.background.backgroundSize[1]," \n        ").concat(t.background.backgroundRepeat," \n        ").concat(t.background.backgroundAttachment," \n        ").concat(t.background.backgroundImage?"url(".concat(t.background.backgroundImage,")"):"none","\n      ")}),void 0!==t.font&&(t.font.fontSize&&(e.fontSize=t.font.fontSize+"px"),t.font.fontWeight&&(e.fontWeight=t.font.fontWeight),t.font.fontFamily&&(e.fontFamily=t.font.fontFamily)),void 0!==t.text&&(t.text.lineHeight&&(e.lineHeight=t.text.lineHeight),t.text.letterSpacing&&(e.letterSpacing=t.text.letterSpacing+"px"),t.text.textAlign&&(e.textAlign=t.text.textAlign),t.text.whiteSpace&&(e.whiteSpace=t.text.whiteSpace),t.text.color&&(e.color=t.text.color)),void 0!==t.textDecoration&&Object.assign(e,{textDecoration:"".concat(t.textDecoration.textDecorationColor," ").concat(t.textDecoration.textDecorationLine," ").concat(t.textDecoration.textDecorationStyle)}),void 0!==t.textShadow&&Object.assign(e,{textShadow:"".concat(t.textShadow.textShadowPosition[0],"px ").concat(t.textShadow.textShadowPosition[1],"px ").concat(t.textShadow.textShadowSize,"px ").concat(t.textShadow.textShadowColor)}),void 0!==t.textStroke&&Object.assign(e,{textStroke:"".concat(t.textStroke.textStrokeWidth,"px ").concat(t.textStroke.textStrokeColor),webkitTextStroke:"".concat(t.textStroke.textStrokeWidth,"px ").concat(t.textStroke.textStrokeColor)}),e}};function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(t){c=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return i}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function b(t){var e=window.graphElement,r=t.element,c=r.flow,d=r.license,f=r.id,s=r.use,m=r.property,p=r.style,g=r.children,v=r.monitor,h=r.trigger,y=r.hook,x=n().useMemo((function(){return function(t,e){return e.find((function(e){return e.license.key===t}))||{Render:null,Edit:null,View:null,information:null,license:null}}(d,e)}),[]),w=x.Render;if(!w)return null;var S=l(n().useState(0),2)[1],O=function(){return S((function(t){return t+1}))},k={property:m,style:p,flow:c,update:O},j=n().useMemo((function(){if(h){var t={};return h.forEach((function(e){if(e.key)return t[e.key]?t[e.key].push(e):t[e.key]=[e]})),Object.entries(t).forEach((function(e){t[e[0]]=function(t,n){return e[1].forEach((function(e){o.triggerEvent({name:e.name,event:e.useEval?e.event:null,env:u(u({},k),{},{event:n}),data:t})}))}})),t}}),[m,p,c,h]);k.trigger=j;var E=n().useMemo((function(){if(v){var t={};return v.filter((function(t){return!t.useEval})).forEach((function(e){return e.key&&t[e.key]?t[e.key].push(e):t[e.key]=[e]})),Object.entries(t).forEach((function(e){t[e[0]]=function(t){var n=e[1].map((function(e){return o.addEventMonitor({name:e.name,event:t,env:k})}));return function(){return n.forEach((function(t){return t()}))}}})),t}}),[m,p,c,v]);n().useEffect((function(){if(v){var e=[].concat(a(v.filter((function(t){return t.useEval})).map((function(t){return o.addEventMonitor({name:t.name,event:t.event,env:k})}))),a(v.filter((function(t){return"@setUseTrue"===t.key})).map((function(e){return o.addEventMonitor({name:e.name,event:function(e){t.element.use=!1,O()}})}))),a(v.filter((function(t){return"@setUseFalse"===t.key})).map((function(e){return o.addEventMonitor({name:e.name,event:function(e){t.element.use=!0,O()}})}))));return function(){return e.forEach((function(t){return t()}))}}}),[m,p,c,v]);var M={property:m,style:p,flow:c};if(y.useBeforeRenderHook)try{new Function("env","(".concat(y.beforeRenderHook,")(env)"))(M)}catch(t){console.error(t)}var P=n().useMemo((function(){if(g){var t={};return Object.entries(g).forEach((function(e){t[e[0]]=function(t){return e[1].map((function(e){return n().createElement(b,{key:e.id,flow:t||c,element:e})}))}})),t}}),[g,c]),C={};j["@onClick"]&&(C.onClick=function(t){return j["@onClick"](void 0,t)}),j["@onDoubleClick"]&&(C.onDoubleClick=function(t){return j["@onDoubleClick"](void 0,t)}),j["@onMouseEnter"]&&(C.onMouseEnter=function(t){return j["@onMouseEnter"](void 0,t)}),j["@onMouseLeave"]&&(C.onMouseLeave=function(t){return j["@onMouseLeave"](void 0,t)}),j["@onMouseMove"]&&(C.onMouseMove=function(t){return j["@onMouseMove"](void 0,t)}),j["@onMouseDown"]&&(C.onMouseDown=function(t){return j["@onMouseDown"](void 0,t)}),j["@onMouseUp"]&&(C.onMouseUp=function(t){return j["@onMouseUp"](void 0,t)}),j["@onTouchMove"]&&(C.onTouchMove=function(t){return j["@onTouchMove"](void 0,t)}),j["@onTouchStart"]&&(C.onTouchStart=function(t){return j["@onTouchStart"](void 0,t)}),j["@onTouchEnd"]&&(C.onTouchEnd=function(t){return j["@onTouchEnd"](void 0,t)});var D={style:u(u({},i(p)),{},{boxSizing:"border-box"})};return!1===s?null:n().createElement(w,{event:C,style:D,property:m,monitor:E,trigger:j,children:P,env:"prod",update:O,id:f})}const m=function(){var t=window.React,e=window,n=e.graphContent,o=e.graphConfig,r=l(t.useState(0),2),i=(r[0],r[1]);return o.project.updateId&&(window[o.project.updateId]=function(){return i((function(t){return t+1}))}),n.map((function(e){return t.createElement(b,{key:e.id,element:e})}))};function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var h,y,x;h=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},window.graphConfig.dependenciesMap),y=function(){ReactDOM.render(React.createElement(m,null),document.getElementById(window.graphConfig.project.renderId))},x=Object.entries(h).length,Object.entries(h).forEach((function(t){var e,n=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(t){c=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),o=n[0],r=n[1];!r||window[o]||document.getElementById(o)?0==(x-=1)&&y&&y():(r.match(/.js$/)&&((e=document.createElement("script")).src=r,e.id=o),r.match(/.css$/)&&((e=document.createElement("link")).rel="stylesheet",e.href=r,e.id=o),document.getElementsByTagName("head")[0].appendChild(e),e.addEventListener("load",(function(){0==(x-=1)&&y&&y()})))}))})();