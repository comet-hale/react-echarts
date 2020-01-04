(this["webpackJsonpecharts-react"]=this["webpackJsonpecharts-react"]||[]).push([[0],{218:function(e,t,n){e.exports=n(552)},223:function(e,t,n){},548:function(e,t,n){},549:function(e,t,n){},550:function(e,t,n){},551:function(e,t,n){},552:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),i=n(217),o=n.n(i),c=(n(223),n(87)),s=n(88),l=n(91),u=n(89),d=n(92),p=n(26),m=n.n(p),h=n(90),v=n.n(h),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getChartOption=function(){var e=n.props,t=e.startYear,a=e.backgroundColor,r=e.selectedLegends,i=n.updateDataByAddtionalPrice(),o={};i.forEach((function(e){var t=e.name;return o[t]=r.includes(t)}));var c=m()(t,t+n.props.countOfYears-1);return c.unshift("Today"),{grid:{left:200,right:60,bottom:50,top:10,containLabel:!1,show:!0,borderWidth:2,backgroundColor:a},legend:{show:!0,orient:"vertical",left:0,data:i.map((function(e){return{name:e.name,icon:"circle"}})),selected:o},tooltip:{trigger:"item",position:"top",axisPointer:{type:"shadow"},opacity:.9,backgroundColor:"#ddd",textStyle:{color:"#000"},confine:!0,formatter:function(e){var t=e.name,n=e.value,a=e.seriesName;return"".concat(a," would cost<br/>")+"<b>".concat(n.toFixed(2)," kr</b> in ").concat(t)}},xAxis:[{type:"category",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:c}],yAxis:[{name:"Price",nameLocation:"middle",nameGap:35,type:"value",axisLabel:{formatter:function(e){return e<1e3?e:"".concat(e/1e3,"k")}}}],series:i.map((function(e){return{name:e.name,type:"line",data:e.prices}}))}},n.onLegendItemClick=function(e){var t=e.selected,a=n.props;(0,a.handleLegendChange)(a.data.map((function(e){return e.name})).filter((function(e){return t[e]})))},n.onEvents={legendselectchanged:n.onLegendItemClick},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"updateDataByAddtionalPrice",value:function(){var e=this.props,t=e.data,n=e.priceGivenOnSlider,a=e.countOfYears;return t.map((function(e){var t=(n-e.carbonPriceToday)/a,r=e.CO2perTon,i=e.currentPrice;return e.prices=m()(0,a).map((function(e){return t*e*r+i})),e}))}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.width;return r.a.createElement(v.a,{style:{height:t,width:n},option:this.getChartOption(),notMerge:!0,lazyUpdate:!0,onEvents:this.onEvents})}}]),t}(a.Component),g=(n(548),f);n(549);var y=function(e){var t=e.height,n=e.width,a=e.backgroundColor,i=e.emissionsToday,o=e.emissionsLast,c=e.startYear,s=e.countOfYears,l=e.carbonPriceToday,u=e.priceGivenOnSlider,d=0-e.percentGivenOnSlider/100,p=(u-l)/(s-1),h=m()(0,s).map((function(e){return l+p*e})),f=m()(0,s).map((function(e){return i-o*e/s})),g=m()(0,s).map((function(e){return h[e]*f[e]*d/12})),y=m()(c,c+s-1);y.unshift("Today");var b={grid:{left:200,right:60,bottom:50,top:10,containLabel:!1,show:!0,borderWidth:2,backgroundColor:a},legend:{show:!0,orient:"vertical",left:0,icon:"circle"},tooltip:{trigger:"item",position:"top",axisPointer:{type:"shadow"},opacity:.9,backgroundColor:"#ddd",textStyle:{color:"#000"},confine:!0,formatter:function(e){var t=e.value;return"would cost<br/>"+"<b>".concat(t.toFixed(2)," kr</b> in")}},xAxis:[{type:"category",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:y}],yAxis:[{name:"Price",nameLocation:"middle",nameGap:35,type:"value",axisLabel:{formatter:function(e){return e<1e3?e:"".concat(e/1e3,"k")}}}],series:[{name:"Difference / month",type:"bar",data:g}]};return console.error("option",b),r.a.createElement(v.a,{style:{height:t,width:n},option:b,notMerge:!0,lazyUpdate:!0})};n(550);var b=function(e){var t=e.value,n=e.sliderMin,a=e.sliderMax,i=e.sliderStep,o=e.sliderValues,c=e.tickmarks,s=e.onSliderInput;return r.a.createElement("div",{className:"app-slider"},"Price given on slider: ",t,r.a.createElement("br",null),r.a.createElement("input",{type:"range",list:c,value:t,min:n,max:a,step:i,onInput:s,className:"app-slider-input"}),r.a.createElement("datalist",{id:c,className:"app-slider-datalist"},o.map((function(e,t){return r.a.createElement("option",{value:e,label:e,key:"slider-".concat(t)})}))))},k=(n(551),[200,2500]),w=[-90,200],O=1500,E=50,x=[{name:"Banana",currentPrice:2,CO2perTon:72e-6,carbonPriceToday:200},{name:"Burger",currentPrice:30,CO2perTon:.004,carbonPriceToday:200},{name:"Book",currentPrice:100,CO2perTon:.0027,carbonPriceToday:200},{name:"1L oil",currentPrice:12,CO2perTon:.002392,carbonPriceToday:200},{name:"A flight to London",currentPrice:500,CO2perTon:.212,carbonPriceToday:200}],C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getSliderArray=function(e,t,n){return m()(0,parseInt((t-e)/n)+1).map((function(t){return e+n*t}))},n.state={value:O,value1:O,percent:E,selectedLegends:[(x[0]||{}).name]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.value,a=t.value1,i=t.percent;this.getSliderArray.apply(this,k.concat([200])),this.getSliderArray.apply(this,w.concat([10]));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app-component1"},r.a.createElement("h2",null,"Component 1"),r.a.createElement(b,{value:n,sliderMin:k[0],sliderMax:k[1],sliderStep:200,tickmarks:"tickmarks",onSliderInput:function(t){var n=t.target.value;return e.setState({value:n})}}),r.a.createElement("div",{className:"app-chart"},r.a.createElement(g,{height:"100%",width:"100%",backgroundColor:"transparent",data:x||[],startYear:2021,countOfYears:11,priceGivenOnSlider:n,selectedLegends:this.state.selectedLegends,handleLegendChange:function(t){return e.setState({selectedLegends:t})}}))),r.a.createElement("div",{className:"app-component2"},r.a.createElement("h2",null,"Component 2"),r.a.createElement(b,{value:a,sliderMin:k[0],sliderMax:k[1],sliderStep:200,tickmarks:"tickmarks2-0",onSliderInput:function(t){var n=t.target.value;return e.setState({value1:n})}}),r.a.createElement(b,{value:i,sliderMin:w[0],sliderMax:w[1],sliderStep:10,tickmarks:"tickmarks2-1",onSliderInput:function(t){var n=t.target.value;return e.setState({percent:n})}}),r.a.createElement("div",{className:"app-chart"},r.a.createElement(y,{height:"100%",width:"100%",backgroundColor:"transparent",emissionsToday:8.939,emissionsLast:4.47,startYear:2021,countOfYears:11,carbonPriceToday:200,priceGivenOnSlider:n,percentGivenOnSlider:i}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[218,1,2]]]);
//# sourceMappingURL=main.2bf74fa7.chunk.js.map