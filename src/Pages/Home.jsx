import  data  from "../../artigos.json";
import { useState } from "react";
import { Modal, Button } from "antd";
import { Link } from "react-router-dom";

function Home() {

    const [dataModal, setDataModal] = useState({});
    const [showModal, setShowModal] = useState(false);

    const moreDetail = items => {
        setShowModal(true);
        setDataModal(items);
      };
    
      const closeDetail = () => {
        setShowModal(false);
      };

    return (
        
        <>

        <Modal 
          title={dataModal.title}
          open  = {showModal}
          footer={
            <Button  onClick={closeDetail} className="bg-primary-katz text-white hover:bg-none hover:border-primary-kaneto">
              Ok
            </Button>
          }
          onCancel={closeDetail}
        >
            <img src={dataModal.image} />
            <p className="my-3"> {dataModal.text} </p>
        </Modal>
           
            <div className="grid grid-cols-1">
            {
                data.map(
                    (filme, index) => (
                        <>
                        <div className="card bg-card text-white m-3 flex rounded-2xl h-[95%]" key={index} >
                            <div className=" w-2/4 bg-cover rounded-l-2xl" style={{backgroundImage: `url(${filme.image})`}}></div>
                            <div className="flex flex-col w-2/4">
                                <h1 className="text-2xl text-center my-2 text-titulo-katz"  key={filme.title}>{filme.title}</h1>
                                <div className="tags flex justify-center" >
                                {
                                    filme.tags.map( tag => (
                                        <span className="bg-[#000] text-secondary-katz p-1 m-1 rounded text-xs" key={tag}>{tag}</span>
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
                                <button className="bg-red-600 w-13">Confira</button>
                                {/* <Link className="tags flex justify-center">Confira</Link> */}
                                
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