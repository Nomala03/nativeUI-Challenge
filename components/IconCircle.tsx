import React from 'react';
import { TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';

interface IconCircleProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

export default function IconCircle({ children, style, onPress }: IconCircleProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.iconCircle, style]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconCircle: {
    width: 40,
    height: 40,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
});
