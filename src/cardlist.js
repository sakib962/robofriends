import Card from './card';

function Cardlist({robots}) {
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