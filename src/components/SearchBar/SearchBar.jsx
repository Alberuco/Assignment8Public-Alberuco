import React from 'react';
import './SearchBar.css'
import { useState, useEffect } from 'react';

// Creates sorting bar in react
const sortByOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count"
};

// displays the search bar
function SearchBar(props) {
    // declaring term, location, and sortby state variables
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    // useEffect term declaration that updates when term updates
    useEffect(() => {
        if(term) {
            document.title = `PlateScout - Searching for ${term}`;
        } else {
            document.title = 'PlateScout';
        }
    }, [term]);

    // Event handlers for term and location variables
    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        props.searchYelp(term, location, sortBy);
    };

    // selected searchbar returns active
    const getSortByClass = (sortByOption) => {
        return sortBy === sortByOption ? 'active' : '';
    };

    // maps sortByOptions object to update searchbar when clicked and highlight options
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            const sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li
                    className={getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    onClick={() => handleSortByChange(sortByOptionValue)}>
                    {sortByOption}
                </li>
            );
        });
    };

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input
                    placeholder="Search Businesses"
                    value={term}
                    onChange={handleTermChange}
                />
                <input
                    placeholder="Where?"
                    value={location}
                    onChange={handleLocationChange}
                />
            </div>
            <div className="SearchBar-submit">
                <button onClick={handleSearch}>Let's Go</button>
            </div>
        </div>
    );
}

export default SearchBar;