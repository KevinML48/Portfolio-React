import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Mon parcours</h2>
      <span className="section__subtitle">Découvrez mes expériences</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Formation
          </div>

          <div
            className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Expérience
          </div>

          <div
            className={toggleState === 3 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-pen qualification__icon"></i>
            Expérience Design
          </div>
        </div>

        <div className="qualification__sections">
          {/* Section Formation */}
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Licence Numérique & Graphic Design</h3>
                <span className="qualification__subtitle">
                  Design Numérique/Graphisme à l’École Supérieure de Design de Villefontaine
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Bac Pro Système Numérique</h3>
                <span className="qualification__subtitle">
                  Obtention du Bac Pro Système Numériques option RISC (Réseaux Informatique et Système Communicant) au Lycée Alexandre Bérard (Ambérieu-en-Bugey, 01) avec mention Bien
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>
            </div>
          </div>

{/* Section Expérience */}
<div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
  <div className="qualification__data">
    <div>
      <h3 className="qualification__title">Emploi étudiant chez Boulangerie Pâtisserie Margier</h3>
      <span className="qualification__subtitle">La Verpillière, 38 - Vendeur</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> 2023
      </div>
    </div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
  </div>

  <div className="qualification__data">
    <div></div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
    <div>
      <h3 className="qualification__title">Emploi saisonnier chez Terre d'Alliances</h3>
      <span className="qualification__subtitle">Silos de Villars-les-Dombes, 01 - Technicien de maintenance</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> 2023
      </div>
    </div>
  </div>

  <div className="qualification__data">
    <div>
      <h3 className="qualification__title">Emploi saisonnier à McDonald's</h3>
      <span className="qualification__subtitle">Viriat, 01 - Équipier de restauration</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> 2022
      </div>
    </div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
  </div>

  <div className="qualification__data">
    <div>
      <h3 className="qualification__title">Stage en Gendarmerie</h3>
      <span className="qualification__subtitle">Bourg-en-Bresse, 01 - Service Informatique</span>
      <span className="qualification__subtitle">Stage d'un mois à l’entreprise LDLC/My Multimedia (Bourg-en-Bresse, 01)</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> 2023
      </div>
    </div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
  </div>

  <div className="qualification__data">
    <div>
      <h3 className="qualification__title">Emploi saisonnier en Médiathèque</h3>
      <span className="qualification__subtitle">Saint-Denis-lès-Bourg, 01</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> 2023
      </div>
    </div>
  </div>
</div>


{/* Section Expérience Design */}
<div className={toggleState === 3 ? "qualification__content qualification__content-active" : "qualification__content"}>
  <div className="qualification__data">
    <div>
      <h3 className="qualification__title">Exposition à Super Demain</h3>
      <span className="qualification__subtitle">Festival d’art numérique (Lyon, 69) - Création d’un jeu-vidéo sur le thème de la frustration</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> 2023
      </div>
    </div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
  </div>

  <div className="qualification__data">
    <div></div>
    <div>
      <span className="qualification__rounder"></span>
      <span className="qualification__line"></span>
    </div>
    <div>
      <h3 className="qualification__title">WorkShop avec Super Marché Noir</h3>
      <span className="qualification__subtitle">Villefontaine, 38 - Création de phrases et de typographie, sérigraphié avec des legos, encadré par Julien Saniel (designer graphique Lyonnais)</span>
      <span className="qualification__subtitle">Stage d'un mois à l'association Tremplin (Bourg-en-Bresse, 01) - Service Communication : Création d’affiche publicitaire, d’étiquettes pour des pots de confiture, d’une charte graphique pour un magasin, et un article de presse.</span>
      <div className="qualification__calender">
        <i className="uil uil-calendar-alt"></i> 2022
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Qualification;
