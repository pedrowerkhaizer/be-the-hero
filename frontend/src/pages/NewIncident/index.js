import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const history = useHistory();

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ value, setValue ] = useState('');

    async function handleNewIncident(e) {
        e.preventDefault();

        const ongId = localStorage.getItem('ongId');

        const data = {
            title,
            description,
            value
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
            alert('Parabéns!! Caso cadastrado com sucesso :)');
        } catch (err) {
            alert('Não foi possivel cadastrar esse caso. Tente novamente mais tarde.');
        };
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                        </Link>

                </section>
                <form onSubmit={handleNewIncident} >
                    <input 
                    placeholder="Título do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                    <textarea 
                    placeholder="Descrição" 
                    value={description}
                    onChange={e => setDescription(e.target.value)} />
                    <input 
                    placeholder="Valor em reais" 
                    value={value}
                    onChange={e => setValue(e.target.value)} />

                    <div className="option-container">
                       <Link className="button" to="/profile" >Cancelar</Link>
                       <button className="button" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};