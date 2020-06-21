import React from 'react';
import { connect } from 'react-redux';

class VideoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ytSearchState : [],
            userSelected: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.ytSearchState !== nextProps.ytSearchState){
            this.setState({ytSearchState: nextProps.ytSearchState})
        }
        if(this.props.userSelected !== nextProps.userSelected){
            this.setState({userSelected: nextProps.userSelected})
        }
    }

    render() {
        if(this.state.ytSearchState.length <= 0){
            return <li className="media-right">Loading...</li>
        }

        var video;

        if(Object.keys(this.state.userSelected).length > 0) {
            video = this.state.userSelected;
        } else {
            video = this.state.ytSearchState[0];
        }

        const videoId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ YTReducer }) => ({
    ytSearchState : YTReducer._ytSearchState,
    userSelected: YTReducer._userSelected
})

export default connect(mapStateToProps, null)(VideoDetail);
