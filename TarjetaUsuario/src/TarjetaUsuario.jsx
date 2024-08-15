import React from 'react';

function TarjetaUsuario({ nombre, edad, profesion }) {
    return (
        <div style={{ border: '6px solid #873e23', padding: '16px', margin: '16px 0', marginLeft: '10px', background:'#e28743' }}>
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Profesión: {profesion}</p>
        </div>
    );
}

export default TarjetaUsuario;