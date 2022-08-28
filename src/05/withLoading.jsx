import React from 'react';

export default function (loadingMessage = 'now loading') {
  return function withLoading(WrappedComponent) {
    const { displayName, name } = WrappedComponent;
    const wrappedComponentName = displayName || name;
    function WithLoading(isLoading, ...otherProps) {//isLoading, ...otherProps
      if (isLoading) return loadingMessage;
      
      return <WrappedComponent {...otherProps} />;
    }
    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}
