import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-basic-elements';

export const RatingStars = ({ numberOfStars, starSize, starColor }: {
  numberOfStars: number;
  starSize: number | undefined;
  starColor: string | undefined;
}) => (
  Array(numberOfStars).fill(0).map((_, index) => (
    <Icon
      key={index + 'F'}
      name="star"
      type="FontAwesome"
      size={starSize}
      color={starColor}
      
    />
  ))
)
