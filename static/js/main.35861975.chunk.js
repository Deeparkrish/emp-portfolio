(this["webpackJsonpemp-portfolio"]=this["webpackJsonpemp-portfolio"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),r=s(8),i=s.n(r),l=(s(5),s(3)),n=(s(7),s.p+"static/media/DC.fd9b889c.jpg"),o=s(0);var x=function(){return Object(o.jsxs)("section",{className:"my-5",id:"about",children:[Object(o.jsx)("h2",{children:Object(o.jsx)("i",{children:"About Me"})}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:n,className:"my-2",style:{width:"100px",height:"100px"},alt:"avatar"})}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},O=s(1),j=s(6);var d=function(){var e,t,s,a,r,i=Object(c.useState)({name:"",email:"",message:""}),n=Object(l.a)(i,2),x=n[0],d=n[1],h=Object(c.useState)(""),b=Object(l.a)(h,2),m=b[0],p=b[1],u=x.name,g=x.email,w=x.message,D=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);p(t?"":"Your email is invalid.")}else e.target.value.length?p(""):p("".concat(e.target.name," is required."));m||d(Object(j.a)(Object(j.a)({},x),{},Object(O.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)("section",{id:"contact",children:[Object(o.jsx)("h2",{"data-testid":"h1tag",children:Object(o.jsx)("i",{children:"Contact"})}),Object(o.jsx)("hr",{}),Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),m||(d(Object(O.a)({},e.target.name,e.target.value)),console.log("Form",x))},children:[Object(o.jsxs)("div",(e={className:"form-field"},Object(O.a)(e,"className","mx-2"),Object(O.a)(e,"children",[Object(o.jsx)("label",{htmlFor:"name",children:"Name  "}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:D})]),e)),Object(o.jsx)("br",{}),Object(o.jsxs)("div",(t={className:"form-field"},Object(O.a)(t,"className","mx-2"),Object(O.a)(t,"children",[Object(o.jsx)("label",{htmlFor:"email",children:"Email  "}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:g,onBlur:D})]),t)),Object(o.jsxs)("div",(s={className:"form-field"},Object(O.a)(s,"className","mx-2"),Object(O.a)(s,"children",[Object(o.jsx)("label",{htmlFor:"message",children:"Message"}),Object(o.jsx)("textarea",{name:"message",rows:"2",defaultValue:w,onBlur:D})]),s)),m&&Object(o.jsx)("div",(a={className:"form-field"},Object(O.a)(a,"className","mx-2"),Object(O.a)(a,"children",Object(o.jsx)("p",{className:"error-text",children:(r=m,r.charAt(0).toUpperCase()+r.slice(1))})),a)),Object(o.jsx)("button",{className:"mx-2","data-testid":"button",type:"submit",children:"Submit"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("br",{}),Object(o.jsx)("h6",{style:{color:"#F06543"},children:Object(o.jsxs)("a",{href:"mailto:kosalai17@gmail.com",children:[Object(o.jsx)("span",{className:"pr-3",children:" "}),Object(o.jsx)("i",{children:"Click to email"})]})}),Object(o.jsx)("h6",{style:{color:"#F06543"},children:Object(o.jsxs)("a",{href:"tel:123456789",children:[Object(o.jsx)("span",{className:"pr-3"}),Object(o.jsx)("i",{children:"Telephone"})]})})]})]})};s(14);var h=function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{alt:e.name,src:e.image})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("p",{className:"project-title",id:"card-title",children:e.name}),Object(o.jsxs)("p",{children:[Object(o.jsx)("a",{href:e.github,children:Object(o.jsx)("img",{src:"https://img.icons8.com/windows/32/000000/github.png",alt:"Repository",id:"project-icon"})}),Object(o.jsx)("a",{href:e.deploy,children:Object(o.jsx)("img",{src:"https://img.icons8.com/external-kiranshastry-solid-kiranshastry/16/000000/external-launch-advertising-kiranshastry-solid-kiranshastry.png",alt:"Deployed Site",id:"project-icon"})})]}),Object(o.jsx)("p",{id:"topics",children:e.topics})]})]})},b=[{id:1,name:"covid tracker ",image:s.p+"static/media/covid.e64f6a75.png",github:"https://github.com/Deeparkrish/COVID-Tracker",deploy:"https://deeparkrish.github.io/COVID-Tracker/",topics:"HTML, Javascript, Bulma, Server side APIs, Leaflets, Local Storage"},{id:2,name:"tech blog",image:s.p+"static/media/techblog.4100d904.png",github:"https://github.com/Deeparkrish/tech-blog",deploy:"https://deepa-tech-blog.herokuapp.com/",topics:"MVC, Bulma, bcrypt,express/node, MySQL, Sequelize,dotenv, handlebars"},{id:3,name:"budget tracker",image:s.p+"static/media/budget.cbf8ec09.png",github:"https://github.com/Deeparkrish/budget-tracker",deploy:" https://deepa-budget-tracker.herokuapp.com/",topics:"Javascript, PWA, IndexedDB, MongoDB, mongoose, express"},{id:4,name:"weather dashboard",image:s.p+"static/media/weather.a1f67400.png",github:"https://github.com/Deeparkrish/weather-report",deploy:"https://deeparkrish.github.io/weather-report/",topics:"Javascript, html, Bootstrap, Moment, API, Local Storage "},{id:5,name:"password generator",image:s.p+"static/media/password.ee3a9988.png",github:"https://github.com/Deeparkrish/Passwordgenerator",deploy:"https://deeparkrish.github.io/Passwordgenerator/",topics:"HTML, CSS, API, Javascript, HTML DOM methods"},{id:6,name:"hearthstone reviewer",image:s.p+"static/media/hearthstone.927429f8.png",github:"https://github.com/Deeparkrish/hearthstone_reviewer",deploy:"https://hearthstone-reviewer.herokuapp.com/",topics:"node /express-js, handlebars, MySQL, Sequelize, dotenv, bcrypt"}];s(15);function m(e){return Object(o.jsx)("div",{className:"projectdata",children:e.children})}var p=function(){return Object(o.jsxs)("section",{children:[Object(o.jsxs)("div",{className:"project",id:"project",children:[Object(o.jsx)("h2",{className:"title",children:Object(o.jsx)("i",{children:"Projects"})}),Object(o.jsx)("hr",{})]}),Object(o.jsx)(m,{id:"card-data",children:b.map((function(e){return Object(o.jsx)(h,{name:e.name,image:e.image,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})};var u=function(e){var t=e.setPage;return Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"flex-row",children:[Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)("a",{className:"nav-head",href:"#about",onClick:function(){return t("about")},children:"About Me"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)("a",{className:"nav-head",href:"#project",onClick:function(){return t("portfolio")},children:"Portfolio"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)("a",{className:"nav-head",href:"#contact",onClick:function(){return t("contact")},children:"Contact"})}),Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)("a",{className:"nav-head",href:"#resume",onClick:function(){return t("resume")},children:"Resume"})})]})})};var g=function(e){var t=e.setPage;return Object(o.jsxs)("header",{className:"MyPicture",children:[Object(o.jsxs)("h1",{className:"flex-row",id:"my-name",children:[Object(o.jsx)("a",{href:"/",onClick:function(){return t("")},children:" "}),Object(o.jsx)("i",{children:"Deepa Krishnan"})]}),Object(o.jsx)(u,{setPage:t,children:" "})]})};var w=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("ul",{className:"flex-row",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"tel:123456789",children:Object(o.jsx)("img",{src:"https://img.icons8.com/ios-filled/50/000000/phone.png",width:"32px",height:"30px",alt:"phone"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"mailto:kosalai17@gmail.com",children:Object(o.jsx)("img",{src:"https://img.icons8.com/color/48/000000/apple-mail.png",width:"32px",height:"30px",alt:"Email"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/Deeparkrish",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:"https://img.icons8.com/windows/32/000000/github.png",alt:"Github"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/feed/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:"https://img.icons8.com/color/48/000000/linkedin.png",width:"32px",height:"30px",alt:"LinkedIn"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://acmeco.slack.com/?redir=%2Fteam%2FU01VBAU1CLX",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:"https://img.icons8.com/color/48/000000/slack-new.png",width:"32px",height:"30px",alt:"Slack"})})})]})})},D=s.p+"static/media/Deepa-Resume.593caa9d.pdf",A=s.p+"static/media/html.2d7f77f8.png",f=s.p+"static/media/jquery-logo.4eab892a.png",J=s.p+"static/media/bootstrap-logo.0d55f027.png",v=s.p+"static/media/mern-logo.e2d1af46.png",N=s.p+"static/media/webpack-logo.5bd3fd12.png",V=s.p+"static/media/sql-logo.8c53f465.png",K=s.p+"static/media/mongodb-logo.66932197.png";var I=function(){var e,t;return Object(o.jsxs)("div",{className:"container",id:"resume",children:[Object(o.jsx)("h3",{children:"Skills"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsx)("h4",{children:Object(o.jsx)("i",{children:"Concepts"})}),Object(o.jsxs)("ul",{className:"flex-column",children:[Object(o.jsx)("li",{children:"Data Structures"}),Object(o.jsx)("li",{children:"Algorithm"}),Object(o.jsx)("li",{children:"Networking"})]})]}),Object(o.jsxs)("div",(t={className:"flex-column"},Object(O.a)(t,"className","flex-wrap"),Object(O.a)(t,"children",[Object(o.jsx)("h4",{children:Object(o.jsx)("i",{children:"Technologies"})}),Object(o.jsxs)("div",(e={className:"flex-row"},Object(O.a)(e,"className","tech"),Object(O.a)(e,"children",[Object(o.jsx)("img",{src:A,alt:"html-css",className:"logo"}),Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"node-express",className:"logo"}),Object(o.jsx)("img",{src:f,alt:"jQuery",className:"logo"}),Object(o.jsx)("img",{src:J,alt:"bootstrap",className:"logo"}),Object(o.jsx)("img",{src:N,alt:"web-pack",className:"logo"}),Object(o.jsx)("img",{src:V,alt:"sql",className:"logo"}),Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"sequelize",className:"logo"}),Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"handlebar",className:"logo"}),Object(o.jsx)("img",{src:K,alt:"MongoDB",className:"logo"}),Object(o.jsx)("img",{src:v,alt:"MERN",className:"logo"}),Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"graphQL",className:"logo"})]),e))]),t)),Object(o.jsx)("div",{className:"flex-row",children:Object(o.jsx)("div",{children:Object(o.jsx)("a",{className:"myresume",href:D,target:"_blank",rel:"noreferrer",title:"Resume",children:Object(o.jsx)("h4",{children:Object(o.jsx)("u",{children:Object(o.jsx)("i",{children:"Download Resume"})})})})})})]})};var B=function(){var e=a.a.useState(""),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(g,{setPage:c}),Object(o.jsx)("main",{children:"about"===s?Object(o.jsx)(x,{}):"contact"===s?Object(o.jsx)(d,{}):"portfolio"===s?Object(o.jsx)(p,{}):"resume"===s?Object(o.jsx)(I,{}):Object(o.jsx)(x,{})}),Object(o.jsx)(w,{})]})},Y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root")),Y()},5:function(e,t,s){},7:function(e,t,s){}},[[16,1,2]]]);
//# sourceMappingURL=main.35861975.chunk.js.map