import React from 'react'

export function CountryRow({ country }) {
    return (
        <div className="inline">
            <img className="flag" src={`/assets/${country.flag}`} alt={country.name} />
            &nbsp;
            &nbsp;
                {country.name}
        </div>
    )
}