import{d as v,u as g,c as s,r as x,a as o,F as w,b as f,e as n,f as u,g as e,h as k,w as y,o as t}from"./index-1379c375.js";import{_ as C,L}from"./Loader-de6034db.js";const B="/cryptotracker/assets/img2-6d39ef7e.svg",M={class:"p-6 md:px-16 m-auto min-h-[calc(100vh-5rem)] max-w-5xl"},E={key:0,class:"md:grid md:pt-3"},H={key:2,class:"px-4 py-20 text-neutral-500 dark:text-neutral-400"},N=e("p",null,"an error occured with getting data 😕",-1),V=e("p",null,"please refresh to try again",-1),b=[N,V],F={key:3,class:"flex flex-col items-center"},j=e("div",{class:"p-8 max-w-lg"},[e("img",{src:B,alt:""})],-1),S=e("p",{class:"px-4 py-6 text-neutral-500 dark:text-neutral-400"},"coins added to your watchlist will appear here!",-1),$={class:"py-4"},q=e("span",null,"see all coins",-1),z=e("div",{class:"flex h-4 ml-2 overflow-hidden w-4"},[e("span",{class:"-translate-x-full duration-300 transition group-hover:translate-x-0"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"h-4 w-4"},[e("path",{"stroke-linecap":"round","stroke-lineoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})])]),e("span",{class:"-translate-x-full transition group-hover:translate-x-full"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"h-4 w-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})])])],-1),I=v({__name:"Home",setup(A){const a=g(),p=s(()=>a.state.coins),l=s(()=>a.state.savedCoins),r=s(()=>a.state.isLoading),i=s(()=>a.state.isLoadingError),_=s(()=>l.value.sort((c,d)=>d.percentage-c.percentage));return(c,d)=>{const m=x("router-link");return t(),o("div",M,[r.value?n("",!0):(t(),o("ul",E,[(t(!0),o(w,null,f(_.value,h=>(t(),u(C,{coin:h},null,8,["coin"]))),256))])),r.value?(t(),u(L,{key:1})):n("",!0),i.value&&p.value.length===0?(t(),o("div",H,b)):n("",!0),!l.value.length&&!i.value&&!r.value?(t(),o("div",F,[j,S,e("div",$,[k(m,{to:{name:"CoinsList"},class:"bg-purple-600 cursor-pointer flex items-center font-medium group px-8 py-3 rounded-md text-white"},{default:y(()=>[q,z]),_:1})])])):n("",!0)])}}});export{I as default};