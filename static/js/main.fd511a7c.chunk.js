(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(2),s=n(12),c=n.n(s);n(23),n(24);var i=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"Employee Directory"})})},l=n(13),d=n(14),o=n(17),h=n(16);n(25);var j=function(e){var t=e.users;function n(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}return Object(a.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,r=e.name,s=e.picture,c=e.phone,i=e.email,l=e.dob;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(a.jsx)("img",{src:s.medium,alt:"profile image for "+r.first+" "+r.last,className:"img-responsive"})}),Object(a.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[r.first," ",r.last]}),Object(a.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(a.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(a.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(a.jsx)("td",{"data-th":"DOB",className:"align-middle",children:n(l.date)})]},t.uuid)})):Object(a.jsx)(a.Fragment,{})})};n(26);var u=function(e){var t=e.headings,n=e.users,r=e.handleSort;return Object(a.jsx)("div",{className:"datatable mt-5",children:Object(a.jsxs)("table",{className:"table table-striped table-hover table-condensed",id:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:t.map((function(e){var t=e.name,n=e.width;return Object(a.jsxs)("th",{className:"col",style:{width:n},onClick:function(){r(t.toLowerCase())},children:[t,Object(a.jsx)("span",{className:"pointer"})]},t)}))})}),Object(a.jsx)(j,{users:n})]})})},m=n(15),b=n.n(m),f=function(){return b.a.get("https://randomUser.me/api/?results=200&nat=us")},v=(n(44),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"15%"},{name:"Email",width:"15%"},{name:"DOB",width:"10%"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var n=e.state.filteredUsers.sort((function(n,a){return"ascend"===e.state.order?void 0===n[t]?1:void 0===a[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]:void 0===n[t]?1:void 0===a[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]}));e.setState({filteredUsers:n})},e.handleSearchChange=function(t){console.log(t.target.value);var n=t.target.value,a=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(n.toLowerCase())}));e.setState({filteredUsers:a})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"data-area",children:Object(a.jsx)(u,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})})})}}]),n}(r.Component));n(45);var O=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(v,{})})};n(46);var x=function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("h5",{children:" Copyright by MIT "})})};n(47);var g=function(e){return Object(a.jsx)("main",{className:"wrapper",children:e.children})};n(48);var p=function(e){var t=e.handleSearchChange;return Object(a.jsx)("div",{className:"searchbar",children:Object(a.jsx)("form",{className:"form-inline",children:Object(a.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})})})};var N=function(){return Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(a.jsx)(p,{})})};var y=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(i,{}),Object(a.jsx)(N,{}),Object(a.jsxs)(g,{children:[Object(a.jsx)(O,{}),Object(a.jsx)(x,{})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(a.jsx)(y,{}),document.getElementById("root")),w()}},[[49,1,2]]]);
//# sourceMappingURL=main.fd511a7c.chunk.js.map