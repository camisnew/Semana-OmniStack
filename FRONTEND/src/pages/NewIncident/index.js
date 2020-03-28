import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
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
                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />
                    
                    <button className="button">Cadastrar</button>
                    <button className="button button-cancel">Cancelar</button>
                </form>
            </div>
        </div>
    );
}