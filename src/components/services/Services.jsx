import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(null); // Utiliser null pour aucun service sélectionné par défaut

  const toggleTab = (index) => {
    setToggleState(index); // Met à jour l'état avec l'index de chaque service
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Découvrez mes services</span>

      <div className="services__container container grid">
        {/* Service 1 */}
        <div className="services__content">
          <div>
            <i className="uil uil-palette services__icon"></i>
            <h3 className="services__title">
              Identité <br /> Visuelle
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            Plus d'informations
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(null)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Création d'Identité Visuelle</h3>
              <p className="services__modal-description">
                Avec plusieurs années d'expérience, je vous aide à construire une identité visuelle forte et cohérente, 
                qui reflète parfaitement votre image et vos valeurs.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Création de logo</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Charte graphique</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Cartes de visite</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="services__content">
          <div>
            <i className="uil uil-browser services__icon"></i>
            <h3 className="services__title">
              Supports <br /> Web
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            Plus d'informations
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(null)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Design et supports numériques</h3>
              <p className="services__modal-description">
                Je conçois des supports visuels adaptés au web et aux réseaux sociaux pour améliorer votre communication.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Visuels pour les réseaux sociaux</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Maquettes de sites et applications</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Bannières / Header</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="services__content">
          <div>
            <i className="uil uil-print services__icon"></i>
            <h3 className="services__title">
              Supports <br /> Imprimés
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            Plus d'informations
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(null)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Design et supports imprimés</h3>
              <p className="services__modal-description">
                Je conçois des supports imprimés impactants et professionnels pour valoriser votre communication visuelle.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Affiche</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Flyers / plaquettes</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Livres / magazines</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Packaging</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Posters</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="services__content">
          <div>
            <i className="uil uil-brush-alt services__icon"></i>
            <h3 className="services__title">
              Illustrations personnalisées <br />
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(4)}>
            Plus d'informations
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(null)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Illustrations personnalisées</h3>
              <p className="services__modal-description">
                Je réalise des illustrations uniques et créatives pour vos projets.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Illustrations sur mesure</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Flyers / plaquettes</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Création de motifs</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Personnages</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Créations pour les produits dérivés</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
