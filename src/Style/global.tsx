import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body, div, span,
h1, h2, h3, h4, h5, h6, p, img, ol, ul, li,
fieldset, form, label {
	margin: 0;
	padding: 0;
	border: 0;
	font-family: Heebo;
	color: #333333;
}
body{
	width: 100%;
	height: 100%;
}
ul, ol{
	list-style: none;
}
h1{
	font-weight: 300;
	font-style: normal;
	font-size: 28px;

}
button{
	cursor: pointer;
}
`;

export default GlobalStyle;
