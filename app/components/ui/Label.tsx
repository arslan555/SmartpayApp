import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface LabelProps extends TextProps {
  disabled?: boolean;
}

const Label = React.forwardRef<Text, LabelProps>(
  ({ style, disabled, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        accessibilityLabel={props.children?.toString()}
        style={[
          styles.base,
          disabled && styles.disabled,
          style,
        ]}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';

const styles = StyleSheet.create({
  base: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  disabled: {
    opacity: 0.7,
  },
});

export default Label;
