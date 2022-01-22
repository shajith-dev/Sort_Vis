import './App.css';
import React,{useState} from 'react'

function App() {
  const [arr,setArr] = useState([])
  const [swap,setSwap] = useState([])
  const [size,setSize] = useState(0)

  function genRandomArray(){
    const tmp = []
    for(let i=0;i<size;i++){
      tmp.push(Math.floor((Math.random() * 295) + 5))
    }
    setArr(tmp)
    setSwap([])
    return tmp
  }

  function delay(ms){
    return new Promise(resolve=> setTimeout(resolve,ms))
  }


  async function iSort() {
    let tmp = arr
    let n = arr.length;
        for (let i = 0; i < n; i++) {
            let current = tmp[i];
            let j = i-1;
            const swp=[]
            while ((j > -1) && (current < tmp[j])){
                swp.push(j)
                tmp[j+1] = tmp[j];
                j--;
            }
            setSwap(swp)
            setArr(tmp)
            await delay(50)
            tmp[j+1] = current;
            await delay(50)
            setSwap([])
        }
}

  async function bSort(){
    let tmp = arr     
    for(let i = 0; i < tmp.length; i++){ 
      for(let j = 0; j < ( tmp.length - i -1 ); j++){
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
          await delay(50)
      }
      await delay(50)
      setSwap([])
    }
  }

  return (
    <div className="App">
      <p>Sort Visualizer</p>
      <div className='btns'>
        <input 
          id='sz'
          className='inp'
          onChange={(event)=>{
            setSize(Math.min(event.target.value))
          }}
          placeholder='enter array size' style={{textAlign:'center',width:'100px',height:'35px',borderRadius:'10px'}}/>
        <button
          onClick={()=>{genRandomArray()}}
        >Get Array</button>
        <button
          onClick = {()=>bSort()}
        >Bubble Sort</button>
        <button
          onClick = {()=>iSort()}
        >Insertion Sort</button>
      </div>
      <div className='arr'>
        {arr.map((ele,idx)=>(
          <div 
          key={idx} 
          className='ele' 
          style={{height:`${ele}px`,backgroundColor:swap.includes(idx)?'red':'aquamarine'}}>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default App;
