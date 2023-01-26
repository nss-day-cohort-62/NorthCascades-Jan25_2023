import {getShows, getGenres, getActors} from "./database.js"

const shows = getShows()
const genres = getGenres()
const actors = getActors()

// function that finds the actor for the show

const findActors = (show, allActors) => {
    let starringActor = null

    for (const actor of allActors) {
        if (actor.id === show.actorId) {
            starringActor = actor.name
        }
    }

    return starringActor
}

// fucntion that finds the genre for the show

const findGenre = (show, allGenres) => {
    let showGenre = null

    for (const genre of allGenres) {
        if (genre.id === show.genreId) {
            showGenre = genre.name
        }
    }

    return showGenre
}