import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => (
    <div className='card-list'>
        {
            monsters.map(monster => (
                <Card monster={monster} className="monster-card" />
            ))
        }
    </div>
);

export default CardList;