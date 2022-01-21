import './App.css';
import React,{useState} from 'react'

function App() {
  const [arr,setArr] = useState([])
  const [swap,setSwap] = useState([])

  function genRandomArray(){
    const tmp = []
    for(let i=0;i<75;i++){
      tmp.push(Math.floor((Math.random() * 295) + 5))
    }
    setArr(tmp)
    setSwap([])
    return tmp
  }

  function Sort(){
    let tmp = arr     
    for(let i = 0; i < tmp.length; i++){ 
      for(let j = 0; j < ( tmp.length - i -1 ); j++){
        setTimeout(()=>{
          const swp = []
          swp.push(j)
          swp.push(j+1)
          if(tmp[j]>tmp[j+1]){
            let t = tmp[j+1]
            tmp[j+1] = tmp[j]
            tmp[j] = t
          }
          setSwap(swp)
          setArr(tmp)
        },500)
        setTimeout(()=>{},2000)
      }
      setTimeout(()=>{
        setSwap([])
      },1000)
    }
  }

  return (
    <div className="App">
      <h1>Bubble Sort Visualizer</h1>
      <div className='arr'>
        {arr.map((ele,idx)=>(
          <div 
          key={idx} 
          className='ele' 
          style={{height:`${ele}px`,backgroundColor:swap.includes(idx)?'red':'aquamarine'}}>
          </div>
        ))}
      </div>
      <div className='btns'>
        <button
          onClick={()=>{genRandomArray()}}
        >Get Array</button>
        <button
          onClick = {()=>Sort()}
        >Sort Array</button>
      </div>
    </div>
  );
}

export default App;
