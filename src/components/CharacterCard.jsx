import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/CharacterCard.scss';

function CharacterCard({ character }) {
  return (
    <li>
      <Link to={`/characterDetail/${character.id}`}>
        <div className="card">
          <figure>
            <img src={character.image} alt={character.name} />
          </figure>
          <div className="card__text">
            <p>
              <strong>{character.name}</strong>
            </p>
            <p>
              Specie:{' '}
              {character.species === 'Alien' ? (
                <i className="fa-brands fa-reddit-alien"></i>
              ) : (
                character.species
              )}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
