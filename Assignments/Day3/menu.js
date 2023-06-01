const data=[
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ags2asHd6LVxr0I1EOuFKAvZEQqp6kmT0LOftTq8PA&usqp=CAU&ec=48665701",
    title:"Behrouz Dum Biryani",
    data:"Price - Rs 400/- Rating 4.4* ."
    },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8YAYmvfHM1G8zTjoBu6Tm-Ylu8KYP9BdtyhcHhfi-96ENAf5me7nLF399zuW8LljiBj6MvCeV9c&usqp=CAU&ec=48665701",
    title:"Kareem's Biryani",
    data:"Price - Rs 450/- Rating 4.5*"
    },
    {
    
    image:"https://b.zmtcdn.com/data/reviews_photos/a90/f17cf8b5694b7434c74a985848b39a90_1641632716.jpg",
    title:"Arabicas Mandi",
    data:"Price - 600/- Rating 4.5*"
    },
   ];
   const recipe=document.getElementById("Restauraunt");
   for(let i=0;i<data.length;i++){
    const food=document.createElement("div");
    const imge=document.createElement("img");
    imge.src=data[i].image;
    const tile=document.createElement("h2");
    tile.innerText=data[i].title;
    
    const fdet=document.createElement("p");
    fdet.innerText=data[i].data;
    fdet.style.display="none";
    const btn1= document.createElement("button");
    btn1.innerText="Show Details";
    const btn2=document.createElement("button");
    btn2.innerText="Close";
    btn1.addEventListener("click",()=>{
    if(fdet.style.display==="none"){
    
    fdet.style.display="block";
    }
    else{
    fdet.style.display="block";
    }
    });
    btn2.addEventListener("click",()=>{
    if(fdet.style.display==="block"){
    fdet.style.display="none";
    }
    else{
    fdet.style.display="block";
    }
    });
    food.append(imge,tile,fdet,btn1,btn2);
    recipe.append(food);
   }