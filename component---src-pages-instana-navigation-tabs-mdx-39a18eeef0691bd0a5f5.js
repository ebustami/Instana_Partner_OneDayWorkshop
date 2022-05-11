"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1928],{8791:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n,r=a(3366),l=(a(7294),a(4983)),i=a(4295),o=["components"],s={},d=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),m={_frontmatter:s},c=i.Z;function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)(c,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(d,{mdxType:"PageDescription"},(0,l.kt)("p",null,"You have the option of adding tabs to your pages. This is only recommended if\nyou have several pages that will use the same tabs. If you only have one page\nwith a set of tabs, it might be better for discoverability to change the tabs to\nmenu items.")),(0,l.kt)("h2",null,"Tabs in YAML"),(0,l.kt)("p",null,"To create a tabbed page, you just need to point the theme to the path of your\nfirst tab. This is the structure of the YAML configuration for this page and\nit’s siblings."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- title: Guides\n  pages:\n    - title: Configuration\n      path: /guides/configuration\n    - title: Shadowing\n      path: /guides/shadowing\n    - title: Styling\n      path: /guides/styling\n    - title: Navigation\n      path: /guides/navigation/sidebar\n")),(0,l.kt)("h2",null,"File structure"),(0,l.kt)("p",null,"Let’s check out the directory structure for this page. Notice how you’ll add\nanother directory that corresponds with the one in the YAML file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n├── pages\n│   └── guides\n│       ├── configuration.mdx\n│       ├── shadowing.mdx\n│       ├── styling.mdx\n│       └── navigation\n│           ├── tabs.mdx\n│           └── sidebar.mdx\n")),(0,l.kt)("h2",null,"Markdown updates"),(0,l.kt)("p",null,"The last step is to add the name of your tabs to the front matter of each\nmarkdown file that has tabs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Sidebar\ntabs: ['Sidebar', 'Tabs']\n---\n")),(0,l.kt)("h3",null,"Tabs with apostrophes"),(0,l.kt)("p",null,"If your tab name contains an apostrophe, you only need to include the\ngrammatically correct text in the frontmatter. Your file name and\n",(0,l.kt)("inlineCode",{parentName:"p"},"nav-items.yaml")," should ",(0,l.kt)("strong",{parentName:"p"},"not")," include the apostrophe."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Sidebar\ntabs: ['Sidebar', \"What’s new\"]\n---\n")),(0,l.kt)("p",null,"For the ",(0,l.kt)("em",{parentName:"p"},"“What’s new”")," tab above, the source file would be ",(0,l.kt)("inlineCode",{parentName:"p"},"whats-new.mdx"),", and\nthe path would look like ",(0,l.kt)("inlineCode",{parentName:"p"},"/guides/navigation/whats-new"),"."))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(5426),s=a(4311),d=a(5900),m=a.n(d),c=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,d=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},p=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,d=new RegExp(o+"/?(#.*)?$"),c=r.replace(d,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),b=g,f=a(2881),k=a(6958),v=a(36),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,r=e.location,d=e.Title,m=t.frontmatter,h=void 0===m?{}:m,g=t.relativePagePath,v=t.titleType,w=h.tabs,E=h.title,N=h.theme,x=h.description,P=h.keywords,T=h.date,C=(0,k.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,L=D?r.pathname.replace(D,""):r.pathname,S=w?L.split("/").filter(Boolean).slice(-1)[0]||l()(w[0],{lower:!0}):"",Z=N||C;return n.createElement(s.Z,{tabs:w,homepage:!1,theme:Z,pageTitle:E,pageDescription:x,pageKeywords:P,titleType:v},n.createElement(c,{title:d?n.createElement(d,null):E,label:"label",tabs:w,theme:Z}),w&&n.createElement(b,{title:E,slug:L,tabs:w,currentTab:S}),n.createElement(f.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(y,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:L,tabs:w,currentTab:S}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-instana-navigation-tabs-mdx-39a18eeef0691bd0a5f5.js.map