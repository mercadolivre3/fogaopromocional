"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[55596],{23800:(e,o,a)=>{a.d(o,{A:()=>r});var t=a(67627);a(96540);const r=e=>{let{color:o,i18n:a,srLabel:r}=e;return(0,t._)("svg",{"aria-hidden":r?void 0:!r,"aria-label":r||void 0,role:r?"img":void 0,width:"20",height:"20",viewBox:"0 0 20 20",fill:o},void 0,r&&(0,t._)("title",{},void 0,r),(0,t._)("path",{d:"M9.3998 9.39498V2.79498H10.5998V9.39498H17.1998V10.595H10.5998V17.195H9.3998V10.595H2.7998V9.39498H9.3998Z",fill:o}))};r.defaultProps={color:"rgba(0, 0, 0, 0.9)",srLabel:void 0}},81948:(e,o,a)=>{a.d(o,{A:()=>r});var t=a(67627);a(96540);const r=e=>{let{color:o,i18n:a,srLabel:r}=e;return(0,t._)("svg",{"aria-hidden":r?void 0:!r,"aria-label":r||void 0,role:r?"img":void 0,width:"20",height:"20",viewBox:"0 0 20 20",fill:o},void 0,r&&(0,t._)("title",{},void 0,r),(0,t._)("path",{d:"M2.7998 10.595H17.1998V9.39502H2.7998V10.595Z",fill:o}))};r.defaultProps={color:"rgba(0, 0, 0, 0.9)",srLabel:void 0}},9688:(e,o,a)=>{a.d(o,{E:()=>A});var t=a(91702),r=a(73620),i=a(89379),l=a(80045),s=(a(23792),a(62953),a(96540)),n=a(46942),c=a.n(n),d=a(2714),m=a(87774);const u=function(e,o){void 0===o&&(o="grid-card");try{var a;const t="poly-card__portada",r=`poly-card--${o} .poly-card__content`,i=`poly-card--${o} .poly-card__footer`,l=Array.from(e.querySelectorAll(`.${t}`)),s=Array.from(e.querySelectorAll(`.${r}:not(.${t})`)),n=Array.from(e.querySelectorAll(`.${i}`)),c=l.map((e=>e.getBoundingClientRect().height)).sort(((e,o)=>o-e))[0]+(e=>{try{var o,a;return parseInt(null==(o=window)?void 0:o.getComputedStyle(e).marginTop,10)+parseInt(null==(a=window)?void 0:a.getComputedStyle(e).marginBottom,10)}catch(e){return 0}})(l[0]),d=s.map((e=>e.getBoundingClientRect().height)).sort(((e,o)=>o-e))[0],m=null!=(a=n.map((e=>e.getBoundingClientRect().height)).sort(((e,o)=>o-e))[0])?a:0,u=o.includes("list")?Math.max(d,c):d+c+m;return Number.isNaN(u)?0:u}catch(e){return 0}};var p=a(74848);const g=["className","classnameFromResponse","classNamesMap","classNamesIndexMap","slidesPerView","Card","cardProps","IconFactory","buttonSize","hideRebates","onItemClick","onBookmarkClick","onTitleTagIconClick","bookmarkedItems","bookmarkText","disableHover","fixedHeight","arrowsSize","isPolycard","cardType","paginationConfig","carouselSpacing","onResize","initialSlide","minItemsToShow"],y="".concat(m.OO,"-carousel-snapped"),h=e=>{let{className:o="",classnameFromResponse:a="",classNamesMap:n={},classNamesIndexMap:m={},slidesPerView:h=5,Card:v,cardProps:A,IconFactory:b,buttonSize:S="medium",hideRebates:f=!1,onItemClick:_,onBookmarkClick:C,onTitleTagIconClick:k,bookmarkedItems:I,bookmarkText:w,disableHover:x,fixedHeight:B,arrowsSize:N="large",isPolycard:T=!1,cardType:F,paginationConfig:H=null,carouselSpacing:P=12,onResize:L=null,initialSlide:R,minItemsToShow:V}=e,z=(0,l.A)(e,g);const E=(0,s.useRef)(),[M,O]=(0,s.useState)(!1);(0,s.useEffect)((()=>{if(e=E.current,void 0===(o=F)&&(o="grid-card"),Boolean(e&&e.querySelectorAll(`.poly-card--${o}`))){const e=u(E.current,F);L&&L(e)}var e,o;O(!0)}),[E]);const{items:$,title:q,titleWithIcons:j,titleTag:D,subtitle:K,viewMoreAction:U,footer:W,href:Z,cardSeeMore:G=null}=z;return $&&($.length>=h||$.length>=V)&&(0,p.jsxs)("div",{className:c()(y,o,a,{["".concat(y,"--fixed-height")]:B}),ref:E,children:[q&&(0,r.A)("div",{className:"".concat(y,"__header")},void 0,(0,r.A)("div",{className:"".concat(y,"__header-titles")},void 0,(0,r.A)(t.hz,{title:q,titleWithIcons:j,href:Z,IconFactory:b}),K&&(0,r.A)(t.VR,{text:K.text,url:K.url,IconFactory:b,advertisingLabel:K.advertising_label,accessibilityText:q}),D&&(0,r.A)(t.bL,{text:D.text,values:D.values,styles:D.styles,IconFactory:b,onTitleTagIconClick:k})),U&&(0,r.A)("div",{},void 0,(0,r.A)(t.sz,{id:U.id,target:U.target,label:U.label,buttonSize:S,IconFactory:b}))),(0,r.A)(d.G,{strictBoundaries:!1,srLabel:q,arrows:M&&{size:N,visibility:"always"},spacing:P,slidesPerView:h,pagination:H,initialSlide:R},void 0,(e=>{const o=e.map(((e,o)=>{const a=T?e.metadata.id:e.id,t=e.CustomCard||v,l=n[a],s=m[o];return(0,r.A)(d.j5,{},"recommendations-".concat(a),(0,p.jsx)(t,(0,i.A)((0,i.A)((0,i.A)({},A),e),{},{classNameFromMap:l,classNameFromIndex:s,IconFactory:b,onItemClick:_,onBookmarkClick:C,bookmarkedItems:I,bookmarkText:w,hideRebates:f,disableHover:x||!M,number:o})))}));return G&&o.push((0,r.A)(d.j5,{},"recommendations-see-more",(0,p.jsx)(t.v$,(0,i.A)({},G)))),o})($)),W&&(0,r.A)(t.gb,{footerText:W.text,href:W.link,IconFactory:b})]})};h.defaultProps={measuringFlag:e=>e&&e.querySelector(".andes-carousel-snapped"),measuringHeight:e=>{const o=e.querySelector(".andes-carousel-snapped"),a=e.querySelector(".andes-carousel-snapped__slide");return o.getBoundingClientRect().height-(parseFloat(window.getComputedStyle(o).paddingTop)||0)-(parseFloat(window.getComputedStyle(o).paddingBottom)||0)-(parseFloat(window.getComputedStyle(a).marginBottom)||0)}};var v=h;const A=(0,t.QA)(v)},87774:(e,o,a)=>{a.d(o,{OO:()=>t,kt:()=>r,th:()=>i});const t="ui-recommendations",r="".concat(t,"-comparator"),i="".concat(t,"-combos");"".concat(t,"-coupon")},74892:(e,o,a)=>{a.r(o),a.d(o,{default:()=>d});var t=a(89379),r=a(80045),i=(a(96540),a(9688)),l=a(3071),s=a(23150),n=a(74848);const c=["isPolycard","thousandSeparator","decimalSeparator","featureName","runCatchErrorBoundary"],d=e=>{let{isPolycard:o,thousandSeparator:a,decimalSeparator:d,featureName:m,runCatchErrorBoundary:u=()=>{}}=e,p=(0,r.A)(e,c);try{return(0,n.jsx)(i.E,(0,t.A)((0,t.A)({Card:s.dk,contextProps:{type:"list-card",thousandSeparator:a,decimalSeparator:d},cardProps:{polyClassName:"recos-polycard poly-card--mobile"},isPolycard:o,IconFactory:l.A},p),{},{minItemsToShow:"carousel_above_seller"===m?1:void 0,runCatchErrorBoundary:u}))}catch(e){return u(e)}}},3071:(e,o,a)=>{a.d(o,{A:()=>t});const t=a(38123).default},91319:(e,o,a)=>{a.d(o,{Ay:()=>t});const t=a(14269).Ay}}]);
//# sourceMappingURL=components-recommendations-carousel-snapped-horizontal.6eafa550.js.map