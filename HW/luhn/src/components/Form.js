import { useEffect, useState } from "react";

function Form() {
  let [input, setInput] = useState('');
  let [check, setCheck] = useState('Check Card')
  useEffect(calc,)

  // let [form, setForm] = useState('')
  function handleChange(e) {
      setInput(e.target.value);
  }

  function calc() {
    let num = input
    let str = ''
    num = num.split("").reverse().join("")
    console.log(`input: ${input}`)
    console.log(`reverse: ${num}`)
    console.log(`length: ${num.length}`)
    
    if(num.length>0){
        for(let i = 0; i < (num.length); i++){
            // console.log(`i: ${i}`)
            // console.log(`02: ${i%2}`)
            if((i%2)==0){
                console.log(`i: ${i}`)
                // str += Number(num[i])*2
                str += num[i]
            }else{
                console.log(`i: ${i}`)
                // str += num[i]
                str += Number(num[i])*2
            }
            // str += (num[0]
        } 
        
        
    }
     console.log(`string: ${str}`)
     let total = 0
     for(let i = 0; i < (str.length); i++){
         total += Number(str[i])
     }
     console.log(`total: ${total}`)
     total == 0? setCheck('Enter Credit Card'):
     total%10 == 0 && total>20? setCheck('Card is Valid'):
     setCheck('Card is Invalid')
  }
  
  return (
    <>
      <form>
        <input value={input} onChange={handleChange}></input>
        <div>{check}</div>
      </form>
    </>
  );
}

export default Form;
