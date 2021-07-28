function slideshow(){

    const arr = ["https://c4.wallpaperflare.com/wallpaper/949/700/56/movies-hollywood-movies-wallpaper-preview.jpg","https://wallpaperaccess.com/full/1922937.jpg","https://variety.com/wp-content/uploads/2020/03/minions.jpg","https://i.pinimg.com/originals/93/17/c3/9317c3fb92d45a42a911ad1a2140f8b1.jpg"];

    let div = document.getElementById('slideshow');

    let img = document.createElement('img');

    let i = 0;

    img.src =arr[0];
    div.append(img);

    setInterval(function(){

        if(i == arr.length){
            i=0;
        }

        img.src = arr[i];

        i++;
    },2000);

}
slideshow();

 var divMain = document.getElementById("dataShow");

async function searchMovie() {
      
    let title = document.getElementById("movie").value;
    let div = document.createElement("div");

    try {
        let request = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=215146a4`)
        let data = await request.json();
        console.log(data);

        let p = document.createElement("p");
        p.textContent = "Movie Details -"
        p.style.margin = "auto"
        p.style.textAlign = "center"
        p.style.backgroundColor = "#fff"
        p.style.width = "30%"
        p.style.color = "#000"
        p.style.padding = "1%"
        p.style.borderRadius = "5px"

        if(data.Poster === undefined){
            var img = document.createElement("img");
            img.src = "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=338&ext=jpg";
            img.setAttribute("id","image")
        }
        else{
            var img = document.createElement("img");
            img.src = data.Poster;
            img.setAttribute("id","image")
        }

        let p1 = document.createElement("p");
        p1.innerHTML = `Title : ${data.Title}`;
        p1.setAttribute("class","title-p");

        let p4 = document.createElement("p");
        p4.innerHTML = `Actors : ${data.Actors}`;

        let p2 = document.createElement("p");
        p2.innerHTML = `Released-Date : ${data.Released}`;
        p2.setAttribute("class","lang-p")

        let p3 = document.createElement("p");
        p3.innerHTML = `imdb-Rating : ${data.imdbRating}`;
        p3.setAttribute("class","rating-p");

        div.append(p,img,p1,p4,p2,p3);
        div.style.backgroundColor = "#424242"
        div.style.padding = "1%"
        div.style.borderRadius = "5px"
        div.style.width = "84%"
        // div.style.height = "230px"
        div.style.marginLeft = "4%"
        divMain.append(div);

    }
    catch (err) {
        // console.log(err);
        
    }
}