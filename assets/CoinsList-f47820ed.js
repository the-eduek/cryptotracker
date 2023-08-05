import{d as _,u as x,c as n,k as m,x as g,a as o,g as e,p as k,v as w,F as y,b,e as l,f,o as t}from"./index-a2cfc960.js";import{_ as L,L as C}from"./Loader-d00cd748.js";const B={class:"py-6 m-auto min-h-[calc(100vh-5rem)] max-w-5xl"},E={class:"bg-neutral-50 dark:bg-neutral-900 duration-300 sticky -top-[1px] transition"},F={class:"py-4 md:py-6 md:mb-2 px-6 md:px-16 relative after:absolute after:bg-gradient-to-b after:bottom-0 after:content-[''] after:duration-300 after:from-neutral-50 dark:after:from-neutral-900 after:from-0% after:h-5 md:after:h-6 after:left-0 after:pointer-events-none after:to-[rgba(255,255,255,0)] after:to-100% after:transition after:translate-y-full after:w-full"},V=e("span",{class:"absolute inline-flex left-8 md:left-[4.5rem] top-[calc(50%-12px)]"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1),M={key:0,class:"md:gap-x-6 md:grid min-[840px]:grid-cols-[repeat(2,minmax(325px,1fr))] px-6 md:px-16"},N={key:1,class:"px-4 py-10 text-neutral-500 dark:text-neutral-400"},S={key:3,class:"px-4 py-20 text-neutral-500 dark:text-neutral-400"},T=e("p",null,"an error occured with getting data 😕",-1),j=e("p",null,"please refresh to try again",-1),z=[T,j],$=_({__name:"CoinsList",setup(A){const i=x(),r=n(()=>i.state.coins),c=n(()=>i.state.isLoading),h=n(()=>i.state.isLoadingError),a=m(""),u=m(r.value),v=n(()=>a.value.trim().length>0&&u.value.length===0);return g([a,r],()=>{u.value=r.value.filter(d=>d.name.toLowerCase().includes(a.value.toLowerCase())||d.symbol.toLowerCase().includes(a.value.toLowerCase()))},{immediate:!0}),(d,p)=>(t(),o("div",B,[e("div",E,[e("div",F,[k(e("input",{class:"bg-transparent border border-neutral-500 outline-none pl-10 p-4 py-2 md:py-3 focus:outline-purple-200 rounded-md md:text-lg w-full",placeholder:"search all coins...",type:"text","onUpdate:modelValue":p[0]||(p[0]=s=>a.value=s)},null,512),[[w,a.value]]),V])]),c.value?l("",!0):(t(),o("ul",M,[(t(!0),o(y,null,b(u.value,s=>(t(),f(L,{coin:s,key:s.id,class:"place-items-start h-fit"},null,8,["coin"]))),128))])),r.value.length>0&&v.value?(t(),o("p",N,"no coins found")):l("",!0),c.value?(t(),f(C,{key:2})):l("",!0),h.value&&r.value.length===0?(t(),o("div",S,z)):l("",!0)]))}});export{$ as default};
