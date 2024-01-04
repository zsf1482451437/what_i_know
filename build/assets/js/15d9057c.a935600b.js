"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(3743);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return r.createElement("div",{className:o.tableOfContentsInline},r.createElement(a.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7462),a=n(7294),o=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>s(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),s=c(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:r,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const d=a.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const h=(0,o.L)(),v=m??h.tableOfContents.minHeadingLevel,g=u??h.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>i({toc:l(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:v,maxHeadingLevel:g});return p((0,a.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:g}}),[s,c,v,g])),a.createElement(d,(0,r.Z)({toc:y,className:n,linkClassName:s},f))}},2668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(3901);const l={id:"Python",title:"Python",tags:["Python"]},i=void 0,s={unversionedId:"\u540e\u7aef/Python",id:"\u540e\u7aef/Python",title:"Python",description:"<TOCInline",source:"@site/docs/\u540e\u7aef/Python.md",sourceDirName:"\u540e\u7aef",slug:"/\u540e\u7aef/Python",permalink:"/what_i_konw/\u540e\u7aef/Python",draft:!1,tags:[{label:"Python",permalink:"/what_i_konw/tags/python"}],version:"current",frontMatter:{id:"Python",title:"Python",tags:["Python"]},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/what_i_konw/\u540e\u7aef/Java"},next:{title:"docker",permalink:"/what_i_konw/\u540e\u7aef/docker"}},c={},m=[{value:"\u57fa\u7840\u77e5\u8bc6",id:"\u57fa\u7840\u77e5\u8bc6",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"<strong>\u5982\u4f55\u8fd0\u884c python \u7a0b\u5e8f\uff1f</strong>",id:"\u5982\u4f55\u8fd0\u884c-python-\u7a0b\u5e8f",level:4},{value:"python \u89e3\u91ca\u5668\u4f5c\u7528\uff1f",id:"python-\u89e3\u91ca\u5668\u4f5c\u7528",level:4},{value:"\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u73af\u5883\u53d8\u91cf\u7684\u4f5c\u7528\uff1f",id:"\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u73af\u5883\u53d8\u91cf\u7684\u4f5c\u7528",level:4}],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{toc:m.filter((e=>2===e.level)),minHeadingLevel:2,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,a.kt)("h2",{id:"\u57fa\u7840\u77e5\u8bc6"},"\u57fa\u7840\u77e5\u8bc6"),(0,a.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,a.kt)("h4",{id:"\u5982\u4f55\u8fd0\u884c-python-\u7a0b\u5e8f"},(0,a.kt)("strong",{parentName:"h4"},"\u5982\u4f55\u8fd0\u884c python \u7a0b\u5e8f\uff1f")),(0,a.kt)("p",null,"vscode + \u63d2\u4ef6 + python \u89e3\u91ca\u5668"),(0,a.kt)("p",null,"1.vscode \u6dfb\u52a0 ",(0,a.kt)("strong",{parentName:"p"},"python")," \u63d2\u4ef6"),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Ctrl",(0,a.kt)("inlineCode",{parentName:"strong"},"+"),"Shift",(0,a.kt)("inlineCode",{parentName:"strong"},"+"),"P")," \u547c\u51fa\u547d\u4ee4\u680f\uff0c\u8f93\u5165\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"Python:Select Interpreter"),"\u9009\u62e9\u89e3\u91ca\u5668\uff08\u5982\u679c\u6ca1 python \u89e3\u91ca\u5668\u63d0\u524d\u5b89\u88c5\uff09"),(0,a.kt)("p",null,"3.\u65b0\u5efa\u4e2a py \u6587\u4ef6\uff0c\u6267\u884c\u7b2c\u4e00\u4e2a py \u7a0b\u5e8f"),(0,a.kt)("p",null,"hello.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"msg = 'hello'\nprint(msg)\n")),(0,a.kt)("p",null,"4.\u53f3\u952e\uff0c\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"p"},"run python file in terminal"),"\uff0c\u4f60\u4f1a\u770b\u5230\u547d\u4ee4\u884c\u6253\u5370 hello \u5566"),(0,a.kt)("h4",{id:"python-\u89e3\u91ca\u5668\u4f5c\u7528"},"python \u89e3\u91ca\u5668\u4f5c\u7528\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u89e3\u6790 Python \u4ee3\u7801"),"\uff1aPython \u89e3\u91ca\u5668\u53ef\u4ee5\u8bfb\u53d6 Python \u4ee3\u7801\u6587\u4ef6\uff0c\u5c06\u4ee3\u7801",(0,a.kt)("strong",{parentName:"li"},"\u89e3\u91ca\u4e3a\u673a\u5668\u8bed\u8a00"),"\u5e76\u6267\u884c\u3002\u5b83\u53ef\u4ee5\u6267\u884c\u5404\u79cd Python \u8bed\u53e5\uff0c\u5305\u62ec\u8d4b\u503c\u3001\u63a7\u5236\u6d41\u8bed\u53e5\u3001\u51fd\u6570\u8c03\u7528\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b",(0,a.kt)("strong",{parentName:"li"},"\u4ea4\u4e92\u5f0f\u73af\u5883"),"\uff1aPython \u89e3\u91ca\u5668\u8fd8\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"li"},"\u4ea4\u4e92\u5f0f\u73af\u5883"),"\uff0c\u5141\u8bb8\u7528\u6237\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165 Python \u4ee3\u7801\uff0c\u5e76\u5373\u65f6\u6267\u884c\u548c\u67e5\u770b\u7ed3\u679c\u3002\u8fd9\u79cd\u4ea4\u4e92\u5f0f\u73af\u5883\u5bf9\u4e8e\u6d4b\u8bd5\u4ee3\u7801\u548c\u5b66\u4e60 Python \u8bed\u8a00\u975e\u5e38\u6709\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8c03\u8bd5 Python \u4ee3\u7801"),"\uff1aPython \u89e3\u91ca\u5668\u8fd8\u53ef\u4ee5\u7528\u4e8e\u8c03\u8bd5 Python \u4ee3\u7801\uff0c\u5b83\u53ef\u4ee5\u6267\u884c\u4ee3\u7801\u5e76\u5728\u4ee3\u7801\u6267\u884c\u8fc7\u7a0b\u4e2d\u63d0\u4f9b\u8c03\u8bd5\u4fe1\u606f\u548c\u9519\u8bef\u63d0\u793a\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u627e\u5230\u548c\u4fee\u590d\u4ee3\u7801\u4e2d\u7684\u9519\u8bef\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c Python \u811a\u672c\uff1aPython \u89e3\u91ca\u5668\u8fd8\u53ef\u4ee5\u6267\u884c Python \u811a\u672c\u6587\u4ef6\uff0c\u4f7f\u5f97 Python \u811a\u672c\u53ef\u4ee5\u50cf\u5176\u4ed6\u53ef\u6267\u884c\u6587\u4ef6\u4e00\u6837\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u8fd0\u884c\u3002\u5728 ",(0,a.kt)("strong",{parentName:"li"},"Linux")," \u548c macOS \u7b49\u7c7b Unix \u7cfb\u7edf\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"li"},"shebang"),"\uff08#!\uff09\u6765\u6307\u5b9a Python \u89e3\u91ca\u5668\u7684\u8def\u5f84\uff0c\u4f7f\u5f97 Python \u811a\u672c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u76f4\u63a5\u8fd0\u884c\uff1b\u5728 ",(0,a.kt)("strong",{parentName:"li"},"Windows")," \u7cfb\u7edf\u4e2d\uff0c\u53ef\u4ee5\u5c06 Python \u89e3\u91ca\u5668\u6dfb\u52a0\u5230\u7cfb\u7edf\u7684 ",(0,a.kt)("strong",{parentName:"li"},"PATH \u73af\u5883\u53d8\u91cf"),"\u4e2d\uff0c\u4f7f\u5f97 Python \u811a\u672c\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u6267\u884c\u3002")),(0,a.kt)("h4",{id:"\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u73af\u5883\u53d8\u91cf\u7684\u4f5c\u7528"},"\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u73af\u5883\u53d8\u91cf\u7684\u4f5c\u7528\uff1f"),(0,a.kt)("p",null,"\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u73af\u5883\u53d8\u91cf\u662f\u4e00\u7ec4\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u5b9a\u4e49\u7684",(0,a.kt)("strong",{parentName:"p"},"\u53d8\u91cf"),"\uff0c\u5b83\u4eec\u5305\u542b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684",(0,a.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u8def\u5f84"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4fe1\u606f"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u7528\u6237\u81ea\u5b9a\u4e49\u8bbe\u7f6e"),"\u7b49\uff0c\u53ef\u4ee5\u88ab\u7cfb\u7edf\u548c\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u3002\u73af\u5883\u53d8\u91cf\u7684\u4e3b\u8981\u4f5c\u7528\u5305\u62ec\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49",(0,a.kt)("strong",{parentName:"li"},"\u7cfb\u7edf\u8def\u5f84"),"\uff1a\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e9b\u5e38\u7528\u7684\u7cfb\u7edf\u8def\u5f84\uff0c\u4f8b\u5982 PATH\u3001PYTHONPATH \u7b49\u3002\u8fd9\u4e9b\u8def\u5f84\u53ef\u4ee5\u8ba9\u7cfb\u7edf\u548c\u5e94\u7528\u7a0b\u5e8f",(0,a.kt)("strong",{parentName:"li"},"\u66f4\u65b9\u4fbf"),"\u5730\u8bbf\u95ee\u548c\u6267\u884c\u4e00\u4e9b\u547d\u4ee4\u3001\u811a\u672c\u548c\u7a0b\u5e8f\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e",(0,a.kt)("strong",{parentName:"li"},"\u7cfb\u7edf\u53c2\u6570"),"\uff1a\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e9b\u7cfb\u7edf\u53c2\u6570\uff0c\u4f8b\u5982 LANG\u3001LC_ALL\u3001TZ \u7b49\u3002\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u5f71\u54cd\u7cfb\u7edf\u7684\u8bed\u8a00\u3001\u65f6\u533a\u3001\u5b57\u7b26\u96c6\u3001\u663e\u793a\u6548\u679c\u7b49\uff0c\u4ece\u800c\u6539\u53d8\u7cfb\u7edf\u7684\u884c\u4e3a\u548c\u5916\u89c2\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e",(0,a.kt)("strong",{parentName:"li"},"\u7528\u6237\u504f\u597d"),"\uff1a\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e9b\u7528\u6237\u504f\u597d\u8bbe\u7f6e\uff0c\u4f8b\u5982 SHELL\u3001EDITOR\u3001PS1 \u7b49\u3002\u8fd9\u4e9b\u8bbe\u7f6e\u53ef\u4ee5\u5f71\u54cd\u7528\u6237\u7684\u547d\u4ee4\u884c\u4ea4\u4e92\u3001\u6587\u672c\u7f16\u8f91\u3001\u63d0\u793a\u7b26\u7b49\u4f53\u9a8c\uff0c\u4ece\u800c\u63d0\u9ad8\u7528\u6237\u7684\u5de5\u4f5c\u6548\u7387\u548c\u8212\u9002\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u4f20\u9012\u53c2\u6570\u548c\u6570\u636e"),"\uff1a\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u4f20\u9012\u53c2\u6570\u548c\u6570\u636e\uff0c\u4f8b\u5982\u5728 Shell \u811a\u672c\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u4f20\u9012\u4e00\u4e9b\u53c2\u6570\u548c\u6570\u636e\u7ed9\u5176\u4ed6\u7a0b\u5e8f\u6216\u811a\u672c\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5c06 ",(0,a.kt)("strong",{parentName:"p"},"D:\\developer_tools\\idea\\jdk-11.0.2\\bin")," \u6dfb\u52a0\u5230\u7cfb\u7edf\u7684 PATH \u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u53ef\u4ee5\u8ba9\u7cfb\u7edf\u548c\u5e94\u7528\u7a0b\u5e8f\u66f4\u65b9\u4fbf\u5730\u8bbf\u95ee\u548c\u6267\u884c JDK \u4e2d\u7684\u5404\u79cd\u5de5\u5177\u548c\u547d\u4ee4\u3002\u4f8b\u5982\uff0c\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165 ",(0,a.kt)("strong",{parentName:"p"},"javac")," \u547d\u4ee4\u65f6\uff0c\u64cd\u4f5c\u7cfb\u7edf\u4f1a\u5728 PATH \u73af\u5883\u53d8\u91cf\u4e2d\u67e5\u627e",(0,a.kt)("strong",{parentName:"p"},"\u8be5\u547d\u4ee4\u5bf9\u5e94\u7684\u53ef\u6267\u884c\u6587\u4ef6"),"\uff0c\u800c PATH \u73af\u5883\u53d8\u91cf\u4e2d\u5305\u542b\u4e86 D:\\developer_tools\\idea\\jdk-11.0.2\\bin \u8def\u5f84\uff0c\u56e0\u6b64\u53ef\u4ee5\u627e\u5230\u5e76\u6267\u884c javac \u53ef\u6267\u884c\u6587\u4ef6\u3002"))}d.isMDXComponent=!0}}]);