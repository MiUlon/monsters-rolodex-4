import { Component } from "react";

class SearchBox extends Component {
    render() {
        const { onSearchFieldChange, className, placeholder } = this.props;
        return (
            <input
                className={className}
                type='search'
                placeholder={placeholder}
                onChange={onSearchFieldChange}
            />
        )
    }
}

export default SearchBox;