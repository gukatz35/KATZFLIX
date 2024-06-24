import { useState, useEffect } from "react";


function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect( () =>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then( response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

   

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then (Response => Response.json() )
        .catch(error => console.log(error))
    })

    

   
    
     

    return (
        <>

              

            <div className="p-6 mt-5">
                <h2 className="text-white text-4xl mb-5 font-font-sub" >FILMES</h2>
                <div className="grid grid-cols-5 gap-10">
                    {
                        filmes.map(
                            filme =>(
                                <>
                                
                                    <div key={filme.id} className="flex flex-col bg-primary-katz text-black rounded-xl w-[200px] relative h-4/6 ">
                
                                            <img className="h-full" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                                            <h1 className=" text-xl text-center p-1 items-center text-titulo-katz" key={filmes}>{filme.title}</h1>
                                        
                                        
                                    </div>
                                
                                </>
                                
                                
                            )
                        )
                    }
                </div>
            </div>

      
        </>
    );
    
}

export default Filmes;

