
butt.onclick = function () {
	let t1 = document.getElementById('t1').value;
	let t2 = document.getElementById('t2').value;
	let t3 = document.getElementById('t3').value;
	let t4 = document.getElementById('t4').value;
	let t5 = document.getElementById('t5').value;
	let t6 = document.getElementById('t6').value;
	let t7 = document.getElementById('t7').value;
	let w = document.getElementById('w').value;
	let Mco = document.getElementById('Mco').value;
	let Mcm = document.getElementById('Mcm').value;
	let Kz = document.getElementById('Kz').value;
	let Mekv = 0
	value('#input_t1', t1)
	value('#input_t2', t2)
	value('#input_t3', t3)
	value('#input_t4', t4)
	value('#input_t5', t5)
	value('#input_t6', t6)
	value('#input_t7', t7)
	value('#input_w', w)
	value('#input_Mco', Mco)
	value('#input_Mcm', Mcm)
	value('#input_Kz', Kz)
	value('#input_Mekv', Mekv)
	tras1(ter, ter1, ter2) // Для того чтобы после перезаписование значений корень закрывал все облость 
	tras1(ter, ter1, ter2) // это просто ржака, у меня функц с третего раза срабатывает, что я сделал правильно запустил 3 раза )
	tras1(ter, ter1, ter2)
	funMekv()
	funPnnp()
};
// ---------------------
// корень
const ter = document.querySelectorAll('.block3')
const ter2 = document.querySelectorAll('.Mekv__formula')
const ter1 = document.querySelectorAll('.Mekv__formula_bottom')
function tras1(name, name1, name2) {
	const cars = []
	for (let car of name1) {
		let lot = car.clientWidth
		cars[cars.length] = lot
	}
	for (let ind = 0; ind < name.length; ind++) {
		let w = cars[ind]
		let bloc = name[ind]
		let form = name2[ind]
		form.style.width = String(w + 110) + "px"
		bloc.style.width = String(w + 20) + "px"
	}
}
tras1(ter, ter1, ter2)
// ---------------------
// Здесь я сделал так чтобы одно значение выводилась везде 
function value(where, what) {
	const mas = document.querySelectorAll(where)
	if (what !== "") {
		for (let ind = 0; ind < mas.length; ind++) {
			let w = mas[ind]
			w.innerHTML = what
		}
	}
}
//-------------------------
// Находим Mэкв
function funMekv() {
	const numerator = Math.pow(+Mco.value, 2) * (+t5.value + +t7.value) + Math.pow(+Mcm.value, 2) * +t6.value
	const denominator = +t1.value + +t2.value + +t3.value + +t4.value
	// document.querySelector('.Mekv__answer').innerHTML = Math.sqrt(numerator/denominator)
	Mekv = +(Math.sqrt(numerator / denominator).toFixed(1))
	document.querySelector('.Mekv__answer').innerHTML = "= " + String(Math.sqrt(numerator / denominator).toFixed(1) + " Нм")
}
//-------------------------
// Находим Рнпр
function funPnnp() {
	document.querySelector('.Pnnp__answer').innerHTML = "= " + String((+Kz.value * Mekv * +w.value * Math.pow(10, -3)).toFixed(1) + " кВт")
}
//-------------------------