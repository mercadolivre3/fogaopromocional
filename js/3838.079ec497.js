/*! For license information please see 3838.079ec497.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3838],{62758:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(50411);const o=/^(MercadoLibre|MercadoPago)-(iOS|Android)(?:\/|%2F)((?:\d+\.){2}\d+)/,i=()=>{var e;if(!r.canUseDOM)return;const t=null===(e=window)||void 0===e||null===(e=e.navigator)||void 0===e?void 0:e.userAgent,n=o.exec(t);return Array.isArray(n)?{name:n[1],os:n[2],version:n[3]}:void 0}},1251:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(50411);var o=(e,t)=>-1!==e.indexOf(t);const i=["Macintosh","MacIntel","MacPPC","Mac68K"],a=["iPhone","iPad","iPod"],s=["Win32","Win64","Windows","WinCE"],l=()=>{var e,t;if(!r.canUseDOM)return;const n=null===(e=window)||void 0===e||null===(e=e.navigator)||void 0===e?void 0:e.userAgent,l=null===(t=window)||void 0===t||null===(t=t.navigator)||void 0===t?void 0:t.platform;return o(i,l)?"mac os":o(a,l)?"ios":o(s,l)?"windows":/Android/.test(n)?"android":/Linux/.test(n)?"linux":void 0}},51462:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(50411);const o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i,a=()=>{if(!r.canUseDOM)return!1;const e=navigator.userAgent||navigator.vendor||window.opera;return o.test(e)||i.test(e.substr(0,4))}},69247:(e,t,n)=>{"use strict";n.d(t,{$k:()=>k,Bi:()=>h,Ri:()=>y,UO:()=>w});var r=n(89379),o=n(96540),i=n(90356),a=n(3411),s=n(88460),l=n(43051),d=n(73620),c=n(60415),u=n(51462),p=n(62758),m=n(1251);const v="es-AR",f="pt-BR",g=function(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];if(e&&o.length){const n=(s=t)?(0,a.A)(s,"en")||(0,a.A)(s,"zh")?"en-US":s===f?f:v:v,i=o.find((e=>{let{locale:t}=e;return t===n})),{module:l}=i||{};e.andes||(e.andes={}),e.andes[String(l)]||(e.translations=(0,r.A)((0,r.A)({},e.translations),null==i?void 0:i.translations),e.andes[String(l)]=!0)}var s},w=function(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];const l=(null===(t=r[0])||void 0===t?void 0:t.module)||"@andes";let d=((c=e)&&"Consumer"in c?(0,o.useContext)(c):c)||{};var c;(!d||void 0!==d&&0===Object.keys(d).length)&&((0,s.A)(!1,"".concat(l," needs a valid configuration of <AndesProvider> on your application.\n    Check the documentation about @andes/context and <AndesProvider> on:\n    https://github.com/melisource/fury_frontend-andes-ui/blob/master/packages/context/README.md")),d={i18n:new i.I18n({translations:{}}),locale:v});const{i18n:u,locale:p}=d;return g(u,p,...r),u};var b=e=>e;var h=e=>o.useId?b(e)||o.useId():(0,l.Bi)(b(e));var y=o.createContext({});var E=e=>{if(void 0!==e)return e;return{mobile:(0,u.A)(),webView:"undefined"!=typeof MobileWebKit,nativeApp:(0,p.A)(),osName:(0,m.A)()}};var k=function(){const e=e=>{let{children:t,locale:n,device:r,csrfToken:a}=e;const s={locale:n,i18n:new i.I18n({translations:{}}),device:E(r),csrfToken:a};return(0,d.A)(y.Provider,{value:s},void 0,o.useId?o.createElement(o.Fragment,null,o.Children.only(t)):(0,d.A)(c.WX,{},void 0,o.Children.only(t)))};return e.displayName="AndesProvider",e}();const{I18nContext:A}=i.I18nProvider},69317:(e,t,n)=>{"use strict";n.d(t,{I:()=>w});var r,o,i=n(96540),a=n(89379),s=n(87569),l=n(58168),d=n(73620),c=n(46942),u=n.n(c),p=n(20551);const m=/{([\s\S]+?)}/g,v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n=>{t&&n.stopPropagation(),e&&(0,p.sx)(e)}},f=e=>{let{text:t,values:n={},className:a=null,num_font_size:s=null,dependencies:c={}}=e;const{StyledLabel:g=()=>null,Iframe:w=()=>null,PriceInline:b=()=>null,ActionModal:h=()=>null,Icon:y=()=>null}=c,E=e=>{var t,n;return null!=e&&e.i18nChildren?f({text:null===(t=e.i18nChildren)||void 0===t?void 0:t.text,values:null===(n=e.i18nChildren)||void 0===n?void 0:n.values,dependencies:c}):null},k=t.split(m);for(let e=0;e<k.length;e+=1){const t=k[e];if(Object.prototype.hasOwnProperty.call(n,t)){const c=n[t];switch(c.type){case"action":k[e]=(0,d.A)("a",{"data-testid":t,target:c.html_target||"_self",onClick:v(c.track,c.stopPropagation),href:c.target},`${t}-${c.target}`,E(c)||c.label.text,c.accessibility_text&&(0,d.A)("span",{className:"ui-pdp--hide"},void 0,c.accessibility_text));break;case"highlighted":k[e]=(0,d.A)(g,{text:c.label.text,as:"span",className:"ui-pdp-qadb--highlighted"},c.label.text);break;case"pill":k[e]=i.createElement(g,(0,l.A)({key:c.text,className:"ui-pdp-label-as-pill",as:"span"},c));break;case"price":k[e]=(0,d.A)(b,{value:c.value,originalValue:c.original_value,currencySymbol:c.currency_symbol,num_font_size:s||c.font_size,color:c.color,font_family:c.font_family},t);break;case"modal":k[e]=(0,d.A)(h,{label:c.label,url:c.link||c.target,autoHeight:!1,modalClassName:u()("ui-pdp-iframe-modal",c.id?`ui-pdp-${c.id}`:null),modalUrl:"#pdp-iframe-modal",modalTitle:c.modal_title,closeModalLabel:c.close_modal_label,className:c.classname,track:c.track},void 0,(0,d.A)(w,{src:c.link||c.target,onMessage:(0,p.VW)("vip:modal-content:loaded","height",".ui-pdp-iframe-modal",".andes-modal__header","width"),scrolling:"no"}));break;case"icon":k[e]=i.createElement(y,c);break;case"break":k[e]=r||(r=(0,d.A)("br",{}));break;case"space":k[e]=o||(o=(0,d.A)("hr",{className:"ui-pdp--highlight-tooltip--space"}));break;case"deleted":k[e]=i.createElement(g,(0,l.A)({key:c.text,className:a,as:"del"},c));break;default:k[e]=i.createElement(g,(0,l.A)({key:t,className:a,as:"span"},c))}}}return k},g=e=>{const{dependencies:t}=(0,s.HZ)();return f((0,a.A)((0,a.A)({},e),{},{dependencies:t}))},w={jsx:(e,t,n,r)=>t&&0!==Object.keys(t).length?i.createElement(g,{text:e,values:t,className:n,num_font_size:r}):e}},50411:(e,t,n)=>{var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},27925:(e,t,n)=>{const r=n(5556),o=()=>null;o.propTypes={path:r.string.isRequired,id:r.string,event_data:r.shape({}),application:r.shape({}),device:r.shape({}),user:r.shape({}),platform:r.shape({http:r.shape({}).isRequired}),type:r.oneOf(["view","event"]),isDeferred:r.bool,experiments:r.shape({}),userTime:r.number,userLocalTimeStamp:r.string,lastExperimentsTimeStamp:r.string,technologies:r.arrayOf(r.string),propertiesToEncrypt:r.arrayOf(r.string)},o.MelidataTrack=o,e.exports=o},29172:(e,t,n)=>{var r=n(5861),o=n(40346);e.exports=function(e){return o(e)&&"[object Map]"==r(e)}},27301:e=>{e.exports=function(e){return function(t){return e(t)}}},86009:(e,t,n)=>{e=n.nmd(e);var r=n(34840),o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o&&r.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=s},87730:(e,t,n)=>{var r=n(29172),o=n(27301),i=n(86009),a=i&&i.isMap,s=a?o(a):r;e.exports=s},16280:(e,t,n)=>{"use strict";var r=n(46518),o=n(22195),i=n(18745),a=n(14601),s="WebAssembly",l=o[s],d=7!==new Error("e",{cause:7}).cause,c=function(e,t){var n={};n[e]=a(e,t,d),r({global:!0,constructor:!0,arity:1,forced:d},n)},u=function(e,t){if(l&&l[e]){var n={};n[e]=a(s+"."+e,t,d),r({target:s,stat:!0,constructor:!0,arity:1,forced:d},n)}};c("Error",(function(e){return function(t){return i(e,this,arguments)}})),c("EvalError",(function(e){return function(t){return i(e,this,arguments)}})),c("RangeError",(function(e){return function(t){return i(e,this,arguments)}})),c("ReferenceError",(function(e){return function(t){return i(e,this,arguments)}})),c("SyntaxError",(function(e){return function(t){return i(e,this,arguments)}})),c("TypeError",(function(e){return function(t){return i(e,this,arguments)}})),c("URIError",(function(e){return function(t){return i(e,this,arguments)}})),u("CompileError",(function(e){return function(t){return i(e,this,arguments)}})),u("LinkError",(function(e){return function(t){return i(e,this,arguments)}})),u("RuntimeError",(function(e){return function(t){return i(e,this,arguments)}}))},3949:(e,t,n)=>{"use strict";n(7588)},95562:(e,t,n)=>{"use strict";n.d(t,{K7:()=>x,ME:()=>k,pP:()=>E});var r=n(69202),o=n(28948),i=n(24836),a=n(96540);let s=null,l=new Set,d=new Map,c=!1,u=!1;const p={Tab:!0,Escape:!0};function m(e,t){for(let n of l)n(e,t)}function v(e){c=!0,function(e){return!(e.metaKey||!(0,r.cX)()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(s="keyboard",m("keyboard",e))}function f(e){s="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(c=!0,m("pointer",e))}function g(e){(0,o.Y)(e)&&(c=!0,s="virtual")}function w(e){e.target!==window&&e.target!==document&&(c||u||(s="virtual",m("virtual",e)),c=!1,u=!1)}function b(){c=!1,u=!0}function h(e){if("undefined"==typeof window||d.get((0,i.m)(e)))return;const t=(0,i.m)(e),n=(0,i.T)(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){c=!0,r.apply(this,arguments)},n.addEventListener("keydown",v,!0),n.addEventListener("keyup",v,!0),n.addEventListener("click",g,!0),t.addEventListener("focus",w,!0),t.addEventListener("blur",b,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",f,!0),n.addEventListener("pointermove",f,!0),n.addEventListener("pointerup",f,!0)):(n.addEventListener("mousedown",f,!0),n.addEventListener("mousemove",f,!0),n.addEventListener("mouseup",f,!0)),t.addEventListener("beforeunload",(()=>{y(e)}),{once:!0}),d.set(t,{focus:r})}const y=(e,t)=>{const n=(0,i.m)(e),r=(0,i.T)(e);t&&r.removeEventListener("DOMContentLoaded",t),d.has(n)&&(n.HTMLElement.prototype.focus=d.get(n).focus,r.removeEventListener("keydown",v,!0),r.removeEventListener("keyup",v,!0),r.removeEventListener("click",g,!0),n.removeEventListener("focus",w,!0),n.removeEventListener("blur",b,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",f,!0),r.removeEventListener("pointermove",f,!0),r.removeEventListener("pointerup",f,!0)):(r.removeEventListener("mousedown",f,!0),r.removeEventListener("mousemove",f,!0),r.removeEventListener("mouseup",f,!0)),d.delete(n))};function E(){return"pointer"!==s}function k(){return s}"undefined"!=typeof document&&function(e){const t=(0,i.T)(e);let n;"loading"!==t.readyState?h(e):(n=()=>{h(e)},t.addEventListener("DOMContentLoaded",n))}();const A=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function x(e,t,n){h(),(0,a.useEffect)((()=>{let t=(t,r)=>{(function(e,t,n){var r;const o="undefined"!=typeof window?(0,i.m)(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,a="undefined"!=typeof window?(0,i.m)(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,s="undefined"!=typeof window?(0,i.m)(null==n?void 0:n.target).HTMLElement:HTMLElement,l="undefined"!=typeof window?(0,i.m)(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof o&&!A.has(null==n||null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof a||(null==n?void 0:n.target)instanceof s&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof l&&!p[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(E())};return l.add(t),()=>{l.delete(t)}}),t)}},43051:(e,t,n)=>{"use strict";n.d(t,{Bi:()=>d,Tw:()=>c,X1:()=>u});var r=n(49953),o=n(164),i=n(96540),a=n(60415);let s=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),l=new Map;function d(e){let[t,n]=(0,i.useState)(e),o=(0,i.useRef)(null),d=(0,a.Cc)(t),c=(0,i.useCallback)((e=>{o.current=e}),[]);return s&&(l.has(d)&&!l.get(d).includes(c)?l.set(d,[...l.get(d),c]):l.set(d,[c])),(0,r.N)((()=>{let e=d;return()=>{l.delete(e)}}),[d]),(0,i.useEffect)((()=>{let e=o.current;e&&(o.current=null,n(e))})),d}function c(e,t){if(e===t)return e;let n=l.get(e);if(n)return n.forEach((e=>e(t))),t;let r=l.get(t);return r?(r.forEach((t=>t(e))),e):t}function u(e=[]){let t=d(),[n,a]=(0,o.y)(t),s=(0,i.useCallback)((()=>{a((function*(){yield t,yield document.getElementById(t)?t:void 0}))}),[t,a]);return(0,r.N)(s,[t,s,...e]),n}}}]);
//# sourceMappingURL=3838.079ec497.js.map