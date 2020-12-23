
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
	Mekv = funMekv()
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
	tras1(ter, ter1, ter2) // Для того чтобы после перезаписование значений корень закрывал всё облость 
	tras1(ter, ter1, ter2) 
	tras1(ter, ter1, ter2)
	
	funPnnp()
	// n
	document.querySelector('.n__answer').innerHTML = "= " + String((w * 9.55).toFixed(1))
	EngineData()
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
	Mekv = +(Math.sqrt(numerator / denominator).toFixed(1))
	document.querySelector('.Mekv__answer').innerHTML = "= " + String(Math.sqrt(numerator / denominator).toFixed(1) + " Нм")
	return Mekv
}
//-------------------------
// Находим Рнпр
function funPnnp() {
	document.querySelector('.Pnnp__answer').innerHTML = "= " + String((+Kz.value * Mekv * +w.value * Math.pow(10, -3)).toFixed(1) + " кВт")
}
//-------------------------
// вставление html кода 
function EngineData () {
	if (document.querySelector('.EngineData').innerHTML === "") {
		document.querySelector('.EngineData').insertAdjacentHTML('beforeend', '<div class="engine">Даные Двигателя</div><div class="engine_selection"><div class="value"><div class="value__text"><span>U</span>1ном =</div><input tabindex="1" value="380" type="number" name="U1n" id="U1n" class="Un input"></div><div class="value"><div class="value__text"><span>Р</span>ном =</div><input tabindex="2" value="100" type="number" name="Pn" id="Pn" class="Pn input"></div><div class="value"><div class="value__text"><span>n</span>ном =</div><input tabindex="3" value="570" type="number" name="nn" id="nn" class="nn input"></div><div class="value"><div class="value__text"><span>I</span>1н =</div><input tabindex="4" value="208" type="number"name="I1n" id="I1n" class="I1n input"></div><div class="value"><div class="value__text"><span>η</span> =</div><input tabindex="5" value="90.2" type="number" name="_n" id="_n" class="_n input"></div><div class="value"><div class="value__text"><span>cosφ</span> =</div><input tabindex="6" value="0.81" type="number" name="cosf" id="cosf" class="cosf input"></div><div class="value"><div class="value__text"><span>λ</span> =</div><input tabindex="7" value="1.85" type="number" name="Lambda" id="Lambda" class="Lambda input"></div><div class="value"><div class="value__text"><span>U</span>2н =</div><input tabindex="8" value="62" type="number" name="U2n" id="U2n" class="U2n input"></div><div class="value"><div class="value__text"><span>GD</span><div class="2"><div class="power">2</div></div>g =</div><input tabindex="9" value="440" type="number" name="GDg" id="GDg" class="GDg input"></div></div><div class="buttonRun"><div class="buttonRunBeg"><input id="butt1" class="butt" type="button" value="Run" /></div></div><div class="Jg">Jg =<div class="Jg__formula"><div class="numerator"><div class="numerator__flex">GD<div class="2"><div class="power">2</div></div>g</div></div><div class="denominator">40</div></div>=<div class="Jg__decision"><div class="numerator" id="input_GDg"><div class="numerator__flex">GD<div class="2"><div class="power">2</div></div>g</div></div><div class="denominator">40</div></div><div class="Jg__answer"></div></div><div class="Jw"><div class="Jw__formula">J<span class="Jw__formula_w">w</span></div><div class="Jw__decision">= 1.4 × Jg</div><div class="Jw__decision">= 1.4 × <span id="input_Jg">Jg</span></div><div class="Jw__answer"></div></div><div class="engine1">Короче мне стало дальше лень это все оформлять</div><div class="answer">Ответы: <span class="answer__answer"></span></div><div class="check">1. Проверка: <span class="check__check1"></span></div><div class="check">2. Проверка: <span class="check__check2"></span></div>')
	}
}

//-------------------------
// 2 run
butt1.onclick = function () {
	let U1n = document.getElementById('U1n').value;
	let Pn = document.getElementById('Pn').value;
	let nn = document.getElementById('nn').value;
	let I1n = document.getElementById('I1n').value;
	let _n = document.getElementById('_n').value;
	let cosf = document.getElementById('cosf').value;
	let Lambda = document.getElementById('Lambda').value;
	let U2n = document.getElementById('U2n').value;
	let GDg = document.getElementById('GDg').value;
	let Jg = 0
	Jg = jg()
	let Jw = 0
	Jw = jw()
	value('#input_U1n', U1n)
	value('#input_Pn', Pn)
	value('#input_nn', nn)
	value('#input_I1n', I1n)
	value('#input__n', _n)
	value('#input_cosf', cosf)
	value('#input_Lambda', Lambda)
	value('#input_U2n', U2n)
	value('#input_GDg', GDg)
	jg()
	jw()
	let gry = answer()
	console.log(gry)
	check(gry)
};
// Jg
function jg() {
	Jg = (+GDg.value / 40).toFixed(1)
	document.querySelector('.Jg__answer').innerHTML = "= " + String((+GDg.value / 40).toFixed(1))
	value('#input_Jg', Jg)
	return Jg
}
// Jw
function jw() {
	Jw = (1.4 * Jg).toFixed(1)
	document.querySelector('.Jw__answer').innerHTML = "= " + String((1.4 * Jg).toFixed(1))
	return Jw
}
answer
function answer() {
	let Wn = +(+nn.value / 9.55).toFixed(1) // номинальная омега
	let Mp = Math.round(+Mco.value + Jw * (Wn / +t1.value)) // Мп
	let Mt = Math.round(+Mco.value - Jw * (Wn / +t3.value))
	let Mn = Math.round((Math.pow(10, 3) * +Pn.value) / Wn)
	let Mk = Math.round(+Lambda.value * Mn)
	let _Mekv = Math.round(Math.sqrt((Math.pow(Mp, 2) * +t1.value + Math.pow(+Mco.value, 2) * (+t5.value + +t7.value - +t1.value - +t3.value) + Math.pow(+Mcm.value, 2) * +t6.value + (-Math.pow(Mt, 2) * +t3.value))/(+t1.value + +t2.value + +t3.value + +t4.value)))
	console.log(`Jg: ${Jg}; Jw: ${Jw}; Wн: ${Wn}; Mп: ${Mp}; Мт: ${Mt}; Мн: ${Mn}; Мк: ${Mk}; М*экв: ${_Mekv};`)
	document.querySelector('.answer__answer').innerHTML = `Jg: ${Jg}; Jw: ${Jw}; Wн: ${Wn}; Mп: ${Mp}; Мт: ${Mt}; Мн: ${Mn}; Мк: ${Mk}; М*экв: ${_Mekv};`
	let gry = {
		Wn:Wn,
		Mp:Mp,
		Mt:Mt,
		Mn:Mn,
		Mk:Mk,
		_Mekv:_Mekv
	}
	return gry
}
function check(gry) {
	let check1 = (gry.Mp / gry.Mk).toFixed(2)
	let check2 = gry.Mn >= gry._Mekv
	if ((check1 >= 0.55) && (check1 <= 0.65)) {
		document.querySelector('.check__check1').innerHTML = "Выполнена"
		console.log("ok")
	} else {
		document.querySelector('.check__check1').innerHTML = "Не выполнена"
	}
	if (check2) {
		document.querySelector('.check__check2').innerHTML = "Выполнена"
	} else {
		document.querySelector('.check__check2').innerHTML = "Не выполнена"
	}
}
