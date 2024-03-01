function solve(arr){
    let movieArr = [];
    for(let el of arr){
        if(el.includes("addMovie")){
            let infoArr = el.split("addMovie ");
            let objMovie = {name: infoArr[1]};
            movieArr.push(objMovie);
        
        }else if(el.includes("directedBy")){
            let infoArr = el.split(" directedBy ");
            let [theMovieName,director] = infoArr
            let movie = movieArr.find(el => el.name == theMovieName);
            if(movie){
                movie.director = director
            }

                                  
        }else if(el.includes("onDate")){
            let infoArr = el.split(" onDate ");
            let [theMovieName,date] = infoArr
            let movie = movieArr.find(el => el.name == theMovieName);
            if(movie){
                movie.date = date
            }
        }
    }
    
    for(let el of movieArr){
        if(el.name && el.director && el.date){
            console.log(JSON.stringify(el));
        }
        
    }
    
    
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )