import React, { useState } from 'react';
import SearchResults from './SearchResults';
import peopleDataRu from '../Data/peopleData.json';//тут путь для данных на русском
import peopleDataEn from '../Data/peopleData.json';//тут для английского

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [language, setLanguage] = useState('ru'); // 'ru' for Russian, 'en' for English
    const data = language === 'ru' ? peopleDataRu : peopleDataEn;

    const handleSearch = () => {
        // Преобразуйте строку поиска в нижний регистр для регистронезависимого поиска
        const query = searchQuery.toLowerCase();

        // Фильтрация данных на основе введенного запроса
        const searchResults = data.filter((person) =>
            person.name.toLowerCase().includes(query)
        );

        // Обновление результатов поиска в состоянии компонента
        setResults(searchResults);
    };


    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="ru">Русский</option>
                <option value="en">English</option>
            </select>
            <button onClick={handleSearch}>Поиск</button>
            <SearchResults results={/* Передайте результаты поиска здесь */} />
        </div>
    );
};

export default SearchComponent;
