(this.webpackJsonpempdir=this.webpackJsonpempdir||[]).push([[0],{59:function(e,t,a){e.exports=a(85)},64:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=(a(64),a(32)),c=a(28),s=a(45),u=a(46),m=a(50),h=a(49),p=a(133),f=a(4),d=a(127),g=a(129),E=a(123),b=a(126),v=a(128),N=a(119),w=a(125);var C=function(e){return r.a.createElement(N.a,null,r.a.createElement(E.a,{component:"th",scope:"row"},r.a.createElement("img",{src:e.thumbnail,alt:"thumbnail"})),r.a.createElement(E.a,{align:"right"},e.fullName),r.a.createElement(E.a,{align:"right"},e.phone),r.a.createElement(E.a,{align:"right"},e.email))},k=a(48),y=a.n(k),j=function(){return y.a.get("https://randomuser.me/api/?results=25&nat=us")},x=a(124),O=a(131),S=Object(x.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"40ch"}}}}));function B(e){var t=S();return r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement(O.a,{id:"outlined-basic",value:e.search,name:"search",onChange:e.handleInputChange,label:"Search by Name, Phone, or Email",variant:"outlined"}))}var L=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(c.a)({},a,t),(function(){return console.log(n.state)}))},n.state={users:[],search:"",searchBy:"fullName"},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;j().then((function(t){var a=t.data.results.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{thumbnail:e.picture.thumbnail,fullName:e.name.first+" "+e.name.last,phone:e.phone,email:e.email})}));console.log(a),e.setState({users:a},(function(){return console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"sortAlphaName",value:function(){this.setState({users:this.state.users.sort((function(e,t){return e.fullName>t.fullName?1:-1}))})}},{key:"sortAlphaEmail",value:function(){this.setState({users:this.state.users.sort((function(e,t){return e.email>t.email?1:-1}))})}},{key:"sortNum",value:function(){this.setState({users:this.state.users.sort((function(e,t){return e.phone>t.phone?1:-1}))})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(b.a,{component:w.a},r.a.createElement(B,{search:this.state.search,handleInputChange:this.handleInputChange}),r.a.createElement(d.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(v.a,null,r.a.createElement(N.a,null,r.a.createElement(E.a,null,"Picture"),r.a.createElement(E.a,{align:"center",onClick:function(){e.sortAlphaName()}},"Full Name"),r.a.createElement(E.a,{align:"center",onClick:function(){e.sortNum()}},"Phone"),r.a.createElement(E.a,{align:"center",onClick:function(){e.sortAlphaEmail()}},"E-Mail"))),r.a.createElement(g.a,null,this.state.users.filter((function(t){return t.fullName.toLowerCase().includes(e.state.search.toLowerCase())||t.email.toLowerCase().includes(e.state.search.toLowerCase())||t.phone.toLowerCase().includes(e.state.search.toLowerCase())})).map((function(e,t){return r.a.createElement(C,{key:t,thumbnail:e.picture.thumbnail,fullName:e.fullName,phone:e.phone,email:e.email})})))))}}]),a}(n.Component),A=Object(f.a)((function(){return Object(p.a)({table:{minWidth:"85%"}})}))(L),I=a(132),W=Object(x.a)({myButton:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:200,padding:"0 30px",marginBottom:"20px",fontSize:"25px"},title:{margin:"10px"},subHead:{marginTop:"10px"}});function F(){var e=W();return r.a.createElement("div",null,r.a.createElement(I.a,{className:e.myButton,fullWidth:"true"},r.a.createElement("h1",{className:"title"},"Employee Directory")))}var M=a(130);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement(M.a,{maxWidth:"md"},r.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.8e59c7bc.chunk.js.map