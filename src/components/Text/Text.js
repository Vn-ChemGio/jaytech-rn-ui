import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import normalize from '../../helpers/normalize';
import { withStyles, JaytechTheme } from '../../theme';

function Typography({
  style,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  muted,
  neutral,
  size,
  color,
  bold,
  italic,
  center,
  children,
  styles,
  theme,
  ignoreTheme,
  ...rest
}) {
  return (
    <Text
      style={[
        // default styles
        { fontSize: theme.SIZES.FONT, color: ignoreTheme ? theme.COLORS.WHITE : theme.COLORS.TEXT_BASIC },

        h1 && { fontSize: normalize(44) },
        h2 && { fontSize: normalize(38) },
        h3 && { fontSize: normalize(30) },
        h4 && { fontSize: normalize(24) },
        h5 && { fontSize: normalize(18) },
        p && { fontSize: normalize(16) },
        muted && { color: theme.COLORS.MUTED },
        neutral && { color: theme.COLORS.NEUTRAL },
        size && { fontSize: size },
        color && { color },
        italic && { fontStyle: 'italic' },
        bold && { fontWeight: 'bold' },
        center && { textAlign: 'center' },
        style && style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
}

Typography.defaultProps = {
  children: null,
  style: null,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  p: false,
  size: 0,
  color: null,
  muted: false,
  bold: false,
  italic: false,
  styles: {},
  theme: JaytechTheme,
  ignoreTheme: false
};

Typography.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  p: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  muted: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  styles: PropTypes.any,
  theme: PropTypes.any,
  ignoreTheme: PropTypes.bool
};

export default withStyles(Typography);
