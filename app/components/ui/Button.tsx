import React from 'react';
import {
    Text,
    Pressable,
    ActivityIndicator,
    GestureResponderEvent,
    StyleSheet,
    TextStyle,
    ViewStyle,
} from 'react-native';

type Variant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type Size = 'default' | 'sm' | 'lg' | 'icon';

interface ButtonProps {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    loading?: boolean;
    variant?: Variant;
    size?: Size;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

// 1. Exact types
const variantMap = {
    default: 'variant_default',
    destructive: 'variant_destructive',
    outline: 'variant_outline',
    secondary: 'variant_secondary',
    ghost: 'variant_ghost',
    link: 'variant_link',
} as const;

const sizeMap = {
    default: 'size_default',
    sm: 'size_sm',
    lg: 'size_lg',
    icon: 'size_icon',
} as const;

const textVariantMap = {
    default: 'text_default',
    destructive: 'text_destructive',
    outline: 'text_outline',
    secondary: 'text_secondary',
    ghost: 'text_ghost',
    link: 'text_link',
} as const;

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    disabled,
    loading,
    variant = 'default',
    size = 'default',
    style,
    textStyle,
}) => {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled || loading}
            style={({ pressed }) => [
                styles.base,
                styles[variantMap[variant]],
                styles[sizeMap[size]],
                disabled && styles.disabled,
                pressed && styles.pressed,
                style,
            ]}
        >
            {loading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={[styles.text, styles[textVariantMap[variant]], textStyle]}>
                    {title}
                </Text>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    // Size styles
    size_default: {
        height: 40,
        paddingHorizontal: 16,
    },
    size_sm: {
        height: 36,
        paddingHorizontal: 12,
    },
    size_lg: {
        height: 44,
        paddingHorizontal: 20,
    },
    size_icon: {
        height: 40,
        width: 40,
        padding: 0,
    },

    // Variant backgrounds
    variant_default: {
        backgroundColor: '#2563EB',
    },
    variant_destructive: {
        backgroundColor: '#DC2626',
    },
    variant_outline: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D1D5DB',
    },
    variant_secondary: {
        backgroundColor: '#E5E7EB',
    },
    variant_ghost: {
        backgroundColor: 'transparent',
    },
    variant_link: {
        backgroundColor: 'transparent',
    },

    // Pressed effect
    pressed: {
        opacity: 0.85,
    },

    // Disabled state
    disabled: {
        opacity: 0.5,
    },

    // Text styles
    text: {
        fontSize: 14,
        fontWeight: '600',
    },
    text_default: {
        color: '#FFFFFF',
    },
    text_destructive: {
        color: '#FFFFFF',
    },
    text_outline: {
        color: '#111827',
    },
    text_secondary: {
        color: '#111827',
    },
    text_ghost: {
        color: '#2563EB',
    },
    text_link: {
        color: '#2563EB',
        textDecorationLine: 'underline',
    },
});

export default Button;
