import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Counter = () => {

    const [contador, setContador] = useState(0)
    const [titulo, setTitulo] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        setTitulo('Contador')
        console.log('inicio');
    }, [])


    function increment(teste) {
        setContador(contador + 1);
    }

    function decrement() {
        setContador(contador - 1);
    }

    return (
        <div>
            <nav>
                <Link to='users'>Users</Link>
            </nav>

            <h1>{ titulo }</h1>
            <button onClick={() => increment('teste')}>+</button>
            <label>{ contador }</label>
            <button onClick={decrement}>-</button>
            <button onClick={() => navigate('users')}>Users</button>
        </div>
    )
}

export default Counter;
