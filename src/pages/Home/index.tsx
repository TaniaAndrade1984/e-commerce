import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <div>
            <h1>Olá!!! Seja bem-vindo(a) à Mafê Makeup!!!</h1>
            <Link href="/Login">Fazer login</Link>
            <Link href="/Register">Cadastrar</Link>
        </div>
    );
};

export default Home;
