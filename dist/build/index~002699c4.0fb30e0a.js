!function(i){function e(e){for(var n,t,a=e[0],r=e[1],l=e[2],s=0,o=[];s<a.length;s++)t=a[s],m[t]&&o.push(m[t][0]),m[t]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i[n]=r[n]);for(j&&j(e);o.length;)o.shift()();return u.push.apply(u,l||[]),c()}function c(){for(var e,n=0;n<u.length;n++){for(var t=u[n],a=!0,r=1;r<t.length;r++){var l=t[r];0!==m[l]&&(a=!1)}a&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var t={},b={12:0},m={12:0},u=[];function d(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(u){var e=[];b[u]?e.push(b[u]):0!==b[u]&&{0:1}[u]&&e.push(b[u]=new Promise(function(e,a){for(var n=u+".css",r=d.p+n,t=document.getElementsByTagName("link"),l=0;l<t.length;l++){var s=(i=t[l]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===n||s===r))return e()}var o=document.getElementsByTagName("style");for(l=0;l<o.length;l++){var i;if((s=(i=o[l]).getAttribute("data-href"))===n||s===r)return e()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=e,c.onerror=function(e){var n=e&&e.target&&e.target.src||r,t=new Error("Loading CSS chunk "+u+" failed.\n("+n+")");t.request=n,delete b[u],c.parentNode.removeChild(c),a(t)},c.href=r,document.getElementsByTagName("head")[0].appendChild(c)}).then(function(){b[u]=0}));var t=m[u];if(0!==t)if(t)e.push(t[2]);else{var n=new Promise(function(e,n){t=m[u]=[e,n]});e.push(t[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=function(e){return d.p+""+({}[e]||e)+".chunk."+{0:"46283ab3",1:"01fa131f",2:"b7546fd5",3:"90d9f1b2",4:"b925e069"}[e]+".js"}(u),a=function(e){l.onerror=l.onload=null,clearTimeout(s);var n=m[u];if(0!==n){if(n){var t=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+u+" failed.\n("+t+": "+a+")");r.type=t,r.request=a,n[1](r)}m[u]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},d.m=i,d.c=t,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)d.d(t,a,function(e){return n[e]}.bind(null,a));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="./build/",d.oe=function(e){throw console.error(e),e};var n=window.webpackJsonp=window.webpackJsonp||[],a=n.push.bind(n);n.push=e,n=n.slice();for(var r=0;r<n.length;r++)e(n[r]);var j=a;u.push([377,8,5,11,9,10,6,7]),c()}({112:function(e,n,t){e.exports=t(42)(54)},18:function(e,n,t){e.exports=t(42)(45)},2:function(e,n,t){e.exports=t(42)(1)},223:function(e,n,t){e.exports=t(42)(59)},377:function(e,n,t){t(378),e.exports=t(673)},42:function(e,n){e.exports=_dll_vendor_06da7c4c01d28a0f5c0e},616:function(e,n,t){e.exports=t(42)(2)},628:function(e,n,t){var a={"./af":227,"./af.js":227,"./ar":228,"./ar-dz":229,"./ar-dz.js":229,"./ar-kw":230,"./ar-kw.js":230,"./ar-ly":231,"./ar-ly.js":231,"./ar-ma":232,"./ar-ma.js":232,"./ar-sa":233,"./ar-sa.js":233,"./ar-tn":234,"./ar-tn.js":234,"./ar.js":228,"./az":235,"./az.js":235,"./be":236,"./be.js":236,"./bg":237,"./bg.js":237,"./bm":238,"./bm.js":238,"./bn":239,"./bn.js":239,"./bo":240,"./bo.js":240,"./br":241,"./br.js":241,"./bs":242,"./bs.js":242,"./ca":243,"./ca.js":243,"./cs":244,"./cs.js":244,"./cv":245,"./cv.js":245,"./cy":246,"./cy.js":246,"./da":247,"./da.js":247,"./de":248,"./de-at":249,"./de-at.js":249,"./de-ch":250,"./de-ch.js":250,"./de.js":248,"./dv":251,"./dv.js":251,"./el":252,"./el.js":252,"./en-SG":253,"./en-SG.js":253,"./en-au":254,"./en-au.js":254,"./en-ca":255,"./en-ca.js":255,"./en-gb":256,"./en-gb.js":256,"./en-ie":257,"./en-ie.js":257,"./en-il":258,"./en-il.js":258,"./en-nz":259,"./en-nz.js":259,"./eo":260,"./eo.js":260,"./es":261,"./es-do":262,"./es-do.js":262,"./es-us":263,"./es-us.js":263,"./es.js":261,"./et":264,"./et.js":264,"./eu":265,"./eu.js":265,"./fa":266,"./fa.js":266,"./fi":267,"./fi.js":267,"./fo":268,"./fo.js":268,"./fr":269,"./fr-ca":270,"./fr-ca.js":270,"./fr-ch":271,"./fr-ch.js":271,"./fr.js":269,"./fy":272,"./fy.js":272,"./ga":273,"./ga.js":273,"./gd":274,"./gd.js":274,"./gl":275,"./gl.js":275,"./gom-latn":276,"./gom-latn.js":276,"./gu":277,"./gu.js":277,"./he":278,"./he.js":278,"./hi":279,"./hi.js":279,"./hr":280,"./hr.js":280,"./hu":281,"./hu.js":281,"./hy-am":282,"./hy-am.js":282,"./id":283,"./id.js":283,"./is":284,"./is.js":284,"./it":285,"./it-ch":286,"./it-ch.js":286,"./it.js":285,"./ja":287,"./ja.js":287,"./jv":288,"./jv.js":288,"./ka":289,"./ka.js":289,"./kk":290,"./kk.js":290,"./km":291,"./km.js":291,"./kn":292,"./kn.js":292,"./ko":293,"./ko.js":293,"./ku":294,"./ku.js":294,"./ky":295,"./ky.js":295,"./lb":296,"./lb.js":296,"./lo":297,"./lo.js":297,"./lt":298,"./lt.js":298,"./lv":299,"./lv.js":299,"./me":300,"./me.js":300,"./mi":301,"./mi.js":301,"./mk":302,"./mk.js":302,"./ml":303,"./ml.js":303,"./mn":304,"./mn.js":304,"./mr":305,"./mr.js":305,"./ms":306,"./ms-my":307,"./ms-my.js":307,"./ms.js":306,"./mt":308,"./mt.js":308,"./my":309,"./my.js":309,"./nb":310,"./nb.js":310,"./ne":311,"./ne.js":311,"./nl":312,"./nl-be":313,"./nl-be.js":313,"./nl.js":312,"./nn":314,"./nn.js":314,"./pa-in":315,"./pa-in.js":315,"./pl":316,"./pl.js":316,"./pt":317,"./pt-br":318,"./pt-br.js":318,"./pt.js":317,"./ro":319,"./ro.js":319,"./ru":320,"./ru.js":320,"./sd":321,"./sd.js":321,"./se":322,"./se.js":322,"./si":323,"./si.js":323,"./sk":324,"./sk.js":324,"./sl":325,"./sl.js":325,"./sq":326,"./sq.js":326,"./sr":327,"./sr-cyrl":328,"./sr-cyrl.js":328,"./sr.js":327,"./ss":329,"./ss.js":329,"./sv":330,"./sv.js":330,"./sw":331,"./sw.js":331,"./ta":332,"./ta.js":332,"./te":333,"./te.js":333,"./tet":334,"./tet.js":334,"./tg":335,"./tg.js":335,"./th":336,"./th.js":336,"./tl-ph":337,"./tl-ph.js":337,"./tlh":338,"./tlh.js":338,"./tr":339,"./tr.js":339,"./tzl":340,"./tzl.js":340,"./tzm":341,"./tzm-latn":342,"./tzm-latn.js":342,"./tzm.js":341,"./ug-cn":343,"./ug-cn.js":343,"./uk":344,"./uk.js":344,"./ur":345,"./ur.js":345,"./uz":346,"./uz-latn":347,"./uz-latn.js":347,"./uz.js":346,"./vi":348,"./vi.js":348,"./x-pseudo":349,"./x-pseudo.js":349,"./yo":350,"./yo.js":350,"./zh-cn":351,"./zh-cn.js":351,"./zh-hk":352,"./zh-hk.js":352,"./zh-tw":353,"./zh-tw.js":353};function r(e){var n=l(e);return t(n)}function l(e){if(t.o(a,e))return a[e];var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}r.keys=function(){return Object.keys(a)},r.resolve=l,(e.exports=r).id=628},632:function(e,n,t){e.exports=t(42)(23)},652:function(e,n,t){e.exports=t(42)(55)},653:function(e,n,t){(e.exports=t(370)(!1)).push([e.i,"",""])},669:function(e,n,t){(e.exports=t(370)(!1)).push([e.i,"#global-sidebar {\n  float: left;\n  width: 200px;\n  height: 100vh;\n  background: #203A71;\n}\n#global-sidebar button {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #fff;\n}\n#global-sidebar li {\n  list-style: none;\n  height: 38px;\n  line-height: 38px;\n  text-align: left;\n  color: #fff;\n  font-size: 16px;\n  padding: 0 10px;\n}\n#global-sidebar .hide {\n  display: none;\n}\n#global-sidebar .sidebar-logo-wrapper {\n  position: absolute;\n  left: 0;\n  bottom: 20px;\n  width: 100%;\n  height: 50px;\n  background: #203a71;\n}\n#global-sidebar .sidebar-logo-wrapper .sidebar-logo {\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 32px;\n  text-align: center;\n  line-height: 32px;\n  color: #B4D9FF;\n  font-size: 32px;\n  text-indent: 15px;\n}\n#global-sidebar .ant-menu-item-selected {\n  background: #27437b;\n}\n#global-sidebar .ant-menu-item-selected .global-sidebar-subtitle {\n  color: #fff;\n}\n#global-sidebar .ant-menu-sub {\n  box-shadow: none;\n}\n#global-sidebar .ant-menu-submenu-arrow:after,\n#global-sidebar .ant-menu-submenu-arrow:before {\n  background: #B4D9FF;\n}\n#global-sidebar .global-sidebar-ul,\n#global-sidebar .ant-menu-sub {\n  background: #203A71;\n}\n#global-sidebar .ant-menu-submenu-title .global-sidebar-title {\n  height: 20px;\n  vertical-align: top;\n  padding: 10px 0;\n  color: #B4D9FF;\n}\n#global-sidebar .ant-menu-submenu-title .global-sidebar-title i {\n  display: inline-block;\n  font-size: 19px;\n  vertical-align: top;\n}\n#global-sidebar .ant-menu-submenu-title .global-sidebar-title span {\n  display: inline-block;\n  padding: 0 0 0 8px;\n  font-size: 15px;\n  line-height: 38px;\n  vertical-align: top;\n}\n#global-sidebar .global-sidebar-subtitle {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  color: #B4D9FF;\n}\n#global-sidebar .global-sidebar-subtitle i {\n  display: inline-block;\n  padding: 1px 8px 0 0;\n  font-size: 19px;\n  vertical-align: top;\n}\n#global-sidebar .global-sidebar-subtitle span {\n  display: inline-block;\n  font-size: 14px;\n  vertical-align: top;\n}\n/* 引入 icon class 文件 */\n/* 关于这个引用路径，有一个坑，ant.design 我用的dva，默认资源路径为 /public 所以这个引用的实际目录是  /public/fonts/iconfont/iconfont.css */\n/* 设置使用字体的优先级 anticon-user 高 */\n",""])},673:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),l=t(18),s=t.n(l),o=(t(204),t(676)),i=(t(675),t(672)),c=t(644),u=t.n(c),b=(t(143),t(77)),m=t(78),d=t(81),j=t(79),p=t(161),f=t(82),g=t(369),h=t(112),k=(r.a.Component,function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(d.a)(this,Object(j.a)(t).call(this,e))).main=r.a.createRef(),n.state={error:null,errorInfo:null},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,errorInfo:n})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("section",null,"抱歉，代码错误",r.a.createElement("h2",null,String(this.state.error)),r.a.createElement("div",null,this.state.errorInfo.componentStack)):this.props.children}}]),t}(r.a.Component));t(652),t(653);var y=function(e){var n=e.headerInfo,t=n.projectName,a=n.projectLogo;return r.a.createElement("header",{className:"global-header",id:"global-header"},r.a.createElement("a",null,r.a.createElement("img",{src:a,onError:function(e){return e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAoCAYAAAAMjY9+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMTFBMUY2OTYzMkYxMUU1OTFDMkIyODc4QjJEMTlFMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMTFBMUY2QTYzMkYxMUU1OTFDMkIyODc4QjJEMTlFMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxMUExRjY3NjMyRjExRTU5MUMyQjI4NzhCMkQxOUUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxMUExRjY4NjMyRjExRTU5MUMyQjI4NzhCMkQxOUUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KPDKkAAADTRJREFUeNrsW3l0FeUV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"}}),t))},v=(t(175),t(678),t(674));t(669),v.a.SubMenu;function E(e){return r.a.createElement("button",{className:"global-folder",id:"global-folder"},"展开")}function S(e){return e.routes.map(function(e,n){return r.a.createElement("li",{key:e.url},r.a.createElement(h.Link,{to:"/".concat(e.url)},e.name||""))})}var A=function(e){return r.a.createElement("aside",{className:"global-sidebar",id:"global-sidebar"},r.a.createElement(E,null),r.a.createElement(S,{routes:e.routes}))},x=(window.history,Object(a.lazy)(function(){return t.e(2).then(t.bind(null,681))})),w=Object(a.lazy)(function(){return t.e(3).then(t.bind(null,682))}),O=Object(a.lazy)(function(){return t.e(0).then(t.bind(null,683))}),z=Object(a.lazy)(function(){return t.e(4).then(t.bind(null,684))}),M=r.a.lazy(function(){return t.e(1).then(t.bind(null,685))});function R(){return r.a.createElement("div",null,r.a.createElement("span",null,"So...so..lazy.."),r.a.createElement(M,null))}var Y=function(e){function t(e){var n;return Object(b.a)(this,t),n=Object(d.a)(this,Object(j.a)(t).call(this,e)),Object(g.a)(Object(p.a)(n),"onChange",function(e,n){console.log(e,n,"打印时间选择")}),n.main=r.a.createRef(),n.state={showArticle:!1,projectName:"书与月光",projectLogo:"",routes:[{name:"one",url:"one"},{name:"two",url:"two"},{name:"user",url:"user"},{name:"article",url:"article"}]},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=u.a.mark(l);setTimeout(function(){e.setState({showArticle:!0})},3e3),console.log(this.main.current,"mainRef ref object");var t,a,r=(t=[3,2,1],a=0,{next:function(){var e=a>=t.length,n=e?void 0:t[a++];return{value:n,done:e}}});function l(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,1;case 2:return e.next=4,2;case 4:return e.next=6,3;case 6:case"end":return e.stop()}},n)}window.iterator=r,console.log(r.next(),"迭代器");var s=l();console.log(s.next().value),console.log(s.next().value),console.log(s.next().value)}},{key:"render",value:function(){var e=this.state,n={projectName:e.projectName,projectLogo:e.projectLogo};return r.a.createElement(h.HashRouter,{basename:"manage"},r.a.createElement("main",{className:"main",ref:this.main},r.a.createElement(y,{headerInfo:n}),r.a.createElement(A,{routes:this.state.routes}),r.a.createElement(i.a,{onChange:this.onChange}),r.a.createElement(o.a,null,"Antd Button"),r.a.createElement("aside",{ref:"ajaxData"}),r.a.createElement(k,null,r.a.createElement(a.Suspense,{fallback:!1},r.a.createElement(h.Route,{path:"/article",component:x}),r.a.createElement(h.Route,{path:"/user",component:z}),r.a.createElement(h.Route,{path:"/one",component:w}),r.a.createElement(h.Route,{path:"/two",component:O}))),r.a.createElement(a.Suspense,{fallback:!1},r.a.createElement("div",null,r.a.createElement(a.Suspense,{fallback:"Sorry for our lazinessSorry"},r.a.createElement("span",null,"Cast"),r.a.createElement(R,null)))),r.a.createElement("section",{className:"marquee-wrapper"},r.a.createElement("aside",{className:"marquee-area"},r.a.createElement("a",{className:"marquee-item"},"111111"),r.a.createElement("a",{className:"marquee-item"},"22222"),r.a.createElement("a",{className:"marquee-item"},"3333"),r.a.createElement("a",{className:"marquee-item"},"4444"),r.a.createElement("a",{className:"marquee-item"},"5555")))))}}]),t}(r.a.Component);Object(g.a)(Y,"state",{screenWidth:null,showArticle:!1}),Object(g.a)(Y,"defaultProps",{onLoading:!0});var G=Y;s.a.render(r.a.createElement(G,null),document.getElementById("root"))},91:function(e,n,t){e.exports=t(42)(49)}});