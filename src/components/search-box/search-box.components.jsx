import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const { onSearchFieldChange, className, placeholder } = this.props;
        return (
            <input
                className={`search-box ${className}`}
                type='search'
                placeholder={placeholder}
                onChange={onSearchFieldChange}
            />
        )
    }
}

export default SearchBox;