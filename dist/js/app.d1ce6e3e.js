(function(t){function e(e){for(var r,i,a=e[0],s=e[1],u=e[2],p=0,f=[];p<a.length;p++)i=a[p],l[i]&&f.push(l[i][0]),l[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==l[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},l={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/auto-calculator/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),l=n.n(r);l.a},"181c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("calculator")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calculator"},[n("div",{staticClass:"table-wrapper"},[n("h1",[t._v("Calculator")]),n("el-table",{attrs:{border:"",data:t.billList}},[n("el-table-column",{attrs:{label:"input-type"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-text":"select","inactive-text":"input"},on:{change:function(n){return t.onInputTypeChange(n,e.$index)}},model:{value:e.row.selectType,callback:function(n){t.$set(e.row,"selectType",n)},expression:"scope.row.selectType"}})]}}])}),n("el-table-column",{attrs:{label:"remark"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.isSelectInput(e.row)?[n("el-select",{staticStyle:{width:"100%"},model:{value:e.row.remark,callback:function(n){t.$set(e.row,"remark",n)},expression:"scope.row.remark"}},t._l(t.remarkOptions,function(e,r){return n("el-option",{key:"pf-op-"+r,attrs:{value:e,label:e,disabled:t.isSelected(e)}})}),1)]:[n("el-input",{model:{value:e.row.remark,callback:function(n){t.$set(e.row,"remark",n)},expression:"scope.row.remark"}})]]}}])}),n("el-table-column",{attrs:{label:"amount"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{ref:e.row.id,nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem(e)}},model:{value:e.row.count,callback:function(n){t.$set(e.row,"count",t._n(n))},expression:"scope.row.count"}})]}}])}),n("el-table-column",{attrs:{label:"operation",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"delete-button",attrs:{type:"text"},on:{click:function(n){return t.deleteItem(e.row.id)}}},[t._v("Delete")])]}}])})],1)],1),n("footer",{staticClass:"calc-footer"},[n("div",{staticClass:"btn-wrapper"},[n("el-popover",{attrs:{placement:"top"},model:{value:t.popoverShow,callback:function(e){t.popoverShow=e},expression:"popoverShow"}},[n("p",[t._v("\n          Delete All ?\n        ")]),n("flex-box",{attrs:{justify:"flex-end"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:t.hidePopover}},[t._v("\n            Cancel\n          ")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:t.onClearAll}},[t._v("\n            Yes\n          ")])],1),n("el-button",{attrs:{slot:"reference",disabled:t.isEmpty},slot:"reference"},[t._v("\n          Clear\n        ")])],1),n("el-button",{style:t.addBtnStyle,attrs:{type:"primary"},on:{click:t.addItem}},[t._v("\n        ADD\n      ")])],1),n("p",{staticClass:"total-text"},[t._v("Total: "+t._s(t.total||0))])])])},a=[],s=(n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c--flex-box",class:{pointer:t.pointer},style:t.style},[t._t("default")],2)}),u=[],c={name:"FlexBox",props:{justify:{type:String,default:"start"},wrap:{type:String,default:"nowrap"},align:{type:String,default:"start"},padding:{type:String,default:""},direction:{type:String,default:"flex-start"},pointer:{type:Boolean,default:!1}},computed:{style:function(){return{"justify-content":this.justify,"flex-wrap":this.wrap,"flex-direction":this.direction,"align-items":this.align}}},mounted:function(){this.padding&&(this.$el.style.paddingTop=this.padding,this.$el.style.paddingBottom=this.padding)}},p=c,f=(n("9416"),n("2877")),d=Object(f["a"])(p,s,u,!1,null,"55933d41",null),h=d.exports,b={components:{"flex-box":h},data:function(){return{remarkOptions:["京东白条","京东金条","花呗","借呗","农商银行","招商银行","广发银行"],billList:[],addBtnStyle:{marginTop:"20px"},popoverShow:!1}},computed:{total:function(){var t=this.billList.map(function(t){return t.count})||[],e=function(t,e){return+t+ +e};return t.length>0?t.reduce(e):0},isEmpty:function(){return 0===this.billList.length}},watch:{billList:{deep:!0,handler:function(t){this.refresnCache(t)}}},created:function(){this.getCache()},methods:{refresnCache:function(t){localStorage.setItem("bill_list",JSON.stringify(t))},getCache:function(){var t=localStorage.getItem("bill_list")||"[]";this.billList=JSON.parse(t)},addItem:function(){var t=this,e={remark:"",count:0,selecteType:!1,id:(new Date).getTime()};this.billList.push(e),this.$nextTick(function(){t.focusInput(e.id)})},focusInput:function(t){this.$refs[t].focus()},deleteItem:function(t){this.billList=this.billList.filter(function(e){return e.id!==t})},isSelected:function(t){var e=this.billList.map(function(t){return t.remark});return e.includes(t)},isSelectInput:function(t){return t.selectType},onInputTypeChange:function(t,e){this.$set(this.billList[e],"remark","")},resetList:function(){this.billList=[]},hidePopover:function(){this.popoverShow=!1},onClearAll:function(){this.resetList(),this.hidePopover()}}},y=b,m=(n("85cf"),Object(f["a"])(y,i,a,!1,null,null,null)),v=m.exports,w={name:"App",components:{calculator:v}},g=w,k=(n("034f"),Object(f["a"])(g,l,o,!1,null,null,null)),x=k.exports,_=n("5c96"),S=n.n(_);n("0fae");r["default"].use(S.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,e,n){},"85cf":function(t,e,n){"use strict";var r=n("ba12"),l=n.n(r);l.a},9416:function(t,e,n){"use strict";var r=n("181c"),l=n.n(r);l.a},ba12:function(t,e,n){}});
//# sourceMappingURL=app.d1ce6e3e.js.map