(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/cases.0495f5e0.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/Coronavirus.3618392a.png"},40:function(e,t,a){e.exports=a.p+"static/media/green.928caae4.jpg"},45:function(e,t,a){e.exports=a(72)},50:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),o=(a(50),a(17)),s=a(9),m=a(44),i=(a(51),a(43)),u=a(13),d=a(16),E=a(42),h=a(24),p=a(20),g=a.n(p),f=a(38),y=a.n(f),x=a(39),b=a.n(x),v=a(40),T=a.n(v);a(70);var w=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),p=Object(o.a)(c,2),f=p[0],x=p[1],v=Object(n.useState)(""),w=Object(o.a)(v,2),C=w[0],j=w[1],k=Object(n.useState)({width:"100%",height:"90vh",latitude:30.7577,longitude:-20.4376,zoom:1}),I=Object(o.a)(k,2),O=I[0],D=I[1];Object(n.useEffect)((function(){g.a.all([g.a.get("https://corona.lmao.ninja/all"),g.a.get("https://corona.lmao.ninja/countries")]).then((function(e){r(e[0].data),x(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var S=new Date(parseInt(a.updated)).toString();console.log(a),RegExp.quote=function(e){return e.replace(/([.?*+^$[\]\\(){}|-])/gi,"\\$1")};var N=new RegExp(RegExp.quote(C),"gi"),A=f.filter((function(e){if(f&&C)return e.country.match(N)})),F=f.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{latitude:e.countryInfo.lat,longitude:e.countryInfo.long,offsetLeft:-20,offsetTop:-10},l.a.createElement("img",{src:e.countryInfo.flag,alt:"img",style:{height:"20px",width:"20px",borderRadius:"50%"}}),l.a.createElement("p",{className:"case"},e.cases)))})),B=A.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(s.a.Img,{variant:"top",src:e.countryInfo.flag}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,e.country),l.a.createElement(s.a.Text,null,"Cases: ",e.cases),l.a.createElement(s.a.Text,null,"Today Cases: ",e.todayCases),l.a.createElement(s.a.Text,null,"Deaths: ",e.deaths),l.a.createElement(s.a.Text,null,"Today Deaths: ",e.todayDeaths),l.a.createElement(s.a.Text,null,"Recovered: ",e.recovered),l.a.createElement(s.a.Text,null,"Active: ",e.active),l.a.createElement(s.a.Text,null,"Critical: ",e.critical))))}));return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(u.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:b.a,alt:"First slide",style:{height:"50vh"}}),l.a.createElement(u.a.Caption,null,l.a.createElement("h3",null,"Today Deaths"),l.a.createElement("h6",null,a.todayDeaths))),l.a.createElement(u.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:T.a,alt:"Third slide",style:{height:"50vh"}}),l.a.createElement(u.a.Caption,null,l.a.createElement("h3",null,"Tests"),l.a.createElement("h6",null,a.tests))),l.a.createElement(u.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:y.a,alt:"Third slide",style:{height:"50vh"}}),l.a.createElement(u.a.Caption,null,l.a.createElement("h3",null,"Today Cases"),l.a.createElement("h6",null,a.todayCases," ")))),l.a.createElement(E.a,null,l.a.createElement(i.a,{style:{marginTop:"30px"}},l.a.createElement(s.a,{bg:"danger",text:"dark",className:"text-center"},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Death"),l.a.createElement(s.a.Text,null,a.deaths)),l.a.createElement(s.a.Footer,null,"Last updated: ",S," ")),l.a.createElement(s.a,{bg:"warning",text:"dark",className:"text-center"},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Cases"),l.a.createElement(s.a.Text,null,a.cases)),l.a.createElement(s.a.Footer,null,"Last updated: ",S," ")),l.a.createElement(s.a,{bg:"success",text:"dark",className:"text-center"},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Recovered"),l.a.createElement(s.a.Text,null,a.recovered)),l.a.createElement(s.a.Footer,null,"Last updated: ",S," "))),l.a.createElement(d.a,null,l.a.createElement(d.a.Group,{controlId:"formGroupEmail",style:{marginTop:"30px"}},l.a.createElement(d.a.Label,null,"Country Search"),l.a.createElement(d.a.Control,{type:"text",placeholder:"Enter Country Name",onChange:function(e){return j(e.target.value)}}))),l.a.createElement(m.a,{style:{marginTop:"30px"}},B),l.a.createElement("div",{style:{height:"100vh",width:"100%"}},l.a.createElement(h.b,Object.assign({mapStyle:"mapbox://styles/mapbox/dark-v9",mapboxApiAccessToken:"pk.eyJ1IjoibmF6ZWgyMDAiLCJhIjoiY2s4dXpzY2h0MDUxODNobnpub3hrZW01eSJ9.CjIwcSToozJAr6Zk1gbA7A"},O,{onViewportChange:D}),F))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.616c46bb.chunk.js.map