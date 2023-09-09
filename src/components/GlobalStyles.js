import { createGlobalStyle } from "styled-components";
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

li {
    margin: 5px 0;
    border: 1px solid black;
    width: 200px;
}

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