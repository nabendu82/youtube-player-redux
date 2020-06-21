import React, { Component } from 'react';
import VideoListItem from './components/video_list_item'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import { connect } from 'react-redux';
import * as YTSearchAction from './actions/yt_search_action'

class App extends Component {
  constructor(props){
    super(props);
    this.videoSearch();
  }

  videoSearch() {
    this.props.init();
  }

  render() {
    return (
      <div>
          <SearchBar />
          <VideoDetail />
          <VideoListItem />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  init: () => {
    dispatch(YTSearchAction.getSearchResult('React Tutorials'))
  }
});

export default connect(null, mapDispatchToProps)(App);