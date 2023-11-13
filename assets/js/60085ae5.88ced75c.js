"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,d=c["".concat(s,".").concat(g)]||c[g]||u[g]||r;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Multimodal with GPT-4V and LLaVA",authors:"beibinli",tags:["LMM","multimodal"]},i=void 0,l={permalink:"/autogen/blog/2023/11/06/LMM-Agent",source:"@site/blog/2023-11-06-LMM-Agent/index.mdx",title:"Multimodal with GPT-4V and LLaVA",description:"LMM Teaser",date:"2023-11-06T00:00:00.000Z",formattedDate:"November 6, 2023",tags:[{label:"LMM",permalink:"/autogen/blog/tags/lmm"},{label:"multimodal",permalink:"/autogen/blog/tags/multimodal"}],readingTime:2.03,truncated:!1,authors:[{name:"Beibin Li",title:"Senior Research Engineer at Microsoft",url:"https://github.com/beibinli",imageURL:"https://github.com/beibinli.png",key:"beibinli"}],prevItem:{title:"EcoAssistant - Using LLM Assistants More Accurately and Affordably",permalink:"/autogen/blog/2023/11/09/EcoAssistant"},nextItem:{title:"AutoGen Research Assistant - React based Web application.",permalink:"/autogen/blog/2023/10/31/Research-Assistant-React"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Advanced Usage",id:"advanced-usage",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2},{value:"Future Enhancements",id:"future-enhancements",children:[],level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LMM Teaser",src:n(6517).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In Brief:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introducing the ",(0,o.kt)("strong",{parentName:"li"},"Multimodal Conversable Agent")," and the ",(0,o.kt)("strong",{parentName:"li"},"LLaVA Agent")," to enhance LMM functionalities."),(0,o.kt)("li",{parentName:"ul"},"Users can input text and images simultaneously using the ",(0,o.kt)("inlineCode",{parentName:"li"},"<img img_path>")," tag to specify image loading."),(0,o.kt)("li",{parentName:"ul"},"Demonstrated through the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_lmm_gpt-4v.ipynb"},"GPT-4V notebook"),"."),(0,o.kt)("li",{parentName:"ul"},"Demonstrated through the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_lmm_llava.ipynb"},"LLaVA notebook"),".")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Large multimodal models (LMMs) augment large language models (LLMs) with the ability to process multi-sensory data."),(0,o.kt)("p",null,"This blog post and the latest AutoGen update concentrate on visual comprehension. Users can input images, pose questions about them, and receive text-based responses from these LMMs.\nWe support the ",(0,o.kt)("inlineCode",{parentName:"p"},"gpt-4-vision-preview")," model from OpenAI and ",(0,o.kt)("inlineCode",{parentName:"p"},"LLaVA")," model from Microsoft now."),(0,o.kt)("p",null,"Here, we emphasize the ",(0,o.kt)("strong",{parentName:"p"},"Multimodal Conversable Agent")," and the ",(0,o.kt)("strong",{parentName:"p"},"LLaVA Agent")," due to their growing popularity.\nGPT-4V represents the forefront in image comprehension, while LLaVA is an efficient model, fine-tuned from LLama-2."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Incorporate the ",(0,o.kt)("inlineCode",{parentName:"p"},"lmm")," feature during AutoGen installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "pyautogen[lmm]"\n')),(0,o.kt)("p",null,"Subsequently, import the ",(0,o.kt)("strong",{parentName:"p"},"Multimodal Conversable Agent")," or ",(0,o.kt)("strong",{parentName:"p"},"LLaVA Agent")," from AutoGen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from autogen.agentchat.contrib.multimodal_conversable_agent import MultimodalConversableAgent  # for GPT-4V\nfrom autogen.agentchat.contrib.llava_agent import LLaVAAgent  # for LLaVA\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"A simple syntax has been defined to incorporate both messages and images within a single string."),(0,o.kt)("p",null,"Example of an in-context learning prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'prompt = """You are now an image classifier for facial expressions. Here are\nsome examples.\n\n<img happy.jpg> depicts a happy expression.\n<img http://some_location.com/sad.jpg> represents a sad expression.\n<img obama.jpg> portrays a neutral expression.\n\nNow, identify the facial expression of this individual: <img unknown.png>\n"""\n\nagent = MultimodalConversableAgent()\nuser = UserProxyAgent()\nuser.initiate_chat(agent, message=prompt)\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MultimodalConversableAgent")," interprets the input prompt, extracting images from local or internet sources."),(0,o.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,o.kt)("p",null,"Similar to other AutoGen agents, multimodal agents support multi-round dialogues with other agents, code generation, factual queries, and management via a GroupChat interface."),(0,o.kt)("p",null,"For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"FigureCreator")," in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_lmm_gpt-4v.ipynb"},"GPT-4V notebook")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_lmm_llava.ipynb"},"LLaVA notebook")," integrates two agents: a coder (an AssistantAgent) and critics (a multimodal agent).\nThe coder drafts Python code for visualizations, while the critics provide insights for enhancement. Collaboratively, these agents aim to refine visual outputs.\nWith ",(0,o.kt)("inlineCode",{parentName:"p"},"human_input_mode=ALWAYS"),", you can also contribute suggestions for better visualizations."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openai.com/research/gpt-4v-system-card"},"GPT-4V System Card")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/haotian-liu/LLaVA"},"LLaVA GitHub"))),(0,o.kt)("h2",{id:"future-enhancements"},"Future Enhancements"),(0,o.kt)("p",null,"For further inquiries or suggestions, please open an issue in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/"},"AutoGen repository")," or contact me directly at ",(0,o.kt)("a",{parentName:"p",href:"mailto:beibin.li@microsoft.com"},"beibin.li@microsoft.com"),"."),(0,o.kt)("p",null,"AutoGen will continue to evolve, incorporating more multimodal functionalities such as DALLE model integration, audio interaction, and video comprehension. Stay tuned for these exciting developments."))}u.isMDXComponent=!0},6517:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/teaser-380bdaa90a1c02ad009520bf289776c9.png"}}]);