import React, { useState } from 'react';
import { datoLibros } from './libros';
import LibrosRender from './libros-render';
import './styles.css'


const Libros = () => {
    const [libros, setLibros] = useState(datoLibros);

    function handelClick(genero) {
        const librosDatos = datoLibros.filter((datos) => {
            return datos.genero === genero
        })
        setLibros(librosDatos)
    };

    const showAll = () => {
        setLibros(datoLibros)
    }

    return (
        <>
            <div className='div-btn'>
                <button className='boton' onClick={() => { handelClick("Literatura fantástica") }}> Literatura fantástica</button>
                <button className='boton' onClick={() => { handelClick("Ciencia ficción") }}>Ciencia ficción</button>
                <button className='boton' onClick={() => { handelClick("Terror") }}>Terror</button>
                <button className='boton' onClick={() => { handelClick("Fantasía oscura") }}>Fantasía oscura</button> 
                <button className='boton' onClick={showAll}>Eliminar Filtros</button>
            </div>
            <div className='tablas'>
                <table>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Autor</th>
                        <th>Género</th>
                        <th>N° pág  |</th>
                        
                    </tr>
                    <tbody>
                        {libros.map(data => {
                            return <LibrosRender key={data.id}
                                img={data.img}
                                titulo={data.titulo}
                                autor={data.autor}
                                genero={data.genero}
                                NumPag={data.NumPag}
                                 />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Libros;