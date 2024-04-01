import React from 'react'
import ReactDOM from 'react-dom/client'
import Moviecomponent from './components/Moviecomponent'
import Catimg from './img/cat.svg'
import Movie from './models/Movie'

let myMovie=new Movie("movie","author", 2024, "Universal",Catimg);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Moviecomponent name={myMovie.name} author={myMovie.author} year={myMovie.year} studio={myMovie.studio} poster={myMovie.poster}/>
  </React.StrictMode>,
)
