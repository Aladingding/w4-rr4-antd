(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{696:function(e,t,a){"use strict";a.r(t);var c=a(79),i=a(80),s=a(83),l=a(81),r=a(84),n=a(2),m=a.n(n),o=a(114),h=function(e){function n(e,t){var a;return Object(c.a)(this,n),(a=Object(s.a)(this,Object(l.a)(n).call(this,e,t))).state={username:"wang"},a}return Object(r.a)(n,e),Object(i.a)(n,[{key:"handle",value:function(e){}},{key:"handlePage",value:function(e){this.props.history.push("/other/".concat(0))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"tc"},"加载child /one/child 路由",m.a.createElement(o.Link,{to:"/one/child"},"/one/child")),m.a.createElement("div",{className:"tc mt20"},"加载动态路由",m.a.createElement("button",{className:"home-button",onClick:this.handlePage.bind(this)},"加载动态路由")),m.a.createElement("div",{className:"home"},this.state.username,m.a.createElement("br",null),m.a.createElement("img",{src:"http://img4.imgtn.bdimg.com/it/u=2064784076,1799293544&fm=200&gp=0.jpg"})),m.a.createElement("div",{className:"tc fs-20"}),m.a.createElement("input",{value:this.state.username,onChange:this.handle.bind(this)}))}}]),n}(m.a.Component);t.default=h}}]);