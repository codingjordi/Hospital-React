import { useState, useContext, useEffect } from 'react';
import FiltrosBuscarInforme from './FiltrosBuscarInformes';
import ListarInformes from './ListarInformes';
import { InformesContext } from '../middleware/APIConnection';

export default function Componente() {
    const { informes } = useContext(InformesContext);
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState({
        name: '',
        surnames: '',
        group: '',
        gravityOfIncidence: '',
        complete: null,
        dateOfIncidence: '',
        inform: '',
        id: ''
    });

    useEffect(() => {
        setSearchResults(informes);
    }, [informes]);

    function buscarInformes() {
        const resultadosFiltrados = informes.filter(i =>
            (!query.name || i.name.includes(query.name)) &&
            (!query.surnames || i.surnames.includes(query.surnames)) &&
            (!query.group || i.group === query.group) &&
            (!query.gravityOfIncidence || i.gravityOfIncidence === query.gravityOfIncidence) &&
            (query.complete === null || i.complete === query.complete) &&
            (!query.dateOfIncidence || i.dateOfIncidence.includes(query.dateOfIncidence))
        );
        setSearchResults(resultadosFiltrados);
    }

    function handleChangeName(e) {
        setQuery({
            ...query,
            name: e.target.value
        });
    }

    function handleChangeSurnames(e) {
        setQuery({
            ...query,
            surnames: e.target.value
        });
    }

    function handleChangeGroup(e) {
        setQuery({
            ...query,
            group: e.target.value
        });
    }

    function handleChangeGravity(e) {
        setQuery({
            ...query,
            gravityOfIncidence: e.target.value
        });
    }

    function handleChangeComplete(e) {
        setQuery({
            ...query,
            complete: e.target.value === 'SI' ? true : false
        });
    }

    function handleChangeDateOfIncidence(e) {
        setQuery({
            ...query,
            dateOfIncidence: e.target.value
        });
    }

    return (
        <>
            <FiltrosBuscarInforme 
                handleChangeName={handleChangeName} 
                handleChangeSurnames={handleChangeSurnames} 
                handleChangeDateOfIncidence={handleChangeDateOfIncidence} 
                handleChangeComplete={handleChangeComplete} 
                handleChangeGroup={handleChangeGroup} 
                handleChangeGravity={handleChangeGravity} 
                buscarInformes={buscarInformes}
            />
            <ListarInformes searchResults={searchResults} />
        </>
    );
}
