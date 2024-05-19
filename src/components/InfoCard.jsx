const InfoCard =({name = "Felix", designation = "Trainer", color = "Yellow"}) =>{
    return(
        <>
        <hr /><hr />
        <div className="shadow border border-black w-[30%}">
        <h1 className="text-blue-900 font-serif text-3xl font-semibold ">{name}</h1>
        <h3 className="text-gray-600 font-light text-md">{designation}</h3>
        <p className="border border-red-600 w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores inventore in, molestiae corporis alias sapiente. Ipsa delectus ea dignissimos inventore omnis in aliquid fugiat illum voluptates, atque modi? Et!</p>
        {/* <button className="btn btn dark shadow" style={{background:color}}>know more</button> */}
        <button className=" w-[20vw] bordeer shadow-lg m-2 p-2 bg-black text-white" >know more</button>
        </div>
        
        </>
    );

}

export default InfoCard;