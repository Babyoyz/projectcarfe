import{o as c,c as l,a as d,u as S,R as k,p as y,b as $,d as n,n as u,t as w,e as I,f as L,r as h,F as V,g as E,h as A,i as F,j as O,k as P}from"./vendor.5ec3203a.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};B();var _=(e,t)=>{const s=e.__vccOpts||e;for(const[a,o]of t)s[a]=o;return s};const D={class:"container-fluid"},N={setup(e){return(t,s)=>(c(),l("div",D,[d(S(k))]))}},R="modulepreload",b={},j="/",z=function(t,s){return!s||s.length===0?t():Promise.all(s.map(a=>{if(a=`${j}${a}`,a in b)return;b[a]=!0;const o=a.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":R,o||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),o)return new Promise((m,f)=>{i.addEventListener("load",m),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};const H={},v=e=>(y("data-v-1d116a56"),e=e(),$(),e),W={class:"div-social h1"},q=v(()=>n("i",{class:"fa fa-facebook-official","aria-hidden":"true"},null,-1)),M=v(()=>n("i",{class:"fa fa-twitter","aria-hidden":"true"},null,-1)),T=v(()=>n("i",{class:"fa fa-telegram","aria-hidden":"true"},null,-1)),K=[q,M,T];function U(e,t){return c(),l("div",W,K)}var G=_(H,[["render",U],["__scopeId","data-v-1d116a56"]]);const J={data(){return{activemenu:99}},methods:{filtermenu(e){this.activemenu=e,this.$emit("customcomponent",e)}}},Q={class:"d-flex justify-content-center"},X={class:"row"},Y={class:"col-auto mb-2"},Z={class:"col-auto mb-2"},ee={class:"col-auto mb-2"},te={class:"col-auto mb-2"},ne={class:"col-auto mb-2"};function oe(e,t,s,a,o,r){return c(),l("div",Q,[n("div",X,[n("div",Y,[n("button",{class:u(o.activemenu=="99"?"btn-filter-ac":"btn-filter"),onClick:t[0]||(t[0]=i=>r.filtermenu(99))},"All",2)]),n("div",Z,[n("button",{class:u(o.activemenu=="1"?"btn-filter-ac":"btn-filter"),onClick:t[1]||(t[1]=i=>r.filtermenu(1))},"Cake",2)]),n("div",ee,[n("button",{class:u(o.activemenu=="2"?"btn-filter-ac":"btn-filter"),onClick:t[2]||(t[2]=i=>r.filtermenu(2))},"Daifuku",2)]),n("div",te,[n("button",{class:u(o.activemenu=="3"?"btn-filter-ac":"btn-filter"),onClick:t[3]||(t[3]=i=>r.filtermenu(3))},"IceCream",2)]),n("div",ne,[n("button",{class:u(o.activemenu=="4"?"btn-filter-ac":"btn-filter"),onClick:t[4]||(t[4]=i=>r.filtermenu(4))},"Drink",2)])])])}var se=_(J,[["render",oe],["__scopeId","data-v-69ce6a88"]]);const re={props:{img:{type:String},bgcolor:{type:String},nameproduct:{type:String}}},ie={class:"imgBx"},ae=["src"],ce={class:"contentBx"},le={class:"line-camp"},ue=n("div",{class:"size"},[n("h3",null,"Size :"),n("span",null,"7"),n("span",null,"8"),n("span",null,"9"),n("span",null,"10")],-1),de=n("a",{href:"#"},"Buy Now",-1);function _e(e,t,s,a,o,r){return c(),l("div",{class:"card",style:I(`background:${s.bgcolor}`)},[n("div",ie,[n("img",{src:s.img},null,8,ae)]),n("div",ce,[n("h3",le,w(s.nameproduct),1),ue,de])],4)}var me=_(re,[["render",_e]]);const fe={components:{ComponentSocial:G,ComponenttFiltermenu:se,ComponentCardVue:me},data(){return{result:[],datadefault:[],filterArray:""}},created(){L.get("src/assets/data.json",{}).then(({data:e})=>{let t=this.shuffle(e.result);this.result=t,this.datadefault=t}).catch(e=>{console.error(e)})},methods:{shuffle(e){let t=e.length,s;for(;t!=0;)s=Math.floor(Math.random()*t),t--,[e[t],e[s]]=[e[s],e[t]];return e},filtermnu(e){if(this.$refs.rowdata.classList.add("fade-in"),setTimeout(()=>{this.$refs.rowdata.classList.remove("fade-in")},500),e==99)this.result=this.datadefault;else{let t=this.datadefault.filter(s=>{if(s.type==e)return s});this.result=t}}}},C=e=>(y("data-v-33f517f0"),e=e(),$(),e),pe={class:""},he=C(()=>n("div",{class:"div-logo"},[n("img",{src:"https://cdn.discordapp.com/attachments/888780422736138280/949585963787624499/logo.png",class:"img-logo"})],-1)),ve=C(()=>n("div",{class:"main-header text-center"},[n("p",null,"Search Dessert"),n("p",null,"and Drink")],-1)),ge={class:"container"},be={class:"row mt-4",ref:"rowdata"};function ye(e,t,s,a,o,r){const i=h("ComponentSocial"),m=h("ComponenttFiltermenu"),f=h("ComponentCardVue");return c(),l("div",null,[n("div",pe,[he,d(i)]),ve,d(m,{onCustomcomponent:r.filtermnu},null,8,["onCustomcomponent"]),n("div",ge,[n("div",be,[(c(!0),l(V,null,E(o.result,(p,x)=>(c(),l("div",{class:"col-md-3 mb-3 d-flex justify-content-center",key:x},[d(f,{img:p.parthimg,bgcolor:p.bgcolor,nameproduct:p.name},null,8,["img","bgcolor","nameproduct"])]))),128))],512)])])}var $e=_(fe,[["render",ye],["__scopeId","data-v-33f517f0"]]);const Ce=A({history:F("/"),routes:[{path:"/",name:"home",component:$e},{path:"/about",name:"about",component:()=>z(()=>import("./AboutView.314273b9.js"),["assets/AboutView.314273b9.js","assets/vendor.5ec3203a.js"])}]}),g=O(N);g.use(P());g.use(Ce);g.mount("#app");export{_};