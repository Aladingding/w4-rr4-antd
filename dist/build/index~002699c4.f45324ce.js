!function(i){function e(e){for(var n,t,a=e[0],r=e[1],o=e[2],s=0,l=[];s<a.length;s++)t=a[s],u[t]&&l.push(u[t][0]),u[t]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i[n]=r[n]);for(m&&m(e);l.length;)l.shift()();return d.push.apply(d,o||[]),c()}function c(){for(var e,n=0;n<d.length;n++){for(var t=d[n],a=!0,r=1;r<t.length;r++){var o=t[r];0!==u[o]&&(a=!1)}a&&(d.splice(n--,1),e=b(b.s=t[0]))}return e}var t={},u={5:0},d=[];function b(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,b),n.l=!0,n.exports}b.e=function(o){var e=[],t=u[o];if(0!==t)if(t)e.push(t[2]);else{var n=new Promise(function(e,n){t=u[o]=[e,n]});e.push(t[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,b.nc&&s.setAttribute("nonce",b.nc),s.src=function(e){return b.p+""+({}[e]||e)+".chunk."+{0:"c03b7006",1:"336c52f2",2:"66976302",3:"a02f80ed",4:"bd69b82d"}[e]+".js"}(o),a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=u[o];if(0!==n){if(n){var t=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+o+" failed.\n("+t+": "+a+")");r.type=t,r.request=a,n[1](r)}u[o]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},b.m=i,b.c=t,b.d=function(e,n,t){b.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},b.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.t=function(n,e){if(1&e&&(n=b(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(b.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)b.d(t,a,function(e){return n[e]}.bind(null,a));return t},b.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return b.d(n,"a",n),n},b.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},b.p="./build/",b.oe=function(e){throw console.error(e),e};var n=window.webpackJsonp=window.webpackJsonp||[],a=n.push.bind(n);n.push=e,n=n.slice();for(var r=0;r<n.length;r++)e(n[r]);var m=a;d.push([378,9,6,12,10,11,7,8]),c()}({114:function(e,n,t){e.exports=t(44)(54)},18:function(e,n,t){e.exports=t(44)(45)},2:function(e,n,t){e.exports=t(44)(1)},225:function(e,n,t){e.exports=t(44)(59)},378:function(e,n,t){t(379),e.exports=t(686)},44:function(e,n){e.exports=_dll_vendor_06da7c4c01d28a0f5c0e},620:function(e,n,t){e.exports=t(44)(2)},636:function(e,n,t){var a={"./af":229,"./af.js":229,"./ar":230,"./ar-dz":231,"./ar-dz.js":231,"./ar-kw":232,"./ar-kw.js":232,"./ar-ly":233,"./ar-ly.js":233,"./ar-ma":234,"./ar-ma.js":234,"./ar-sa":235,"./ar-sa.js":235,"./ar-tn":236,"./ar-tn.js":236,"./ar.js":230,"./az":237,"./az.js":237,"./be":238,"./be.js":238,"./bg":239,"./bg.js":239,"./bm":240,"./bm.js":240,"./bn":241,"./bn.js":241,"./bo":242,"./bo.js":242,"./br":243,"./br.js":243,"./bs":244,"./bs.js":244,"./ca":245,"./ca.js":245,"./cs":246,"./cs.js":246,"./cv":247,"./cv.js":247,"./cy":248,"./cy.js":248,"./da":249,"./da.js":249,"./de":250,"./de-at":251,"./de-at.js":251,"./de-ch":252,"./de-ch.js":252,"./de.js":250,"./dv":253,"./dv.js":253,"./el":254,"./el.js":254,"./en-SG":255,"./en-SG.js":255,"./en-au":256,"./en-au.js":256,"./en-ca":257,"./en-ca.js":257,"./en-gb":258,"./en-gb.js":258,"./en-ie":259,"./en-ie.js":259,"./en-il":260,"./en-il.js":260,"./en-nz":261,"./en-nz.js":261,"./eo":262,"./eo.js":262,"./es":263,"./es-do":264,"./es-do.js":264,"./es-us":265,"./es-us.js":265,"./es.js":263,"./et":266,"./et.js":266,"./eu":267,"./eu.js":267,"./fa":268,"./fa.js":268,"./fi":269,"./fi.js":269,"./fo":270,"./fo.js":270,"./fr":271,"./fr-ca":272,"./fr-ca.js":272,"./fr-ch":273,"./fr-ch.js":273,"./fr.js":271,"./fy":274,"./fy.js":274,"./ga":275,"./ga.js":275,"./gd":276,"./gd.js":276,"./gl":277,"./gl.js":277,"./gom-latn":278,"./gom-latn.js":278,"./gu":279,"./gu.js":279,"./he":280,"./he.js":280,"./hi":281,"./hi.js":281,"./hr":282,"./hr.js":282,"./hu":283,"./hu.js":283,"./hy-am":284,"./hy-am.js":284,"./id":285,"./id.js":285,"./is":286,"./is.js":286,"./it":287,"./it-ch":288,"./it-ch.js":288,"./it.js":287,"./ja":289,"./ja.js":289,"./jv":290,"./jv.js":290,"./ka":291,"./ka.js":291,"./kk":292,"./kk.js":292,"./km":293,"./km.js":293,"./kn":294,"./kn.js":294,"./ko":295,"./ko.js":295,"./ku":296,"./ku.js":296,"./ky":297,"./ky.js":297,"./lb":298,"./lb.js":298,"./lo":299,"./lo.js":299,"./lt":300,"./lt.js":300,"./lv":301,"./lv.js":301,"./me":302,"./me.js":302,"./mi":303,"./mi.js":303,"./mk":304,"./mk.js":304,"./ml":305,"./ml.js":305,"./mn":306,"./mn.js":306,"./mr":307,"./mr.js":307,"./ms":308,"./ms-my":309,"./ms-my.js":309,"./ms.js":308,"./mt":310,"./mt.js":310,"./my":311,"./my.js":311,"./nb":312,"./nb.js":312,"./ne":313,"./ne.js":313,"./nl":314,"./nl-be":315,"./nl-be.js":315,"./nl.js":314,"./nn":316,"./nn.js":316,"./pa-in":317,"./pa-in.js":317,"./pl":318,"./pl.js":318,"./pt":319,"./pt-br":320,"./pt-br.js":320,"./pt.js":319,"./ro":321,"./ro.js":321,"./ru":322,"./ru.js":322,"./sd":323,"./sd.js":323,"./se":324,"./se.js":324,"./si":325,"./si.js":325,"./sk":326,"./sk.js":326,"./sl":327,"./sl.js":327,"./sq":328,"./sq.js":328,"./sr":329,"./sr-cyrl":330,"./sr-cyrl.js":330,"./sr.js":329,"./ss":331,"./ss.js":331,"./sv":332,"./sv.js":332,"./sw":333,"./sw.js":333,"./ta":334,"./ta.js":334,"./te":335,"./te.js":335,"./tet":336,"./tet.js":336,"./tg":337,"./tg.js":337,"./th":338,"./th.js":338,"./tl-ph":339,"./tl-ph.js":339,"./tlh":340,"./tlh.js":340,"./tr":341,"./tr.js":341,"./tzl":342,"./tzl.js":342,"./tzm":343,"./tzm-latn":344,"./tzm-latn.js":344,"./tzm.js":343,"./ug-cn":345,"./ug-cn.js":345,"./uk":346,"./uk.js":346,"./ur":347,"./ur.js":347,"./uz":348,"./uz-latn":349,"./uz-latn.js":349,"./uz.js":348,"./vi":350,"./vi.js":350,"./x-pseudo":351,"./x-pseudo.js":351,"./yo":352,"./yo.js":352,"./zh-cn":353,"./zh-cn.js":353,"./zh-hk":354,"./zh-hk.js":354,"./zh-tw":355,"./zh-tw.js":355};function r(e){var n=o(e);return t(n)}function o(e){if(t.o(a,e))return a[e];var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}r.keys=function(){return Object.keys(a)},r.resolve=o,(e.exports=r).id=636},640:function(e,n,t){e.exports=t(44)(23)},660:function(e,n,t){e.exports=t(44)(55)},661:function(e,n,t){var a=t(662);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(36)(a,r);a.locals&&(e.exports=a.locals)},662:function(e,n,t){(e.exports=t(35)(!1)).push([e.i,"#global-header {\n  height: 80px;\n  line-height: 80px;\n  padding: 0 45px;\n  background: #203A71;\n  font-size: 26px;\n}\n#global-header img {\n  width: 50px;\n}\n",""])},680:function(e,n,t){var a=t(681);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(36)(a,r);a.locals&&(e.exports=a.locals)},681:function(e,n,t){(e.exports=t(35)(!1)).push([e.i,"#global-sidebar {\n  float: left;\n  width: 200px;\n  height: 100vh;\n  background: #203A71;\n}\n#global-sidebar button {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #fff;\n}\n#global-sidebar li {\n  list-style: none;\n  height: 38px;\n  line-height: 38px;\n  text-align: left;\n  color: #fff;\n  font-size: 16px;\n  padding: 0 10px;\n}\n#global-sidebar .hide {\n  display: none;\n}\n#global-sidebar .sidebar-logo-wrapper {\n  position: absolute;\n  left: 0;\n  bottom: 20px;\n  width: 100%;\n  height: 50px;\n  background: #203a71;\n}\n#global-sidebar .sidebar-logo-wrapper .sidebar-logo {\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 32px;\n  text-align: center;\n  line-height: 32px;\n  color: #B4D9FF;\n  font-size: 32px;\n  text-indent: 15px;\n}\n#global-sidebar .ant-menu-item-selected {\n  background: #27437b;\n}\n#global-sidebar .ant-menu-item-selected .global-sidebar-subtitle {\n  color: #fff;\n}\n#global-sidebar .ant-menu-sub {\n  box-shadow: none;\n}\n#global-sidebar .ant-menu-submenu-arrow:after,\n#global-sidebar .ant-menu-submenu-arrow:before {\n  background: #B4D9FF;\n}\n#global-sidebar .global-sidebar-ul,\n#global-sidebar .ant-menu-sub {\n  background: #203A71;\n}\n#global-sidebar .ant-menu-submenu-title .global-sidebar-title {\n  height: 20px;\n  vertical-align: top;\n  padding: 10px 0;\n  color: #B4D9FF;\n}\n#global-sidebar .ant-menu-submenu-title .global-sidebar-title i {\n  display: inline-block;\n  font-size: 19px;\n  vertical-align: top;\n}\n#global-sidebar .ant-menu-submenu-title .global-sidebar-title span {\n  display: inline-block;\n  padding: 0 0 0 8px;\n  font-size: 15px;\n  line-height: 38px;\n  vertical-align: top;\n}\n#global-sidebar .global-sidebar-subtitle {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  color: #B4D9FF;\n}\n#global-sidebar .global-sidebar-subtitle i {\n  display: inline-block;\n  padding: 1px 8px 0 0;\n  font-size: 19px;\n  vertical-align: top;\n}\n#global-sidebar .global-sidebar-subtitle span {\n  display: inline-block;\n  font-size: 14px;\n  vertical-align: top;\n}\n/* 引入 icon class 文件 */\n/* 关于这个引用路径，有一个坑，ant.design 我用的dva，默认资源路径为 /public 所以这个引用的实际目录是  /public/fonts/iconfont/iconfont.css */\n/* 设置使用字体的优先级 anticon-user 高 */\n",""])},686:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),o=t(18),s=t.n(o),l=(t(206),t(689)),i=(t(688),t(685)),c=t(652),u=t.n(c),d=(t(145),t(79)),b=t(80),m=t(83),j=t(81),f=t(163),p=t(84),h=t(371),g=t(114),v=(r.a.Component,function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(j.a)(t).call(this,e))).main=r.a.createRef(),n.state={error:null,errorInfo:null},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,errorInfo:n})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("section",null,"抱歉，代码错误",r.a.createElement("h2",null,String(this.state.error)),r.a.createElement("div",null,this.state.errorInfo.componentStack)):this.props.children}}]),t}(r.a.Component)),y=(t(660),t(661),t(699));var x=function(e){var n=e.headerInfo,t=n.projectName,a=n.projectLogo;return r.a.createElement("header",{className:"global-header",id:"global-header"},r.a.createElement("a",null,r.a.createElement("img",{src:a,onError:function(e){return e.target.src=y}}),t))},k=(t(177),t(691),t(687));t(680),k.a.SubMenu;function E(e){return r.a.createElement("button",{className:"global-folder",id:"global-folder"},"展开")}function w(e){return e.routes.map(function(e,n){return r.a.createElement("li",{key:e.url},r.a.createElement(g.Link,{to:"/".concat(e.url)},e.name||""))})}var z=function(e){return r.a.createElement("aside",{className:"global-sidebar",id:"global-sidebar"},r.a.createElement(E,null),r.a.createElement(w,{routes:e.routes}))},O=(window.history,Object(a.lazy)(function(){return t.e(2).then(t.bind(null,694))})),S=Object(a.lazy)(function(){return t.e(3).then(t.bind(null,695))}),N=Object(a.lazy)(function(){return t.e(0).then(t.bind(null,696))}),_=Object(a.lazy)(function(){return t.e(4).then(t.bind(null,697))}),q=r.a.lazy(function(){return t.e(1).then(t.bind(null,698))});function C(){return r.a.createElement("div",null,r.a.createElement("span",null,"So...so..lazy.."),r.a.createElement(q,null))}var D=function(e){function t(e){var n;return Object(d.a)(this,t),n=Object(m.a)(this,Object(j.a)(t).call(this,e)),Object(h.a)(Object(f.a)(n),"onChange",function(e,n){console.log(e,n,"打印时间选择")}),n.main=r.a.createRef(),n.state={showArticle:!1,projectName:"书与月光",projectLogo:"",routes:[{name:"one",url:"one"},{name:"two",url:"two"},{name:"user",url:"user"},{name:"article",url:"article"}]},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=u.a.mark(o);setTimeout(function(){e.setState({showArticle:!0})},3e3),console.log(this.main.current,"mainRef ref object");var t,a,r=(t=[3,2,1],a=0,{next:function(){var e=a>=t.length,n=e?void 0:t[a++];return{value:n,done:e}}});function o(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,1;case 2:return e.next=4,2;case 4:return e.next=6,3;case 6:case"end":return e.stop()}},n)}window.iterator=r,console.log(r.next(),"迭代器");var s=o();console.log(s.next().value),console.log(s.next().value),console.log(s.next().value)}},{key:"render",value:function(){var e=this.state,n={projectName:e.projectName,projectLogo:e.projectLogo};return r.a.createElement(g.HashRouter,{basename:"manage"},r.a.createElement("main",{className:"main",ref:this.main},r.a.createElement(x,{headerInfo:n}),r.a.createElement(z,{routes:this.state.routes}),r.a.createElement(i.a,{onChange:this.onChange}),r.a.createElement(l.a,null,"Antd Button"),r.a.createElement("aside",{ref:"ajaxData"}),r.a.createElement(v,null,r.a.createElement(a.Suspense,{fallback:!1},r.a.createElement(g.Route,{path:"/article",component:O}),r.a.createElement(g.Route,{path:"/user",component:_}),r.a.createElement(g.Route,{path:"/one",component:S}),r.a.createElement(g.Route,{path:"/two",component:N}))),r.a.createElement(a.Suspense,{fallback:!1},r.a.createElement("div",null,r.a.createElement(a.Suspense,{fallback:"Sorry for our lazinessSorry"},r.a.createElement("span",null,"Cast"),r.a.createElement(C,null)))),r.a.createElement("section",{className:"marquee-wrapper"},r.a.createElement("aside",{className:"marquee-area"},r.a.createElement("a",{className:"marquee-item"},"111111"),r.a.createElement("a",{className:"marquee-item"},"22222"),r.a.createElement("a",{className:"marquee-item"},"3333"),r.a.createElement("a",{className:"marquee-item"},"4444"),r.a.createElement("a",{className:"marquee-item"},"5555")))))}}]),t}(r.a.Component);Object(h.a)(D,"state",{screenWidth:null,showArticle:!1}),Object(h.a)(D,"defaultProps",{onLoading:!0});var F=D;s.a.render(r.a.createElement(F,null),document.getElementById("root"))},699:function(e,n,t){e.exports=t.p+"2f9fcc58069238687b6c206fe5d0d184.png"},93:function(e,n,t){e.exports=t(44)(49)}});