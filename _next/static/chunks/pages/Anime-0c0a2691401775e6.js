(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{2115:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Anime",function(){return n(4395)}])},4276:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),s=n(1664),i=n.n(s),a=n(7294),o=n(2585),l=n(7516),d=n(1163),c=n(4568),u=n.n(c);function h(){var e=(0,a.useState)(!1),t=e[0],n=e[1],s=(0,d.useRouter)().pathname,c=(0,a.useState)(!1),h=c[0],x=c[1];return(0,r.jsxs)(r.Fragment,{children:[t?(0,r.jsx)("div",{className:"w-screen h-screen pointer-events-none grid place-items-center z-[99999] bg-[#0000006b] fixed top-0",children:(0,r.jsx)(u(),{color:"#EF4444",size:96})}):null,(0,r.jsxs)("nav",{className:"bg-[#121212] max-w-screen-2xl mx-auto py-3 px-4 relative text-slate-200 flex justify-between items-center z-10 isolate ",children:[(0,r.jsx)("div",{className:"md:flex-1 z-10",children:(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("img",{src:"https://see.fontimg.com/api/renderfont4/VMGx/eyJyIjoiZnMiLCJoIjo2OCwidyI6MTI1MCwiZnMiOjU0LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UmVkd2FsbHM/gbshinto-regular.png",alt:"Anime fonts",className:"invert w-32 "})})}),(0,r.jsxs)("ul",{className:"flex flex-col font-mono border-0 md:w-max md:flex-row md:opacity-100 md:pointer-events-auto items-center bg-[#131313] w-full md:static text-white absolute bottom-0 left-0 ".concat(h?" translate-y-full md:translate-y-0 opacity-100 -z-10 md:z-0 border-t-[0.1px] md:border-none border-t-[#8a8a8a0e] ":"  pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100  ","   duration-300 enter  transform-gpu"),children:[(0,r.jsx)(m,{name:"Home",path:s,url:"/",setLoader:n},1),(0,r.jsx)(m,{name:"Anime",path:s,url:"/Anime",setLoader:n},2),(0,r.jsx)(m,{name:"Phone",path:s,url:"/Phone",setLoader:n},3),(0,r.jsx)(m,{name:"Wallpapers",path:s,url:"/Walls",setLoader:n},4),(0,r.jsx)(m,{name:"Widescreen",path:s,url:"/WideScreen",setLoader:n},5),(0,r.jsx)("li",{className:" pb-2 md:hidden",children:(0,r.jsx)("button",{onClick:function(){x(!1)},children:(0,r.jsx)(l.$6x,{})})})]}),(0,r.jsx)("button",{className:"md:hidden",onClick:function(){x(function(e){return!e})},children:(0,r.jsx)(o.vHB,{className:"text-2xl"})})]})]})}var m=function(e){var t=e.path,n=e.setLoader,s=e.name,a=e.url;return(0,r.jsx)("li",{className:"pb-2 hover:text-red-500   pt-3 md:p-0 md:px-3 ".concat(t===a?"text-red-500 pointer pointer-events-none":" text-white "),children:(0,r.jsx)(i(),{href:a,children:(0,r.jsx)("button",{onClick:function(){t!==a&&n(!0)},children:s})})})}},9807:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(7568),s=n(797),i=n(655),a=n(5893),o=n(7294),l=n(4568),d=n.n(l),c=n(4276),u=n(5675),h=n.n(u),m=n(3854);function x(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("a",{target:"_blank",href:e.url,download:!0,children:(0,a.jsxs)("div",{className:"flex group font-mono relative w-full h-[300px] overflow-hidden",children:[(0,a.jsx)(h(),{alt:e.title,src:e.img,placeholder:"blur",blurDataURL:e.img,layout:"fill",objectFit:"contain",unoptimized:!0,className:" md:group-hover:scale-110 transition-transform transform-gpu duration-500 ease-in-out"}),(0,a.jsx)("div",{className:"absolute flex pr-3 rounded-t-xl pt-2 pb-2 items-center bottom-0 w-full text-[#dadada] z-30 bg-gradient-to-b from-[#1e1e1e30] to-[#000000a4] h-fit",children:(0,a.jsxs)("div",{className:"flex-1 pl-2",children:[(0,a.jsxs)("div",{className:"flex items-center text-xl",children:[(0,a.jsx)(m.fbd,{}),(0,a.jsx)("span",{className:"text-sm pl-2 pb-px font-mono",children:e.author})]}),(0,a.jsx)("div",{className:"text-sm pt-1",children:e.subreddit})]})})]})})})}var p=n(8533),f=n(7516);function w(e){var t=(0,o.useState)([]),n=t[0],l=t[1],u=(0,o.useState)(!0),h=u[0],m=u[1],w=(0,o.useRef)(""),j=(0,o.useState)("https://www.reddit.com/r/".concat(e.subredd,"/hot.json?count=1000&raw_json=1")),v=j[0],g=j[1];function b(){return(b=(0,r.Z)(function(){var e,t;return(0,i.__generator)(this,function(e){switch(e.label){case 0:return 0===n.length&&m(!0),[4,fetch(v)];case 1:return[4,e.sent().json()];case 2:return y((t=e.sent()).data.children),w.current=t.data.after,m(!1),[2]}})})).apply(this,arguments)}(0,o.useEffect)(function(){var e=!0,t=function(){var e,t;window.scrollY>100?null===(e=document.querySelector("button.enter"))||void 0===e||e.classList.add("show"):null===(t=document.querySelector("button.enter"))||void 0===t||t.classList.remove("show")};return e&&window.addEventListener("scroll",t),function(){e=!1,window.removeEventListener("scroll",t)}},[null==globalThis?void 0:globalThis.scrollY]),(0,o.useEffect)(function(){w.current="";var e=!0;return e&&(m(!0),function(){b.apply(this,arguments)}()),function(){e=!1}},[v]);var N=function(){g("https://www.reddit.com/r/".concat(e.subredd,"/hot.json?count=1000&after=").concat(w.current,"&raw_json=1"))},y=function(e){var t=[];if(e.filter(function(e){return void 0!==e.data.preview&&!0!==e.data.is_video&&!0!==e.data.over_18}).map(function(e){void 0!==e.data.preview.images[0].resolutions[3]&&t.push({title:e.data.title,author:e.data.author,subreddit:e.data.subreddit,width:e.data.preview.images[0].resolutions[2].width,height:e.data.preview.images[0].resolutions[2].height,img:e.data.preview.images[0].resolutions[2].width>e.data.preview.images[0].resolutions[2].height?e.data.preview.images[0].resolutions[3].url:e.data.preview.images[0].resolutions[2].url,url:e.data.url})}),0!==t.length){if(0===n.length){l(t);return}l((0,s.Z)(n).concat((0,s.Z)(t)))}};return(0,a.jsxs)(a.Fragment,{children:[h?(0,a.jsx)("div",{className:"w-screen h-screen pointer-events-none grid place-items-center z-[9999] bg-[#0000006b] fixed top-0",children:(0,a.jsx)(d(),{color:"#EF4444",size:96})}):null,(0,a.jsx)(c.Z,{}),(0,a.jsx)(p.Z,{dataLength:n.length,next:N,hasMore:!0,loader:(0,a.jsx)("h4",{className:"text-2xl text-white py-5 text-center ".concat(0===n.length&&" hidden "," "),children:"Loading..."}),children:(0,a.jsxs)("main",{className:" max-w-screen-2xl mx-auto md:px-1 pt-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-y-1 md:gap-x-2",children:[n.map(function(e,t){return(0,a.jsx)(x,{width:e.width,height:e.height,img:e.img,author:e.author,subreddit:e.subreddit,url:e.url,title:e.title},t)}),(0,a.jsx)("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},title:"Go to top",className:"z-[999] opacity-0 pointer-events-none fixed bottom-4 right-3 p-2 rounded-xl shadow-md shadow-black enter duration-150 hover:scale-[1.05] bg-white",children:(0,a.jsx)(f.$6x,{className:"text-red-500 text-3xl"})})]})})]})}},4395:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(9008),i=n.n(s),a=n(9807),o=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Redwalls-Anime Wallpaper"})}),(0,r.jsx)(a.Z,{subredd:"Animewallpaper"})]})};t.default=o}},function(e){e.O(0,[980,874,556,62,752,774,888,179],function(){return e(e.s=2115)}),_N_E=e.O()}]);