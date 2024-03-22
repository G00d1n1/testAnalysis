
export default function Form(){
  
  let analysis = function trackResult(){
    const formAValue = document.querySelector('.formA textarea').value.toUpperCase()
    const alphavite = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'      // abcdefghijklmnopqrstuvwxyz
    const arrLetters = []

          // совпадения, отбор элементов в массив
    for(let i=0; i<alphavite.length; i++){
      for(let j=0; j<formAValue.length; j++){      
        if(alphavite[i] === formAValue[j]){
          arrLetters.push(alphavite[i] )
        }
      }
    }
          // объект результатов
    let newObj = {}
    for (let i = 0, l = arrLetters.length; i < l; i++) {
      if (newObj[arrLetters[i]]){newObj[arrLetters[i]]++}
      else {newObj[arrLetters[i]] = 1}
    }

    let keys = Object.keys(newObj)
    let values = Object.values(newObj)
    let tableValues = document.querySelector('.tableValues')
    for (let i = 0; i < keys.length; i++) {
      const element = keys[i];
      console.log(element)
      tableValues.innerHTML += `
        <div class="itemResult">
          <span class="itemKey">${keys[i]}</span> - 
          <span class="itemValue">${values[i]}</span>
        </div>
      `
    }
    btnDis()

    return
  }
  
        // неактивная кнопка
  function btnDis(){
    let btnTest = document.querySelector('.btnTest')
    btnTest.setAttribute('disabled', '')
  }
        // перезагрузка формы 
  function btnRefresh(){
    let btnTest = document.querySelector('.btnTest')
    btnTest.removeAttribute('disabled', '')
        // очищение поля ввода
    let inputArea = document.querySelector('.inputArea')
    inputArea.value = inputArea.value.replace(inputArea.value, "");
        // очищение результата
    let itemResult = document.querySelectorAll('.itemResult')
    itemResult.forEach(elem => {elem.remove()})
  }


  return (
    <form className="formA">
      <div>
        <textarea className="inputArea" name="content" rows={4} cols={40} placeholder="Введите текст для анализа"></textarea>
      </div>

      <button className="btnTest" onClick={analysis} type="button">Анализ</button>
      <button className="btnRefresh" onClick={btnRefresh}  type="button">Обновить</button>
      <hr></hr>


    </form>
  )
}