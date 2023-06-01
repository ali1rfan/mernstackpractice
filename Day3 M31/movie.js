const data=[
    {
        image:"https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg",
        title:"Attack On Titan",
        rating:5,
    },
    {
        image:"https://i.pinimg.com/originals/63/13/fa/6313fa94f898c6233dfeedf108276a2f.png",
        title:"Your name",
        rating:5,
    },
    {
        image:"https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg",
        title:"Attack On Titan",
        rating:5,
    },
    {
        image:"https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg",
        title:"Attack On Titan",
        rating:5,
    },
    {
        image:"https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg",
        title:"Attack On Titan",
        rating:5,
    },
    {
        image:"https://m.media-amazon.com/images/I/81dH7-pkjiL.jpg",
        title:"Attack On Titan",
        rating:5,
    },
];

const moviebox=document.getElementById("showmovies");

for(let i=0;i<data.length;i++){
    const div=document.createElement("div");
    const image=document.createElement("img");
    image.src=data[i].image;
    const movieTitle= document.createElement("h3");
    movieTitle.innerText=data[i].title;
    const rating=document.createElement("p");
    rating.innerText=data[i].rating;
    const button = document.createElement("button");
    button.innerText = "Click Movie";
    button.addEventListener("click", () => {
        alert(`You clicked on ${el.title}`);
    });
    div.append(image,movieTitle,rating,button);
    moviebox.append(div);
}
