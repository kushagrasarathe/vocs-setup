import{u as e,j as s}from"./index-18w1D-AA.js";const n={content:{horizontalPadding:"50px",width:"100%",verticalPadding:"30px"},title:"Storage",description:"undefined"};function r(i){const l={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...e(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(l.header,{children:s.jsxs(l.h1,{id:"storage",children:["Storage",s.jsx(l.a,{"aria-hidden":"true",tabIndex:"-1",href:"#storage",children:s.jsx(l.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(l.p,{children:"Here's the most minimal contract you can write in Cairo:"}),`
`,s.jsxs(l.div,{className:"code-group",children:[s.jsx(l.div,{"data-title":"contract",children:s.jsx(l.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"contract","data-lang":"rust",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"#[starknet"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"contract]"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" mod"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Contract"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[storage]"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    struct"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Storage"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {}"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),s.jsx(l.div,{"data-title":"tests",children:s.jsx(l.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"tests","data-lang":"rust",children:s.jsxs(l.code,{children:[s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"#[cfg(test)]"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"mod"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" test"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    use"}),s.jsx(l.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" super"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Contract"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    use"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" starknet"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SyscallResultTrait"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"syscalls"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"deploy_syscall};"})]}),`
`,s.jsx(l.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[test]"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    fn"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" test_can_deploy"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (_contract_address, _) "}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" deploy_syscall"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"            Contract"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"TEST_CLASS_HASH"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"try_into"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"unwrap"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), "}),s.jsx(l.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"array!"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[]"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"span"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), "}),s.jsx(l.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        )"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            ."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"unwrap_syscall"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // Not much to test"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})})]}),`
`,s.jsxs(l.p,{children:["Storage is a ",s.jsx(l.code,{children:"struct"})," annotated with ",s.jsx(l.code,{children:"#[storage]"}),`. Every contract must have one and only one storage.
It's a key-value store, where each key will be mapped to a storage address of the contract's storage space.`]}),`
`,s.jsxs(l.p,{children:["You can define ",s.jsx(l.a,{href:"/variables",children:"storage variables"})," in your contract, and then use them to store and retrieve data."]}),`
`,s.jsxs(l.div,{className:"code-group",children:[s.jsx(l.div,{"data-title":"contract",children:s.jsx(l.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"contract","data-lang":"rust",children:s.jsxs(l.code,{children:[s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"#[starknet"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"contract]"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" mod"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Contract"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[storage]"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    struct"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Storage"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        a"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" u128"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        b"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" u8"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        c"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" u256"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),s.jsx(l.div,{"data-title":"tests",children:s.jsx(l.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"tests","data-lang":"rust",children:s.jsxs(l.code,{children:[s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"#[cfg(test)]"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"mod"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" test"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    use"}),s.jsx(l.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" super"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Contract"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    use"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" starknet"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SyscallResultTrait"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"syscalls"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"deploy_syscall};"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    use"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" storage"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"contract"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Contract"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        aContractMemberStateTrait, bContractMemberStateTrait, cContractMemberStateTrait"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    };"})}),`
`,s.jsx(l.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[test]"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    fn"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" test_can_deploy"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (_contract_address, _) "}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" deploy_syscall"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"            Contract"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"TEST_CLASS_HASH"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"try_into"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"unwrap"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), "}),s.jsx(l.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"array!"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"[]"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"span"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), "}),s.jsx(l.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        )"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            ."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"unwrap_syscall"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(l.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[test]"})}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    fn"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" test_storage_members"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() {"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" state "}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Contract"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"contract_state_for_testing"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"        assert_eq!"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(state"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"a"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"read"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), "}),s.jsx(l.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0_"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"u128"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"        assert_eq!"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(state"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"b"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"read"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), "}),s.jsx(l.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0_"}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"u8"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,s.jsxs(l.span,{className:"line",children:[s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"        assert_eq!"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(state"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"c"}),s.jsx(l.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(l.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"read"}),s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(), 0_u256);"})]}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(l.span,{className:"line",children:s.jsx(l.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})})]}),`
`,s.jsxs(l.blockquote,{children:[`
`,s.jsx(l.p,{children:`Actually these two contracts have the same underlying sierra program.
From the compiler's perspective, the storage variables don't exist until they are used.`}),`
`]}),`
`,s.jsxs(l.p,{children:["You can also read about ",s.jsx(l.a,{href:"/storing-custom-types",children:"storing custom types"})]})]})}function c(i={}){const{wrapper:l}={...e(),...i.components};return l?s.jsx(l,{...i,children:s.jsx(r,{...i})}):r(i)}export{c as default,n as frontmatter};
