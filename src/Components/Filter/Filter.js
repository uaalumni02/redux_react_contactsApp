import React from 'react';
import "./Filter.css"

const Filter = (props) => {
    return (
        <div className="filter-box">
            <input
                type="text"
                placeholder="search"
                onChange={ props.filter }
            />
        </div>
    );
}
export default Filter;