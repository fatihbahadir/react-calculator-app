import { Grid ,Button} from 'semantic-ui-react';
import './App.css';
import React, { useState } from 'react';
function App() {
    const[calc,setCalc]=useState("")
    const ops=["/","*","+",".","%","0"]

    const updateCalc=value=>{
      if(
        ops.includes(value) && calc=='' ||
        ops.includes(value) && ops.includes(calc.slice(-1))
      ){
        return;
      }
      setCalc(calc+value)
     
    }

    const calculate=()=>{
      setCalc(eval(calc).toString())
    }

  return (
    <Grid celled columns="equal" style={{height:'100vh',margin:'0px'}}>
      <Grid.Row style={{background:"black",color:'white'}}>
        <Grid.Column style={{textAlign:'right'}}>
             <div style={{fontSize:'4.5rem',padding:'3rem 0.7rem 0.1rem 0.5rem'}}>
              {calc || "0"}
              </div>
        </Grid.Column>
       </Grid.Row>


       <Grid.Row style={{background:"grey",padding:'0px'}}>
        <Grid.Column style={{padding:'0'}}>
              <Button onClick={()=>{
                  
                  setCalc("")
                  
          }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%',}}>AC</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              if(calc.includes("-")){

              }
              else{
                updateCalc(`-`)
              }
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> +/-</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}} >
            <Button onClick={()=>{
              updateCalc('%')
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> %</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              updateCalc('/')
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> ÷</Button>
        </Grid.Column>
       </Grid.Row>


       <Grid.Row style={{background:"grey",padding:'0px'}}>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              let number=7
             updateCalc(number.toString())
            }}color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> 7</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
                  let number=8
                  updateCalc(number.toString())
                  
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> 8</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
                    let number=9
                    updateCalc(number.toString())
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> 9</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              updateCalc('*')
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> x</Button>
        </Grid.Column>
       </Grid.Row>

       <Grid.Row style={{background:"grey",padding:'0px'}}>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              let number=4
                    updateCalc(number.toString())
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> 4</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              let number=5
                    updateCalc(number.toString())
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> 5</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              let number=6
                    updateCalc(number.toString())
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> 6</Button>
        </Grid.Column >
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              if(calc===""){

              }else{
                updateCalc('-')
              }
                
            }}  color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> -</Button>
        </Grid.Column>
       </Grid.Row>

       <Grid.Row style={{background:"grey",padding:'0px'}}>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              let number=1
                    updateCalc(number.toString())
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}>1</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              let number=2
                    updateCalc(number.toString())
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}>2</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              let number=3
                    updateCalc(number.toString())
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}>3</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              updateCalc('+')
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}>+</Button>
        </Grid.Column>
       </Grid.Row>

       <Grid.Row style={{background:"grey",padding:'0px'}}>
        <Grid.Column width={8} style={{padding:'0'}}>
            <Button onClick={()=>{
              updateCalc('0')
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> 0</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              if(calc.includes(".") && !["+","-","/","%","*"].some(op=>calc.includes(op))){

              }
              else{
                updateCalc('.')
              }
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> .</Button>
        </Grid.Column>
        <Grid.Column style={{padding:'0'}}>
            <Button onClick={()=>{
              calculate()
       
            }} color='grey' style={{fontSize:'2rem',width:'100%',height:'100%'}}> =</Button>
        </Grid.Column>
       </Grid.Row>
      
    </Grid>
  );
}

export default App;
