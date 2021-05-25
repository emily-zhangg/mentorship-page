(this["webpackJsonpmentorship-page"]=this["webpackJsonpmentorship-page"]||[]).push([[0],{76:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(9),o=n.n(s),c=n(35),i=n.n(c),l=n(26),d=n.n(l),h=n(36),u=n(11),m=n(48),j="".concat("","/advisory-logo.png"),b="".concat("","/advisory-mentorship-logo-online.png"),f="".concat("","/advisory-mentorship-partners.png"),O=(n(76),n(3)),p=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsxs)("a",{className:"nav-back-to-main-site",href:"https://advisory.sg",children:[Object(O.jsx)(m.a,{className:"nav-arrow-icon"}),"back to main site"]}),Object(O.jsx)("img",{className:"nav-logo",src:j,alt:"Advisory"})]})},v=function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)(p,{}),Object(O.jsxs)("div",{className:"header-bottom",children:[Object(O.jsx)("img",{className:"header-mentorship-logo",src:b,alt:"Advisory Mentorship Programme"}),Object(O.jsx)("img",{className:"header-mentorship-logo",src:f,alt:"Advisory Mentorship Programme Partners"}),Object(O.jsxs)("div",{className:"header-mentorship-intro",children:[Object(O.jsx)("p",{children:"The Advisory Mentorship Programme pairs students with working professionals in their fields of interest on a 1-1 basis. Over the course of four months, from June to September 2021, mentors give an hour each month to meet with their mentee. In its first run in 2020, the programme delivered over 2,000 hours of mentorship to 694 students with the involvement of over 562 mentors. This year, we are delighted to have more than 800 mentors, whose fields of expertise range across 48 different industries."}),Object(O.jsxs)("p",{children:["Click"," ",Object(O.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://advisorysg.typeform.com/to/Q5iHzn#source=mentorsite",children:"here"})," ","to apply as a mentee."]}),Object(O.jsxs)("p",{children:["Click"," ",Object(O.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://drive.google.com/file/d/1w7zlMuGY_7hVXeW0LaNKXWWjLRt3ic4G/view?usp=sharing",children:"here"})," ","to view the application guide on CVs and resumes."]}),Object(O.jsxs)("p",{children:["Click"," ",Object(O.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://drive.google.com/file/d/1aA3l_WQ1ehGO8UBKuRFLqj4URpQbAVzN/view?usp=sharing",children:"here"})," ","to view a sample application response."]})]})]})]})},g=n(49),x=n.n(g),y=(n(82),function(e){var t=e.onReadMore;return Object(O.jsx)("div",{className:"card-read-more-container",children:Object(O.jsx)("button",{className:"card-read-more",onClick:t,children:"Read More"})})}),N=function(e){var t=e.mentor,n=e.onReadMore;return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-image-region",children:Object(O.jsx)(x.a,{height:160,offset:480,once:!0,children:Object(O.jsx)("img",{className:"card-image",src:""+t.thumbnailImageUrl,alt:t.name})})}),Object(O.jsxs)("div",{className:"card-descriptors",children:[Object(O.jsx)("div",{className:"card-name",children:t.name}),t.role&&Object(O.jsx)("div",{className:"card-desc",children:t.role}),t.organisation&&Object(O.jsx)("div",{className:"card-desc",children:t.organisation})]}),Object(O.jsx)(y,{onReadMore:n})]})},w=n(42),S=n(50),C=(n(83),function(e){var t=e.onClose;return Object(O.jsx)("button",{className:"modal-close",onClick:t,children:Object(O.jsx)(S.a,{})})}),k=function(e){var t=e.isOpen,n=e.mentor,a=e.onClose;n||(n={});var s=Object(r.useRef)(null);return Object(O.jsxs)(i.a,{className:"modal-container",overlayClassName:"modal-overlay",isOpen:t,shouldCloseOnOverlayClick:!0,onAfterOpen:function(){return Object(w.b)(s.current,{reserveScrollBarGap:!0})},onRequestClose:a,onAfterClose:function(){return Object(w.a)()},closeTimeoutMS:300,contentLabel:"View Details",children:[Object(O.jsx)(C,{onClose:a}),Object(O.jsxs)("div",{className:"modal-content",ref:s,children:[Object(O.jsxs)("div",{className:"modal-left",children:[Object(O.jsx)("img",{className:"modal-image",src:""+n.fullImageUrl,alt:n.name}),Object(O.jsxs)("div",{class:"modal-metadata-container",children:[Object(O.jsx)("h2",{children:n.name}),Object(O.jsxs)("div",{className:"modal-metadata",children:[Object(O.jsx)("strong",{children:"Role:"})," ",n.role]}),n.industry&&Object(O.jsxs)("div",{className:"modal-metadata",children:[Object(O.jsx)("strong",{children:"Industry:"})," ",n.industry]}),n.organisation&&Object(O.jsxs)("div",{className:"modal-metadata",children:[Object(O.jsx)("strong",{children:"Organisation:"})," ",n.organisation]}),n.school&&Object(O.jsxs)("div",{className:"modal-metadata",children:[Object(O.jsx)("strong",{children:"School Graduated From:"})," ",n.school]}),n.courseOfStudy&&Object(O.jsxs)("div",{className:"modal-metadata",children:[Object(O.jsx)("strong",{children:"Course of Study:"})," ",n.courseOfStudy]})]})]}),Object(O.jsx)("div",{className:"modal-right",children:Object(O.jsx)("p",{className:"modal-bio",children:n.fullBio})})]})]})},M=n(51),R=n.n(M),A=n(120),I=n(129),E=n(127),W=n(126),B=n(128),L=(n(84),Object(A.a)((function(e){return{formControl:{minWidth:150},selectEmpty:{marginTop:e.spacing(2)}}}))),T=function(e){var t=e.mentors,n=e.setHasSearch,a=e.setSearchResults,s=Object(r.useState)("name"),o=Object(u.a)(s,2),c=o[0],i=o[1],l=L(),d=Object(r.useMemo)((function(){return Object.keys(t).map((function(e){return Object.assign({mentorId:e},t[e])}))}),[t]),h=Object(r.useMemo)((function(){return R()((function(){var e=this;this.ref("mentorId"),this.field("name"),this.field("role"),this.field("organisation"),this.field("school"),this.field("courseOfStudy"),this.b(.2),this.k1(1.1),d.forEach((function(t){return e.add(t)}),this)}))}),[d]),m=Object(r.useState)(""),j=Object(u.a)(m,2),b=j[0],f=j[1];return Object(r.useMemo)((function(){var e=setTimeout((function(){if(0!==b.trim().length){var e=b.trim().split(/\s+/).map((function(e){return c+":"+e})).join(" "),t=h.search(e).map((function(e){return e.ref}));n(!0),a(t)}else n(!1)}),200);return function(){return clearTimeout(e)}}),[c,h,b,n,a]),Object(O.jsxs)("form",{noValidate:!0,autoComplete:"off",className:"search-bar",children:[Object(O.jsx)(I.a,{id:"standard-search",label:"Search mentors by...",onChange:function(e){return f(e.target.value)}}),Object(O.jsx)(W.a,{className:l.formControl,children:Object(O.jsxs)(E.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c,onChange:function(e){return i(e.target.value)},children:[Object(O.jsx)(B.a,{value:"name",children:"Name"}),Object(O.jsx)(B.a,{value:"role",children:"Role"}),Object(O.jsx)(B.a,{value:"organisation",children:"Organisation"}),Object(O.jsx)(B.a,{value:"school",children:"School"}),Object(O.jsx)(B.a,{value:"courseOfStudy",children:"Course"})]})})]})},P=function(){var e=Object(h.a)(d.a.mark((function e(t,n){var r,a,s,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},a=[],e.next=4,fetch("https://d21fj0gildolug.cloudfront.net/load_mentors").then((function(e){return e.json()})).then((function(e){return e.mentors}));case 4:s=e.sent,o=new Map,s.forEach((function(e){var t=e.Photo,n=e.Name,s=e.Biography,c=e["Job Title"],i=e["Industry 1"],l=e.Organisation,d=e.School,h=e["Course of Study"],u=t?t[0].url:void 0,m=t?t[0].thumbnails.large.url:void 0,j=n.replace(/\W/g,""),b=o.get(j);void 0===b?o.set(j,1):(b++,o.set(j,b),j+=b),r[j]={courseOfStudy:h,fullBio:s,fullImageUrl:u,industry:i,name:n,organisation:l,role:c,school:d,thumbnailImageUrl:m},a.push(j)})),t(r),n(a);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=(n(86),function(e){return window.history.replaceState({},"","#".concat(e))});var _=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)([]),o=Object(u.a)(s,2),c=o[0],i=o[1],l=Object(r.useState)(!1),m=Object(u.a)(l,2),j=m[0],b=m[1],f=Object(r.useState)(""),p=Object(u.a)(f,2),g=p[0],x=p[1],y=function(e){x(e),b(!0)},w=Object(r.useState)(!1),S=Object(u.a)(w,2),C=S[0],M=S[1];Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(a,i);case 2:M(!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){var e=function(){var e=window.location.hash.slice(1);if(n.hasOwnProperty(e)&&(!j||e!==g))return y(e),!0};return j?U(g):""===g?e()||x(""):U(""),window.addEventListener("hashchange",e,!1),function(){return window.removeEventListener("hashchange",e,!1)}}),[j,g,n]);var R=Object(r.useState)(!1),A=Object(u.a)(R,2),I=A[0],E=A[1],W=Object(r.useState)([]),B=Object(u.a)(W,2),L=B[0],_=B[1],G=Object(r.useMemo)((function(){return I?L:c}),[I,L,c]);return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(v,{}),Object(O.jsxs)("div",{className:"canvas",children:[Object(O.jsx)("p",{className:"disclaimer",children:Object(O.jsx)("small",{children:"All Mentors have the rights to privacy and non-harassment that must be respected. You are hereby informed not to misrepresent your relationship or affiliation with Advisory in any way and on any platform, if and when you communicate with any mentors. Failing which you accept that you have been informed and therefore understand that legal action may be taken against you."})}),C?Object(O.jsxs)("div",{className:"results",children:[Object(O.jsx)(T,{mentors:n,setHasSearch:E,setSearchResults:_}),Object(O.jsxs)("p",{className:"results-text",children:["Displaying ",G.length," search result(s)."]}),Object(O.jsx)("div",{className:"card-container",children:G.map((function(e){return Object(O.jsx)(N,{mentor:n[e],onReadMore:function(){return y(e)}},e)}))})]}):Object(O.jsx)("p",{className:"placeholder-text",children:"Loading..."})]}),Object(O.jsx)(k,{isOpen:j,mentor:n[g],onClose:function(){return b(!1)}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(87);o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),i.a.setAppElement("#root"),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[88,1,2]]]);
//# sourceMappingURL=main.346e7342.chunk.js.map