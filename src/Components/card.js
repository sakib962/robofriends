import "./card.css"

function Card({id, name, email}) {
  console.log('Card')
  return (
    <div className="card tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
      <img alt="Robot" src={`https://robohash.org/${id}?200×200`}/>
      <div className="tc">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>ID No: {id}</p>
      </div>
    </div>
  )
}

export default Card;