import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export default function Auth({ children }) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>

  );
}

AuthContext.propTypes = {
  children: PropTypes.node,
};
