(this["webpackJsonpmajestic-thai"]=this["webpackJsonpmajestic-thai"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(10),a=n.n(r),s=(n(16),n(7)),o=n(2),u=n(3),l=n(6),d=n(5),h=n(4),j=(n(17),n(9)),p=n.n(j),v=n(11),m=n(0),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).handleClick=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("Your order of ".concat(i.state.value," ").concat(i.props.item," for a price of ").concat((i.props.price*i.state.value).toFixed(2),", will be ready in ").concat(Math.round(25*Math.random())+5," minutes.")),e.next=3,fetch("http://127.0.0.1:8000/orders/",{method:"post",headers:{"Content-Type":"Application/Json"},body:JSON.stringify({item:i.props.item,quantity:i.state.value,price:i.props.price*i.state.value})});case 3:case"end":return e.stop()}}),e)}))),i.state={items:[],value:1,menuItem:"",quantity:0},i.handleChange=i.handleChange.bind(Object(l.a)(i)),i}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e,t=this,n=null===(e=this.props.order)||void 0===e?void 0:e.map((function(e,n){return Object(m.jsxs)("li",{children:[Object(m.jsx)("h1",{children:t.props.item}),Object(m.jsxs)("p",{children:["$",(t.props.price*t.state.value||0).toFixed(2)]}),Object(m.jsx)("input",{type:"number",value:t.state.value,onChange:t.handleChange})]},n)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{children:n}),Object(m.jsx)("button",{onClick:this.handleClick,className:"btn",children:"Order Now!"})]})}}]),n}(i.Component),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={menuItem:""},i}return Object(u.a)(n,[{key:"render",value:function(){var e,t=this,n=null===(e=this.props.menu)||void 0===e?void 0:e.map((function(e,n){return Object(m.jsxs)("li",{className:"card",children:[e.item,": $",e.price,Object(m.jsx)("button",{onClick:function(){var e;return null===(e=t.props)||void 0===e?void 0:e.click(n,t.props)},children:"Add to Cart"})]},n)}));return Object(m.jsx)("ul",{className:"menu",children:n})}}]),n}(i.Component),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("a",{href:"#",children:"Home"})," "]}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"Menu"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#",children:"Cart"})})]})})}}]),n}(i.Component),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={menuItem:"Add Item to Cart",order:[]},i.handleClick=i.handleClick.bind(Object(l.a)(i)),i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://127.0.0.1:8000/menu-items").then((function(e){return e.json()})).then((function(t){return e.setState({menu:t})}));this.setState({order:[{}]})}},{key:"handleClick",value:function(e,t){var n,i,c,r;this.setState((r={},Object(s.a)(r,this.state.order,[{items:[{item:null===(n=this.props[e])||void 0===n?void 0:n.menuItem,price:null===(i=this.props[e])||void 0===i?void 0:i.price}],quantity:1,price:null===(c=this.props[e])||void 0===c?void 0:c.menuPrice}]),Object(s.a)(r,"menuItem",null===t||void 0===t?void 0:t.menu[e].item),Object(s.a)(r,"menuPrice",null===t||void 0===t?void 0:t.menu[e].price),Object(s.a)(r,"quantity",1),r))}},{key:"render",value:function(){var e,t,n,i,c,r,a;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)("h1",{children:"Majestic Thai"}),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{className:"card",click:this.handleClick,menu:null===(e=this.state)||void 0===e?void 0:e.menu,item:null===(t=this.state)||void 0===t?void 0:t.menuItem}),Object(m.jsx)(b,{order:null===(n=this.state)||void 0===n?void 0:n.order,menu:null===(i=this.state)||void 0===i?void 0:i.menu,item:null===(c=this.state)||void 0===c?void 0:c.menuItem,price:null===(r=this.state)||void 0===r?void 0:r.menuPrice,quantity:null===(a=this.state)||void 0===a?void 0:a.quantity})]})]})}}]),n}(i.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),C()}},[[20,1,2]]]);
//# sourceMappingURL=main.d3e57ca2.chunk.js.map