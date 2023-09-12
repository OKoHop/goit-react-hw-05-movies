import styled, { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
};

img {
    display: block;
    max-width: 100%;
}

h1, h2, h3, h4, h5, h5, p {
    padding: 0;
    margin: 0;
}

div {
    padding: 0 15px;
}

p {
    text-align: center;
}
`;

export const StyledList = styled.ul`
    display: flex;
    gap: 20px;
    flex-wrap: nowrap;
`

export const StyledItem = styled.li`
    
`