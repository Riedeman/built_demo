<template>
  <router-view/>
</template>

<style>
#app {
	font-family: "Roboto Condensed", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: black;
  color: #09b157;
	padding: 0px 2px 0px 5px;
	overflow: scroll;
	height: 100vh;
	width: 100vw;
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	left: 0;
	top: 0;
}
button {
	display: block;
	color: white;
	cursor: pointer;
	margin: 2px;
	font-size: 20px;
	padding: 5px;
	border-radius: 5px;
	background-color: #00b300;
	border: 2px black solid;
	text-align: center;
	text-shadow: 1px 1px black;
	box-shadow: 0 10px 10px -10px #ffffff inset;
	height: 38px;
}
</style>
