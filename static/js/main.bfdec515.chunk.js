(this["webpackJsonptrack-id"]=this["webpackJsonptrack-id"]||[]).push([[0],{108:function(e){e.exports=JSON.parse("{}")},110:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(50),r=c.n(n),i=(c(59),c(8),c(18)),l=c(6),o=c(9),j=c.p+"static/media/trackid_logo.002f8f78.png",b=c(113),u=c(114),d=c(115),h=c(118),x=c(116),m=c(117),p=c(0),O=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),a=c[0],n=c[1];return Object(p.jsx)("div",{className:"navBarDiv",children:Object(p.jsxs)(b.a,{color:"#222222",dark:!0,expand:"md",fixed:"top",children:[Object(p.jsxs)(u.a,{href:"#landing",children:[" ",Object(p.jsx)("img",{class:"navbar-logo",src:j})]}),Object(p.jsx)(d.a,{onClick:function(){return n(!a)}}),Object(p.jsx)(h.a,{isOpen:a,navbar:!0,children:Object(p.jsxs)(x.a,{className:"mr-auto",navbar:!0,children:[Object(p.jsx)(m.a,{className:"nav-item",children:Object(p.jsx)(u.a,{href:"#home",children:"Sets"})}),Object(p.jsx)(m.a,{className:"nav-item",children:Object(p.jsx)(u.a,{href:"#about",children:"About"})}),Object(p.jsx)(m.a,{className:"nav-item",children:Object(p.jsx)(u.a,{href:"#feedback",children:"Feedback"})}),Object(p.jsx)(m.a,{className:"nav-item",children:Object(p.jsx)(u.a,{href:"#register",children:"Register"})}),Object(p.jsx)(m.a,{className:"nav-item",children:Object(p.jsx)(u.a,{href:"#login",children:"Login"})})]})})]})})},f=c(51),v=c(1),g=c.n(v),N=c(16),k=function(e){var t=e.title,c=e.link,s=e.img;return Object(p.jsx)("div",{children:Object(p.jsx)(i.b,{to:"/set/".concat(c),children:Object(p.jsxs)("div",{className:"home-screen-card",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{className:"artist-pic",src:s})}),Object(p.jsx)("div",{className:"artist-name",children:Object(p.jsxs)("p",{children:[" ",t," "]})})]})})})},y=(c(41),c(53)),w=c.n(y),I=c(23),S=Object(I.a)("https://laskzafaqxkbjowhfkfq.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhc2t6YWZhcXhrYmpvd2hma2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTk0OTEsImV4cCI6MTk2MDAzNTQ5MX0.VgWbVMR-cwRe7Q_wmQgn2z0XaLVYQ_Ux94GlWa2nmIw"),C=c(24),J=function(e){e.query;var t=e.initSearchState,c=Object(s.useState)([]),a=Object(o.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)("\ud83d\udd0d Search 1,642 sets..."),l=Object(o.a)(i,2),j=l[0],b=l[1],u=Object(s.useState)(t),d=Object(o.a)(u,2),h=d[0],x=d[1];function m(e){return O.apply(this,arguments)}function O(){return(O=Object(N.a)(g.a.mark((function e(t){var c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.from("youtube").select("*").textSearch("title","".concat(t));case 2:c=e.sent,s=c.data,c.error,null==s||0==s.length?C.b.error("\ud83d\ude14 Couldn't find that one, try again",{style:{borderRadius:"10px",background:"#111",color:"#fff"}}):(r(s),C.b.success("Found!",{style:{borderRadius:"10px",background:"#111",color:"#fff"}}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,c){return c.indexOf(e)===t}function y(e){return I.apply(this,arguments)}function I(){return(I=Object(N.a)(g.a.mark((function e(t){var c,s,a,n,i,l,o,j;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.from("comments").select("*").textSearch("fts","".concat(t)).select("id_val");case 2:c=e.sent,s=c.data,c.error,a="";try{n=Object(f.a)(s.filter(v));try{for(n.s();!(i=n.n()).done;)l=i.value,a+=l.id_val+" | "}catch(b){n.e(b)}finally{n.f()}}catch(u){console.log("Error, try again!")}return a=a.substring(0,a.length-2),e.next=10,S.from("youtube").select("*").textSearch("link","".concat(a));case 10:o=e.sent,j=o.data,o.titleError,null==s||0==j.length?C.b.error("\ud83d\ude14 Couldn't find that one, try again",{style:{borderRadius:"10px",background:"#111",color:"#fff"}}):(r(j),C.b.success("Found!",{style:{borderRadius:"10px",background:"#111",color:"#fff"}}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{children:[Object(p.jsx)(C.a,{}),Object(p.jsxs)("div",{className:"searchBarDiv",children:[Object(p.jsx)("input",{className:"searchbar",type:"text",name:"name",placeholder:j,onChange:function(e){b(e.target.value)}}),Object(p.jsx)("div",{className:"toggleButtonDiv",children:Object(p.jsxs)("label",{children:[Object(p.jsx)(w.a,{defaultChecked:h,icons:!1,onChange:function(e){1==e.target.checked?x(1):x(0)}}),Object(p.jsx)("span",{className:"button-label",children:"Sets    Tracks"})]})}),Object(p.jsx)("button",{className:"search-submit-button",type:"button",onClick:function(){var e=j;try{0==h?m(e):1==h&&y(e)}catch(t){b(e),0==h?m(e):1==h&&y(e)}},children:"Search"})]}),Object(p.jsx)("div",{className:"flex-grid",children:n.map((function(e){return k(e)}))})]})};var D=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsx)(J,{initSearchState:0})]})};var F=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsx)(J,{initSearchState:1})]})};var M=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"landing-contents",children:[Object(p.jsx)("p",{className:"greeting-logo",children:" trackid "}),Object(p.jsx)("p",{className:"greeting-text",children:" Find & Celebrate Dance Music "}),Object(p.jsx)("p",{className:"about-title",children:" Feedback"}),Object(p.jsx)("p",{className:"about-text",children:" If you have any feedback, I'd love to hear from you at rahulgol97@gmail.com "})]})]})};var R=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"landing-contents",children:[Object(p.jsx)("p",{className:"greeting-logo",children:" trackid "}),Object(p.jsx)("p",{className:"greeting-text",children:" Find & Celebrate Dance Music "}),Object(p.jsx)("p",{className:"about-title",children:" About"}),Object(p.jsx)("p",{className:"about-text",children:" trackid curates dance music to help fans discover new artists that may be under the radar "}),Object(p.jsx)("p",{className:"about-title",children:" Find artists"}),Object(p.jsx)("p",{className:"about-text",children:" Search your favourite tracks to find new artists that fit your vibe "}),Object(p.jsx)("p",{className:"about-title",children:" Acknowledgements"}),Object(p.jsx)("p",{className:"about-text",children:" This project would not have been possible without the open source community (including Supabase). Thanks to Deniz Parmaksiz, Dimitris Goulimaris, Francisco Gumucio and Deniz Turkoglu for their feedback "})]})]})};var T=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"landing-contents",children:[Object(p.jsx)("p",{className:"greeting-logo",children:" trackid "}),Object(p.jsx)("p",{className:"greeting-text",children:" Find & Celebrate Dance Music "}),Object(p.jsxs)("div",{className:"search-options-div",children:[Object(p.jsx)(u.a,{href:"#home-sets",children:Object(p.jsxs)("div",{className:"left-div",children:[Object(p.jsx)("p",{className:"search-option-header",children:" Search sets "}),Object(p.jsx)("p",{className:"search-option-text",children:" Search sets by DJ name or set name "})]})}),Object(p.jsx)(u.a,{href:"#home-tracks",children:Object(p.jsxs)("div",{className:"right-div",children:[Object(p.jsx)("p",{className:"search-option-header",children:" Search tracks"}),Object(p.jsx)("p",{className:"search-option-text",children:" Search by detected artists & tracks within DJ sets"})]})})]})]})]})},z=function(e){var t=e.text;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"comments",children:t})})},A=function(e){var t=e.text;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"top-comment",children:t})})},Q=(c(108),Object(I.a)("https://laskzafaqxkbjowhfkfq.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhc2t6YWZhcXhrYmpvd2hma2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTk0OTEsImV4cCI6MTk2MDAzNTQ5MX0.VgWbVMR-cwRe7Q_wmQgn2z0XaLVYQ_Ux94GlWa2nmIw")),X=function(){var e=Object(s.useState)(["comment1","comment2","comment3"]),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)("Loading....."),r=Object(o.a)(n,2),i=r[0],j=r[1],b=Object(l.g)().link,u="https://www.youtube.com/embed/"+b;function d(){return d=Object(N.a)(g.a.mark((function e(t){var c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.from("comments").select("text").eq("id_val","".concat(t));case 2:c=e.sent,s=c.data,c.error;try{s.sort((function(e,t){return t.text.length-e.text.length}))}catch(n){console.log(n)}null==s?a(["Try again..."]):(a(s),j(s[0].text));case 7:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}!function(e){d.apply(this,arguments)}(b);try{c[0].text}catch(h){}return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsx)("iframe",{className:"yt-vid",src:u,title:"YouTube video player",frameborder:"0",allow:"accelerometer;  autoplay;  clipboard-write;  encrypted-media;  gyroscope;  picture-in-picture",allowfullscreen:!0}),Object(p.jsx)("div",{className:"best-guess",children:" Best Guess Tracklist "}),Object(p.jsx)(A,{text:i}),Object(p.jsx)("div",{className:"set-title",children:" Other comments "}),Object(p.jsxs)("p",{children:[" ",c.map((function(e){return z(e)}))," "]})]})},Y=Object(I.a)("https://laskzafaqxkbjowhfkfq.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhc2t6YWZhcXhrYmpvd2hma2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTk0OTEsImV4cCI6MTk2MDAzNTQ5MX0.VgWbVMR-cwRe7Q_wmQgn2z0XaLVYQ_Ux94GlWa2nmIw"),V=a.a.createContext();function Z(e){var t=e.children,c=Object(s.useState)(),a=Object(o.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)(!0),l=Object(o.a)(i,2),j=l[0],b=l[1];Object(s.useEffect)((function(){var e,t=Y.auth.session();r(null!==(e=null===t||void 0===t?void 0:t.user)&&void 0!==e?e:null),b(!1);var c=Y.auth.onAuthStateChange(function(){var e=Object(N.a)(g.a.mark((function e(t,c){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(null!==(s=null===c||void 0===c?void 0:c.user)&&void 0!==s?s:null),b(!1);case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),s=c.data;return function(){null===s||void 0===s||s.unsubscribe()}}),[]);var u={signUp:function(e){return Y.auth.signUp(e)},signIn:function(e){return Y.auth.signIn(e)},signOut:function(){return Y.auth.signOut()},user:n};return Object(p.jsx)(V.Provider,{value:u,children:!j&&t})}function L(){return Object(s.useContext)(V)}var E=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),c=L().signUp,a=Object(l.f)();function n(){return(n=Object(N.a)(g.a.mark((function s(n){var r,i,l,o;return g.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n.preventDefault(),r=e.current.value,i=t.current.value,s.next=5,c({email:r,password:i});case 5:l=s.sent,(o=l.error)?(alert("error signing in"),console.log(o)):a("/");case 8:case"end":return s.stop()}}),s)})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsx)("div",{className:"title-register",children:"track id test register"}),Object(p.jsxs)("div",{className:"register-box",children:[Object(p.jsx)("div",{className:"register-text",children:"Register"}),Object(p.jsxs)("form",{onSubmit:function(e){return n.apply(this,arguments)},children:[Object(p.jsxs)("div",{className:"email-div",children:[Object(p.jsx)("label",{className:"register-form-label",htmlFor:"input-email",children:"EMAIL"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{id:"input-email",type:"email",ref:e}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{className:"password-div",children:[Object(p.jsx)("label",{className:"register-form-label",htmlFor:"input-password",children:"PASSWORD"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{id:"input-password",type:"password",ref:t}),Object(p.jsx)("br",{})]}),Object(p.jsx)("button",{className:"submit-button",type:"submit",children:"Sign up"})]})]})]})};var W=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),c=L().signIn,a=Object(l.f)();function n(){return(n=Object(N.a)(g.a.mark((function s(n){var r,i,l,o;return g.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n.preventDefault(),r=e.current.value,i=t.current.value,s.next=5,c({email:r,password:i});case 5:l=s.sent,(o=l.error)?(alert("Error signing in - have you verified your account?"),console.log(o)):a.push("/welcome");case 8:case"end":return s.stop()}}),s)})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsx)("div",{className:"title-register",children:"track-id test login"}),Object(p.jsxs)("div",{className:"register-box",children:[Object(p.jsx)("div",{className:"register-text",children:"Login"}),Object(p.jsxs)("form",{onSubmit:function(e){return n.apply(this,arguments)},children:[Object(p.jsxs)("div",{className:"email-div",children:[Object(p.jsx)("label",{className:"register-form-label",htmlFor:"input-email",children:"EMAIL"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{id:"input-email",type:"email",ref:e}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{className:"password-div",children:[Object(p.jsx)("label",{className:"register-form-label",htmlFor:"input-password",children:"PASSWORD"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{id:"input-password",type:"password",ref:t}),Object(p.jsx)("br",{})]}),Object(p.jsx)("button",{className:"submit-button",type:"submit",children:"Sign In"})]}),Object(p.jsx)(i.b,{to:"/register",children:Object(p.jsx)("p",{className:"sign-up-prompt",children:" Don't have an account? Sign up here "})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})]})};var _=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"landing-contents",children:[Object(p.jsx)("p",{className:"greeting-logo",children:" trackid "}),Object(p.jsx)("p",{className:"greeting-text",children:" Find & Celebrate Dance Music "}),Object(p.jsx)("p",{className:"about-title",children:" Welcome to trackid"}),Object(p.jsx)("p",{className:"about-text",children:" Hey there! Thank you for signing up for track-id. Right now, there aren't any special features for registered users. However, in the future, you will be able to 1) save newly discovered boiler rooms, 2) share your favourite boiler rooms with friends in a seamless way. Lastly, you will get access to some cool data to help find new artists. "})]})]})};var B=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(Z,{children:Object(p.jsx)(i.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/",exact:!0,component:T}),Object(p.jsx)(l.a,{path:"/landing",exact:!0,component:T}),Object(p.jsx)(l.a,{path:"/home-sets",exact:!0,component:D}),Object(p.jsx)(l.a,{path:"/home-tracks",exact:!0,component:F}),Object(p.jsx)(l.a,{path:"/home",exact:!0,component:D}),Object(p.jsx)(l.a,{path:"/search",exact:!0,component:D}),Object(p.jsx)(l.a,{path:"/feedback",exact:!0,component:M}),Object(p.jsx)(l.a,{path:"/about",exact:!0,component:R}),Object(p.jsx)(l.a,{path:"/welcome",exact:!0,component:_}),Object(p.jsx)(l.a,{path:"/register",exact:!0,component:E}),Object(p.jsx)(l.a,{path:"/login",exact:!0,component:W}),Object(p.jsx)(l.a,{path:"/set/:link",exact:!0,component:X}),Object(p.jsx)(l.a,{path:"/trackid",exact:!0,component:T}),Object(p.jsx)(l.a,{path:"*",exact:!0,component:T})]})})})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,119)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};c(109);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),G()},59:function(e,t,c){},8:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.bfdec515.chunk.js.map