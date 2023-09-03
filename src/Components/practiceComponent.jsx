import { Button } from "./button"


export const PracticeComp = (props) => {

    const cars = props.cars;

    return (
    <div>
        <h1 id="demo" style={{textAlign:'center'}}>PracticeComp</h1>

            {/* short hand of using ternary op:{ exp1 (if true)} && {then do exp 2} */}
        <h2> {cars.length > 0 && 
                <p>You have {cars.length} cars in your Garage!</p>
            } 
        </h2>
        
        {/* <Button click1={(e)=>shootYourShot("Goal",e)} text="Shoot" color={"green"}></Button> */}
    </div>
    )
}

function MadeGoal(){
    return <h1 style={{textAlign:'center'}}>GOAL!!  HURRAY</h1>
}
function MissedGoal(){
    return <h1>Sorry, Try Again.!!</h1>
}

export function Goal(props) {
    const isGoal = props.isGoal;
    return (
        <>
         {isGoal ? <MadeGoal/> : <MissedGoal />}
        </>
    )
  }

