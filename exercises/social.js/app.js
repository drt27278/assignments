var movieGoer = {
    name: "Dillon",
    age: 28,
    print: function(){
        console.log(this.name, this.age)
    },
    favoriteMovies: ["Blade Runner", "The Thing", "Suspiria"],
    movieFriends:[
        {
            name: "Mitch",
            age: 30,
            favoriteMovies: [
                {
                    movieName: "The Empire Strikes Back",
                    review: 10,
                },
            ]
        }
    ]
}

movieGoer.print()