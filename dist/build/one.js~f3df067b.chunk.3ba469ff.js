(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{682:function(e,n,t){var a=t(683);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(36)(a,r);a.locals&&(e.exports=a.locals)},683:function(e,n,t){(e.exports=t(35)(!1)).push([e.i,".home {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 50px; }\n  .home .but {\n    padding: 8px 10px;\n    border: solid 1px #ccc;\n    border-radius: 3px;\n    cursor: pointer;\n    box-shadow: 0 0 5px #ccc; }\n\n.mt20 {\n  margin-top: 20px; }\n\n.redux {\n  font-size: 25px;\n  color: red; }\n\n.button_add {\n  font-size: 18px;\n  border: solid 1px #000;\n  color: #000;\n  margin-left: 20px;\n  cursor: pointer; }\n\n.home-button {\n  padding: 5px 10px;\n  border: solid 1px #6f8fb7;\n  margin-left: 10px;\n  cursor: pointer;\n  color: #fff;\n  background: #6f8fb7;\n  border-radius: 3px; }\n",""])},695:function(e,n,t){"use strict";t.r(n);var r=t(79),i=t(80),o=t(83),c=t(81),s=t(84),a=t(2),l=t.n(a),u=t(114),m=function(e){function a(e,n){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e,n))).state={username:"wang"},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"handle",value:function(e){}},{key:"handlePage",value:function(e){this.props.history.push("/other/".concat(0))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"tc"},"加载child /one/child 路由",l.a.createElement(u.Link,{to:"/one/child"},"/one/child")),l.a.createElement("div",{className:"tc mt20"},"加载动态路由",l.a.createElement("button",{className:"home-button",onClick:this.handlePage.bind(this)},"加载动态路由")),l.a.createElement("div",{className:"home"},this.state.username,l.a.createElement("br",null),l.a.createElement("img",{src:"http://img4.imgtn.bdimg.com/it/u=2064784076,1799293544&fm=200&gp=0.jpg"})),l.a.createElement("div",{className:"tc fs-20"}),l.a.createElement("input",{value:this.state.username,onChange:this.handle.bind(this)}))}}]),a}(l.a.Component);n.default=m},696:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var r=t(79),i=t(80),o=t(83),c=t(81),s=t(84),a=t(2),l=t.n(a);t(682);var u=function(e){function a(e,n){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e,n))).state={username:"wei"},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"home"},this.state.username,l.a.createElement("br",null),l.a.createElement("img",{src:"http://img0.imgtn.bdimg.com/it/u=3713291312,3766811990&fm=200&gp=0.jpg"})))}}]),a}(l.a.Component)}}]);