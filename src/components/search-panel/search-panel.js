import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor() {
        super();

        this.state = {
            term: ''
        };

        this.onTermChange = (event) => {
            const term = event.target.value;
            this.setState({term});
            this.props.onSearchChange(term);
        };
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search" value={this.state.term}
                   onChange={this.onTermChange}/>
        );
    }
};
