import React from 'react';
import { Slider } from 'react-native-elements';

type SliderComponentProps = {
  size?: number; // Parâmetro opcional com valor padrão
  handleOnValueChange: (value: number) => void;
};

export const SliderComponent: React.FC<SliderComponentProps> = ({
  handleOnValueChange,
  size = 10, // Valor padrão definido aqui
}) => {
  return (
    <Slider
      value={size}
      onValueChange={handleOnValueChange}
      maximumValue={20}
      minimumValue={0}
      allowTouchTrack
      trackStyle={{ height: 8, backgroundColor: 'transparent' }}
      thumbStyle={{ height: 20, width: 20, backgroundColor: '#FF9800' }}
      thumbTintColor='red'
      minimumTrackTintColor='#4929ED'
      maximumTrackTintColor='#1d0a7a'
    />
  );
};
