app.factory("Movie", function(){
    function Movie(name, time, director, actors, link) {
        this.name = name;
        this.time = time;
        this.director = director;
        this.actors = actors;
        this.link = link;
    }

    return Movie;
});