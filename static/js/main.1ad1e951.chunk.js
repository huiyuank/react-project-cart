(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),o=n.n(a),s=(n(14),n(9)),u=n(8),i=n(2),l=n(3),b=n(5),d=n(4),m=(n(15),n(16),n(0)),j=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){console.log("prevProps",e),console.log("prevState",t)}},{key:"componentWillUnmount",value:function(){console.log("Counter - Unmount")}},{key:"render",value:function(){var e=this;return console.log("Counter - Rendered"),Object(m.jsxs)("div",{children:[Object(m.jsxs)("section",{className:"btn-group-vertical btn-group-sm",children:[Object(m.jsx)("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-success p-1 mx-2 my-1",children:Object(m.jsx)("i",{class:"bi-chevron-up",role:"img","aria-label":"Increment"})}),Object(m.jsx)("button",{className:this.getBadgeClasses(),disabled:!0,children:this.formatCount()}),Object(m.jsx)("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},className:"btn btn-secondary btn-danger p-1 mx-2 my-1",children:Object(m.jsx)("i",{class:"bi-chevron-down",role:"img","aria-label":"Decrement"})})]}),Object(m.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm mx-4 my-5",children:Object(m.jsx)("i",{class:"bi-trash-fill",role:"img","aria-label":"Delete"})})]})}},{key:"getBadgeClasses",value:function(){var e="btn custom-button mx-2 p-2 btn-";return e+=0===this.props.counter.value?"warning":"dark"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(r.Component),h=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){console.log("Counters - Rendered");var e=this.props,t=e.onReset,n=e.onDelete,r=e.onIncrement,c=e.onDecrement,a=e.counters;return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:t,className:"btn btn-primary btn-sm m-2",children:"Reset"}),a.map((function(e){return Object(m.jsx)(j,{counter:e,onIncrement:r,onDecrement:c,onDelete:n},e.id)}))]})}}]),n}(r.Component),p=function(e){var t=e.totalNum;return console.log("NavBar - Rendered"),Object(m.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsxs)("a",{className:"navbar-brand",href:"#",children:["Counter"," ",Object(m.jsx)("span",{className:"badge badge-md rounded-pill bg-secondary",children:t})]}),Object(m.jsx)("a",{className:"navbar-brand",href:"https://github.com/huiyuank/react-project-cart",children:Object(m.jsx)("i",{id:"githubIcon",className:"bi-github text-secondary",role:"img","aria-label":"GitHub"})})]})})},v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={counters:[{id:1,value:4},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handleIncrement=function(t){var n=Object(u.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(s.a)({},t),n[r].value+=1,e.setState({counters:n})},e.handleDecrement=function(t){var n=e.state.counters.map((function(e){return e.value=e===t?Math.max(e.value-1,0):e.value,e}));e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},console.log("App - Constructor"),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("App - Mounted")}},{key:"render",value:function(){return console.log("App - Rendered"),Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(p,{totalNum:this.state.counters.filter((function(e){return e.value>0})).length}),Object(m.jsx)("main",{className:"container-fluid",children:Object(m.jsx)(h,{counters:this.state.counters,onDelete:this.handleDelete,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement})})]})}}]),n}(r.Component);n(18);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1ad1e951.chunk.js.map