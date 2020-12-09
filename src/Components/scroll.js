import './scroll.css'

function Scroll(props) {
  console.log(props)
  return(
    <div className="scroll">
      {props.children}
    </div>
  )
}
export default Scroll;