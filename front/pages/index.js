function HomePage(){
    
    const mensagem = "BEMVENIDO";
    const estiloDaHomePage = { backgroundColor: "red" };

    return (
        <div style={estiloDaHomePage}> {mensagem}</div>
    );
}

export default HomePage