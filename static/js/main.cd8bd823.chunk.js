(this["webpackJsonpsmall-sea-world"]=this["webpackJsonpsmall-sea-world"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),i=n.n(r),s=n(2),o=n(3),l=n(0),j=Object(c.createContext)(),u=function(){return Object(c.useContext)(j)},d=function(e){var t=e.children,n=Object(c.useState)([[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]]),a=Object(o.a)(n,2),r=a[0],i=a[1],u=Object(c.useState)(0),d=Object(o.a)(u,2),b=d[0],h=d[1],O=Object(c.useState)(0),f=Object(o.a)(O,2),x=f[0],v=f[1],g=Object(c.useState)(101),p=Object(o.a)(g,2),m=p[0],S=p[1],C=Object(c.useState)([]),w=Object(o.a)(C,2),k=w[0],y=w[1];function T(e,t,n,c){var a=Object(s.a)(r),o=Object(s.a)(k),l=[];if(e)if(a[t][n-1]||a[t-1][n]||a[t][n+1]||a[t+1][n]){var j=m;o.splice(o.indexOf(a[t][n]),1),a[t][n-1]&&(o.push(j),F(a,t,n-1,j)),j++,a[t-1][n]&&a[t-1][n]!==a[t][n-1]&&(console.log("102",j),o.push(j),F(a,t-1,n,j)),j++,a[t][n+1]&&a[t][n+1]!==a[t][n-1]&&a[t][n+1]!==a[t-1][n]&&(o.push(j),F(a,t,n+1,j)),j++,a[t+1][n]&&a[t+1][n]!==a[t][n-1]&&a[t+1][n]!==a[t-1][n]&&a[t+1][n]!==a[t][n+1]&&(o.push(j),F(a,t+1,n,j)),j++,y(o),v(o.length),S(j)}else{var u=o.indexOf(e);o.splice(u,1),y(o),v(o.length)}else{if(a[t][n-1]||a[t-1][n]||a[t][n+1]||a[t+1][n]){a[t][n-1]&&l.push(a[t][n-1]),a[t-1][n]&&l.push(a[t-1][n]),a[t][n+1]&&l.push(a[t][n+1]),a[t+1][n]&&l.push(a[t+1][n]);var d=Math.min.apply(Math,l);a[t][n]=d,a[t][n-1]&&a[t][n-1]!==d&&(a[t][n-1]=a[t][n],T(!1,t,n-1,c)),a[t-1][n]&&a[t-1][n]!==d&&(a[t-1][n]=a[t][n],T(!1,t-1,n,c)),a[t][n+1]&&a[t][n+1]!==d&&(a[t][n+1]=a[t][n],T(!1,t,n+1,c)),a[t+1][n]&&a[t+1][n]!==d&&(a[t+1][n]=a[t][n],T(!1,t+1,n,c))}else a[t][n]=c,o.push(c);if(l.every((function(e){return e===l[0]})))y(o),v(o.length);else{var b=l.filter((function(e){return e!==d})),h=o.length>1?o.filter((function(e){return!b.includes(e)})):o;y(h),v(h.length)}}i(a)}function F(e,t,n,c){e[t][n]=c,e[t][n-1]&&e[t][n-1]!==c&&(e[t][n-1]=e[t][n],F(e,t,n-1,c)),e[t-1][n]&&e[t-1][n]!==c&&(e[t-1][n]=e[t][n],F(e,t-1,n,c)),e[t][n+1]&&e[t][n+1]!==c&&(e[t][n+1]=e[t][n],F(e,t,n+1,c)),e[t+1][n]&&e[t+1][n]!==c&&(e[t+1][n]=e[t][n],F(e,t+1,n,c))}return Object(l.jsx)(j.Provider,{value:{gridState:r,addColumn:function(){var e=Object(s.a)(r);e.forEach((function(e){e.push(!1)})),i(e)},removeColumn:function(){var e=Object(s.a)(r);e[0].length>1&&(e.forEach((function(e){e.pop()})),i(e))},addRow:function(){var e=Object(s.a)(r);e.push(e[0].map((function(e){return!1}))),i(e)},removeRow:function(){var e=Object(s.a)(r);e.length>3&&(e.pop(),i(e))},toggled:function(e,t,n){Object(s.a)(r)[t][n]=!e;var c=b;e?c--:c++,h(c),T(e,t,n,c)},islasTotalesState:x,landState:b},children:t})},b=n(17),h=n.p+"static/media/sea-draw2.5c7b8966.jpg",O={sea:{backgroundImage:"url(".concat(h,")"),cursor:"pointer"},land:{background:"green",cursor:"pointer"},none:{background:"gray"}};var f=function(){var e=u(),t=e.gridState,n=e.toggled;return Object(l.jsx)("main",{children:Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:t.map((function(e,c){return Object(l.jsx)("tr",{children:e.map((function(e,a){return 0===c||c===t.length-1?Object(l.jsx)("td",{style:O.none,children:"x"},Object(b.a)()):Object(l.jsx)("td",{onClick:function(){return n(e,c,a)},style:e?O.land:O.sea,children:"x"},Object(b.a)())}))},Object(b.a)())}))})})})};var x=function(e){var t=e.action,n=e.icon;return Object(l.jsx)("button",{className:"waves-effect waves-light btn indigo",onClick:t,children:Object(l.jsx)("i",{className:"material-icons left",children:n})})};var v=function(){var e=u(),t=e.addColumn,n=e.removeColumn,c=e.addRow,a=e.removeRow,r=e.islasTotalesState,i=e.landState;return Object(l.jsxs)("header",{children:[Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:"Small Sea World"}),Object(l.jsxs)("div",{className:"btn-container",children:[Object(l.jsx)(x,{action:a,icon:"remove"}),Object(l.jsx)("h2",{children:"Height"}),Object(l.jsx)(x,{action:c,icon:"add"}),Object(l.jsx)(x,{action:n,icon:"remove"}),Object(l.jsx)("h2",{children:"Width"}),Object(l.jsx)(x,{action:t,icon:"add"})]})]}),Object(l.jsxs)("aside",{children:[Object(l.jsx)("h2",{children:Object(l.jsx)("u",{children:"Data:"})}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["- Land Cells: ",i]}),Object(l.jsxs)("li",{children:["- Total Islands: ",r]})]})]})]})};var g=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(d,{children:[Object(l.jsx)(v,{}),Object(l.jsx)(f,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};n(13),n(14);i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.cd8bd823.chunk.js.map