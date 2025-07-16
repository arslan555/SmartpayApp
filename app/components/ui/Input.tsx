import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';

interface InputProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
}

const Input = React.forwardRef<TextInput, InputProps>(({ style, editable = true, ...props }, ref) => {
  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        style={[styles.input, !editable && styles.disabled, style]}
        editable={editable}
        placeholderTextColor="#9CA3AF" // muted-foreground (Tailwind gray-400)
        {...props}
      />
    </View>
  );
});

Input.displayName = 'Input';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB', // Tailwind gray-300
    backgroundColor: '#FFFFFF', // bg-background
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#111827', // Tailwind gray-900 (foreground)
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Input;
