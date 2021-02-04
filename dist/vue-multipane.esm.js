var LAYOUT_HORIZONTAL="horizontal",LAYOUT_VERTICAL="vertical",script={name:"multipane",props:{layout:{type:String,default:LAYOUT_VERTICAL}},data:function(){return{isResizing:!1}},computed:{classnames:function(){return["multipane","layout-"+this.layout.slice(0,1),this.isResizing?"is-resizing":""]},cursor:function(){return this.isResizing?this.layout==LAYOUT_VERTICAL?"ew-resize":"ns-resize":""},userSelect:function(){return this.isResizing?"none":""}},methods:{onMouseDown:function(e){var n=e.target,t=e.pageX,i=e.pageY;if(n.className&&n.className.match("multipane-resizer")){var r=this,s=r.$el,o=r.layout,_=n.previousElementSibling,a=_.offsetWidth,l=_.offsetHeight,u=!!(_.style.width+"").match("%"),p=window.addEventListener,d=window.removeEventListener,A=function(e,n){if(void 0===n&&(n=0),o==LAYOUT_VERTICAL){var t=s.clientWidth,i=e+n;return _.style.width=u?i/t*100+"%":i+"px"}if(o==LAYOUT_HORIZONTAL){var r=s.clientHeight,a=e+n;return _.style.height=u?a/r*100+"%":a+"px"}};r.isResizing=!0;var c=A();r.$emit("pane-resize-start",_,n,c);var m=!0,v=0,f=0,h=function(){c=o==LAYOUT_VERTICAL?A(a,v-t):A(l,f-i),r.$emit("pane-resize",_,n,c),m=!0},y=function(e){v=e.pageX,f=e.pageY,m&&(m=!1,requestAnimationFrame(h))},C=function(){c=A(o==LAYOUT_VERTICAL?_.clientWidth:_.clientHeight),r.isResizing=!1,d("mousemove",y),d("mouseup",C),r.$emit("pane-resize-stop",_,n,c)};p("mousemove",y),p("mouseup",C)}}}};function normalizeComponent(e,n,t,i,r,s,o,_,a,l){"boolean"!=typeof o&&(a=_,_=o,o=!1);var u,p="function"==typeof t?t.options:t;if(e&&e.render&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,r&&(p.functional=!0)),i&&(p._scopeId=i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},p._ssrRegister=u):n&&(u=o?function(e){n.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,_(e))}),u)if(p.functional){var d=p.render;p.render=function(e,n){return u.call(n),d(e,n)}}else{var A=p.beforeCreate;p.beforeCreate=A?[].concat(A,u):[u]}return t}var HEAD,isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return function(e,n){return addStyle(e,n)}}var styles={};function addStyle(e,n){var t=isOldIE?n.media||"default":e,i=styles[t]||(styles[t]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var r=n.source;if(n.map&&(r+="\n/*# sourceURL="+n.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",n.media&&i.element.setAttribute("media",n.media),void 0===HEAD&&(HEAD=document.head||document.getElementsByTagName("head")[0]),HEAD.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(r),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var s=i.ids.size-1,o=document.createTextNode(r),_=i.element.childNodes;_[s]&&i.element.removeChild(_[s]),_.length?i.element.insertBefore(o,_[s]):i.element.appendChild(o)}}}var __vue_script__=script,__vue_render__=function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.classnames,style:{cursor:this.cursor,userSelect:this.userSelect},on:{mousedown:this.onMouseDown}},[this._t("default")],2)},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;var __vue_inject_styles__=function(e){e&&e("data-v-578937f0_0",{source:".multipane {\n  display: flex;\n}\n.multipane.layout-h {\n  flex-direction: column;\n}\n.multipane.layout-v {\n  flex-direction: row;\n}\n.multipane > div {\n  position: relative;\n  z-index: 1;\n}\n.multipane-resizer {\n  display: block;\n  position: relative;\n  z-index: 2;\n}\n.layout-h > .multipane-resizer {\n  width: 100%;\n  height: 10px;\n  margin-top: -10px;\n  top: 5px;\n  cursor: ns-resize;\n}\n.layout-v > .multipane-resizer {\n  width: 10px;\n  height: 100%;\n  margin-left: -10px;\n  left: 5px;\n  cursor: ew-resize;\n}\n\n/*# sourceMappingURL=multipane.vue.map */",map:{version:3,sources:["C:\\Users\\John\\Projects\\vue-multipane\\src\\multipane.vue","multipane.vue"],names:[],mappings:"AASA;EACA,aAAA;ACRA;ADUA;EACA,sBAAA;ACRA;ADWA;EACA,mBAAA;ACTA;ADaA;EACA,kBAAA;EACA,UAAA;ACVA;ADaA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;ACVA;ADaA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,QAAA;EACA,iBAAA;ACVA;ADaA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,iBAAA;ACVA;;AAEA,wCAAwC",file:"multipane.vue",sourcesContent:['<template>\r\n  <div :class="classnames" :style="{ cursor, userSelect }" @mousedown="onMouseDown">\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n\r\n<script src="./multipane.js"><\/script>\r\n\r\n<style lang="scss">\r\n.multipane {\r\n    display: flex;\r\n\r\n    &.layout-h {\r\n        flex-direction: column;\r\n    }\r\n\r\n    &.layout-v {\r\n        flex-direction: row;\r\n    }\r\n}\r\n\r\n.multipane > div {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.multipane-resizer {\r\n  display: block;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.layout-h > .multipane-resizer {\r\n  width: 100%;\r\n  height: 10px;\r\n  margin-top: -10px;\r\n  top: 5px;\r\n  cursor: ns-resize;\r\n}\r\n\r\n.layout-v > .multipane-resizer {\r\n  width: 10px;\r\n  height: 100%;\r\n  margin-left: -10px;\r\n  left: 5px;\r\n  cursor: ew-resize;\r\n}\r\n</style>\r\n',".multipane {\n  display: flex;\n}\n.multipane.layout-h {\n  flex-direction: column;\n}\n.multipane.layout-v {\n  flex-direction: row;\n}\n\n.multipane > div {\n  position: relative;\n  z-index: 1;\n}\n\n.multipane-resizer {\n  display: block;\n  position: relative;\n  z-index: 2;\n}\n\n.layout-h > .multipane-resizer {\n  width: 100%;\n  height: 10px;\n  margin-top: -10px;\n  top: 5px;\n  cursor: ns-resize;\n}\n\n.layout-v > .multipane-resizer {\n  width: 10px;\n  height: 100%;\n  margin-left: -10px;\n  left: 5px;\n  cursor: ew-resize;\n}\n\n/*# sourceMappingURL=multipane.vue.map */"]},media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,!1,createInjector,void 0,void 0),__vue_render__$1=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"multipane-resizer"},[this._t("default")],2)},__vue_staticRenderFns__$1=[];__vue_render__$1._withStripped=!0;var __vue_inject_styles__$1=void 0,__vue_scope_id__$1=void 0,__vue_module_identifier__$1=void 0,__vue_is_functional_template__$1=!1,__vue_component__$1=normalizeComponent({render:__vue_render__$1,staticRenderFns:__vue_staticRenderFns__$1},__vue_inject_styles__$1,{},__vue_scope_id__$1,__vue_is_functional_template__$1,__vue_module_identifier__$1,!1,void 0,void 0,void 0);"undefined"!=typeof window&&window.Vue&&(window.Vue.component("multipane",__vue_component__),window.Vue.component("multipane-resizer",__vue_component__$1));export{__vue_component__ as Multipane,__vue_component__$1 as MultipaneResizer};
