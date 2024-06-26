function Contato() {
    return ( 
        
        <div className="flex-col">
        <h1 className="text-white text-4xl mb-5 font-font-sub flex justify-center" >CONTATO</h1>
        <form className="w-2/4 flex flex-col justify-center items-center">
            <div className="w-4/5 flex justify-around mb-4">
                <label className="text-2xl text-white"  htmlFor="nome">Nome:</label>
                <input className="w-3/4 rounded-full bg-secondary-katz focus:outline-none p-2" type="text" id="nome"/>
            </div>
            <div className="w-4/5 flex justify-around mb-4">
                <label className="text-2xl text-white" htmlFor="email">E-mail:</label>
                <input  className="w-3/4 rounded-full bg-secondary-katz focus:outline-none p-2" type="email" id="email" />
            </div>
            <div className="w-4/5 flex justify-around mb-4">
                <label className="text-2xl text-white" htmlFor="email">Telefone:</label>
                <input  className="w-3/4 rounded-full bg-secondary-katz focus:outline-none p-2" type="email" id="email" />
            </div>
            <div className="w-[74%] flex flex-col mb-4">
                <label className="text-2xl text-white mb-4" htmlFor="mensagem">Mensagem :</label>
                <textarea className="rounded-2xl bg-secondary-katz focus:outline-none p-2" id="mensagem" cols="30" rows="10"></textarea>
            </div>
            <input className="rounded-lg py-3 px-24 text-white bg-primary-katz mt-5" type="button" value="Enviar" />
        </form>
        </div>
        
    );
}

export default Contato;