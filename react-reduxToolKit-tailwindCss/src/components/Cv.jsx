import React from 'react';
import styles from './Cv.module.css';

function Appp() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Mi CV de Desarrollador Web</h1>
      <h2 className={styles.subheading}>Información Personal</h2>
      <p>Nombre: Juan Pérez</p>
      <p>Email: juanperez@gmail.com</p>
      <p>Teléfono: 555-555-5555</p>
      <h2 className={styles.subheading}>Experiencia Laboral</h2>
      <ul>
        <li className={styles.listItem} >
          <h3>Desarrollador Web en ABC Company</h3>
          <p>Fecha: 2018 - Presente</p>
          <ul>
            <li>Desarrollo de aplicaciones web utilizando React y Node.js</li>
            <li>Colaboración con el equipo de diseño para crear interfaces de usuario atractivas y fáciles de usar</li>
            <li>Implementación de pruebas automatizadas para garantizar la calidad del código</li>
          </ul>
        </li>
        <li className={styles.listItem}>
          <h3>Desarrollador Web en XYZ Company</h3>
          <p>Fecha: 2016 - 2018</p>
          <ul>
            <li>Desarrollo de sitios web utilizando HTML, CSS y JavaScript</li>
            <li>Creación de diseños personalizados para clientes utilizando Photoshop y Sketch</li>
            <li>Optimización de sitios web para mejorar el rendimiento y la velocidad de carga</li>
          </ul>
        </li>
      </ul>
      <h2 className={styles.subheading}>Educación</h2>
      <ul>
        <li className={styles.listItem}>
          <h3>Grado en Informática en la Universidad Nacional</h3>
          <p>Fecha: 2012 - 2016</p>
        </li>
      </ul>
    </div>
  );
}

export default Appp;





      

