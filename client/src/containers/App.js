import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as providerActionCreators from '../core/actions/actions-provider';

class App extends Component {
  componentDidMount() {
      const { actions } = this.props;
      actions.provider.Test("hello world");
    }
    
      render() {
        return (
          <div>
            Hello from app
          </div>
        )
      }
    };

function mapDispatchToProps(dispatch) {
  return {
      actions: {
          provider: bindActionCreators(providerActionCreators, dispatch)
      }
  }
};

export default connect(null, mapDispatchToProps)(App);
