import React from 'react'


class NavPeople extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="nav-people">
        <span id="previous" className="bolder" onClick={(e) => this.props.handleChange(e.target.id)}>{`< Previous`}</span>
        <div className="button-group">
          <button className="blue-btn">Edit</button>
          <button className="blue-btn" name="delete" onClick={() => {this.props.handleDelete()}}>Delete</button>
          <button className="blue-btn">New</button>
        </div>
        <span id="next" className="bolder" onClick={(e) => this.props.handleChange(e.target.id)}>{`Next >`}</span>
      </div>
    )
  }


}


export default NavPeople