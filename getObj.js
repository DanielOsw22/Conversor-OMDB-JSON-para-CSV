$(".botao").bind("click",()=>transfArray())

function transfArray(){
    let input = document.querySelector(".input").value
    let arr = input.split(",")
    arr.forEach(elem => {
        pegaObj(elem)     
    });
}

function pegaObj(filme) {
    $.ajax({
        url: ("https://www.omdbapi.com/?i=" + filme + "&apikey=c145d58b"),
        success: function (result) {
                usaApi(result)
        },
    });
}

let arrJSON = []
let nomes = ""
function usaApi (JSON) {
    arrJSON.push(JSON)
    nomes = nomes +" "+ JSON.Title
    $(".filmes").html(nomes)
}

$(".botao2").bind("click",()=>ConvertToCSV(arrJSON))

function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = 'Title;Year;Rated;Released;Runtime;Genre;Director;Writer;Actors;Plot;Language;Country;Awards;Poster;Ratings;Metascore;imdbRating;imdbVotes;imdbID;Type;totalSeasons;Response\n';

        var line = ""
        array.forEach(elem=>{
            line = elem.Title+";"+elem.Year+";"+elem.Rated+";"+elem.Released+";"+elem.Runtime+";"+elem.Genre+";"+elem.Director+";"+elem.Writer+";"+elem.Actors+";"+elem.Plot+";"+elem.Language+";"+elem.Country+";"+elem.Awards+";"+elem.Poster+";"+elem.Ratings+";"+elem.Metascore+";"+elem.imdbRating+";"+elem.imdbVotes+";"+elem.imdbID+";"+elem.Type+";"+elem.totalSeasons+";"+elem.Response
            str += line + '\n';
        })

        

    $(".retCSV").html(str)
}