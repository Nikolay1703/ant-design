webpackJsonp([120],{1920:function(e,t){e.exports={content:["article",{},["h3","Are you going to provide Vue(etc...) edition?"],["p","No, but ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/LICENSE"},"the LICENSE of ant-design"]," is MIT. So, you can try to implement it with ant-design's ",["a",{title:null,href:"https://github.com/ant-design/ant-design/tree/master/style"},"style"],", like: ",["a",{title:null,href:"https://github.com/vueComponent/ant-design-vue"},"ant-design-vue"]," ",["a",{title:null,href:"https://github.com/FE-Driver/vue-beauty"},"vue-beauty"]," or ",["a",{title:null,href:"https://github.com/zzuu666/antue"},"antue"],"."],["h3","Are you going to provide Sass/Stylus(etc...) style file?"],["p","No, actually, you can convert Less to Sass/Stylus(etc...) with tools (which you can Google)."],["h3",["code","Select Dropdown DatePicker TimePicker Popover Popconfirm"]," disappear when I click another popup component inside it, How to resolve it?"],["p","Use ",["code","<Select getPopupContainer={trigger => trigger.parentNode}>"]," to render component inside Popover. (Or other getXxxxContainer props)"],["p",["a",{title:null,href:"https://ant.design/components/select/#Select-props"},"https://ant.design/components/select/#Select-props"]],["p","related issue: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3487"},"#3487"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3438"},"#3438"]],["h3",["code","Select Dropdown DatePicker TimePicker Popover Popconfirm"]," scroll with the page?"],["p","Use ",["code","<Select getPopupContainer={trigger => trigger.parentNode}>"]," to render component inside the scroll area. (Or other getXxxxContainer props)."],["p",["a",{title:null,href:"https://ant.design/components/select/#Select-props"},"https://ant.design/components/select/#Select-props"]],["p","related issue: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3487"},"#3487"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3438"},"#3438"]],["h3","How to modify the default theme of Ant Design?"],["p","See: ",["a",{title:null,href:"https://ant.design/docs/react/customize-theme"},"https://ant.design/docs/react/customize-theme"]," ."],["h3","Would you supply other themes?"],["p","No, we follow Ant Design specification. ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/1241"},"https://github.com/ant-design/ant-design/issues/1241"]],["h3","How to modify ",["code","Menu"],"/",["code","Button"],"(etc...)'s style?"],["p","You can override its style, but we don't recommend doing so. antd is not only a set of React components but also a design specification."],["h3","I just want to use ",["code","Menu"],"/",["code","Button"],"(etc...), but it seems that I have to import the whole antd and its style."],["p","Try ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],", or import what you need in this way:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">\'antd/lib/menu\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'antd/lib/button/style/css\'</span><span class="token punctuation">;</span>'},["code","import Menu from 'antd/lib/menu';\nimport 'antd/lib/button/style/css';"]],["p","or (ES6 way with tree shaking):"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> Breadcrumb<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>'},["code","import { Menu, Breadcrumb, Icon } from 'antd';"]],["h3","How to optimize momentjs bundle size with webpack?"],["p","See: ",["a",{title:null,href:"https://github.com/jmblog/how-to-optimize-momentjs-with-webpack"},"https://github.com/jmblog/how-to-optimize-momentjs-with-webpack"]],["h3","It doesn't work when I change ",["code","defaultValue"]," dynamically."],["p","The ",["code","defaultXxxx"]," (like ",["code","defaultValue"],") of ",["code","Input"],"/",["code","Select"],"(etc...) only works in first render. It is a specification of React; please read ",["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html#controlled-components"},"React's documentation"],"."],["h3","I set the ",["code","value"]," of ",["code","Input"],"/",["code","Select"],"(etc...), and then, it cannot be changed by user's action."],["p","Try ",["code","defaultValue"]," or ",["code","onChange"]," to change ",["code","value"],", and please read ",["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html#controlled-components"},"React's documentation"],"."],["h3","antd override my global styles!"],["p","Yes, antd is designed to develop a complete background application, we override some global styles for styling convenience, and it can't be removed now. More info trace ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/4331"},"https://github.com/ant-design/ant-design/issues/4331"]," ."],["p","Or, follow the instructions in ",["a",{title:null,href:"docs/react/customize-theme#How-to-avoid-modifying-global-styles-?"},"How to avoid modifying global styles?"]],["h3","I cannot install ",["code","antd"]," and ",["code","antd"],"'s dependencies(etc...). FYI, I live in China mainland."],["p","Long live the Girl Friend Wall! And try ",["a",{title:null,href:"http://npm.taobao.org/"},"cnpm"],"."],["h3","I set ",["code","dependencies.antd"]," as git repository in package.json, but it doesn't work."],["p","Yes, please install ",["code","antd"]," with npm."],["h3",["code","message"]," and ",["code","notification"]," is lower case, but other components are capitalized. Typo?"],["p","No, as ",["code","message"]," is just a function, not a React Component."],["h3",["code","antd"]," doesn't work well in mobile."],["p","Please check ",["a",{title:null,href:"http://mobile.ant.design"},"And Design Mobile"]," for details. ",["code","antd"]," has not been optimized to do so. You may try ",["a",{title:null,href:"https://github.com/react-component/"},"react-component"],", those repositories which start with 'm-' 'rn-' are designed for mobile."],["h3","Does ",["code","antd"]," supply standalone files like 'react' do?"],["p","Yep, you can ",["a",{title:null,href:"https://ant.design/docs/react/install?locale=en-US#Import-in-Browser"},"import ",["code","antd"]," with script tag"],". But we recommend using ",["code","npm"]," to import ",["code","antd"],", it is simple and easy to maintain."],["h3","I can't visit ",["code","icon"]," in my network environment."],["p","You should deploy the iconfont files to your network by following this ",["a",{title:null,href:"https://github.com/ant-design/antd-init/tree/7c1a33cadb98f2fd8688fe527dd7f98215b9bced/examples/local-iconfont"},"example"],". ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/1070"},"#1070"]],["p","After 3.9.x ",["a",{title:null,href:"/components/icon#svg-icons"},"we are using svg icon"],", so you don't need to deploy iconfont locally anymore!"],["h3","How to extend antd's components?"],["p","If you need some features which should not be included in antd, try to extend antd's component with ",["a",{title:null,href:"https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775"},"HOC"],". ",["a",{title:null,href:"https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.eeu8q01s1"},"more"]],["h3","How to spell Ant Design correctly?"],["ul",["li",["p","\u2705 ",["strong","Ant Design"],": Capitalized with space, for the design language."]],["li",["p","\u2705 ",["strong","antd"],": all lowercase, for the React UI library."]],["li",["p","\u2705 ",["strong","ant.design"],"\uff1aFor ant.design website url."]]],["p","Here are some typical wrong examples:"],["ul",["li",["p","\u274c AntD"]],["li",["p","\u274c antD"]],["li",["p","\u274c Antd"]],["li",["p","\u274c ant design"]],["li",["p","\u274c AntDesign"]],["li",["p","\u274c antdesign"]],["li",["p","\u274c Antdesign"]]],["h3","Do you guys have any channel for donation, like PayPal or Alipay?"],["p","Not yet."],["h3","Why not?"],["p","Alibaba pays us."],["hr"],["h2","Errors & Warnings"],["p","Here are some errors & warnings that you may meet while using antd, but most of them are not bugs of antd."],["h3","Adjacent JSX elements must be wrapped in an enclosing tag"],["p","An ",["a",{title:null,href:"http://stackoverflow.com/questions/25034994/how-to-correctly-wrap-few-td-tags-for-jsxtransformer"},"answer from StackOverflow"],", and please read ",["a",{title:null,href:"http://facebook.github.io/react/docs/displaying-data.html#components-are-just-like-functions"},"React's documentation"],"."],["h3","React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components)"],["p","Please make sure that you import ",["code","antd"],"'s components correctly. Read the corresponding documentation of the ",["code","antd"],"'s version which you use, and pay attention to typos."],["h3","rm is not recognized as an internal or external command"],["p","Please read this ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/650#issuecomment-164966511"},"issue"],", or try Linux/Unix."],["h3","Failed propType: Invalid prop ",["code","AAA"]," of type ",["code","BBB"]," supplied to ",["code","CCC"],", expected ",["code","DDD"],". Check the render method of ",["code","EEE"],"."],["p","Please read the corresponding documentation of the ",["code","antd"],"'s version which you use, and make sure that you pass values with correct type to ",["code","antd"],"'s components,"],["h3","Unknown option: xxx/package.json.presets"],["p","An ",["a",{title:null,href:"http://stackoverflow.com/questions/33685365/unknown-option-babelrc-presets"},"answer from Stack Overflow"],"."],["h3","Invariant Violation: findComponentRoot(...): Unable to find element."],["p","You may import React twice. Set React & ReactDOM as external, if you are using webpack, See ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/525"},"#525"],". If you are using others (browserify, etc...), please read its documentation and find options which can set React & ReactDOM as external."]],meta:{order:9,title:"FAQ",filename:"docs/react/faq.en-US.md"},description:["section",["p","Here are the frequently asked questions about Ant Design and antd that you should look up before you ask in community or create new issue. We also maintain a ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues?q=label%3AFAQ+is%3Aclosed"},"FAQ issues label"]," for common github issues."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Errors-&-Warnings",title:"Errors & Warnings"},"Errors & Warnings"]]]}}});