(this["webpackJsonpablr-coding-challenge"]=this["webpackJsonpablr-coding-challenge"]||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),o=n(10),l=n.n(o),s=function(e){var t=e.result;return c.a.createElement("div",{className:"store-info"},c.a.createElement("img",{className:"store-logo",src:t.merchant.logo,alt:"logo"}),c.a.createElement("div",null,c.a.createElement("span",{className:"store-name"},t.title),c.a.createElement("br",null),c.a.createElement("span",{className:"store-location"},t.location)))},u=function(e){var t=e.result;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"store-image",src:t.photo,alt:"storefront"}),c.a.createElement(s,{result:t}))},i=function(){return c.a.createElement("div",{className:"loading"})},m=n(11),f=n.n(m),E=function(){return c.a.createElement("div",{id:"top"},c.a.createElement(f.a,{behavior:"smooth",buttonBackgroundColor:"black",iconType:"arrow-up",style:{fontSize:"24px"},targetId:"top"}))},d=(n(29),function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],o=t[1],l=Object(r.useState)([]),s=Object(a.a)(l,2),m=s[0],f=s[1],d=Object(r.useState)("page_1.json"),p=Object(a.a)(d,2),b=p[0],h=p[1],g=Object(r.useState)(!1),v=Object(a.a)(g,2),j=v[0],N=v[1];return c.a.useEffect((function(){var e="".concat("https://aldr-endpoint.s3-ap-southeast-1.amazonaws.com/").concat(b);o(!0),fetch(e).then((function(e){return e.json()})).then((function(e){h(e.next),f((function(t){return t.concat(e.results)})),o(!1)})).catch((function(e){return console.warn("Error while fetching endpoint:",e)}))}),[j]),c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement("div",{className:"container"},m.map((function(e){return c.a.createElement(u,{key:e.slug,result:e})}))),c.a.createElement("div",{className:"controls"},n&&c.a.createElement(i,null),!n&&b?c.a.createElement("button",{className:"view-more-btn",onClick:function(){return N((function(e){return!e}))}},"View More"):null))});l.a.render(c.a.createElement(d,null),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a741da77.chunk.js.map