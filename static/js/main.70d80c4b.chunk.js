(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={container:"App_container__1MQN3"}},function(e,t,n){e.exports={section:"Section_section__Ap5Zy"}},function(e,t,n){e.exports={button:"FeedbackOptions_button__3n-hy"}},function(e,t,n){e.exports={item:"Statistics_item__1vE2T"}},function(e,t,n){e.exports={message:"Notification_message__eciZi"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(5),s=n.n(a),r=(n(16),n(2)),i=n(4),u=n(11),b=n(6),j=n.n(b),d=n(7),l=n.n(d),f=n(0),O=function(e){var t=e.title,n=e.children;return Object(f.jsxs)("section",{className:l.a.section,children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("div",{children:n})]})},h=n(8),p=n.n(h),x=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(f.jsx)("button",{className:p.a.button,onClick:n,children:e},e)}))},g=n(9),m=n.n(g),_=function(e){return Object.keys(e).map((function(t){return Object(f.jsxs)("span",{className:m.a.item,children:[t,": ",e[t]]},t)}))},v=n(10),k=n.n(v),N=function(e){var t=e.message;return Object(f.jsx)("span",{className:k.a.message,children:t})},w=function(){var e=Object(c.useState)({good:0,neutral:0,bad:0}),t=Object(u.a)(e,2),n=t[0],o=t[1],a=function(){return Object.values(n).reduce((function(e,t){return e+t}),0)},s=function(e){var t=e.target.innerText.toLowerCase();console.log(t),o((function(e){return console.log(e),Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},t,e[t]+1))}))},b=Object.keys(n),d=a(),l=function(){var e=a();return e?Math.round(100*n.good/e):0}(),h=function(e){return Object(f.jsx)(x,{options:e,onLeaveFeedback:s})}(b),p=function(e,t){return Object(f.jsx)(_,{good:n.good,neutral:n.neutral,bad:n.bad,total:e,goodPercentage:"".concat(t," %")})}(d,l),g=Object(f.jsx)(N,{message:"There is no feedback."});return Object(f.jsxs)("div",{className:j.a.container,children:[Object(f.jsx)(O,{title:"Please leave feedback",children:h}),Object(f.jsx)(O,{title:"Statistics",children:d?p:g})]})};s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.70d80c4b.chunk.js.map