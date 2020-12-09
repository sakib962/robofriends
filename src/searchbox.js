function Searchbox(props) {
  return(
    <input 
      className="b--green bg-lightest-blue ba pa3"
      type="text"
      placeholder="Search Robots"
      onChange={props.onSearch}
    />
  )
}

export default Searchbox;