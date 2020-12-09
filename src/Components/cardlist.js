import Card from './card';

function Cardlist({robots}) {
  return !robots.length ? 
    <h1 className='mt5 white'>Not found!</h1>:
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