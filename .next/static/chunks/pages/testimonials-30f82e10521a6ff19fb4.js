_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"/0+H":function(e,t,s){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))};var n,r=(n=s("q1tI"))&&n.__esModule?n:{default:n},i=s("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,s=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,i=e.hasQuery,a=void 0!==i&&i;return s||r&&a}},"7W2i":function(e,t,s){var n=s("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,s){"use strict";s("lSNA");t.__esModule=!0,t.defaultHead=o,t.default=void 0;var n,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(s,r,i):s[r]=e[r]}s.default=e,t&&t.set(e,s);return s}(s("q1tI")),i=(n=s("Xuae"))&&n.__esModule?n:{default:n},a=s("lwAK"),c=s("FYa8"),d=s("/0+H");function m(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function o(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var s=r.default.Children.toArray(t.props.children);return e.concat(s)}),[]).reduce(l,[]).reverse().concat(o(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,s=new Set,n={};return function(r){var i=!0,a=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){a=!0;var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var d=0,m=u.length;d<m;d++){var o=u[d];if(r.props.hasOwnProperty(o))if("charSet"===o)s.has(o)?i=!1:s.add(o);else{var l=r.props[o],h=n[o]||new Set;"name"===o&&a||!h.has(l)?(h.add(l),n[o]=h):i=!1}}}return i}}()).reverse().map((function(e,t){var s=e.key||t;return r.default.cloneElement(e,{key:s})}))}function j(e){var t=e.children,s=(0,r.useContext)(a.AmpStateContext),n=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(s)},t)}j.rewind=function(){};var p=j;t.default=p},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,s){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((n=s("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,s){var n=s("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},MFDk:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return c}));var n=s("nKUr"),r=s("YFqc"),i=s.n(r),a=s("20a2");function c(){Object(a.useRouter)();return Object(n.jsxs)("footer",{children:[Object(n.jsx)("div",{className:"car-top default show",children:Object(n.jsx)("span",{children:Object(n.jsx)("img",{src:"img/car.png"})})}),Object(n.jsx)("div",{className:"footerTop",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"footerLinks",children:[Object(n.jsx)(i.a,{href:"/about",children:"About Proteq"}),Object(n.jsx)(i.a,{href:"/gallery",children:"Gallery"}),Object(n.jsx)(i.a,{href:"/testimonials",children:"Testimonials"}),Object(n.jsx)(i.a,{href:"/contact",children:"Contact"})]}),Object(n.jsxs)("div",{className:"footerInfo",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:"Address:"})," L-102, Prime Mall Irla, Vile Parle (W), Mumbai - 400 056"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:"Phone No:"})," ",Object(n.jsx)(i.a,{href:"tel:8422898422",children:"+91-8422 89 8422"})," ",Object(n.jsx)(i.a,{href:"tel:8422898422",children:Object(n.jsx)("a",{className:"ml-3",children:" +91-8422 89 8422"})})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:"Email:"})," info@proteq.co.in"]})]}),Object(n.jsxs)("div",{className:"footerSocial",children:[Object(n.jsx)("a",{target:"_blank",href:"https://www.facebook.com/",children:Object(n.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})}),Object(n.jsx)("a",{target:"_blank",href:"https://www.instagram.com/",children:Object(n.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})}),Object(n.jsx)("a",{target:"_blank",href:"https://twitter.com/",children:Object(n.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})}),Object(n.jsx)("a",{target:"_blank",href:"https://www.youtube.com/",children:Object(n.jsx)("i",{className:"fa fa-youtube-play","aria-hidden":"true"})})]})]})}),Object(n.jsx)("div",{className:"copyright",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 text-md-left text-center",children:Object(n.jsx)("p",{children:"Copyright\xa92021 www.proteq.co.in All Rights Reserved."})}),Object(n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-12 text-md-right text-center",children:Object(n.jsxs)("div",{className:"copyrightLinks",children:[Object(n.jsx)(i.a,{href:"/",children:"Terms & Conditions"}),Object(n.jsx)(i.a,{href:"/",children:"Privacy Policy"}),Object(n.jsx)(i.a,{href:"/",children:Object(n.jsx)("img",{src:"img/whatsapp.svg",className:"img-fluid"})})]})})]})})})]})}},Nsbk:function(e,t){function s(t){return e.exports=s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(t)}e.exports=s},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,s){var n=s("Ijbi"),r=s("EbDI"),i=s("ZhPi"),a=s("Bnag");e.exports=function(e){return n(e)||r(e)||i(e)||a()}},XV8z:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/testimonials",function(){return s("ptHL")}])},Xuae:function(e,t,s){"use strict";var n=s("RIqP"),r=s("lwsE"),i=s("W8MJ"),a=(s("PJYZ"),s("7W2i")),c=s("a1gu"),d=s("Nsbk");function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=d(e);if(t){var r=d(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return c(this,s)}}t.__esModule=!0,t.default=void 0;var o=s("q1tI"),l=function(e){a(s,e);var t=m(s);function s(e){var i;return r(this,s),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(s,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),s}(o.Component);t.default=l},a1gu:function(e,t,s){var n=s("cDf5"),r=s("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?r(e):t}},g4pe:function(e,t,s){e.exports=s("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},lwAK:function(e,t,s){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var r=((n=s("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=r},ptHL:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return m}));var n=s("nKUr"),r=s("g4pe"),i=s.n(r),a=s("20a2"),c=s("Isfp"),d=s("MFDk");s("YFqc");function m(){Object(a.useRouter)();return Object(n.jsxs)("main",{className:"content",children:[Object(n.jsxs)(i.a,{children:[Object(n.jsx)("title",{children:"Testimonials"}),Object(n.jsx)("link",{rel:"icon",href:"/img/logo.svg"})]}),Object(n.jsx)(c.default,{}),Object(n.jsxs)("section",{className:"testimonialWrapper",children:[Object(n.jsxs)("ul",{className:"scrollingImg list-unstyled",children:[Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user1.png"})}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user2.png"})}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user3.png"})}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user4.png"})}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user5.png"})}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user6.png"})}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user7.png"})}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user8.png"})}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user9.png"})}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user10.png"})}),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:"img/user11.png"})})]}),Object(n.jsx)("div",{className:"secTestimonial",children:Object(n.jsx)("div",{className:"testimonialCard",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsxs)("div",{className:"col-xl-8 col-lg-8 col-md-8 col-sm-12",children:[Object(n.jsx)("h1",{children:"Testimonials"}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})]})}),Object(n.jsxs)("div",{className:"card-columns py-5",children:[Object(n.jsx)("div",{className:"card testimonialCard",children:Object(n.jsxs)("div",{className:"testimonialBox",children:[Object(n.jsxs)("div",{className:"testimonialUser",children:[Object(n.jsx)("img",{src:"img/user.png",className:"img-fluid"}),Object(n.jsx)("h6",{children:"Rushabh Parekh"})]}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard d."}),Object(n.jsx)("img",{src:"img/quote.svg",className:"img-fluid"})]})}),Object(n.jsx)("div",{className:"card testimonialCard",children:Object(n.jsxs)("div",{className:"testimonialBox",children:[Object(n.jsxs)("div",{className:"testimonialUser",children:[Object(n.jsx)("img",{src:"img/user.png",className:"img-fluid"}),Object(n.jsx)("h6",{children:"Rushabh Parekh"})]}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard d."}),Object(n.jsx)("img",{src:"img/quote.svg",className:"img-fluid"})]})}),Object(n.jsx)("div",{className:"card testimonialCard",children:Object(n.jsxs)("div",{className:"testimonialBox",children:[Object(n.jsxs)("div",{className:"testimonialUser",children:[Object(n.jsx)("img",{src:"img/user.png",className:"img-fluid"}),Object(n.jsx)("h6",{children:"Rushabh Parekh"})]}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard d."}),Object(n.jsx)("img",{src:"img/quote.svg",className:"img-fluid"})]})}),Object(n.jsx)("div",{className:"card testimonialCard",children:Object(n.jsxs)("div",{className:"testimonialBox",children:[Object(n.jsxs)("div",{className:"testimonialUser",children:[Object(n.jsx)("img",{src:"img/user.png",className:"img-fluid"}),Object(n.jsx)("h6",{children:"Rushabh Parekh"})]}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard d and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry\u2019s standard Lorem I."}),Object(n.jsx)("img",{src:"img/quote.svg",className:"img-fluid"})]})}),Object(n.jsx)("div",{className:"card testimonialCard",children:Object(n.jsxs)("div",{className:"testimonialBox",children:[Object(n.jsxs)("div",{className:"testimonialUser",children:[Object(n.jsx)("img",{src:"img/user.png",className:"img-fluid"}),Object(n.jsx)("h6",{children:"Rushabh Parekh"})]}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard d."}),Object(n.jsx)("img",{src:"img/quote.svg",className:"img-fluid"})]})}),Object(n.jsx)("div",{className:"card testimonialCard",children:Object(n.jsxs)("div",{className:"testimonialBox",children:[Object(n.jsxs)("div",{className:"testimonialUser",children:[Object(n.jsx)("img",{src:"img/user.png",className:"img-fluid"}),Object(n.jsx)("h6",{children:"Rushabh Parekh"})]}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard d."}),Object(n.jsx)("img",{src:"img/quote.svg",className:"img-fluid"})]})}),Object(n.jsx)("div",{className:"card testimonialCard",children:Object(n.jsxs)("div",{className:"testimonialBox",children:[Object(n.jsxs)("div",{className:"testimonialUser",children:[Object(n.jsx)("img",{src:"img/user.png",className:"img-fluid"}),Object(n.jsx)("h6",{children:"Rushabh Parekh"})]}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard d."}),Object(n.jsx)("img",{src:"img/quote.svg",className:"img-fluid"})]})}),Object(n.jsx)("div",{className:"card testimonialCard",children:Object(n.jsxs)("div",{className:"testimonialBox",children:[Object(n.jsxs)("div",{className:"testimonialUser",children:[Object(n.jsx)("img",{src:"img/user.png",className:"img-fluid"}),Object(n.jsx)("h6",{children:"Rushabh Parekh"})]}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard d."}),Object(n.jsx)("img",{src:"img/quote.svg",className:"img-fluid"})]})}),Object(n.jsx)("div",{className:"card testimonialCard",children:Object(n.jsxs)("div",{className:"testimonialBox",children:[Object(n.jsxs)("div",{className:"testimonialUser",children:[Object(n.jsx)("img",{src:"img/user.png",className:"img-fluid"}),Object(n.jsx)("h6",{children:"Rushabh Parekh"})]}),Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\u2019s standard dummy text ever since theLorem Ipsum is simply dummy Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard Lorem Ipsum has been the industry\u2019s standard d."}),Object(n.jsx)("img",{src:"img/quote.svg",className:"img-fluid"})]})})]})]})})})]}),Object(n.jsx)(d.default,{})]})}}},[["XV8z",0,2,1,3]]]);