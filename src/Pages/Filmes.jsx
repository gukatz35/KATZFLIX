import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Modal, Button } from 'antd';

function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect( () =>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then( response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    const [slides, setSlides] = useState([])

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then (Response => Response.json() )
        .then(response => setSlides(response.results))
        .catch(error => console.log(error))
    })

    const [aModal, setaModal] = useState({});
    const [mostrarModal, setMostrarModal] = useState(false);

    const moreDetail = items => {
        setMostrarModal(true);
        setaModal(items);
      };
    
      const closeDetail = () => {
        setMostrarModal(false);
      };

    return (
        <>

             <Carousel arrows infinite={false}>
             {
                    slides.map(
                        slide => (
                                <>
                                <h2 className="text-4xl text-titulo-kaneto text-center mb-4">{slide.title}</h2>
                                <div className="flex justify-center mb-6">
                                    <img className="" src={`https://image.tmdb.org/t/p/w1280/${slide.backdrop_path}`} alt="" />
                                </div>
                                </>
                        ) 
                    )
            }
            </Carousel>  

            <div className="p-6 mt-5">
                <h2 className="text-white text-4xl mb-5 font-font-sub" >Em destaque</h2>
                <div className="listaFilmes gap-10 flex overflow-x-scroll [&>div]:flex-shrink-0">
                    {
                        filmes.map(
                            filme =>(
                                <>
                                
                                    <div key={filme.id} className="flex flex-col bg-primary-katz text-black rounded-xl w-[200px] relative h-4/6">
                                        <Link onClick={()=> moreDetail(filme)} className="">
                                            <img className="h-full" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                                            <h1 className=" text-xl text-center p-1 items-center text-titulo-katz" key={filmes}>{filme.title}</h1>
                                        </Link>
                                        
                                    </div>
                                
                                </>
                                
                                
                            )
                        )
                    }
                </div>
            </div>

            
        <Modal
          title={aModal.title}
          open  = {mostrarModal}
          footer={
            <Button  onClick={closeDetail} className="bg-primary-katz text-white hover:bg-none hover:border-primary-kaneto">
              Ok
            </Button>
          }
          onCancel={closeDetail}
        >
            <img className=" w-full" src={`https://image.tmdb.org/t/p/original/${aModal.backdrop_path}`}/>
            <p className="my-3">{aModal.overview}</p>
            <p>Data de lançamento: {aModal.release_date}</p>
            <p>Avaliação: {aModal.vote_average}</p>
        </Modal>
        </>
    );
    
}

export default Filmes;

