import React from 'react';
import { connect } from 'react-redux';
import * as YTSearchAction from '../actions/yt_search_action';

class VideoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ytSearchState : []
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.ytSearchState !== nextProps.ytSearchState){
            this.setState({ytSearchState: nextProps.ytSearchState})
        }
    }

    render() {
        return (
            <ul className="col-md-4 list-group">
                { this.state.ytSearchState.length > 0 && this.state.ytSearchState.map(video => {
                    const imageUrl = video.snippet.thumbnails.default.url;
                    return(
                        <li onClick={() => this.props.init(video)} key={video.etag} className="list-group-item">
                            <div className="video-list media">
                                <div className="media-left">
                                    <img className="media-object" src={imageUrl} alt="video youtube" />
                                </div>
                                <div className="media-body">
                                    <div className="media-heading">{video.snippet.title}</div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            );
    }

}

const mapDispatchToProps = dispatch => ({
    init: (video) => {
        dispatch(YTSearchAction.getUserSelected(video))
    }
});

const mapStateToProps = ({ YTReducer }) => ({
    ytSearchState : YTReducer._ytSearchState
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoListItem);
