@charset "UTF-8";
/*Обнуление*/
@import url("https://fonts.googleapis.com/css2?family=Abhaya+Libre&display=swap");
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
}

:focus, :active {
  outline: none;
}

a:focus, a:active {
  outline: none;
}

nav, footer, header, aside {
  display: block;
}

html, body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input, button, textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a, a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*--------------------*/
/*Убрал стрелке в input type="number" */
input[type=number] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

/*--------------------*/
body {
  font-size: 16px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid black;
}

div {
  font-size: 16px;
  font-weight: 700;
}

.input {
  margin: 10px;
  display: block;
  border: 1px solid black;
  height: 30px;
  width: 200px;
}

.version {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.value {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
  font-size: 16px;
  font-weight: 400;
}
.Mekv {
  display: flex;
  align-items: center;
}
.Mekv__text {
  font-size: 20px;
}
.Mekv__formula_left {
  width: 280px;
  height: 100px;
  position: relative;
}
.Mekv__formula_left .block {
  position: absolute;
  top: 40px;
  left: 20px;
  background-color: black;
  width: 20px;
  height: 5px;
  border-radius: 50px;
}
.Mekv__formula_left .block1 {
  position: absolute;
  top: 40px;
  left: 43px;
  background-color: black;
  width: 5px;
  height: 40px;
  border-radius: 50px;
  transform: rotate(-20deg);
}
.Mekv__formula_left .block2 {
  position: absolute;
  top: 11px;
  left: 61px;
  background-color: black;
  width: 5px;
  height: 70px;
  border-radius: 50px;
  transform: rotate(20deg);
}
.Mekv__formula_left .block3 {
  position: absolute;
  top: 12px;
  left: 74px;
  background-color: black;
  width: 70px;
  height: 5px;
  border-radius: 50px;
}
.Mekv__formula_left .block4 {
  top: 30px;
  left: 80px;
  position: absolute;
}
.Mekv__formula_top {
  padding: 0 0 5px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  display: flex;
}
.Mekv__formula_bottom {
  padding: 5px 0 0;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-top: 5px solid black;
}
.power {
  font-size: 10px;
}

.butt {
  margin: auto 50%;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  background: #80ff80;
  font-size: 16px;
  font-weight: 700;
}