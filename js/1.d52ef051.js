(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"2dab":function(t,a,s){t.exports=s.p+"img/portfolio-01.72022a3a.jpg"},"8b24":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("body",[s("header",[s("div",{staticClass:"logo"},[s("img",{attrs:{src:t.logo_img,alt:""}})]),s("button",{staticClass:"nav-toggle",attrs:{"aria-label":"toggle navigator"},on:{click:t.navToggle}},[s("span",{staticClass:"my-hamburger"})]),s("nav",{staticClass:"nav"},[s("ul",{staticClass:"nav__list"},[s("li",{staticClass:"nav__item",on:{click:t.navLink}},[s("a",{staticClass:"nav__link",attrs:{href:"#home"}},[t._v("Home")])]),s("li",{staticClass:"nav__item",on:{click:t.navLink}},[s("a",{staticClass:"nav__link",attrs:{href:"#services"}},[t._v("My Services")])]),s("li",{staticClass:"nav__item",on:{click:t.navLink}},[s("a",{staticClass:"nav__link",attrs:{href:"#about"}},[t._v("About Me")])]),s("li",{staticClass:"nav__item",on:{click:t.navLink}},[s("a",{staticClass:"nav__link",attrs:{href:"#work"}},[t._v("My Work")])])])])]),s("section",{staticClass:"intro",attrs:{id:"home"}},[s("h1",{staticClass:"section__title section__title--intro"},[t._v("\n            Hi, I am "),s("strong",{staticClass:"animated slideInLeft",attrs:{id:"name"},on:{click:t.clickName}},[t._v(" Alvin ")])]),s("p",{staticClass:"section__subtitle section__subtitle--intro",attrs:{id:"position"},on:{click:t.clickPosition}},[t._v(t._s(t.position))]),s("q-img",{staticClass:"intro__img",attrs:{src:t.profile_img,alt:"a picture of Alvin Poe Selisana"}})],1),s("section",{staticClass:"my-services",attrs:{id:"services"}},[s("h2",{staticClass:"section__title section__title--services",attrs:{id:"sectiontitle"},on:{mouseover:t.clickServices}},[s("strong",[t._v("What I do")])]),s("div",{staticClass:"services"},t._l(t.services,(function(a,i){return s("div",{key:i,staticClass:"service"},[s("h3",[s("strong",[t._v(t._s(a.title))])]),s("p",[t._v(t._s(a.desc))])])})),0),s("a",{staticClass:"btn-work",attrs:{href:"#work"}},[t._v("My Work")])]),s("section",{staticClass:"about-me",attrs:{id:"about"}},[s("h2",{staticClass:"section__title section__title--about",attrs:{id:"aboutTitle"},on:{mouseover:t.clickAbout,click:t.clickAbout}},[t._v("Who I Am ?")]),s("p",{staticClass:"section__subtitle section__subtitle--about"},[t._v(t._s(t.aboutsubtitle))]),s("div",{staticClass:"about-me__body"},[s("p",[t._v(t._s(t.aboutdetail)),s("a",{staticClass:"button-3d",attrs:{href:"https://github.com/selisanaalvin/my.resume"}},[t._v(" Just poke me. ")])])]),s("img",{staticClass:"about-me__img",attrs:{id:"profileabout",src:t.profile_about,alt:"Alvin love to learn"},on:{mouseover:t.clickProfileAbout}})]),s("section",{staticClass:"my-work",attrs:{id:"work"}},[s("h2",{staticClass:"section__title section__title--work",attrs:{id:"projects"},on:{mouseover:t.clickWork}},[t._v("My Work")]),s("p",{staticClass:"section__subtitle section__subtitle--work"},[t._v(t._s(t.worksubtitle))]),s("div",{staticClass:"portfolio"},t._l(t.projects,(function(a,i){return s("a",{key:i,staticClass:"portfolio__item",on:{click:function(s){return t.jumpPortfolio(a.title)}}},[s("img",{staticClass:"portfolio__img",attrs:{src:a.img,alt:""}})])})),0)]),s("Footer"),s("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[s("q-btn",{staticClass:"arrow__up",attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1),s("q-ajax-bar",{ref:"ajaxbar",attrs:{position:"top",color:"primary",size:"10px","skip-hijack":""}})],1)},e=[],o=s("fd2d"),n={name:"PageIndex",data:function(){return{logo_img:s("cbd1"),profile_img:s("c536"),profile_about:s("fbc0"),position:"web dev.",services:[{title:"Frontend Development",desc:"I build, create, and maintain websites. Developing websites is also my passion through different \n          aspects like web designing, web publishing, web programming, as well as database management. \n          In doing so, I use Javascript, Vue, CSS3, HTML5,Sass and JQuery as my programming languages."},{title:"API Development",desc:"Application Program Interface is also one of the things that I do. \n          As a developer, it allows me to access the platform of another party.\n          I use PHP and Node.Js witj Socket.io to create API."},{title:"Mobile Development",desc:"Mobile app development is the act or process by which a mobile app is developed for mobile devices,\n          such as personal digital assistants, enterprise digital assistants or mobile phones. \n          In Mobile developement, I use Cordova, Javascript and Quasar Framework."}],aboutsubtitle:"I am not the best but i do my best always",aboutdetail:"I'm Alvin, I love learning new things and challenges. As an IT person, I never stop gaining knowledge because it is my commitment. Like technology, you must never stop upgrading. Every action that you do you must give all your best always. Anyway what's your story ? Are you looking for a person to help your company ?",worksubtitle:"</ Project that i finished >",projects:[{title:"portfolio",img:s("2dab")},{title:"portfolio",img:s("2dab")},{title:"portfolio",img:s("2dab")},{title:"portfolio",img:s("2dab")}]}},components:{Footer:o["a"]},methods:{clickWork:function(){var t=document.getElementById("projects");t.classList.add("animated","jackInTheBox"),t.addEventListener("animationend",(function(){t.classList.remove("animated","jackInTheBox")}))},clickProfileAbout:function(){var t=document.getElementById("profileabout");t.classList.add("animated","jackInTheBox"),t.addEventListener("animationend",(function(){t.classList.remove("animated","jackInTheBox")}))},clickAbout:function(){var t=document.getElementById("aboutTitle");t.classList.add("animated","flash"),t.addEventListener("animationend",(function(){t.classList.remove("animated","flash")}))},clickServices:function(){var t=document.getElementById("sectiontitle");t.classList.add("animated","swing"),t.addEventListener("animationend",(function(){t.classList.remove("animated","swing")}))},clickName:function(){var t=document.getElementById("name");t.classList.remove("animated","slideInLeft"),t.classList.add("animated","rubberBand"),t.addEventListener("animationend",(function(){t.classList.remove("animated","rubberBand")}))},clickPosition:function(){var t=document.getElementById("position");t.classList.add("animated","wobble"),t.addEventListener("animationend",(function(){t.classList.remove("animated","wobble")}))},navToggle:function(){document.body.classList.toggle("nav-open")},navLink:function(){document.body.classList.remove("nav-open")},jumpPortfolio:function(t){var a=this,s=this.$refs.ajaxbar;s.start(),this.timer=setTimeout((function(){a.$refs.ajaxbar&&(a.$refs.ajaxbar.stop(),a.$router.push(t))}),3e3*Math.random()+1e3)}}},l=n,c=s("2877"),r=s("eebe"),m=s.n(r),d=s("068f"),u=s("5096"),v=s("9c40"),_=s("7ea5"),b=Object(c["a"])(l,i,e,!1,null,null,null);a["default"]=b.exports;m()(b,"components",{QImg:d["a"],QPageScroller:u["a"],QBtn:v["a"],QAjaxBar:_["a"]})},c536:function(t,a,s){t.exports=s.p+"img/profilealvin-1.b6c7f35e.png"},cbd1:function(t,a,s){t.exports=s.p+"img/logo-1.9bdd6c51.png"},fbc0:function(t,a,s){t.exports=s.p+"img/profile-alvin-2.bd8d442a.png"},fd2d:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"footer"},[s("a",{staticClass:"footer__link",attrs:{href:"mailto: selisanaalvin@gmail.com"}},[t._v("\n        selisanaalvin@gmail.com\n    ")]),s("ul",{staticClass:"social-list"},[s("li",{staticClass:"social-list__item"},[s("a",{staticClass:"social-list__link",attrs:{href:"https://www.linkedin.com/in/alvin-selisana-358b981a2/"}},[s("i",{staticClass:"fab fa-linkedin-in"})])]),s("li",{staticClass:"social-list__item"},[s("a",{staticClass:"social-list__link",attrs:{href:"https://www.facebook.com/selisanaalvin"}},[s("i",{staticClass:"fab fa-facebook"})])]),s("li",{staticClass:"social-list__item"},[s("a",{staticClass:"social-list__link",attrs:{href:"https://github.com/selisanaalvin"}},[s("i",{staticClass:"fab fa-github"})])])])])}],o={name:"Footer",data:function(){return{}}},n=o,l=s("2877"),c=Object(l["a"])(n,i,e,!1,null,null,null);a["a"]=c.exports}}]);