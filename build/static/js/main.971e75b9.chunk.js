(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a.n(n),s=a(22),r=a(19),i=a(23),o=a(6),l=a(9),u=a(29),h=a(28),j=(a(37),a(27)),d=a(2),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={email:"abc@gmail.com",name:"sainath",imgUrl:"img",id:"2"},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://reqres.in/api/users/".concat(this.state.id));case 2:t=e.sent,a=t.data.data,console.log(a),this.setState({email:a.email,name:a.first_name,imgUrl:a.avatar});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changeUser",value:function(e){var t=e.target.value;console.log(t)}},{key:"render",value:function(){return console.log("render"),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"dash-button",children:[Object(d.jsx)("button",{value:"1",onClick:this.changeUser,children:"1"}),Object(d.jsx)("button",{value:"2",children:"2"}),Object(d.jsx)("button",{value:"3",children:"3"}),Object(d.jsx)("button",{value:"100",children:"100"})]}),Object(d.jsxs)("div",{className:"dash-content",children:[Object(d.jsxs)("p",{children:["email: ",this.state.email," "]}),Object(d.jsxs)("p",{children:["name: ",this.state.name," "]})]}),Object(d.jsx)("img",{src:this.state.imgUrl,alt:"img"})]})}}]),a}(c.a.Component),m=b,O=document.getElementById("root");Object(s.createRoot)(O).render(Object(d.jsx)(n.StrictMode,{children:Object(d.jsx)(m,{})}))}},[[43,1,2]]]);
//# sourceMappingURL=main.971e75b9.chunk.js.map