import React, { useState } from "react";

function TodoSearch(props) {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            <form>
                <input
                    placeholder="search todo"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button onClick={(e) => {
                    e.preventDefault();
                    props.handleSearch(searchValue)
                }
                }>Search</button>
            </form>
        </div>
    );
}

export default TodoSearch;
