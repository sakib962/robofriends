import Card from './card';

function Cardlist({robots}) {
  alert(robots)
  return robots.length ? 
    <h1 className='red'>Not found!</h1>:
  (
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