import{u as t,j as e}from"./index-18w1D-AA.js";const c={title:"Factory Pattern",description:"undefined"};function a(s){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",span:"span",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"factory-pattern",children:["Factory Pattern",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#factory-pattern",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"The factory pattern is a well known pattern in object oriented programming. It provides an abstraction on how to instantiate a class."}),`
`,e.jsx(n.p,{children:"In the case of smart contracts, we can use this pattern by defining a factory contract that have the sole responsibility of creating and managing other contracts."}),`
`,e.jsxs(n.h2,{id:"class-hash-and-contract-instance",children:["Class hash and contract instance",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#class-hash-and-contract-instance",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"In Starknet, there's a separation between contract's classes and instances. A contract class serves as a blueprint, defined by the underling Cairo bytecode, contract's entrypoints, ABI and Sierra program hash. The contract class is identified by a class hash. When you want to add a new class to the network, you first need to declare it."}),`
`,e.jsx(n.p,{children:"When deploying a contract, you need to specify the class hash of the contract you want to deploy. Each instance of a contract has their own storage regardless of the class hash."}),`
`,e.jsx(n.p,{children:"Using the factory pattern, we can deploy multiple instances of the same contract class and handle upgrades easily."}),`
`,e.jsxs(n.h2,{id:"minimal-example",children:["Minimal example",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#minimal-example",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Here's a minimal example of a factory contract that deploy the ",e.jsx(n.code,{children:"SimpleCounter"})," contract:"]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{{#rustdoc_include "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"../../../"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"listings"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"getting"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"-"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"started"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"factory"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"src"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"simple_factory"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cairo"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"contract}}"})]})})}),`
`,e.jsxs(n.p,{children:["This factory can be used to deploy multiple instances of the ",e.jsx(n.code,{children:"SimpleCounter"})," contract by calling the ",e.jsx(n.code,{children:"create_counter"})," and ",e.jsx(n.code,{children:"create_counter_at"})," functions."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SimpleCounter"})," class hash is stored inside the factory, and can be upgraded with the ",e.jsx(n.code,{children:"update_counter_class_hash"})," function which allows to reuse the same factory contract when the ",e.jsx(n.code,{children:"SimpleCounter"})," contract is upgraded."]}),`
`,e.jsx(n.p,{children:"This minimal example lacks several useful features such as access control, tracking of deployed contracts, events, ..."})]})}function i(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{i as default,c as frontmatter};