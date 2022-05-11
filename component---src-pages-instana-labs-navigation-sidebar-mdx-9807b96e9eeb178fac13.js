"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[2980],{5823:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return c}});var n,i=a(3366),l=(a(7294),a(4983)),r=a(4295),o=["components"],s={},m=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),p={_frontmatter:s},d=r.Z;function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)(d,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(m,{mdxType:"PageDescription"},(0,l.kt)("p",null,"One of the most important pieces of making a working site is to define your\nnavigation items. This allows the theme to inform the SideNav component as well\nas the next/previous components at the bottom of each page.")),(0,l.kt)("h2",null,"Yaml data"),(0,l.kt)("p",null,"Unfortunately, genenerating left nav contents purely from the pages directory\nhas some fatal flaws. It makes it very difficult to establish the order of items\nor to hide items all together. In ",(0,l.kt)("inlineCode",{parentName:"p"},"src/data/nav-items.yaml"),", you’ll list your\nnav items in order."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- title: Menu\n  pages:\n    - title: Page 1\n      path: /menu/Page-1\n    - title: Page 2\n      path: /menu/Page-2\n- title: Single Page\n  pages:\n    - path: /single-page\n")),(0,l.kt)("p",null,"Some important things to note here:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You only need to link to the first tab if using page tabs"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"title")," refers to the menu and item text, it’s allowed to have spaces"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"path")," refer to the relative path to the mdx file in your pages"),(0,l.kt)("li",{parentName:"ul"},"You can make a ",(0,l.kt)("inlineCode",{parentName:"li"},"Page/index.mdx")," file if you’d prefer to have assets in a\nfolder. The path would still just look like ",(0,l.kt)("inlineCode",{parentName:"li"},"/Page"))),(0,l.kt)("h2",null,"Adding a divider"),(0,l.kt)("p",null,"You can insert a divider below any top-level nav item by adding the\n",(0,l.kt)("inlineCode",{parentName:"p"},"hasDivider: true")," property to it’s configuration under\n",(0,l.kt)("inlineCode",{parentName:"p"},"src/data/nav-items.yaml"),". ",(0,l.kt)("strong",{parentName:"p"},"Note:")," dividers can only be use with top-level nav\nitems and are incompatible with the\n",(0,l.kt)("a",{parentName:"p",href:"/guides/configuration#navigation-style"},"header navigation style"),"."),(0,l.kt)("p",null,"When shadowed, the ",(0,l.kt)("inlineCode",{parentName:"p"},"ResourceLinks")," component can optionally receive an\n",(0,l.kt)("inlineCode",{parentName:"p"},"includeDividerSpace")," prop. Set this to false if you want to remove the margin\nabove and below the ",(0,l.kt)("inlineCode",{parentName:"p"},"ResourceLinks")," divider."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- title: Menu\n  pages:\n    - title: Page 1\n      path: /menu/Page-1\n    - title: Page 2\n      path: /menu/Page-2\n  hasDivider: true\n- title: Single Page\n  pages:\n    - path: /single-page\n")),(0,l.kt)("p",null,"In the example above, a divider will appear between ",(0,l.kt)("strong",{parentName:"p"},"Menu")," and ",(0,l.kt)("strong",{parentName:"p"},"Single\nPage"),"."),(0,l.kt)("h2",null,"Customizing"),(0,l.kt)("p",null,"The nav item list can be customized using Gatsby theme\n",(0,l.kt)("a",{parentName:"p",href:"/guides/shadowing"},"shadowing"),". Simply provide your own implementation of\n",(0,l.kt)("inlineCode",{parentName:"p"},"/src/util/NavItems.js")," which can augment or replace the nav items read from\n",(0,l.kt)("inlineCode",{parentName:"p"},"src/data/nav-items.yaml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// /src/util/NavItems.js\nimport { useNavItems as themeUseNavItems } from 'gatsby-theme-carbon/src/util/NavItems';\n\n// add nav items\nexport function useNavItems() {\n  const navItems = themeUseNavItems();\n  return navItems.concat({\n    title: 'Additional Nav Item',\n    pages: [\n      { path: '/page1', title: 'New Page 1' },\n      { path: '/page2', title: 'New Page 2' },\n    ],\n  });\n}\n")))}c.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),i=a(8650),l=a.n(i),r=a(5444),o=a(5426),s=a(4311),m=a(5900),p=a.n(m),d=function(e){var t,a=e.title,i=e.theme,l=e.tabs,r=void 0===l?[]:l;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},c=function(e){var t=e.relativePagePath,a=e.repository,i=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||i,o=l.baseUrl,s=l.subDirectory,m=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(4275),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,m=new RegExp(o+"/?(#.*)?$"),d=i.replace(m,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),v=h,k=a(2881),f=a(6958),N=a(36),b=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,i=e.location,m=e.Title,p=t.frontmatter,g=void 0===p?{}:p,h=t.relativePagePath,N=t.titleType,y=g.tabs,w=g.title,P=g.theme,E=g.description,x=g.keywords,C=g.date,T=(0,f.Z)().interiorTheme,I=(0,r.useStaticQuery)("2456312558").site.pathPrefix,D=I?i.pathname.replace(I,""):i.pathname,S=y?D.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",Z=P||T;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:Z,pageTitle:w,pageDescription:E,pageKeywords:x,titleType:N},n.createElement(d,{title:m?n.createElement(m,null):w,label:"label",tabs:y,theme:Z}),y&&n.createElement(v,{title:w,slug:D,tabs:y,currentTab:S}),n.createElement(k.Z,{padded:!0},a,n.createElement(c,{relativePagePath:h}),n.createElement(b,{date:C})),n.createElement(u.Z,{pageContext:t,location:i,slug:D,tabs:y,currentTab:S}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-instana-labs-navigation-sidebar-mdx-9807b96e9eeb178fac13.js.map