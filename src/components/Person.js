import React from 'react'


const Person = (props) => {
  const pers = props.person
  
  return(

    <div className="person-info">
      <h1 id="person-name">{pers.name.first} {pers.name.last}</h1>
      <div className="logistic-info">
        <h2><span className="bolder">From: </span>{pers.city}, {pers.country}</h2>
        <h2><span className="bolder">Job Title: </span>{pers.title}</h2>
        <h2><span className="bolder">Employer: </span>{pers.employer}</h2>
      </div>
      <div className="dem-movies">
        <h2><span className='bolder'>Favorite Movies:</span></h2>
        <ol className="movie-list">
          {pers.favoriteMovies.map((e, ind) => <li key={ind}>{ind+1}. {e}</li>)}
        </ol>
      </div>

    </div>

  )
}





export default Person