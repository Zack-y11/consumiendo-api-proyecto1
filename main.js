async function getData (){
    try {

        const response = await fetch("https://rickandmortyapi.com/api/character")

        const data = await response.json()

        data.results.forEach(element => {
            
            const article = document.createRange().createContextualFragment(`

                <article>
                    <div class="image-container">
                        <img src>
                
                </article>
            
            
            `)
        });
        
    } catch (error) {
        console.log(`Ha ocurrido un error`)
    }






}