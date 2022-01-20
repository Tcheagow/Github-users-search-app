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
    input::placeholder{
        color: ${(props) => props.theme.color.text};
    }
    .containerSearch{
        background-color: ${(props) => props.theme.color.container};
        box-shadow: ${(props) => props.theme.color.boxShadow};
    }
    .containerNoSearch{
        background-color: ${(props) => props.theme.color.container};
        box-shadow: ${(props) => props.theme.color.boxShadow};
    }
    .reposAndFollows{
        background-color: ${(props) => props.theme.color.repos};
    }
`;