import Card from './card';

function Cardlist({robots}) {
  if(robots.length == 0) {
    return <h1 className='mt5 white'>Loading...</h1>
  }
  return (
    <div>
      {
        robots.map((robot, i) => {
          return(
            <Card 
            key={robot.id} 
            id={robot.id} 
            name={robot.name} 
            email={robot.email}/>
          );
        })
      }
    </div>
  )
}

export default Cardlist;