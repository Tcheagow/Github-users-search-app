import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    .background{
        background-color: ${(props) => props.theme.color.background};
        color:  ${(props) => props.theme.color.text};
    }
    .search{
        background-color: ${(props) => props.theme.color.search};
        box-shadow: ${(props) => props.theme.color.boxShadow};
    }
    .inputSearch{
        background-color: ${(props) => props.theme.color.input};
    }
    .container{
        background-color: ${(props) => props.theme.color.container};
        box-shadow: ${(props) => props.theme.color.boxShadow};
    }
`;