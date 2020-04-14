import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
