"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[16896],{40312:(e,l,t)=>{t.d(l,{b:()=>b,s:()=>f});var n,a,i=t(58168),o=t(73620),s=t(96540),r=t(46942),c=t.n(r),d=t(69181),u=t(45025),_=t(32126),p=t(62939);const f=e=>{switch(e){case"ERROR_BADGE":return n||(n=(0,o.A)(p.Eg,{type:"error",size:"small"}));case"WARNING_BADGE":return a||(a=(0,o.A)(p.Eg,{type:"warning",size:"small"}));default:return null}},m="ui-pdp-action-row",b=e=>{var l;let{className:t,disabled:n,label:a,onClick:r,selected:p,subtitle:b,thumbnail:A,url:h,modifier:v,htmlTarget:g,figure:y}=e;const N=!n&&"error"===v,E=s.createElement(s.Fragment,null,y&&(0,o.A)("figure",{className:c()("ui-pdp-icon--figure-left",[{"ui-pdp-icon--disabled":n}])},void 0,y),a&&(0,o.A)("span",{className:`${m}__label`},void 0,a),(0,o.A)("div",{className:`${m}__content`},void 0,!(null==p||!p.text_icon)&&f(p.text_icon.id),p&&(0,o.A)("span",{className:c()(`${m}__selected`,{[`ui-pdp-color--${p.color}`]:p.color},{"ui-pdp-action-row__with-thumbnail":A})},void 0,d.I.jsx(p.text,null!==(l=p.values)&&void 0!==l?l:null)),b&&(0,o.A)("span",{className:`${m}__subtitle`},void 0,d.I.jsx(b.text||b,b.values)),A&&s.createElement(u._V,(0,i.A)({lazyload:!1,className:`${m}__thumbnail`},A)),!n&&(0,o.A)(_.I,{id:"chevron",className:c()("ui-pdp-icon--chevron-right",{"ui-pdp-icon--chevron-right__error":N})}))),$={[`ui-pdp-action-row--${N?"error-600":v}`]:v},k=n?null:r;return!n&&h?(0,o.A)("a",{"data-testid":"action-row-anchor",href:h,className:c()(m,t,$),onClick:k,target:g||"_self"},void 0,E):(0,o.A)("span",{"data-testid":"action-row-span",className:c()(m,t,{"ui-pdp-action-row--disabled":n},$),onClick:k,onKeyUp:k,role:"button",tabIndex:"-1"},void 0,E)};b.defaultProps={className:null,disabled:!1,label:null,selected:null,subtitle:null,thumbnail:null,onClick:null,modifier:"primary",url:null,htmlTarget:"_self",figure:null}},4601:(e,l,t)=>{t.d(l,{A:()=>n});const n=t(57396).b},42572:(e,l,t)=>{t.d(l,{A:()=>n});const n=t(4601).A},78696:(e,l,t)=>{t.r(l),t.d(l,{default:()=>g});var n=t(73620),a=t(89379),i=(t(23792),t(3362),t(9391),t(62953),t(96540)),o=t(46942),s=t.n(o),r=t(3959),c=t(37808),d=t(38123),u=t(27300),_=t(42572);const p=(e,l,t,a,i,o)=>{const s=(0,d.default)(a);return(0,n.A)(_.A,{className:"ui-pdp-action__action",label:e.text,url:l,htmlTarget:t,style_blocked:o,modifier:"secondary",figure:s,onClick:i})};var f,m=t(76147),b=t(66146),A=t(74848);const h="ui-pdp-action",v=e=>{const{className:l,type:t,disabled:o,disabled_text:_,style_blocked:v,onClickHandler:g,label:y,size:N,hierarchy:E,icon:$,hasTopSeparator:k,actionType:S,fullWidth:x,buttonProps:C,isLoading:I,saveFrontendStatsd:P,fallbackUrl:T,target:O,trigger_action:w,intervention_id:D}=e,[L,U]=(0,i.useState)(!o&&I);(0,i.useEffect)((()=>{U(!o&&I)}),[o,I]);const B=(0,i.useCallback)((e=>{U(!0),(0,i.startTransition)((()=>{Promise.resolve(g(e)).finally((()=>U(!1)))}))}),[g]),H=(0,a.A)((0,a.A)({},C),{},{className:s()("andes-spinner__icon-base",l,`${h}--${t}`,{[`${h}-${t}--disabled`]:!0===o}),hierarchy:E,disabled:v,size:N,fullWidth:x});if((0,i.useEffect)((()=>{if(P){let l={};switch(S){case u.TH.SEQUENCER:l={key:`${m.rW}.${m.O.VPP_LOAD}`,tags:{is_disabled:Boolean(null==e?void 0:e.disabled),button_type:w||b.PC,main_action_target:Boolean(O),main_action_fallback:Boolean(T),main_action_empty:!O&&!T,intervention_id:D||b.PC},info:(!O||!T)&&{props:e}};break;case u.TH.ASK_QUESTIONS_AI:{const{called_from:t}=e,n="main_actions"===t?m.cY.VPP_LOAD:m.cY.QUESTION_LOAD;l={key:`${m.to}.${n}`,tags:{button_id:`${t}.${b.lp.ASK_QUESTIONS_AI}`,is_disabled:Boolean(null==e?void 0:e.disabled),has_target:Boolean(O),source:"vpp"},info:!O&&{props:e}};break}}P(l)}}),[O,S]),"actionRow"===E)return p(y,H.href,H.target,$,g);const z=k||S===u.TH.ASK_QUESTIONS_AI;return(0,A.jsxs)(A.Fragment,{children:[z&&(f||(f=(0,n.A)("div",{className:"ui-pdp-action-separator"}))),(0,A.jsxs)(c.$n,(0,a.A)((0,a.A)({"data-testid":"button",onClick:B,loading:L},H),{},{srAnnouncement:"",children:[$&&(0,d.default)($.id,`ui-pdp-action-icon--${$.color}`),y&&y.text,o&&_&&(0,n.A)(r.s6,{},void 0,`. ${_}`)]}))]})};v.defaultProps={className:null,disabled:!1,disabled_text:null,onClickHandler:null,label:null,size:null,hierarchy:null,icon:null,style_blocked:!1,hasTopSeparator:!1,buttonProps:{},isLoading:!1,saveFrontendStatsd:null,fallbackUrl:null,target:null,trigger_action:null,called_from:null,intervention_id:null};const g=v},38123:(e,l,t)=>{t.r(l),t.d(l,{default:()=>d});var n=t(89379),a=t(73620),i=(t(89463),t(96540)),o=t(87730),s=t.n(o),r=t(32126),c=t(74848);const d=(e,l)=>{if(!e)return null;let t,o={};if("string"==typeof l?t=l:s()(l)&&(t=null==l?void 0:l.className,o=l),i.isValidElement(e))return(0,a.A)(r.I,{element:e,className:t});const{id:d,color:u,description:_}="string"==typeof e?{id:e}:e;return(0,c.jsx)(r.I,(0,n.A)({id:d,className:t,description:_,color:u},o))}},9391:(e,l,t)=>{var n=t(46518),a=t(96395),i=t(80550),o=t(79039),s=t(97751),r=t(94901),c=t(2293),d=t(93438),u=t(36840),_=i&&i.prototype;if(n({target:"Promise",proto:!0,real:!0,forced:!!i&&o((function(){_.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var l=c(this,s("Promise")),t=r(e);return this.then(t?function(t){return d(l,e()).then((function(){return t}))}:e,t?function(t){return d(l,e()).then((function(){throw t}))}:e)}}),!a&&r(i)){var p=s("Promise").prototype.finally;_.finally!==p&&u(_,"finally",p,{unsafe:!0})}},57396:(e,l,t)=>{t.d(l,{b:()=>n.b,s:()=>n.s});var n=t(40312)}}]);
//# sourceMappingURL=builders-build-button-action.5c83e9a8.js.map