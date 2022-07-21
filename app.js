
//const url = 'https://emojihub.herokuapp.com/api/all';


const main = document.getElementById("main")

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

fetch(url)
    .then(resp => resp.json())
    .then(data => verDatos(data.categories))
    .catch(err => console.log(err)) 


const verDatos = (arr) => {
    
    let str = ''
    
    for(let i = 0; i < arr.length; i++) {

        const indice = arr[i].idCategory
        const categoria = arr[i].strCategory
        const descripcion = arr[i].strCategoryDescription
        const imagen = arr[i].strCategoryThumb
        
        str = str + `

        <div class="tarjeta">
            
            <figure class="figura">
                <img src="${imagen}" alt = "${categoria}"
            </figure>
            
            <div class = "info"
                <p> ${indice}  ${categoria}</p>
                <br>
                <p> ${descripcion}</p>              
            </div>
        
        </div> `
        
    }
    main.innerHTML=str
 }
