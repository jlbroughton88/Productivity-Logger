(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/h46":function(t,n,e){e("cHUd")("Map")},"8iia":function(t,n,e){var r=e("QMMT"),o=e("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},JAUf:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var r=e("q1tI"),o=e.n(r),i=e("YFqc"),u=e.n(i),f=e("nOHt"),s=e("PUim"),a=o.a.createElement;function l(){var t=Object(f.useRouter)(),n=t.pathname,e=t.query,r=Object(s.useAuth)(),i=r.isAuthenticated,l=r.isLoading,c=r.login,p=r.logout;return a("header",null,a("nav",null,a("ul",null,a("li",null,a(u.a,{href:"/"},a("a",null,"Home"))),a("li",null,a(u.a,{href:"/about"},a("a",null,"About"))),!l&&(i?a(o.a.Fragment,null,a("li",null,a(u.a,{href:"/profile"},a("a",null,"Profile"))),a("li",null,a("button",{onClick:function(){return p({returnTo:"https://productivity-logger.now.sh/"})}},"Logout"))):a("li",null,a("button",{onClick:function(){return c({appState:{returnTo:{pathname:n,query:e}}})}},"Login"))),a("button",{onClick:function(){return p({returnTo:"https://productivity-logger.now.sh/"})}},"TEST Logout"))))}},LX0d:function(t,n,e){t.exports=e("UDep")},RNiq:function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),o=e.n(r),i=e("JAUf"),u=o.a.createElement;n.default=function(){return u("div",null,u(i.default,null),u("h1",null,"Hello World"))}},"RRc/":function(t,n,e){var r=e("oioR");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},UDep:function(t,n,e){e("wgeU"),e("FlQf"),e("bBy9"),e("g33z"),e("XLbu"),e("/h46"),e("dVTT"),t.exports=e("WEpk").Map},Wu5q:function(t,n,e){"use strict";var r=e("2faE").f,o=e("oVml"),i=e("XJU/"),u=e("2GTP"),f=e("EXMj"),s=e("oioR"),a=e("MPFp"),l=e("UO39"),c=e("TJWN"),p=e("jmDH"),h=e("6/1s").fastKey,v=e("n3ko"),d=p?"_s":"size",_=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,a){var l=t((function(t,r){f(t,l,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&s(r,e,t[a],t)}));return i(l.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var e=v(this,n),r=_(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[d]--}return!!r},forEach:function(t){v(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!_(v(this,n),t)}}),p&&r(l.prototype,"size",{get:function(){return v(this,n)[d]}}),l},def:function(t,n,e){var r,o,i=_(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,n,e){a(t,n,(function(t,e){this._t=v(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?l(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,l(1))}),e?"entries":"values",!e,!0),c(n)}}},XLbu:function(t,n,e){var r=e("Y7ZC");r(r.P+r.R,"Map",{toJSON:e("8iia")("Map")})},YFqc:function(t,n,e){t.exports=e("cTJO")},cTJO:function(t,n,e){"use strict";var r=e("/HRN"),o=e("WaGi"),i=e("ZDA2"),u=e("/+P4"),f=e("N9n2"),s=e("LX0d"),a=e("KI45"),l=e("5Uuq");n.__esModule=!0,n.default=void 0;var c,p=e("CxY0"),h=l(e("q1tI")),v=a(e("nOHt")),d=e("g/15");function _(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new s,y=window.IntersectionObserver,k={};function w(){return c||(y?c=new y((function(t){t.forEach((function(t){if(g.has(t.target)){var n=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(c.unobserve(t.target),g.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var m=function(t){function n(t){var e;return r(this,n),(e=i(this,u(n).call(this,t))).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var n=null,e=null,r=null;return function(o,i){if(r&&o===n&&i===e)return r;var u=t(o,i);return n=o,e=i,r=u,u}}((function(t,n){return{href:_(t),as:n?_(n):n}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),u=i.href,f=i.as;if(function(t){var n=(0,p.parse)(t,!1,!0),e=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(u)){var s=window.location.pathname;u=(0,p.resolve)(s,u),f=f?(0,p.resolve)(s,f):u,t.preventDefault();var a=e.props.scroll;null==a&&(a=f.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](u,f,{shallow:e.props.shallow}).then((function(t){t&&a&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return f(n,t),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,n)}},{key:"handleRef",value:function(t){var n=this,e=k[this.getHref()];this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),e||(this.cleanUpListeners=function(t,n){var e=w();return e?(e.observe(t),g.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}g.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),k[t]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var i=h.Children.only(n),u={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch()},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||r),h.default.cloneElement(i,u)}}]),n}(h.Component);n.default=m},dVTT:function(t,n,e){e("aPfg")("Map")},g33z:function(t,n,e){"use strict";var r=e("Wu5q"),o=e("n3ko");t.exports=e("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},vlRD:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",1,2,12,13,14]]]);