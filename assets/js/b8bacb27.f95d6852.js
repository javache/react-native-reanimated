"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[1222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||l;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const l={id:"about",title:"About",sidebar_label:"About"},r="Reanimated Babel Plugin",i={unversionedId:"reanimated-babel-plugin/about",id:"reanimated-babel-plugin/about",title:"About",description:"What is Reanimated Babel Plugin?",source:"@site/docs/reanimated-babel-plugin/about.md",sourceDirName:"reanimated-babel-plugin",slug:"/reanimated-babel-plugin/about",permalink:"/react-native-reanimated/docs/reanimated-babel-plugin/about",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/docs/reanimated-babel-plugin/about.md",tags:[],version:"current",frontMatter:{id:"about",title:"About",sidebar_label:"About"},sidebar:"tutorialSidebar",previous:{title:"Reanimated Babel plugin",permalink:"/react-native-reanimated/docs/category/reanimated-babel-plugin"},next:{title:"Options",permalink:"/react-native-reanimated/docs/reanimated-babel-plugin/plugin-options"}},s={},u=[{value:"What is Reanimated Babel Plugin?",id:"what-is-reanimated-babel-plugin",level:2},{value:"What can be a worklet?",id:"what-can-be-a-worklet",level:2},{value:"Autoworkletization",id:"autoworkletization",level:2},{value:"Referencing worklets",id:"referencing-worklets",level:3},{value:"Objects aggregating worklets",id:"objects-aggregating-worklets",level:3},{value:"Workletizing whole files (experimental)",id:"workletizing-whole-files-experimental",level:3},{value:"Limits of autoworkletization",id:"limits-of-autoworkletization",level:2},{value:"Imports",id:"imports",level:3},{value:"Custom hooks",id:"custom-hooks",level:3},{value:"Expressions",id:"expressions",level:3},{value:"Pitfalls",id:"pitfalls",level:2},{value:"Hoisting worklets",id:"hoisting-worklets",level:3},{value:"Classes",id:"classes",level:3},{value:"Notes",id:"notes",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reanimated-babel-plugin"},"Reanimated Babel Plugin"),(0,o.kt)("h2",{id:"what-is-reanimated-babel-plugin"},"What is Reanimated Babel Plugin?"),(0,o.kt)("p",null,"The Reanimated Babel Plugin transforms your code so that it can run on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". It looks for functions marked with a ",(0,o.kt)("inlineCode",{parentName:"p"},"'worklet';")," directive and converts them into serializable objects. We call this process ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletization"),"."),(0,o.kt)("p",null,"A worklet is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A function that contains a ",(0,o.kt)("inlineCode",{parentName:"li"},"'worklet'")," directive at its very top, i.e.:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function foo() {\n  'worklet';\n  console.log('Hello from worklet');\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A function that is ",(0,o.kt)("em",{parentName:"li"},"autoworkletizable"),", i.e.:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"useAnimatedStyle(() => {\n  // This function will be ran on the UI thread,\n  // hence it's in a workletizable context and will be\n  // autoworkletized. You don't need to add the 'worklet' directive here.\n  return {\n    width: 100,\n  };\n});\n")),(0,o.kt)("h2",{id:"what-can-be-a-worklet"},"What can be a worklet?"),(0,o.kt)("p",null,"Currently, Reanimated Babel Plugin supports the following constructs as worklets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Function Declarations")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function foo() {\n  'worklet';\n  console.log('Hello from FunctionDeclaration');\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Function Expressions")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const foo = function () {\n  'worklet';\n  console.log('Hello from FunctionExpression');\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Arrow Function Expressions")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const foo = () => {\n  'worklet';\n  console.log('Hello from ArrowFunctionExpression');\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Object Methods")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const obj = {\n  foo() {\n    'worklet';\n    console.log('Hello from ObjectMethod');\n  },\n};\n")),(0,o.kt)("h2",{id:"autoworkletization"},"Autoworkletization"),(0,o.kt)("p",null,"To reduce boilerplate code and provide a safer API, Reanimated Babel Plugin detects automatically whether a function should be workletized. Thanks to that, you don't need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"'worklet'")," directive to your callbacks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const style = useAnimatedStyle(() => {\n  // You don't need to add the 'worklet' directive here,\n  // since plugin detects this callback as autoworkletizable.\n  return {\n    width: 100,\n  };\n});\n")),(0,o.kt)("p",null,"This isn't limited to ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook - Reanimated Babel Plugin autoworkletizes all callbacks for the API of Reanimated. The whole list can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/main/packages/react-native-reanimated/plugin/src/autoworkletization.ts"},"plugin source code"),"."),(0,o.kt)("p",null,"Keep in mind that in more advanced use cases, you might still need to manually mark a function as a worklet."),(0,o.kt)("h3",{id:"referencing-worklets"},"Referencing worklets"),(0,o.kt)("p",null,"You can define worklets ",(0,o.kt)("strong",{parentName:"p"},"before")," they are used and the plugin will autoworkletize them too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function foo() {\n  // You don't need to add\n  // the 'worklet' directive here.\n  return { width: 100 };\n}\n\n// You don't need to define an inline function here,\n// a reference is enough.\nconst style = useAnimatedStyle(foo);\n")),(0,o.kt)("h3",{id:"objects-aggregating-worklets"},"Objects aggregating worklets"),(0,o.kt)("p",null,"In some APIs, like ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedScrollHandler")," you can pass an object that contains worklets instead of a function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const handlerObject = {\n  // You don't need to mark these methods as worklets.\n  onBeginDrag() {\n    console.log('Dragging...');\n  },\n  onScroll() {\n    console.log('Scrolling...');\n  },\n};\n\nconst handler = useAnimatedScrollHandler(handlerObject);\n")),(0,o.kt)("h3",{id:"workletizing-whole-files-experimental"},"Workletizing whole files (experimental)"),(0,o.kt)("p",null,"You can mark a file as a workletizable file by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"'worklet'")," directive to the top of the file."),(0,o.kt)("p",null,"This will make all ",(0,o.kt)("em",{parentName:"p"},"top-level")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Functions"),(0,o.kt)("li",{parentName:"ul"},"Objects aggregating worklets")),(0,o.kt)("p",null,"workletized automatically. This can come in handy for files that contain multiple worklets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// file.ts\n'worklet';\n\nfunction foo() {\n  // Function 'foo' will be autoworkletized.\n  return { width: 100 };\n}\n\nfunction bar() {\n  // Function 'bar' will be autoworkletized.\n  function foobar() {\n    // Function 'foobar' won't since it's not defined in top-level scope.\n    console.log(\"I'm not a worklet\");\n  }\n  return { width: 100 };\n}\n")),(0,o.kt)("h2",{id:"limits-of-autoworkletization"},"Limits of autoworkletization"),(0,o.kt)("p",null,"The plugin cannot infer whether a function is autoworkletizable or not in some contexts."),(0,o.kt)("h3",{id:"imports"},"Imports"),(0,o.kt)("p",null,"When importing a function from another file or a module and using it as a worklet, you must manually add the ",(0,o.kt)("inlineCode",{parentName:"p"},"'worklet'")," directive to the function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// foo.ts\nimport { bar } from './bar';\n// ...\nconst style = useAnimatedStyle(bar);\n\n// bar.ts\nexport function bar() {\n  'worklet'; // Won't work without it.\n  return {\n    width: 100,\n  };\n}\n")),(0,o.kt)("h3",{id:"custom-hooks"},"Custom hooks"),(0,o.kt)("p",null,"Currently Reanimated hasn't exposed APIs that would allow you to register your custom hooks for callback workletization. This however, might change in the future."),(0,o.kt)("h3",{id:"expressions"},"Expressions"),(0,o.kt)("p",null,"A function won't get automatically workletized when it's a result of an expression. You have to add the ",(0,o.kt)("inlineCode",{parentName:"p"},'"worklet";')," directive to make it work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const foo = someCondition\n  ? () => {\n      'worklet'; // Won't work without it.\n      return { width: 100 };\n    }\n  : () => {\n      'worklet'; // Won't work without it.\n      return { width: 200 };\n    };\n\nconst style = useAnimatedStyle(foo);\n")),(0,o.kt)("p",null,"In such cases we recommend either handling the conditional logic in the worklet itself or refactoring your code to eliminate the need for conditional worklets."),(0,o.kt)("h2",{id:"pitfalls"},"Pitfalls"),(0,o.kt)("p",null,"There are some patterns that won't work with the plugin."),(0,o.kt)("h3",{id:"hoisting-worklets"},"Hoisting worklets"),(0,o.kt)("p",null,"Worklets aren't hoisted. This means that you can't use worklets before they are defined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// The following line crashes,\n// even though 'foo' is marked as a worklet.\nconst style = useAnimatedStyle(foo);\n\nfunction foo() {\n  'worklet';\n  return { width: 100 };\n}\n")),(0,o.kt)("h3",{id:"classes"},"Classes"),(0,o.kt)("p",null,"You can't use classes on the UI thread:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class Clazz {\n  foo() {\n    'worklet';\n    return { width: 100 };\n  }\n}\n\nconst clazz = new Clazz();\n\n// The following line crashes,\n// even though 'foo' is marked as a worklet.\nconst style = useAnimatedStyle(clazz.foo());\n")),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Babel is a powerful tool that can be explored to implement numerous useful features. If you feel like Reanimated Babel plugin could make use of some new functionality or that its pitfalls are too severe, feel free to let us know on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/"},"GitHub"),", via an issue or a discussion thread - and as always, PRs are welcome!"))}p.isMDXComponent=!0}}]);