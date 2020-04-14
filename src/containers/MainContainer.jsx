import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = ({ user: { isLoggedIn } }) => ({
    isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({});

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MainContainer">
                <h2>Hello BaskinOS</h2>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
