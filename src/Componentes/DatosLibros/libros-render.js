import React from 'react';
import './styles.css'

const LibrosRender = (props) => {
    return (
        

        <tr className='books-table'>
            <img src={props.img} width="100px" />
            <td> {props.titulo} </td>
            <td> {props.autor} </td>
            <td> {props.genero} </td>
            <td> {props.NumPag} </td>
            
        </tr>


    )
}

export default LibrosRender
