const apiSimsomps = async (pagina) => {
    let url= `https://thesimpsonsquoteapi.glitch.me/quotes?count=40`;
    const api= await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes=document.querySelector('#resultado');

    const names = [];
    data.forEach( (item) => {
        // .Niega como la condicion de lo que nosotros ya declaramos- !
        if(!names.includes(item.character)){
            names.push(item.character);
        }
    });
    console.log(names);

    
    // const filter = data.map( (item) => {
    //     const index = names.findIndex( (item) =>{
    //         return names.includes(item.character);
    //     });
    //     if(index >= 0) {
    //         names.splice(index, 1);
    //         return item;
    //     }
    //});
    //console.log(filter);

    data.forEach(item => {
        divItem=document.createElement('div');
        divItem.innerHTML= `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.character}</h5>
                <p class="card-text">${item.characterDirection}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                `
                divRes.appendChild(divItem); 
      });
}
apiSimsomps();




