import {Button,  Stack, TextField } from "@mui/material"
import { useState } from "react"
import  './mystyle.module.css'

function Iterface() {
  const [result,setresult]=useState(0)
  const [amount,setamount]=useState("")
  const [rate,setrate]=useState("")
  const [year,setyear]=useState("")
  const [invalamout,setinvaliamount]=useState(false)
  const [invalrate,setinvalirate]=useState(false)
  const [invalyear,setinvaliyar]=useState(false)
const regularvalidation=/^(?!0)[0-9]*.?[0-9]+$/

  const validate=(e)=>{
const {name,value}=e.target

if(name=='amount'){
  setamount(value)
}
else if(name=='rate'){
  setrate(value)
}
else{
  setyear(value)
}

if(regularvalidation.test(value)||value==""){
  if(name=="amount"){
    setinvaliamount(false)
  }
  else if(name=='rate'){
    setinvalirate(false)
  }
  else{
    setinvaliyar(false)
  }
}
else{
  if(name=="amount"){
    setinvaliamount(true)
  }
  else if(name=='rate'){
    setinvalirate(true)
  }
  else{
    setinvaliyar(true)
  }  }
 
  

  }


  const calculate=(e)=>{
    e.preventDefault()
    if(amount&&rate&&year){
      const si=(amount*year*rate)/100
      setresult(si)
      
    }
    else{
alert("enter the value")
    }
  }
const reset=()=>{
  setresult(0)
  setamount("")
  setrate("")
  setyear("")
  setinvaliamount(false)
  setinvalirate(false)
  setinvaliyar(false)
  

 
}
  return (
    <>
       <div className='container bg-dark  d-flex align-items-center justify-content-center ' style={{width:'100%',height:'100vh'}}>
      <div className=' bg-light rounded p-5' style={{width:'550px'}}>
        
          <h1>simple interest calculator</h1>
          <span>calculate your simple inerest easily</span>
      

        <div className='text-light bg-warning rounded d-flex flex-column align-items-center mt-3 '>
          
          <h1 style={{fontSize:'50px'}}>₹{result} </h1>
          <h1>Total Simple Interest</h1>
        </div>
        <form action="" className="mt-4" >
       
  
        <TextField name="amount" value={amount||""} id="principle_amount" label="Amount" variant="outlined" className="ms-1" onChange={validate} style={{width:'430px'}}/> 
       { invalamout&&
        <div className="ms-1 mt-2 " style={{color:'red'}}>invalid amount</div>}
        <TextField name="rate" value={rate||""} id="interst-rate" label="Rate" variant="outlined" className="ms-1 mt-4"  onChange={validate}  style={{width:'430px'}}/>
        { invalrate&&
        <div className="ms-1 mt-2 " style={{color:'red'}}>invalid rate</div>}
        <TextField name="year" value={year||""} id="year-period" label="Year" variant="outlined" className="ms-1 mt-4"  onChange={validate}  style={{width:'430px'}}/>
        { invalyear&&
        <div className="ms-1 mt-2 " style={{color:'red'}}>invalid year</div>}
        <Stack direction="row" spacing={3} className="mt-4">
        <Button disabled={invalamout||invalrate||invalyear} onClick={calculate} variant="contained" className="ms-1" style={{width:'200px'}}>CHECK</Button>
        <Button variant="outlined"  onClick={reset}  style={{width:'200px'}}>RESTART</Button>
</Stack>
        </form>
      </div>
    </div>
    </>
  )
}

export default Iterface





