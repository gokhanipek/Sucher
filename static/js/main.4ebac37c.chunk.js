(this.webpackJsonpsucher=this.webpackJsonpsucher||[]).push([[0],{30:function(e,t,n){e.exports=n(61)},35:function(e,t,n){},36:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(9),o=n.n(c),s=(n(35),n(36),n(11)),u=function(e){return{type:"GET_SEARCH_REPO_RESPONSE",data:e}},i=Object(s.b)((function(e){return{}}),(function(e){return{getSearchRepoRequest:function(){return e({type:"GET_SEARCH_REPO_REQUEST"})}}}))((function(e){var t=e.getSearchRepoRequest;return Object(r.useEffect)((function(){t()})),a.a.createElement("div",null,"hello")}));var l=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(6),h=n(29),p=n(27),d=n(12),f={searchResults:{}};var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SEARCH_REPO_REQUEST":return Object(d.a)({},e);case"GET_SEARCH_REPO_RESPONSE":return Object(d.a)(Object(d.a)({},e),{},{searchResults:t.data});default:return e}},R=Object(E.combineReducers)({state:v}),b=n(8),m=n.n(b),O=n(16),w=n(28),S=n.n(w),_=m.a.mark(j),g=m.a.mark(T);function j(){var e,t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S.a.get("https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc");case 3:return e=n.sent,console.warn(e.data),t=e.data,n.next=8,Object(O.a)(u(t));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),_,null,[[0,10]])}function T(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.b)("GET_SEARCH_REPO_REQUEST",j);case 2:case"end":return e.stop()}}),g)}var k=Object(h.a)(),x=Object(E.createStore)(R,Object(p.composeWithDevTools)(Object(E.applyMiddleware)(k)));k.run(T);var y=document.getElementById("root");o.a.render(a.a.createElement(s.a,{store:x},a.a.createElement(l,null)),y),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.4ebac37c.chunk.js.map