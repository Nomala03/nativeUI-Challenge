import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TimerDotsProps {
  active?: number;
}

export default function TimerDots({ active = 30 }: TimerDotsProps) {
  const items = [30, 60, 90];

  return (
    <View style={styles.timerCol}>
      {items.map((it) => (
        <View
          key={it}
          style={[styles.timerDotWrap, active === it && styles.timerDotActiveWrap]}
        >
          <Text
            style={[styles.timerDotText, active === it && styles.timerDotActiveText]}
          >
            {it}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  timerCol: {
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerDotWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.25)',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerDotActiveWrap: {
    backgroundColor: '#0f0f0f',
  },
  timerDotText: {
    fontWeight: '700',
    color: 'rgba(0,0,0,0.6)',
  },
  timerDotActiveText: {
    color: '#fff',
  },
});
