(this.webpackJsonpsucher=this.webpackJsonpsucher||[]).push([[0],{39:function(e,t,a){e.exports=a(74)},44:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),o=a(37),l=(a(44),a(9)),i=a(8),u=a(38),m=a(35),E=a(18),f={searchResults:{}};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"GET_SEARCH_REPO_REQUEST":return Object(E.a)({},e);case"GET_SEARCH_REPO_RESPONSE":return Object(E.a)(Object(E.a)({},e),{},{searchResults:n});default:return e}},d=Object(i.combineReducers)({data:p}),h=a(13),v=a.n(h),g=a(24),b=a(36),R=a.n(b),N=function(e){return{type:"GET_SEARCH_REPO_RESPONSE",data:e}},O=v.a.mark(j),w=v.a.mark(_);function j(e){var t,a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R.a.get("https://api.github.com/search/repositories",{params:{q:e.data,sort:"stars",order:"desc"}});case 3:return t=n.sent,a=t.data,n.next=7,Object(g.a)(N(a));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),O,null,[[0,9]])}function _(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.b)("GET_SEARCH_REPO_REQUEST",j);case 2:case"end":return e.stop()}}),w)}var S=Object(u.a)(),y=Object(i.createStore)(d,Object(m.composeWithDevTools)(Object(i.applyMiddleware)(S)));S.run(_);a(67);var k=a(12),P=a(14),x=(a(69),function(e){var t=e.item;return r.a.createElement("div",{className:"result-card-wrapper"},r.a.createElement("img",{className:"result-card-image",src:t.owner.avatar_url,alt:"avatar"}),r.a.createElement("div",{className:"result-card-information"},r.a.createElement("h2",{className:"repo-name"},t.name,r.a.createElement("span",{className:"repo-owner"},r.a.createElement("a",{className:"teal-text",href:t.owner.html_url,target:"_blank",rel:"noopener noreferrer"},t.owner.login)," - ",t.full_name)),r.a.createElement("div",{className:"repo-card-bottom-info"},r.a.createElement("p",{className:"repo-stars"},r.a.createElement("i",{class:"material-icons yellow-text"},"star"),t.stargazers_count),r.a.createElement("p",{className:"repo-language"},t.language))),r.a.createElement("a",{className:"btn result-card-link",href:t.svn_url,target:"_blank",rel:"noopener noreferrer"},"Go to link"))}),C=function(e){var t=e.searchResults;return r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(x,{key:e.id,item:e})})))},T=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=[],s=1;s<=Math.ceil(a/t);s++)c.push(s);return r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"!#",className:"page-link"},e))})))},A=(a(70),Object(l.b)((function(e){var t=e.data;return{searchResultsItems:Object(k.get)(t,"searchResults.items",[]),searchResult:Object(k.get)(t,"searchResults",{})}}),(function(e){return{getSearchRepoRequest:function(t){return e(function(e){return{type:"GET_SEARCH_REPO_REQUEST",data:e}}(t))}}}))((function(e){var t=e.getSearchRepoRequest,a=e.searchResultsItems,c=e.searchResult,s=Object(n.useState)(""),o=Object(P.a)(s,2),l=o[0],i=o[1],u=Object(n.useState)(1),m=Object(P.a)(u,2),E=m[0],f=m[1],p=Object(n.useState)(25),d=Object(P.a)(p,1)[0],h=Object(n.useState)([]),v=Object(P.a)(h,2),g=v[0],b=v[1];Object(n.useEffect)((function(){b(a)}),[a]);var R=E*d,N=R-d,O=g.slice(N,R);return r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12 m8 l6 offset-m2 offset-l3 form-container",onSubmit:function(e){e.preventDefault();var a=encodeURIComponent(l.trim());""!==a&&t(a)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12 form-input-container"},r.a.createElement("input",{placeholder:"Type a repo name...",id:"first_name",type:"text",className:"validate",onChange:function(e){i(e.target.value)}}),r.a.createElement("button",{className:"btn form-button",type:"submit",name:"action"}," Search",r.a.createElement("i",{className:"material-icons right white-text"},"send")))),r.a.createElement(C,{searchResults:O}),g.length>25&&r.a.createElement(T,{postsPerPage:d,totalPosts:g.length,paginate:function(e){f(e)}}),c.items&&0===g.length&&r.a.createElement("p",null,"No results")))}))),G=(a(71),function(e){var t=e.classes;Object(n.useEffect)((function(){return document.documentElement.addEventListener("mousemove",a),function(){document.documentElement.removeEventListener("mousemove",a)}}),[]);var a=function(e){document.querySelectorAll(".eye").forEach((function(t){var a=t.getBoundingClientRect().left+t.clientWidth/2,n=t.getBoundingClientRect().top+t.clientHeight/2,r=Math.atan2(e.pageX-a,e.pageY-n)*(180/Math.PI)*-1+270;t.style.transform="rotate("+r+"deg)"}))};return r.a.createElement("div",{className:"logo-container ".concat(t)},r.a.createElement("div",{className:"face"},r.a.createElement("div",{className:"eyes"},r.a.createElement("div",{className:"eye"}),r.a.createElement("div",{className:"eye"}))))}),H=(a(72),Object(l.b)((function(e){var t=e.data;return{searchResults:Object(k.get)(t,"searchResults.items",[])}}),null)((function(e){var t=e.searchResults;return r.a.createElement("div",{className:"wrapper ".concat(t.length>0?"top":""),wrapper:!0},r.a.createElement("div",{className:"container"},r.a.createElement(G,null),r.a.createElement(A,null)))})));var I=function(){return r.a.createElement(l.a,{store:y},r.a.createElement("div",{className:"App"},r.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=document.getElementById("root");s.a.render(r.a.createElement(l.a,{store:y},r.a.createElement(o.a,{basename:"/"},r.a.createElement(I,null))),q),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.43d158a6.chunk.js.map