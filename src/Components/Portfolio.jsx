/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "API REST Usuarios",
    description:
      "Desarrollo web colaborativo, con interfaz de login para usuarios y tablas detalle con la insercion y gestion de la informacion en CosmosDB. Cuenta con CRUD para la manipulacion de usuarios implementada con Java/SpringBoot y axios para la gestion de peticiones. Simple, responsiva y funcional.",
    url: "https://elpoyocrudapp.azurewebsites.net/",
  },
  {
    title: "API REST Peliculas ",
    description:
      "Aplicacion Web con funcionalidades CRUD para la gestion y administracion de peliculas en un cine, utilizando JavaScript en conjunto con el framework NodeJS para el Backend y Angular en el desarrollo de el Frontend e utilizando MongoDB como gestor de base de datos. Implementación de Docke en conjunto con tecnologias de Azure como 'Container Registry' y 'Web App' para su despliegue. Estetica, funcional e intuitiva.",
    url: "https://github.com/LanIkari/IS2_PROYECTO_LosSeguidoresDeJesus",
  },
  {
    title: "Mi sitio web personal",
    description:
      "Sitio web personal, con informacion sobre mi, mis proyectos y contacto. Desarrollado HTML, CSS y JavaScript y desplegado con github pages.",
    url: "https://lanikari.github.io/BrandonAV-Portfolio/",
  },
  {
    title: "Aplicacion a MLSA",
    description:
      "Video con el que me ceptaron al programa de Microsoft Student Ambassador",
    url: "https://youtu.be/kxAzCiimd9k?si=GB9Octz7g0YKY87F",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portafolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
