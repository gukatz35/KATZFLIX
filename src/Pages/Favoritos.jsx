import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";

function Favoritos() {


    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(error => console.log(error))
    }, [])

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
            <h2 className="font-font-sub font-black text-5xl text-white flex justify-center my-10">Lista de Favoritos</h2>
            <div className="listaFilmes gap-10 flex flex-wrap justify-center">
                    {
                        filmes.map(
                            filme =>(
                                <>
                                
                                    <div key={filme.id} className="flex flex-col bg-primary-kaneto text-black rounded-b-2xl w-[200px] relative h-4/6">
                                        <Link onClick={()=> moreDetail(filme)} className="">
                                            <img className="h-full" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                                            <h1 className=" text-xl text-center p-1 items-center text-titulo-kaneto" key={filmes}>{filme.title}</h1>
                                        </Link>
                                        <Link to="/favoritos" className=" right-0 absolute"><img className="w-8 p-1" src="star.png" alt="" /></Link>
                                    </div>
                                
                                </>
                                
                                
                            )
                        )
                    }
                </div>

            <Modal
                title={aModal.title}
                open={mostrarModal}
                footer={
                    <Button onClick={closeDetail} className="bg-primary-kaneto text-white hover:bg-none hover:border-primary-kaneto">
                        Ok
                    </Button>
                }
                onCancel={closeDetail}
            >
                <img className=" w-full" src={`https://image.tmdb.org/t/p/w154/${aModal.backdrop_path}`} />
                <p className="my-3">{aModal.overview}</p>
                <p>Data de lançamento: {aModal.release_date}</p>
                <p>Avaliação: {aModal.vote_average}</p>
            </Modal>
        </>
    );
}

export default Favoritos;