import{d as T,i as E,j,k as a,o as i,a as m,g as e,t as y,l as L,m as V,E as b,u as Y,c as S,n as P,p as g,v as z,q as I,h as $,w as M,T as B,s as N,F as R,b as H,f as U,e as D}from"./index-a2cfc960.js";function O(p,l,s){if(!("ontouchstart"in window))return;let u,o;const r=50;function x(c){c.preventDefault();const h=c.touches[0];o=0,u=h.clientY}p.addEventListener("touchstart",x);function v(c){c.preventDefault(),o=c.touches[0].clientY-u}p.addEventListener("touchmove",v);function f(){Math.abs(o)>r&&(o<0?l():s())}p.addEventListener("touchend",f)}const q=["onClick"],A={class:"flex h-full items-center justify-center m-auto max-w-5xl px-6 py-14 relative text-white"},J={class:"w-full"},K={class:"font-medium text-3xl md:text-4xl"},Q=e("p",{class:"font-medium py-10 text-5xl tracking-[-0.625rem]"},"==",-1),W={class:"font-medium text-3xl md:text-4xl"},X=T({__name:"ConvertModal",props:{coinType:{},currencyType:{},amtTo:{},amtFrom:{}},emits:["closeEvent","clearEvent"],setup(p,{emit:l}){function s(){l("closeEvent")}function u(r){r.key.toLowerCase()==="escape"&&s()}E(()=>{window.addEventListener("keyup",u)}),j(()=>{l("clearEvent"),window.removeEventListener("keyup",u)});const o=a(null);return E(()=>{o.value&&O(o.value,()=>{console.log("hello")},()=>{s()})}),(r,x)=>(i(),m("div",{class:"backdrop-blur-[1.5px] fixed flex h-full left-0 top-0 w-full z-20",onClick:L(s,["self"])},[e("div",{class:"bg-purple-500 h-2/3 mt-auto rounded-t-3xl shadow-lg transition w-full",ref_key:"modalContent",ref:o},[e("div",A,[e("button",{onClick:s,class:"absolute bg-neutral-50 border cursor-pointer max-w-[10rem] mb-auto p-0.5 rounded-full top-5 w-1/3",title:"close",type:"button"}),e("div",J,[e("p",K,y(r.amtFrom.toLocaleString())+" "+y(r.currencyType),1),Q,e("p",W,y(Number(r.amtTo.toFixed(3)).toLocaleString())+" "+y(r.coinType),1)])])],512)],8,q))}}),Z={class:"absolute flex ml-1 mt-1.5 text-left text-red-600 dark:text-red-300 text-sm"},ee=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 mt-0.5 w-4 inline",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),te={class:"pl-0.5 text-left tracking-tighter"},oe={key:0},ne={key:1},re=T({__name:"Toast",props:{toastError:{}},setup(p){return(l,s)=>(i(),m("div",Z,[ee,e("div",te,[l.toastError===V(b).networkError?(i(),m("p",oe,"Error with fetching conversion rates")):(i(),m("p",ne,"You have to enter a valid number for the amount"))])]))}}),se={class:"p-6 sm:px-10 md:px-16 m-auto min-h-[calc(100vh-5rem)] max-w-5xl"},ae={class:"bg-white dark:bg-neutral-700 duration-300 m-auto relative transition"},le={class:"flex flex-col md:flex-row items-center py-14 md:justify-center"},ue=e("label",{class:"block font-medium",for:"currency"},"select currency to convert from",-1),ce=e("option",{value:"NGN"},"Nigerian Naira [NGN]",-1),ie=e("option",{value:"USD"},"US Dollar [USD]",-1),de=e("option",{value:"GBP"},"British Pound [GBP]",-1),me=e("option",{value:"EUR"},"European Euro [EUR]",-1),pe=[ce,ie,de,me],ve=e("div",{class:"mt-6 mb-8 md:mx-5 md:my-0"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 transform rotate-90 md:rotate-0 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.25",d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})])],-1),fe=e("label",{class:"block font-medium",for:"crypto"},"select crypto to convert to",-1),he=["value"],_e=e("div",null,[e("button",{class:"bg-purple-600 font-medium dark:outline-purple-50 px-2 py-4 md:py-5 rounded text-lg md:text-xl text-white w-2/3 max-w-sm",type:"submit"},"Convert")],-1),xe=T({__name:"Convert",setup(p){const l=Y(),s=S(()=>l.state.savedCoins),u=S(()=>s.value.length?s.value:[{name:"Bitcoin",symbol:"BTC"},{name:"Ethereum",symbol:"ETH"},{name:"Solana",symbol:"SOL"},{name:"Tether",symbol:"USDT"}]),o=a(),r=a(null),x=a(0),v=a(l.state.currency),f=a(u.value[0].symbol),c=a(!1),h=a(),_=a(!1),w=a(b.networkError);E(()=>{const d=`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${u.value.map(t=>t.symbol)}&tsyms=USD,EUR,NGN,GBP`;P(d).then(t=>{h.value=t}).catch(t=>{console.error(t.message),_.value=!0,w.value=b.networkError})});function F(d){if(d)if(!h.value)_.value=!0,w.value=b.networkError,setTimeout(()=>{_.value=!1},3e3);else{const t=f.value,n=v.value,k=h.value;x.value=d/k[t][n],C()}else _.value=!0,w.value=b.valueError,setTimeout(()=>{_.value=!1},3e3)}function C(){var d;c.value=!c.value,(d=r.value)==null||d.focus()}function G(){o.value=void 0}return(d,t)=>(i(),m("div",se,[e("form",{class:"m-auto pt-4 md:pt-6 pb-20",onSubmit:t[3]||(t[3]=L(n=>F(o.value),["prevent"]))},[e("div",ae,[g(e("input",{class:I(["appearance-none bg-transparent border border-neutral-500 outline-none p-4 py-2 md:py-3 rounded-md focus:outline-purple-200 dark:focus:outline-purple-50 md:text-lg w-full"]),min:"1",name:"amount",placeholder:"enter amount here",ref_key:"amtInput",ref:r,type:"number","onUpdate:modelValue":t[0]||(t[0]=n=>o.value=n)},null,512),[[z,o.value]]),$(B,{name:"fade"},{default:M(()=>[_.value?(i(),U(re,{key:0,toastError:w.value},null,8,["toastError"])):D("",!0)]),_:1})]),e("div",le,[e("div",null,[ue,g(e("select",{class:"dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-500 duration-300 my-2 dark:outline-purple-50 p-2 md:p-3 rounded-md md:text-lg transition","onUpdate:modelValue":t[1]||(t[1]=n=>v.value=n),name:"currency",title:"currency to convert from"},pe,512),[[N,v.value]])]),ve,e("div",null,[fe,g(e("select",{class:"dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-500 duration-300 my-2 dark:outline-purple-50 p-2 md:p-3 rounded-md md:text-lg transition","onUpdate:modelValue":t[2]||(t[2]=n=>f.value=n),name:"crypto",title:"crpyto to convert to"},[(i(!0),m(R,null,H(u.value,(n,k)=>(i(),m("option",{key:k,value:n.symbol},y(n.name)+" ["+y(n.symbol)+"] ",9,he))),128))],512),[[N,f.value]])])]),_e],32),$(B,{name:"slide-in"},{default:M(()=>[c.value?(i(),U(X,{key:0,onClearEvent:G,onCloseEvent:C,amtFrom:o.value,amtTo:x.value,coinType:f.value,currencyType:v.value},null,8,["amtFrom","amtTo","coinType","currencyType"])):D("",!0)]),_:1})]))}});export{xe as default};
