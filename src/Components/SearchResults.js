import React from 'react';
import PersonCard from './PersonCard';

const SearchResults = ({ results }) => {
    if (!results || results.length === 0) {
        return <p>Нет результатов поиска.</p>;
    }

    return (
        <div>
            <h3>{'Результаты поиска:'}</h3>
            {results.map((person) => (
                <PersonCard key={person.id} person={person} />
            ))}
        </div>
    );
};

export default SearchResults;
