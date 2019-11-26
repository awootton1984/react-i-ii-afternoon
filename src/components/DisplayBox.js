import React from 'react'
import data from '../data'
import Counter from './Counter'
import Person from './Person'
import NavPeople from './NavPeople'

class DisplayBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      people: data,
      i: 0
    }
  }

  handleChange = (e) => {
    console.log(e)
    if(e === "next" && this.state.i < this.state.people.length-1){
      this.setState({ i: this.state.i + 1 })
    } else if (e === 'previous' && this.state.i > 0){
      this.setState({ i: this.state.i - 1 })
    } 
  }

  // handleEdit = (e) => {

  // }
  
  handleDelete = () => {
    const copyPeople = this.state.people.slice()
      copyPeople.splice(this.state.i, 1)
      this.setState({people: copyPeople})
  }

  render() {
    return(
      <div className="display-box">
        <div>
          <Counter i={this.state.i} denom={this.state.people.length}/>
        </div>
        <Person key={this.state.i} person={this.state.people[this.state.i]}/> 
        <NavPeople handleChange={this.handleChange} handleDelete={this.handleDelete}/>
      </div>
    )
  }


  //Counter needs (i+1) / people.length
  //Person needs {...Name}, City, Country, Title, Employer, and [...Favorite movies]
  //NavPeople needs functions and event handling.



}


export default DisplayBox