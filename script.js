//localStorage['name']='Alex'
//localStorage.name = 'Alex'// передача данных в стораге двумя способами

//console.log(localStorage.name)

/*localStorage.setItem('name', 'Alex')// занос ключа и елемента

console.log(localStorage.getItem('name'))// получение через ключ

localStorage.removeItem('name') // удаление через ключ

console.log(localStorage.getItem('name'))

localStorage.clear('name') // удаляец всё из стораже

*/

const input = document.getElementById('input')
const btnSave = document.getElementById('btn_save')
const btnRemove = document.getElementById('btn_remove')
const text = document.getElementById('text')


/*const showtext = function() {
  text.textContent = localStorage.getItem('text') // сохраняет на всегда занесённые переменные пока не сотрут

}

btnSave.addEventListener('click', function () {
  localStorage.setItem('text', input.value)
})

showtext()


const showtext = function () {
  text.textContent = sessionStorage.getItem('text') // сохраняет  занесённые переменные пока не закроится окно

}

btnSave.addEventListener('click', function () {
  sessionStorage.setItem('text', input.value)
})


btnRemove.addEventListener('click', function() {
  localStorage.clear() // очистить
  sessionStorage.clear()  // очистить
  showtext() // показать
})

showtext()

----------------------------------------------------------


//document.cookie = 'name=Alex; max-age = 3600' // время жизни куки в секундах

let date = new Date()

console.log(date)

document.cookie = 'name=Alex; expires=Tue , 19 Jan 2038 03:14:07 GMT'



let date = new Date(2045,02,22,14,20,00)

console.log(date.toUTCString()); // перевод время в ГМТ
document.cookie = 'name=Alex; expires=' + date.toUTCString() 

*/

const user = {
  name:'Alex',
  city: 'Minsk'
}

document.cookie = 'user=' + JSON.stringify(user)