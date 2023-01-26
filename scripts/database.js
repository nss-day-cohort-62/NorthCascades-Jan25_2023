const database = {
  shows:[{
    id: 1,
    title: "White Lotus",
    actorId: 1,
    genreId: 1,
    airDate: "1/2/2023"
  },
  {
    id: 2,
    title: "The Wire",
    actorId: 2,
    genreId: 2,
    airDate: "2/3/2010"
  },
  {
    id: 3,
    title: "The Bear",
    actorId: 3,
    genreId: 3,
    airDate: "3/4/2021"
  }
],
  actors: [{
    id: 1,
    name: "Jennifer Coolidge"
  },
  {
    id: 2,
    name: "Idris Elba"
  },
  {
    id: 3,
    name: "Gary Garrison"
  }
],
  users: [{
    id: 1,
    name: "Billy Bailey",
    genreId: 1,
    age: 30
  },
  {
    id: 2,
    name: "Norm Normy",
    genreId: 2,
    age: 40
  },
  {
    id: 3,
    name: "Jill Jilly",
    genreId: 3,
    age: 50
  }
],
genres: [{
  id: 1,
  name: "Comedy"  
},
{
  id: 2,
  name: "Crime"  
},
{
  id: 3,
  name: "Drama"
}
]

}

export const getShows = () => {
  return database.shows.map(show => ({...show}))
}

export const getActors = () => {
  return database.actors.map(actor => ({...actor}))
}

export const getUsers = () => {
  return database.users.map(user => ({...user}))
}

export const getGenres = () => {
  return database.genres.map(genre => ({...genre}))
}