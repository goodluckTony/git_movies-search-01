"use strict";(self.webpackChunkgit_movies_search_01=self.webpackChunkgit_movies_search_01||[]).push([[904],{904:function(e,i,n){n.r(i);var s=n(439),r=n(791),c=n(689),l=n(87),t=n(659),o=n(486),a=n(184),d=(0,o.QM)({mainInfo:{display:"flex",flexDirection:"row"},line:{top:"0",left:"0",width:"100%",height:"1px",backgroundColor:"black",margin:"10px"}});i.default=function(){var e=d(),i=(0,c.s0)(),n=(0,r.useState)(null),o=(0,s.Z)(n,2),h=o[0],x=o[1],u=(0,c.UO)().id,j=(0,r.useCallback)((function(){(0,t.Pg)(u).then((function(e){return x(e)})).catch((function(e){return console.error(e)}))}),[u]);if((0,r.useEffect)((function(){u&&j()}),[u,j]),!h)return(0,a.jsx)("div",{children:"Loading..."});console.log(u);var v=h.original_title,f=h.vote_average,p=h.overview,g=h.poster_path,m=h.genres,k=f,w=Math.floor(10*k);return(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{onClick:function(){return i(-1)},children:"Go back"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:e.mainInfo,children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+g,alt:"poster"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:v}),(0,a.jsxs)("p",{children:["User Score: ",w,"%"]}),(0,a.jsx)("h3",{children:"Overview"}),(0,a.jsx)("p",{children:p}),(0,a.jsx)("h4",{children:"Genres"}),m&&m.length>0?(0,a.jsx)("ul",{children:m.map((function(e){return(0,a.jsx)("li",{children:e.name},e.id)}))}):(0,a.jsx)("p",{children:"No genres found"})]})]}),(0,a.jsx)("div",{className:e.line}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"Additional information"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(l.OL,{to:"/movies/".concat(u,"/cast"),children:"Cast"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.OL,{to:"/movies/".concat(u,"/reviews"),children:"Reviews"})})]}),(0,a.jsx)("div",{className:e.line}),(0,a.jsx)(c.j3,{})]})]})]})}}}]);
//# sourceMappingURL=904.36ab9ad8.chunk.js.map