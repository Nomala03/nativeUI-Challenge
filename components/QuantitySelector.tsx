import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface QuantitySelectorProps {
  value: number;
  onChange: (num: number) => void;
}

export default function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <View style={styles.qtyWrap}>
      <TouchableOpacity
        onPress={() => onChange(Math.max(1, value - 1))}
        style={styles.qtyBtn}
        activeOpacity={0.7}
      >
        <Text style={styles.qtySign}>-</Text>
      </TouchableOpacity>

      <Text style={styles.qtyText}>{value}</Text>

      <TouchableOpacity
        onPress={() => onChange(value + 1)}
        style={styles.qtyBtn}
        activeOpacity={0.7}
      >
        <Text style={styles.qtySign}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  qtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.07)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtySign: {
    fontSize: 20,
    fontWeight: '700',
  },
  qtyText: {
    marginHorizontal: 12,
    fontSize: 18,
    fontWeight: '700',
  },
});
