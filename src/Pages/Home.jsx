import  data  from "../../artigos.json";




function Home() {

    
    
    return (
        
        <>

        
           
            <div className="grid grid-cols-1">
            {
                data.map(
                    (filme, index) => (
                        <>
                        <div className="card bg-card text-white m-3 flex rounded-2xl h-[95%]" key={index} >
                            <div className=" w-1/5 bg-cover rounded-l-2xl" style={{backgroundImage: `url(${filme.image})`}}></div>
                            <div className="flex flex-col w-2/4 justify-center items-center">
                                <h1 className="text-2xl text-center my-2 text-titulo-katz"  key={filme.title}>{filme.title}</h1>
                                <div className="tags flex justify-center" >
                                {
                                    filme.tags.map( tag => (
                                        <span className="bg-[#000] text-secondary-katz p-1 m-3 rounded text-xs" key={tag}>{tag}</span>
                                    ))
                                }
                                </div>
                                <div className="mx-3 my-3 text-justify" >
                                {
                                    filme.text.map( (text, index )=> (
                                        <p  className=" text-xs font-font-text" key={index}></p>
                                    ))
                                }
                                </div>
                                <button className="bg-red-600 w-1/4 text-2xl text-center my-2  rounded-lg">Confira</button>
                                
                                
                            </div>
                            
                        </div>

                        </>
                    )
                    )
                }
            </div>
        </>
    );
}

export default Home;