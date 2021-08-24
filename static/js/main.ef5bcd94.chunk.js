(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(16),l=c.n(s),r=(c(22),c(10)),o=(c(23),c(0));var i=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container my-5",children:Object(o.jsxs)("div",{className:"alert alert-success",role:"alert",children:[Object(o.jsx)("h4",{className:"alert-heading",children:"About Textify v1.0"}),Object(o.jsx)("p",{children:"Textify an open-source application which helps to analyze texts by removing extra spaces, lower case, upper case and many more."}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{className:"mb-0",children:"\xa9 Aryamitra Chaudhuri. Made with \u2764\ufe0f by React JS."})]})})})},d=c(8);function b(e){return Object(o.jsx)("div",{children:Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{id:"nav",className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(d.b,{className:"navbar-brand",to:"/textify",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{to:"/textify",className:"nav-link active","aria-current":"page",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{to:"/about",className:"nav-link active","aria-current":"page",children:"About"})})]}),Object(o.jsx)("form",{className:"d-flex",children:Object(o.jsxs)("div",{className:"form-check form-switch",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleBtn}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",id:"modeText",children:"Enable Dark Theme"})]})})]})]})})})})}function j(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),a=c[0],s=c[1];var l={color:"dark"===e.Textfrommode?"white":"black",backgroundColor:"dark"===e.Textfrommode?"black":"white"};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container mt-5",id:"mainApp",children:[Object(o.jsx)("h3",{className:"",children:e.heading}),Object(o.jsx)("textarea",{className:"form-control",id:"textBox",rows:"15",value:a,onChange:function(e){s(e.target.value)},placeholder:"Write something...",style:l}),Object(o.jsx)("button",{className:"btn btn-success mt-2 mx-1",onClick:function(){var t=a.toUpperCase();s(t),e.showAlertinTextForm("Converted to Uppercase !","Success")},disabled:0===a.length,children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-success mt-2 mx-1",onClick:function(){var t=a.toLowerCase();s(t),e.showAlertinTextForm("Converted to Lowercase !","Success")},disabled:0===a.length,children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-success mt-2 mx-1",onClick:function(){var t=a.split(/[ ]+/);s(t.join(" ")),e.showAlertinTextForm("Extra spaces removed !","Success")},disabled:0===a.length,children:"Remove Extra Spaces"}),Object(o.jsx)("button",{className:"btn btn-success mt-2 mx-1",onClick:function(){s(""),e.showAlertinTextForm("Text cleared !","Success")},disabled:0===a.length,children:"Clear"}),Object(o.jsx)("button",{className:"btn btn-success mt-2 mx-1",onClick:function(){document.getElementById("textBox").select(),document.execCommand("copy"),e.showAlertinTextForm("Text copied to clipboard!","Success")},disabled:0===a.length,children:"Copy"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"container",id:"mainCount",children:[Object(o.jsx)("h4",{children:"Word Count"}),Object(o.jsxs)("p",{children:[a.split(" ").filter((function(e){return""!==e})).length," words and ",a.length," characters"]}),Object(o.jsx)("h3",{children:"Preview"}),Object(o.jsx)("p",{children:a.length>0?a:"Type something to see the preview..."}),Object(o.jsx)("h3",{children:"Read Time"}),Object(o.jsxs)("p",{children:[.008*a.split(" ").filter((function(e){return""!==e})).length," min(s)"]})]})]})})}b.defaultProps={title:"Add title here"};c(30);function m(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container-fluid set-alert",children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.type})," : ",e.alert.msg]})})})}var h=c(2);var x=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),l=Object(r.a)(s,2),x=l[0],u=l[1];function O(e,t){u({msg:e,type:t})}return setTimeout((function(){u(null)}),2e3),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(d.a,{children:[Object(o.jsx)(b,{title:"Textify",mode:c,toggleBtn:function(){"light"===c?(a("dark"),O("Dark mode has been enabled !","Success"),document.getElementById("modeText").style.color="white",document.getElementById("modeText").innerHTML="Disable Dark Mode",document.body.style.backgroundColor="#161616",document.body.style.color="white"):(a("light"),O("Light mode has been enabled !","Success"),document.getElementById("modeText").style.color="black",document.getElementById("modeText").innerHTML="Enable Dark Mode",document.body.style.backgroundColor="white",document.body.style.color="black")}}),Object(o.jsx)(m,{alert:x}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{exact:!0,path:"/about",children:Object(o.jsx)(i,{})}),Object(o.jsx)(h.a,{exact:!0,path:"/textify",children:Object(o.jsx)(j,{heading:"",showAlertinTextForm:O,Textfrommode:c})})]})]})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),u()}},[[31,1,2]]]);
//# sourceMappingURL=main.ef5bcd94.chunk.js.map