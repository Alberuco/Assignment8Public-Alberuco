import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// Prints the business objects from the business array in app.jsx
function BusinessList({businesses}) {
    return (
        <div className="BusinessList">
            {businesses.map((business, index) => {
                return (
                    <Business
                    key={index}
                    business={business}
                    />
                )
            })}
        </div>
    )
}

export default BusinessList;