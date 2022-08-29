import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const DEFAULT_KEY = 'defaultLoadingKey';
export const contextPropTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default (contextKey = DEFAULT_KEY) => {
  class LoadingProvider extends Component {
    constructor(props) {
      super(props);
      this.state = { loading: false };
      this.setLoading = this.setLoading.bind(this);
    }

    getChildContext() {
      return {
        // 컨텍스트 키로 관리할 상태를 구분한다
        [contextKey]: {//HomePageXXX에서 넘어온 contextKey
          loading: this.state.loading,
          setLoading: this.setLoading,
        },
      };
    }

    setLoading(loading) {
      this.setState({ loading });
    }

    render() {
      return this.props.children;
    }
  }
  LoadingProvider.childContextTypes = {
    [contextKey]: contextPropTypes,
  };

  return LoadingProvider;
};
