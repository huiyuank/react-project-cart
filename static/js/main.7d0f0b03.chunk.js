(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(22),s=n.n(r),o=(n(31),n(26)),i=n(24),l=n(9),u=n(10),d=n(12),b=n(11),m=(n(32),n(33),n(1)),j=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){console.log("prevProps",e),console.log("prevState",t)}},{key:"componentWillUnmount",value:function(){console.log("Counter - Unmount")}},{key:"render",value:function(){var e=this;return console.log("Counter - Rendered"),Object(m.jsxs)("div",{className:"input-group ms-2 mb-4",children:[Object(m.jsx)("label",{htmlFor:"value",className:"col-3 col-lg-1 col-form-label fs-5 fw-light",children:this.props.counter.name}),Object(m.jsxs)("div",{id:"value",className:"btn-group btn-group-sm",role:"group","aria-label":"Quantity group",children:[Object(m.jsx)("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},className:"btn btn-danger",children:Object(m.jsx)("i",{className:"bi-chevron-down",role:"img","aria-label":"Decrement"})}),Object(m.jsx)("button",{className:this.getBadgeClasses(),disabled:!0,children:this.formatCount()}),Object(m.jsx)("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-success",children:Object(m.jsx)("i",{className:"bi-chevron-up",role:"img","aria-label":"Increment"})})]}),Object(m.jsx)("div",{className:"btn-group btn-group-sm",role:"group","aria-label":"Delete button",children:Object(m.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger mx-3 mx-lg-4",children:Object(m.jsx)("i",{className:"bi-trash-fill",role:"img","aria-label":"Delete"})})})]})}},{key:"getBadgeClasses",value:function(){var e="btn custom-button btn-";return e+=0===this.props.counter.value?"warning":"dark"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(a.Component),h=n(23),p=n.n(h),x=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){console.log("Counters - Rendered");var e=this.props,t=e.onReset,n=e.onDelete,a=e.onIncrement,c=e.onDecrement,r=e.counters,s=e.loading;return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:t,className:"btn btn-primary btn-sm my-4 ms-2",disabled:s?"true":"",children:s?Object(m.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):"Reset"}),s?Object(m.jsx)("div",{className:"loading-spinner",children:Object(m.jsx)(p.a,{size:30,color:"grey",loading:this.props.loading,speedMultiplier:2})}):r.map((function(e){return Object(m.jsx)(j,{counter:e,onIncrement:a,onDecrement:c,onDelete:n},e.id)}))]})}}]),n}(a.Component),f=n(7);function g(e){var t=e.original;return Object(m.jsx)("div",{className:"card-deck text-center row row-cols-1 row-cols-md-2 g-4",children:t.map((function(e){var t=e.id,n=e.image,a=e.name;return Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{className:"card-img-top img-fluid",height:"300",src:n,alt:a}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)(f.b,{className:"navbar-brand",to:"/react-project-cart/products/"+a.toLowerCase(),children:Object(m.jsx)("h5",{className:"card-title",children:a})})})]})},t)}))})}var v=n(3);function O(e){var t=Object(v.f)().name,n=e.original.filter((function(e){return e.name.toLowerCase()===t}))[0];return Object(m.jsxs)("div",{className:"card text-center",children:[Object(m.jsx)("img",{className:"card-img-top img-fluid",height:"300",src:n.image,alt:n.name}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("h5",{className:"card-title",children:n.name})})]})}var N=n(25);function k(e){var t=e.totalNum,n=Object(a.useState)([{link:"/",name:"Home"},{link:"/cart",name:"Cart"},{link:"/products",name:"Products"}]),c=Object(N.a)(n,1)[0];return console.log("NavBar - Rendered"),Object(m.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(m.jsxs)("div",{className:"container-fluid justify-content-start",children:[Object(m.jsxs)(f.b,{className:"navbar-brand",to:"/react-project-cart/cart",children:["Counter"," ",Object(m.jsx)("span",{className:"badge badge-md rounded-pill bg-secondary",children:t})]}),c.map((function(e,t){var n=e.link,a=e.name;return Object(m.jsx)(f.c,{className:"nav-link",activeClassName:"nav-active",to:"/react-project-cart"+n,children:a},t)})),Object(m.jsx)("a",{className:"navbar-brand ms-auto",href:"https://github.com/huiyuank/react-project-cart",children:Object(m.jsx)("i",{id:"githubIcon",className:"bi-github text-secondary",role:"img","aria-label":"GitHub"})})]})})}var w=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={counters:[{id:1,name:"Cupcakes",value:4},{id:2,name:"Cookies",value:0},{id:3,name:"Brownies",value:0},{id:4,name:"Tarts",value:0}],original:[{id:1,name:"Cupcakes",image:"https://images.unsplash.com/photo-1599785209615-a35f883d93c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",value:0},{id:2,name:"Cookies",image:"https://images.unsplash.com/photo-1548365328-8c6db3220e4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",value:0},{id:3,name:"Brownies",image:"https://images.unsplash.com/photo-1612886623532-1802833fcc67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",value:0},{id:4,name:"Tarts",image:"https://images.unsplash.com/photo-1616031036658-1f2d8258eca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1042&q=80",value:0}],loading:!1},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handleIncrement=function(t){var n=Object(i.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(o.a)({},t),n[a].value+=1,e.setState({counters:n})},e.handleDecrement=function(t){var n=e.state.counters.map((function(e){return e.value=e===t?Math.max(e.value-1,0):e.value,e}));e.setState({counters:n})},e.handleReset=function(){e.setState({loading:!0}),setTimeout((function(){e.setState({counters:e.state.original,loading:!1})}),800)},console.log("App - Constructor"),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("App - Mounted")}},{key:"render",value:function(){return console.log("App - Rendered"),Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)(f.a,{children:[Object(m.jsx)(k,{totalNum:this.state.counters.filter((function(e){return e.value>0})).length}),Object(m.jsx)(v.c,{children:Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("main",{className:"container-fluid",children:[Object(m.jsx)(v.a,{path:"/react-project-cart/products/:name",children:Object(m.jsx)(O,{original:this.state.original})}),Object(m.jsx)(v.a,{exact:!0,path:"/react-project-cart/products",children:Object(m.jsx)(g,{original:this.state.original})}),Object(m.jsx)(v.a,{path:"/react-project-cart/cart",children:Object(m.jsx)(x,{counters:this.state.counters,loading:this.state.loading,onDelete:this.handleDelete,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement})}),Object(m.jsx)(v.a,{exact:!0,path:"/react-project-cart",children:Object(m.jsx)(y,{})})]})})})]})})}}]),n}(a.Component),y=function(){return Object(m.jsxs)("div",{id:"home-container",className:"mt-4 text-center",children:[Object(m.jsx)("h1",{className:"display-3",children:"React Bakery"}),Object(m.jsx)("h3",{className:"fw-light",children:"A bakery that only sells cupcakes, cookies, brownies and tarts."})]})},D=w;n(45);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.7d0f0b03.chunk.js.map