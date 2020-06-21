import React from 'react';
import { connect } from 'react-redux';
import * as YTSearchAction from '../actions/yt_search_action';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        this.props.init(event.target.value);
    }

    render(){
        return (
            <div className="search-bar">
                <input value={this.state.term} onChange={this.onInputChange} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    init: (searchTerm) => {
        dispatch(YTSearchAction.getSearchResult(searchTerm));
        dispatch(YTSearchAction.getUserSelected({}));
    }
});

export default connect(null, mapDispatchToProps)(SearchBar);