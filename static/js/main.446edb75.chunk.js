(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),l=n.n(r),c=(n(10),n(11),n(1)),u=n(2),i=(n(12),function(){var e=o.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=o.a.useState(""),l=Object(u.a)(r,2),i=l[0],s=l[1];function m(e){var t=Object(c.a)(n);t.splice(e.target.value,1),a(t)}var v=function(e){var t=e.value;return o.a.createElement("span",null,t," ")};return o.a.createElement("div",null,o.a.createElement("h1",null,"Todo List"),o.a.createElement("ul",{type:"None"},n.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(v,{value:e}),o.a.createElement("button",{value:t,onClick:m},"X"))}))),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.replace(/\s/g,"").length&&a([].concat(Object(c.a)(n),[i])),s("")}},o.a.createElement("input",{placeholder:"Insert an new item",autoFocus:"True",value:i,onChange:function(e){s(e.target.value)}}),o.a.createElement("br",null)))});var s=function(){return o.a.createElement(i,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.446edb75.chunk.js.map