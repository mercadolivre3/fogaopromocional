var ModalIframe=function(){"use strict";var n=n=>{let{width:e,height:t}=n;return'\n<div data-js="modal-iframe-content"\nclass="andes-modal-dialog andes-modal--loose"\nstyle="width: '.concat(e,"; height: ").concat(t,';"></div>\n')};var e=()=>'\n<div data-js="modal-iframe-spinner" class="andes-spinner andes-spinner--fullscreen">\n  <div class="andes-spinner__container andes-spinner__container--medium andes-spinner__container--medium-notlabel">\n    <div class="andes-spinner__icon andes-spinner__icon--medium">\n      <div class="andes-spinner__icon-right">\n        <div class="andes-spinner__icon-border"></div>\n      </div>\n      <div class="andes-spinner__icon-left">\n        <div class="andes-spinner__icon-border"></div>\n      </div>\n    </div>\n  </div>\n  <div class="andes-spinner__mask"></div>\n</div>\n';var t=()=>'\n<div data-js="modal-iframe-overlay" class="andes-modal-bg" role="button" tabindex="0"></div>\n';!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}('.andes-spinner {\n  font-family: "Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, "Roboto", Arial, sans-serif;\n  font-size: 16px;\n}\n.andes-spinner__icon {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0 auto;\n  animation: rotate-all 1s linear infinite;\n}\n.andes-spinner__icon-right, .andes-spinner__icon-left {\n  position: absolute;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.andes-spinner__icon-left {\n  left: 0;\n}\n.andes-spinner__icon-right {\n  right: 0;\n}\n.andes-spinner__icon-border {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 200px 0 0 200px;\n  border: 2px solid #3483fa;\n  box-sizing: border-box;\n}\n.andes-spinner__icon-right .andes-spinner__icon-border {\n  border-radius: 0 200px 200px 0;\n  border-left: 0;\n  transform: rotate(-10deg);\n  transform-origin: left center;\n  animation: rotate-right 0.75s linear infinite alternate;\n}\n.andes-spinner__icon-right .andes-spinner__icon-border:after {\n  bottom: -10px;\n  left: -5px;\n}\n.andes-spinner__icon-left .andes-spinner__icon-border {\n  border-right: 0;\n  transform: rotate(10deg);\n  transform-origin: right center;\n  animation: rotate-left 0.75s linear infinite alternate;\n}\n.andes-spinner__icon-left .andes-spinner__icon-border:after {\n  bottom: -10px;\n  right: -5px;\n}\n.andes-spinner--highlight .andes-spinner__label {\n  color: #fff;\n}\n.andes-spinner--highlight .andes-spinner__icon-border {\n  border-color: #fff;\n}\n@keyframes rotate-left {\n  to {\n    transform: rotate(30deg);\n  }\n  from {\n    transform: rotate(175deg);\n  }\n}\n@keyframes rotate-right {\n  from {\n    transform: rotate(-175deg);\n  }\n  to {\n    transform: rotate(-30deg);\n  }\n}\n@keyframes rotate-all {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.modal-iframe-cp .andes-spinner__container--medium-notlabel {\n  width: 48px;\n  height: 48px;\n}\n.modal-iframe-cp .andes-spinner__container--medium .andes-spinner__label {\n  display: block;\n  margin-top: 66px;\n  line-height: 1;\n}\n.modal-iframe-cp .andes-spinner__icon--medium {\n  width: 48px;\n  height: 48px;\n}\n.modal-iframe-cp .andes-spinner__mask {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n.modal-iframe-cp .andes-spinner__mask--highlight {\n  background-color: rgba(52, 131, 250, 0.9);\n}\n.modal-iframe-cp .andes-spinner--fullscreen {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1022;\n}\n.modal-iframe-cp .andes-spinner--fullscreen .andes-spinner__container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1023;\n}\n.modal-iframe-cp .andes-modal-bg {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1020;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 1;\n  animation: fadeIn 0.2s ease-in-out;\n  will-change: opacity;\n}\n.modal-iframe-cp .andes-modal-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  font-family: "Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, "Roboto", Arial, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  z-index: 1021;\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.07), 0 20px 25px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  transform: translate(-50%, -50%);\n  opacity: 1;\n  animation: translateIn 0.2s ease-in-out, fadeIn 0.2s ease-in-out;\n  will-change: opacity, transform;\n}\n.modal-iframe-cp .andes-modal-dialog--closing {\n  animation: translateOut 0.2s ease-in-out, fadeOut 0.2s ease-in-out;\n  transform: translate(-50%, calc(-50% + 20px));\n  opacity: 0;\n}\n.modal-iframe-cp .andes-modal-bg--closing {\n  animation: fadeOut 0.2s ease-in-out;\n  opacity: 0;\n}\n.modal-iframe-cp .andes-modal-dialog__button-close {\n  position: absolute;\n  z-index: 1022;\n}\n.modal-iframe-cp .andes-modal-dialog__button-close:after, .modal-iframe-cp .andes-modal-dialog__button-close:before {\n  opacity: 1;\n}\n.modal-iframe-cp .andes-modal-dialog__button-close:hover:before, .modal-iframe-cp .andes-modal-dialog__button-close:hover:after {\n  background-color: #1e6dff;\n}\n.modal-iframe-cp .andes-modal-dialog__container {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  position: absolute;\n  -webkit-overflow-scrolling: touch;\n  box-sizing: content-box;\n}\n.modal-iframe-cp .andes-modal-dialog__content {\n  color: rgba(0, 0, 0, 0.45);\n  -webkit-font-smoothing: antialiased;\n}\n.modal-iframe-cp .andes-modal-dialog--is-open {\n  overflow: hidden;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes translateIn {\n  from {\n    transform: translate(-50%, calc(-50% + 20px));\n  }\n  to {\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes translateOut {\n  from {\n    transform: translate(-50%, -50%);\n  }\n  to {\n    transform: translate(-50%, calc(-50% + 20px));\n  }\n}\n@media (min-width: 768px) {\n  .modal-iframe-cp .andes-modal-dialog {\n    max-width: 40em;\n    max-height: 30em;\n  }\n  .modal-iframe-cp .andes-modal--loose .andes-modal-dialog__button-close {\n    position: relative;\n    width: 1em;\n    height: 1em;\n    cursor: pointer;\n    position: absolute;\n    left: auto;\n    right: 64px;\n    top: 64px;\n    padding: 0;\n    margin-top: 14px;\n  }\n  .modal-iframe-cp .andes-modal--loose .andes-modal-dialog__button-close:after, .modal-iframe-cp .andes-modal--loose .andes-modal-dialog__button-close:before {\n    position: absolute;\n    left: 0.5em;\n    top: 0;\n    content: "";\n    height: 1em;\n    width: 2px;\n    background-color: #3483fa;\n    cursor: pointer;\n  }\n  .modal-iframe-cp .andes-modal--loose .andes-modal-dialog__button-close:before {\n    transform: rotate(45deg);\n  }\n  .modal-iframe-cp .andes-modal--loose .andes-modal-dialog__button-close:after {\n    transform: rotate(-45deg);\n  }\n  .modal-iframe-cp .andes-modal--loose .andes-modal-dialog__content {\n    padding: 64px;\n  }\n}\n.modal-iframe-cp .andes-modal-dialog {\n  max-width: calc(100% - 16px);\n  max-height: calc(100% - 16px);\n}\n.modal-iframe-cp .andes-spinner__mask {\n  background: #fff;\n}\n\n.modal-iframe-cp-hidden {\n  overflow: hidden !important;\n}');const a=n,i=e,o=t,r={common:{label:"Elige dónde recibir tus compras"},"es-AR":{label:"Elegí dónde recibir tus compras"},"pt-BR":{label:"Selecione onde quer receber suas compras"}};return class{constructor(n){let{src:e,bus:t,trigger:a,width:i,height:o,busPrefix:r,navIframe:s}=n;this.bus=t||window.freya,this.container=document.body,this.trigger=document.querySelector(a||".nav-menu-cp"),this.trigger.ariaExpanded=!1,this.trigger.ariaHasPopup=!0,this.busPrefix=r||"modal-cp",this.navIframe=s||"nav:cp",this.width=i||"672px",this.height=o||"315px",this.iframe=null,this.iframeSrc=e||this.getSrcEmbedMode(this.trigger.href),this.createModalElements(),this.hideByEscaping=this.hideByEscaping.bind(this),this.bus.on("".concat(this.busPrefix,":show"),(()=>this.show())),this.bus.on("".concat(this.busPrefix,":hide"),(()=>this.hide(!0))),this.trigger.addEventListener("click",(n=>{n.preventDefault(),this.show()}),!1),window.addEventListener("message",(n=>{switch(n.data.type){case"".concat(this.navIframe,":update"):window.location.reload();break;case"".concat(this.navIframe,":close"):this.hide(!0),this.trigger.focus();break;case"".concat(this.navIframe,":updateSize"):this.content.style.height=n.data.height,this.content.style.width=n.data.width,this.spinner.parentNode&&this.spinner.parentNode.removeChild(this.spinner)}}))}getSrcEmbedMode(n){if(!n)return"defaultURL?mode=embed";const e=n.includes("?")?"&":"?";return"".concat(n).concat(e,"mode=embed")}updateModalSize(n,e){n&&(this.content.style.width=n),e&&(this.content.style.height=e)}hideByEscaping(n){27===n.keyCode&&this.hide(!0)}createModalElements(){const n=document.createDocumentFragment(),e=document.getElementsByTagName("html")[0].getAttribute("lang");this.wrapper=document.createElement("div"),this.wrapper.className="modal-iframe-cp",this.wrapper.insertAdjacentHTML("beforeend",a({width:this.width,height:this.height})),this.wrapper.tabIndex=-1,this.wrapper.role="dialog",this.wrapper.ariaHidden=!1,this.wrapper.ariaModal=!0,this.wrapper.ariaLabel=r[e]?r[e].label:r.common.label,n.appendChild(this.wrapper),this.content=n.querySelector('[data-js="modal-iframe-content"]'),this.content.insertAdjacentHTML("beforeend",i()),this.spinner=n.querySelector('[data-js="modal-iframe-spinner"]'),this.wrapper.insertAdjacentHTML("beforeend",o()),this.overlay=n.querySelector('[data-js="modal-iframe-overlay"]'),this.overlay.addEventListener("click",(()=>this.hide(!0)),!1)}createIframe(){const n=document.createElement("iframe");return n.src=this.iframeSrc,n.setAttribute("width","100%"),n.setAttribute("height","100%"),n.frameBorder="0",n.allowtransparency="true",n.scrolling="yes",n.addEventListener("load",(()=>{this.spinner.parentNode&&this.spinner.parentNode.removeChild(this.spinner)})),n}show(){this.trigger.ariaExpanded=!0,this.container.classList.add("modal-iframe-cp-hidden"),this.iframe||(this.iframe=this.createIframe(),this.content.appendChild(this.iframe)),this.content.appendChild(this.spinner),this.container.appendChild(this.wrapper),document.addEventListener("keydown",this.hideByEscaping,!1),this.bus.emit("onboarding-cp:hide")}hide(n){this.trigger.ariaExpanded=!1,this.container.classList.remove("modal-iframe-cp-hidden"),this.wrapper.parentNode&&this.wrapper.parentNode.removeChild(this.wrapper),document.removeEventListener("keydown",this.hideByEscaping,!1),this.content.style.height=this.height,this.content.style.width=this.width,this.content.classList.remove("modal-full"),n&&(window.meli_ga&&window.meli_ga("send","event","CURRENT_LOCATION","NAVIGATION","CLOSE"),window.melidata&&window.melidata("cleanAndSend","event",{path:"/current_location/navigation/close",event_data:{}}))}}}();
