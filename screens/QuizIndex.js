import React from 'react';
import {View, Button, StatusBar, ScrollView} from 'react-native';

import spaceQuestions from '../data/space';
import westernsQuestions from '../data/westerns';
import computerQuestions from '../data/computers';

import {RowItem} from '../components/RowItem';

export default ({navigation}) => (
  <ScrollView>
    <StatusBar barStyle='dark-content' />
    <RowItem
      name="Space"
      onPress={() => navigation.navigate('Quiz')}
      color="#36b1f0"
    />
    <RowItem
      name="Western"
      onPress={() => navigation.navigate('Quiz')}
      color="#799496"
    />
    <RowItem
      name="Computers"
      onPress={() => navigation.navigate('Quiz')}
      color="#49475B"
    />
  </ScrollView>
);
