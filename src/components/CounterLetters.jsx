import Form from "./UI/form/Form"

const CounterLetters = () => {
 

  return (
    <div className="application">
      <h2 style={{textAlign: 'center', fontWeight: '400', fontSize: '20px'}}>Данное приложение позволяет определить тип и количество латинских символов в заданном тексте</h2>

      <Form />

      <div className="tableValues"></div>

    </div>
  )
}

export default  CounterLetters