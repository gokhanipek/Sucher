(this.webpackJsonpsucher=this.webpackJsonpsucher||[]).push([[0],{34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},40:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),s=a.n(c),o=(a(39),a(40),a(8)),l=a(9),i=a(13),u=a(30),m=a.n(u),p=function(e){return{type:"GET_SEARCH_REPO_RESPONSE",data:e}},d=(a(47),function(e){var t=e.item;return r.a.createElement("div",{className:"result-card-wrapper"},r.a.createElement("img",{className:"result-card-image",src:t.owner.avatar_url,alt:"avatar"}),r.a.createElement("div",{className:"result-card-information"},r.a.createElement("h2",{className:"repo-name"},t.name,r.a.createElement("span",{className:"repo-owner"},r.a.createElement("a",{className:"teal-text",href:t.owner.html_url,target:"_blank",rel:"noopener noreferrer"},t.owner.login)," - ",t.full_name)),r.a.createElement("div",{className:"repo-card-bottom-info"},r.a.createElement("p",{className:"repo-stars"},r.a.createElement("i",{className:"material-icons yellow-text"},"star"),t.stargazers_count),r.a.createElement("p",{className:"repo-language"},t.language))),r.a.createElement("a",{className:"btn result-card-link",href:t.svn_url,target:"_blank",rel:"noopener noreferrer"},"Go to link"))}),E=function(e){var t=e.searchResults;return r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(d,{key:e.id,item:e})})))},f=(a(48),Object(o.b)((function(e){var t=e.data;return{searchResultsItems:Object(l.get)(t,"searchResults.items",[]),searchResult:Object(l.get)(t,"searchResults",{})}}),(function(e){return{getSearchRepoRequest:function(t,a){return e({type:"GET_SEARCH_REPO_REQUEST",data:t})}}}))((function(e){var t=e.getSearchRepoRequest,a=e.searchResultsItems,c=e.searchResult,s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],u=o[1],p=Object(n.useState)(1),d=Object(i.a)(p,2),f=d[0],v=d[1],h=Object(n.useState)([]),g=Object(i.a)(h,2),b=g[0],R=g[1];Object(n.useEffect)((function(){R(a)}),[a]);return r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12 m8 l6 offset-m2 offset-l3 form-container",onSubmit:function(e){e.preventDefault();var a=encodeURIComponent(l.trim());""!==a&&t({query:a,page:1})}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12 form-input-container"},r.a.createElement("input",{placeholder:"Type a repo name...",id:"first_name",type:"text",className:"validate",onChange:function(e){u(e.target.value)}}),r.a.createElement("button",{className:"btn form-button",type:"submit",name:"action"}," Search",r.a.createElement("i",{className:"material-icons right white-text"},"send")))),r.a.createElement(E,{searchResults:b}),c.total_count>20*f&&r.a.createElement(m.a,{breakLabel:"...",breakClassName:"break-me",pageCount:c.total_count/20>50?50:c.total_count/20,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){window.scrollTo({top:0,left:0,behavior:"smooth"});var a=e.selected;v(a);var n=encodeURIComponent(l.trim());""!==n&&t({query:n,page:a+1})},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}),c.items&&0===b.length&&r.a.createElement("p",null,"No results")))}))),v=(a(49),function(e){var t=e.classes;Object(n.useEffect)((function(){return document.documentElement.addEventListener("mousemove",a),function(){document.documentElement.removeEventListener("mousemove",a)}}),[]);var a=function(e){document.querySelectorAll(".eye").forEach((function(t){var a=t.getBoundingClientRect().left+t.clientWidth/2,n=t.getBoundingClientRect().top+t.clientHeight/2,r=Math.atan2(e.pageX-a,e.pageY-n)*(180/Math.PI)*-1+270;t.style.transform="rotate("+r+"deg)"}))};return r.a.createElement("div",{className:"logo-container ".concat(t)},r.a.createElement("div",{className:"face"},r.a.createElement("div",{className:"eyes"},r.a.createElement("div",{className:"eye"}),r.a.createElement("div",{className:"eye"}))))}),h=(a(50),Object(o.b)((function(e){var t=e.data;return{searchResults:Object(l.get)(t,"searchResults.items",[])}}),null)((function(e){var t=e.searchResults;return r.a.createElement("div",{className:"wrapper ".concat(t.length>0?"top":""),wrapper:!0},r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(f,null)))})));var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(6),R=a(33),N=a(31),O=a(14),w={searchResults:{}};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"GET_SEARCH_REPO_REQUEST":return Object(O.a)({},e);case"GET_SEARCH_REPO_RESPONSE":return Object(O.a)(Object(O.a)({},e),{},{searchResults:n});default:return e}},j=Object(b.combineReducers)({data:_}),y=a(10),S=a.n(y),C=a(19),k=a(32),x=a.n(k),T=S.a.mark(q),P=S.a.mark(A);function q(e){var t,a;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x.a.get("https://api.github.com/search/repositories",{params:{q:e.data.query,sort:"stars",order:"desc",page:e.data.page,per_page:20}});case 3:return t=n.sent,a=t.data,n.next=7,Object(C.a)(p(a));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),T,null,[[0,9]])}function A(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.b)("GET_SEARCH_REPO_REQUEST",q);case 2:case"end":return e.stop()}}),P)}var G=Object(R.a)(),H=Object(b.createStore)(j,Object(N.composeWithDevTools)(Object(b.applyMiddleware)(G)));G.run(A);var I=document.getElementById("root");s.a.render(r.a.createElement(o.a,{store:H},r.a.createElement(g,null)),I),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.8371df00.chunk.js.map