"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[7796],{2802:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return u}});var n=t(3366),r=(t(7294),t(4983)),l=t(4295),s=["components"],o={},i=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},c=i("PageDescription"),m=i("Title"),d={_frontmatter:o},p=l.Z;function u(e){var a=e.components,t=(0,n.Z)(e,s);return(0,r.kt)(p,Object.assign({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"PageDescription"},"Instana Lab# 02"),(0,r.kt)(m,{mdxType:"Title"},"Lab# 02"),(0,r.kt)("img",{src:"/Instana_Partner_OneDayWorkshop/340bff88ae74ce285a91f5f84d27a65c/Slide10.jpg",alt:"Lab# 02"}),(0,r.kt)(m,{mdxType:"Title"},"Lab# 02"),(0,r.kt)("img",{src:"/Instana_Partner_OneDayWorkshop/c6658b1eb5a1a4d756256493958fa911/Slide11.jpg",alt:"Lab# 02"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"/opt/instana/agent/data/logs\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"sudo service instana-agent stop\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"sudo service instana-agent status\n")),(0,r.kt)(m,{mdxType:"Title"},"Lab# 02"),(0,r.kt)("img",{src:"/Instana_Partner_OneDayWorkshop/ef6d0ad36ff5b0fb2820b1b0a176832e/Slide12.jpg",alt:"Lab# 02"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"/opt/instana/agent/etc\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"sudo vi org.ops4j.pax.logging.cfg\n")),(0,r.kt)(m,{mdxType:"Title"},"Lab# 02"),(0,r.kt)("img",{src:"/Instana_Partner_OneDayWorkshop/e855256ea83f9baeb42800b041684145/Slide13.jpg",alt:"Lab# 02"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"sudo service instana-agent start\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"sudo service instana-agent status\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"/opt/instana/agent/data/logs\n")),(0,r.kt)("hr",null))}u.isMDXComponent=!0},4295:function(e,a,t){t.d(a,{Z:function(){return h}});var n=t(7294),r=t(8650),l=t.n(r),s=t(5444),o=t(5426),i=t(4311),c=t(5900),m=t.n(c),d=function(e){var a,t=e.title,r=e.theme,l=e.tabs,s=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=s.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===r,a))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},p=function(e){var a=e.relativePagePath,t=e.repository,r=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,l=t||r,o=l.baseUrl,i=l.subDirectory,c=o+"/edit/"+l.branch+i+"/src/pages"+a;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=t(4275),g=t(1721),b=function(e){function a(){return e.apply(this,arguments)||this}return(0,g.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var a,t=l()(e,{lower:!0,strict:!0}),i=t===o,c=new RegExp(o+"/?(#.*)?$"),d=r.replace(c,t);return n.createElement("li",{key:e,className:m()((a={},a["PageTabs-module--selected-item--aBB0K"]=i,a),"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":a},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},a}(n.Component),k=b,f=t(2881),v=t(6958),E=t(36),N=function(e){var a=e.date,t=new Date(a);return a?n.createElement(E.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(E.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},h=function(e){var a=e.pageContext,t=e.children,r=e.location,c=e.Title,m=a.frontmatter,g=void 0===m?{}:m,b=a.relativePagePath,E=a.titleType,h=g.tabs,x=g.title,y=g.theme,P=g.description,w=g.keywords,T=g.date,L=(0,v.Z)().interiorTheme,D=(0,s.useStaticQuery)("2456312558").site.pathPrefix,_=D?r.pathname.replace(D,""):r.pathname,C=h?_.split("/").filter(Boolean).slice(-1)[0]||l()(h[0],{lower:!0}):"",Z=y||L;return n.createElement(i.Z,{tabs:h,homepage:!1,theme:Z,pageTitle:x,pageDescription:P,pageKeywords:w,titleType:E},n.createElement(d,{title:c?n.createElement(c,null):x,label:"label",tabs:h,theme:Z}),h&&n.createElement(k,{title:x,slug:_,tabs:h,currentTab:C}),n.createElement(f.Z,{padded:!0},t,n.createElement(p,{relativePagePath:b}),n.createElement(N,{date:T})),n.createElement(u.Z,{pageContext:a,location:r,slug:_,tabs:h,currentTab:C}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-instana-labs-lab-02-mdx-8b2f629fdf51c8a61766.js.map