"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[82061],{82061:(e,t,a)=>{a.d(t,{A_:()=>E,Ay:()=>E});var n,s=a(58168),o=a(80045),l=a(96540),i=a(46942),r=a.n(i),c=a(73620),d=a(8494),u=a(69247),p=a(21979),h=a(39830),m=a(25925),f=a(3959),g=a(89379),x=(a(48226),a(30974),a(81639)),v=a(89692),A=a.n(v),C={module:"@andes/textfield",locale:"en-US",translations:{"andes-textfield{0} caracteres restantes":[null,"{0} remaining characters"],"andes-textfieldMaximo {0} caracteres":[null,"Maximum of {0} characters"],"andes-textfieldCampo de texto valido":[null,"Valid text field"],"andes-textfieldCampo de texto procesando":[null,"Text field processing"],"andes-textfieldBorrar":[null,"Remove"],"andes-textfieldDígito {0}":[null,"Digit {0}"],"andes-textfieldMostrar contraseña":[null,"Show Password"]}},b={module:"@andes/textfield",locale:"es-AR",translations:{"andes-textfield{0} caracteres restantes":[null,"{0} caracteres restantes"],"andes-textfieldMaximo {0} caracteres":[null,"Máximo {0} caracteres"],"andes-textfieldCampo de texto valido":[null,"Campo de texto valido"],"andes-textfieldCampo de texto procesando":[null,"Campo de texto procesando"],"andes-textfieldBorrar":[null,"Borrar"],"andes-textfieldDígito {0}":[null,"Dígito {0}"],"andes-textfieldMostrar contraseña":[null,"Mostrar Contraseña"]}},_={module:"@andes/textfield",locale:"pt-BR",translations:{"andes-textfield{0} caracteres restantes":[null,"{0} caracteres restantes"],"andes-textfieldMaximo {0} caracteres":[null,"Máximo de {0} caracteres"],"andes-textfieldCampo de texto valido":[null,"Campo de texto válido"],"andes-textfieldCampo de texto procesando":[null,"Processamento de campo de texto"],"andes-textfieldBorrar":[null,"Excluir"],"andes-textfieldDígito {0}":[null,"Dígito {0}"],"andes-textfieldMostrar contraseña":[null,"Mostrar Senha"]}};var w,H=e=>{let{namespace:t}=e;return(0,c.A)("span",{className:"".concat(t,"__error-icon"),"aria-hidden":!0},void 0,n||(n=(0,c.A)(h.A,{color:"white"})))};var N=e=>{let{namespace:t,notificationsLabel:a}=e;const n=(0,m.A)();return(0,c.A)("span",{role:"status","aria-live":"polite"},void 0,(0,c.A)(f.s6,{},void 0,n&&a),(0,c.A)("svg",{className:"".concat(t,"__validated-icon"),"aria-hidden":!0,width:"24",height:"18",viewBox:"0 0 24 24"},void 0,w||(w=(0,c.A)("path",{fill:"#00A650",d:"M10.182 14.094l6.865-6.865L18.59 8.77l-8.408 8.408-4.772-4.771 1.543-1.543z"}))))};var F=e=>{let{message:t,messageAction:a,messageActionOnClick:n,messageShow:s,helper:o}=e;return{helper:t||o,action:a,onActionClick:n,show:!1!==s}};l.Component;var S;var B=e=>{let{namespace:t,onClick:a,"aria-label":n=""}=e;return(0,c.A)("button",{"aria-label":n,className:"".concat(t,"__clear-icon"),onClick:a,onMouseDown:e=>e.preventDefault()},void 0,S||(S=(0,c.A)("svg",{width:"16",height:"16",viewBox:"0 0 16 16"},void 0,(0,c.A)("path",{fill:"#000",fillOpacity:".45",fillRule:"nonzero",d:"M3.2 2.347l4.802 4.802 4.795-4.793.848.848-4.794 4.794 4.794 4.794-.848.848-4.794-4.794L3.2 13.649l-.848-.848 4.802-4.803-4.802-4.803.848-.848z"}))))};const L="andes-form-control",M=("".concat(L,"__split-button"),"andes-textfield"),R=["centered","children","className","clear","countdown","disabled","defaultValue","embeddedChildren","focus","id","innerRef","inputProps","label","labelSrOnly","maxLength","message","messageAction","messageActionOnClick","messageShow","modifier","multiline","numeric","onChange","placeholder","prefix","rows","select","setField","split","srLabel","suffix","value","autoFocus"];var y;const D={target:{value:""}};class O extends l.Component{constructor(e){super(e);const t=String(e.defaultValue||e.value||"");this.state={height:"auto",countdown:t.length,focused:e.autoFocus||!1},this.isUncontrolledValue=void 0===e.value,this.setField=this.setField.bind(this),this.setRef=this.setRef.bind(this),this.onBlurHandler=this.onBlurHandler.bind(this),this.onFocusHandler=this.onFocusHandler.bind(this),this.onInputHandler=this.onInputHandler.bind(this),this.onChangeHandler=this.onChangeHandler.bind(this),this.onClearHandler=this.onClearHandler.bind(this)}componentDidMount(){const{multiline:e=!1,focus:t=!1,select:a=!1,autoFocus:n=!1}=this.props,{field:s}=this;e&&s&&A()(s),(t||n)&&(0,p.w)(s),a&&(null==s||s.select())}UNSAFE_componentWillReceiveProps(e){const{multiline:t}=this.props,{field:a}=this,{value:n,focus:s,select:o,countdown:l}=e;t&&a&&A().update(a),s&&(null==a||a.focus()),o&&(null==a||a.select()),l&&n&&n!==(null==a?void 0:a.value)&&this.setState({countdown:String(n).length})}onBlurHandler(e){const{onBlur:t}=this.props;this.setState({focused:!1}),t&&t(e)}onFocusHandler(e){const{onFocus:t}=this.props;this.setState({focused:!0}),t&&t(e)}onInputHandler(e){const{onInput:t}=this.props,{target:{value:a}}=e;this.setState({countdown:a.length}),"function"==typeof t&&t(e)}onChangeHandler(e){const{onChange:t}=this.props;"function"==typeof t&&t(e)}onClearHandler(){const{onChange:e}=this.props,{field:t,isUncontrolledValue:a,onInputHandler:n,onChangeHandler:s}=this;a&&(t.value=""),n(D),e&&s(D)}setField(e){const{setField:t}=this.props;t&&t(e),this.field=e}setRef(e){const{innerRef:t}=this.props;if("function"==typeof t)return t(e);t&&(t.current=e)}get helperConfig(){const{message:e,messageAction:t,messageActionOnClick:a,messageShow:n,helper:s}=this.props;return F({message:e,messageAction:t,messageActionOnClick:a,messageShow:n,helper:s})}renderChildren(){const{children:e,embeddedChildren:t=!0}=this.props;return t?(0,c.A)("div",{className:"".concat(L,"__embedded")},void 0,e):e}renderlabel(){const{label:e,labelSrOnly:t}=this.props;return t?(0,c.A)(f.s6,{},void 0,e):(0,c.A)("span",{className:"".concat(L,"__label")},void 0,e)}renderHelper(){const{modifier:e,numeric:t=!1,id:a}=this.props,{helper:n,show:s,action:o,onActionClick:i}=this.helperConfig,r=("error"===e||"warning"===e)&&n&&!t&&(y||(y=(0,c.A)(H,{namespace:L})));return l.createElement(l.Fragment,null,r,s&&(n||o)&&(0,c.A)("span",{id:"".concat(a,"-message"),className:"".concat(L,"__message")},void 0,n,i&&o&&(0,c.A)("span",{onClick:i,className:"".concat(L,"__message-action")},void 0,o)))}render(){const e=this.props,{centered:t=!1,children:a,className:n,clear:i=!1,countdown:p=!1,disabled:h=!1,defaultValue:m,embeddedChildren:v,focus:A,id:w,innerRef:H,inputProps:F={},label:S,labelSrOnly:y,maxLength:D=120,message:O,messageAction:k,messageActionOnClick:E,messageShow:I,modifier:U,multiline:V=!1,numeric:P=!1,onChange:z,placeholder:T,prefix:K="",rows:W=1,select:j,setField:q,split:G=!1,srLabel:J,suffix:Q="",value:X,autoFocus:Y}=e,Z=(0,o.A)(e,R),{focused:$,height:ee,countdown:te}=this.state,{helper:ae,action:ne}=this.helperConfig,se=!P&&!G&&(p||ae||ne),oe=r()(L,"".concat(L,"--textfield"),n,{["".concat(L,"--multiline")]:V,["".concat(L,"--countdown")]:p,["".concat(L,"--centered")]:t,["".concat(L,"--focused")]:$,["".concat(L,"--").concat(U)]:U,["".concat(L,"--disabled")]:h}),le=(0,g.A)((0,g.A)((0,g.A)({},Z),F),{},{id:w,defaultValue:m,value:X,className:r()("".concat(L,"__field"),{["".concat(L,"__field--multiline")]:V}),disabled:h||"readonly"===U,maxLength:D,style:V?{height:ee}:{},placeholder:T,onBlur:this.onBlurHandler,onFocus:this.onFocusHandler,onChange:this.onChangeHandler,ref:this.setField,"aria-invalid":"error"===U||"warning"===U||(null==F?void 0:F["aria-invalid"])||Z["aria-invalid"],"aria-label":J,"aria-describedby":(()=>{const{"aria-describedby":e}=F;return G?e:(ae||ne)&&p?"".concat(w,"-message ").concat(w,"-count"):p?"".concat(w,"-count"):ae||ne?"".concat(w,"-message"):void 0})(),rows:W,autoFocus:A||Y}),ie=V?"textarea":"input";return(0,c.A)(u.Ri.Consumer,{},void 0,(e=>{const t=(0,u.UO)(e,C,b,_);return l.createElement("div",{className:oe,ref:this.setRef},S&&(0,c.A)("label",{htmlFor:w},void 0,this.renderlabel()),(0,c.A)(d.v,{within:!0,isTextInput:!0,focusRingClass:$?"visible-focused":""},void 0,(0,c.A)("div",{className:"".concat(L,"__control")},void 0,K&&(0,c.A)("span",{className:"".concat(L,"__prefix")},void 0,K),l.createElement(ie,(0,s.A)({key:"field"},le,{onInput:this.onInputHandler})),Q&&(0,c.A)("span",{className:"".concat(L,"__suffix")},void 0,Q),"completed"===U&&(0,c.A)(N,{namespace:L,notificationsLabel:t.pgettext(M,"Campo de texto valido")}),"indeterminate"===U&&(0,c.A)(x.A,{className:"".concat(L,"--textfield-progress"),size:"xsmall",srAnnouncement:t.pgettext(M,"Campo de texto procesando"),srLabel:t.pgettext(M,"Campo de texto procesando")}),i&&(0,c.A)(B,{"aria-label":t.pgettext(M,"Borrar"),namespace:L,onClick:this.onClearHandler}),a&&this.renderChildren())),se&&(0,c.A)("div",{className:"".concat(L,"__bottom")},void 0,this.renderHelper(),p&&l.createElement(l.Fragment,null,(0,c.A)("span",{id:"".concat(w,"-countdown-progress"),className:"".concat(L,"__countdown"),role:"progressbar","aria-valuenow":te,"aria-valuemin":0,"aria-valuemax":Number(D),"aria-label":t.pgettext(M,"Maximo {0} caracteres",D)},void 0,"".concat(te," / ").concat(D)),(0,c.A)(f.s6,{id:"".concat(w,"-count"),"aria-live":"polite","aria-atomic":"true"},void 0,t.pgettext(M,"{0} caracteres restantes",Number(D)-te)))))}))}}O.displayName="TextField";var k=O;var E=function(){const e=(0,l.forwardRef)(((e,t)=>{const a=(0,u.Bi)(e.id);return l.createElement(k,(0,s.A)({innerRef:t},e,{id:a}))}));return e.displayName="TextfieldContainer",e.defaultProps={id:void 0},e}()}}]);
//# sourceMappingURL=82061.c9e187f4.js.map