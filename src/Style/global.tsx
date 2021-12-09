import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, div, span,
h1, h2, h3, h4, h5, h6, p, img, ol, ul, li,
fieldset, form, label {
	margin: 0;
	padding: 0;
	border: 0;
	font-family: Heebo;
}
body{
	width: 100vw;
	height: 100%;
}
ul, ol{
	list-style: none;
}
button{
	cursor: pointer;
}
`;

export default GlobalStyle;
