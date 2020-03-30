import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import api from '../../services/api';

export default function NewIncident() {
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const handleNewIncident = (e) => {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile');
        } catch (err) {
            alert(`Erro ao cadastrar! Tente novamente.\nDetalhes:\n ${err}`)
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem casos da sua ONG.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />Voltar para sua home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    
                    <button className="button">Cadastrar</button>
                    <button className="button button-cancel">Cancelar</button>
                </form>
            </div>
        </div>
    );
}