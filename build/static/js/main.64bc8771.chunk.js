(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{242:function(t,e){},265:function(t,e){},267:function(t,e){},345:function(t,e){},347:function(t,e){},380:function(t,e){},385:function(t,e){},387:function(t,e){},394:function(t,e){},407:function(t,e){},430:function(t,e){},439:function(t,e){},441:function(t,e){},511:function(t,e,n){},512:function(t,e,n){"use strict";n.r(e);var c,r,a,o,i,s,l,d,u,p,x,b,j,h,g,O,f=n(1),y=n(84),C=n.n(y),m=n(16),v=n.n(m),w=n(42),A=n(68),E=n(14),S=n(57),T=n(67),N=n.n(T),_=n(216),k=n.n(_),M=n(69),D=n(217),I=n(18),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:e.payload.account});default:return t}},K={loading:!0,totalSupply:0,cost:0,error:!1,errorMsg:""},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},K),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},F=Object(M.b)({blockchain:R,data:B}),P=[D.a],U=Object(M.c)(M.a.apply(void 0,P)),W=Object(M.d)(F,U),Y=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},z=function(){return function(){var t=Object(w.a)(v.a.mark((function t(e){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,W.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(Y("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},H=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var e=Object(w.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(z());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=n(15),X=Q.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),q=Q.a.div(r||(r=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(a||(a=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),$=Q.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),V=Q.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Z=Q.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),tt=Q.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),et=(Q.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),nt=(Q.a.div(p||(p=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(4)),ct=Q.a.button(x||(x=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rt=Q.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),at=Q.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ot=Q.a.img(h||(h=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),it=Q.a.img(g||(g=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 14px solid var(--secondary);\n  background-color: var(--accent);\n  border-radius: 0;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),st=Q.a.a(O||(O=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var lt=function(){var t,e,n=Object(S.b)(),c=Object(S.c)((function(t){return t.blockchain})),r=Object(S.c)((function(t){return t.data})),a=Object(f.useState)(!1),o=Object(A.a)(a,2),i=o[0],s=o[1],l=Object(f.useState)("Click buy to mint your NFT."),d=Object(A.a)(l,2),u=d[0],p=d[1],x=Object(f.useState)(1),b=Object(A.a)(x,2),j=b[0],h=b[1],g=Object(f.useState)({CONTRACT_ADDRESS:"0x451C06f7063D16E35B5Fbe01768946BCABffE499",SCAN_LINK:"https://etherscan.io/token/0x451C06f7063D16E35B5Fbe01768946BCABffE499",NETWORK:{NAME:"ethereum",SYMBOL:"ETH",ID:1},NFT_NAME:"Bops By BopLord",SYMBOL:"BOP$",MAX_SUPPLY:666,WEI_COST:666e14,DISPLAY_COST:.0222,GAS_LIMIT:3e5,MARKETPLACE:"opensea",MARKETPLACE_LINK:"https://opensea.io/collection/bopsv1",SHOW_BACKGROUND:!1}),O=Object(A.a)(g,2),y=O[0],C=O[1],m=function(){""!==c.account&&null!==c.smartContract&&n(z(c.account))},E=function(){var t=Object(w.a)(v.a.mark((function t(){var e,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,C(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.useEffect)((function(){E()}),[]),Object(f.useEffect)((function(){m()}),[c.account]),Object(nt.jsx)(X,{children:Object(nt.jsxs)(Z,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:y.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(nt.jsx)(ot,{alt:"logo",src:"/config/images/logo.png"}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(at,{flex:1,style:{padding:24},test:!0,children:[Object(nt.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(nt.jsx)(it,{alt:"example",src:"/config/images/example.gif"})}),Object(nt.jsx)(V,{}),Object(nt.jsxs)(Z,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:1,border:"14px solid var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(nt.jsxs)(tt,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",y.MAX_SUPPLY]}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(nt.jsx)(st,{target:"_blank",href:y.SCAN_LINK,children:(t=y.CONTRACT_ADDRESS,e=15,t.length>e?"".concat(t.substring(0,e),"..."):t)})}),Object(nt.jsx)(J,{}),Number(r.totalSupply)>=y.MAX_SUPPLY?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",y.NFT_NAME," on"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(st,{target:"_blank",href:y.MARKETPLACE_LINK,children:y.MARKETPLACE})]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",y.SYMBOL," costs ",y.DISPLAY_COST," ",y.NETWORK.SYMBOL,"."]}),Object(nt.jsx)(q,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(nt.jsx)(J,{}),""===c.account||null===c.smartContract?Object(nt.jsxs)(Z,{ai:"center",jc:"center",children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",y.NETWORK.NAME," network"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(ct,{onClick:function(t){t.preventDefault(),n(function(){var t=Object(w.a)(v.a.mark((function t(e){var n,c,r,a,o,i,s,l,d;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=t.sent,t.next=12,r.json();case 12:if(a=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return N.a.setProvider(i),s=new k.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(t){e(G(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(H("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),e(H("Something went wrong."));case 31:t.next=34;break;case 33:e(H("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(e){return t.apply(this,arguments)}}()),m()},children:"CONNECT"}),""!==c.errorMsg?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(nt.jsx)($,{}),Object(nt.jsxs)(Z,{ai:"center",jc:"center",fd:"row",children:[Object(nt.jsx)(rt,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=j-1;t<1&&(t=1),h(t)}()},children:"-"}),Object(nt.jsx)($,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(nt.jsx)($,{}),Object(nt.jsx)(rt,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=j+1;t>3&&(t=3),h(t)}()},children:"+"})]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(Z,{ai:"center",jc:"center",fd:"row",children:Object(nt.jsx)(ct,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=y.WEI_COST,e=y.GAS_LIMIT,r=String(t*j),a=String(e*j);console.log("Cost: ",r),console.log("Gas limit: ",a),p("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(j).send({gasLimit:String(a),to:y.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(t){console.log(t),p("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),p("WOW, the ".concat(y.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),n(z(c.account))}))}(),m()},children:i?"BUSY":"BUY"})})]})]}),Object(nt.jsx)($,{})]}),Object(nt.jsx)(V,{}),Object(nt.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(nt.jsx)(it,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(nt.jsx)($,{}),Object(nt.jsxs)(Z,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",y.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",y.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},dt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,516)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};n(511);C.a.render(Object(nt.jsx)(S.a,{store:W,children:Object(nt.jsx)(lt,{})}),document.getElementById("root")),dt()}},[[512,1,2]]]);
//# sourceMappingURL=main.64bc8771.chunk.js.map