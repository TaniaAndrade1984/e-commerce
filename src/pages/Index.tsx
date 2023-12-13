import React from "react";
import Link from "next/link";

const App: React.FC = () => {
    return (
        <div>
            <h1>Minha Aplicação de E-Commerce</h1>
            <Link href="/Home">Ir para a página inicial</Link><br />
            <Link href="/Login">Faça login</Link><br/>
            <Link href="/Register">Crie uma conta</Link><br />
        </div>
    );
};

export default App;