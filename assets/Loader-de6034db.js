import{d as g,u as v,c,o as l,a as d,g as t,t as s,m as w,q as h,C as x,_ as y}from"./index-1379c375.js";const k={class:"h-0 min-[280px]:h-8 md:h-12 w-0 min-[280px]:w-8 md:w-12"},C=["src","alt"],F={class:"pl-2 pr-1 md:px-4 w-full"},$={class:"flex items-start justify-between"},S={class:"font-bold text-sm mr-4"},z={class:"font-medium"},B={class:"flex items-start justify-between pt-0.5"},L={class:"text-left mr-4"},j=["fill"],M=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"},null,-1),N=[M],J=g({__name:"Coin",props:{coin:{}},setup(m){const n=m,r=v(),_=c(()=>r.state.currency),u=c(()=>r.state.savedCoins),i=c(()=>u.value.some(e=>e.id===n.coin.id));function b(){i.value?r.commit("removeFav",n.coin):r.commit("addFav",n.coin),localStorage.setItem("localSavedCoins",JSON.stringify(u.value.map(e=>e.id)))}function f(e){const a=e.toFixed(2),o=Math.trunc(e),p=o>=99999.99?o>=1e6?`${(o/1e6).toFixed(2)}M`:`${(o/1e3).toFixed(2)}k`:o.toLocaleString();return o>99999.99?p:`${p}.${a.substring(a.length-2)}`}return(e,a)=>(l(),d("li",{class:h(["border flex items-center my-6 md:my-3 last:mb-20 md:last:mb-[5.5rem] px-4 py-5 rounded-md shadow-inner hover:shadow-none transition",{"bg-purple-50/75 dark:bg-zinc-700 border-purple-400 dark:border-neutral-600 shadow-none transition":i.value},{"bg-white dark:bg-zinc-800 dark:border-neutral-700":!i.value}])},[t("div",k,[t("img",{src:e.coin.img,alt:e.coin.symbol+" img"},null,8,C)]),t("div",F,[t("div",$,[t("p",S,s(e.coin.symbol),1),t("p",z,s(w(x)[_.value])+" "+s(f(e.coin.price)),1)]),t("div",B,[t("p",L,s(e.coin.name),1),t("p",{class:h(["font-medium text-gray-400, text-sm",{"text-green-600 dark:text-green-500":e.coin.percentage>0,"text-red-600 dark:text-rose-400 -300":e.coin.percentage<0}])},s(e.coin.percentage.toFixed(2))+"%",3)])]),t("button",{class:"p-2 md:px-4",onClick:b,title:"save to watchlist",type:"button"},[(l(),d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:i.value?"#FFA412":"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#FFA412"},N,8,j))])],2))}}),T={},A={class:"py-10"},V=t("div",{class:"bg-purple-200 dark:bg-neutral-500 h-8 m-auto mt-5 mb-1 overflow-hidden relative rounded-full w-8"},[t("div",{class:"animate-spin before:absolute before:content-[''] before:h-4 before:opacity-70 before:bg-purple-400 before:-right-1.5 before:w-3 h-4 origin-bottom-right relative w-4"}),t("div",{class:"bg-neutral-50 dark:bg-neutral-800 w-6 h-6 m-auto rounded-full relative -top-3 z-10"})],-1),q=t("p",null,"Loading...",-1),D=[V,q];function E(m,n){return l(),d("div",A,D)}const O=y(T,[["render",E]]);export{O as L,J as _};
