import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { getDecks } from './utils/helpers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckListView from './views/DeckListView'
import NewDeckView from './views/NewDeckView'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import {purple, white} from './utils/colors'

const Tabs = TabNavigator({
  DeckListView:{
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: 'DECKS',
        tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      }
  },
	NewDeckView:{
      screen: NewDeckView,
      navigationOptions: {
          tabBarLabel: 'NEW DECK',
          tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      }
  }
}, {
      navigationOptions:{
          header: null
      },
      tabBarOptions: {
          activeTintColor: Platform.OS === 'ios' ? purple : white,
              style: {
              height: 56,
                  backgroundColor: Platform.OS === 'ios' ? white : purple,
                  shadowColor: 'rgba(0, 0, 0, 0.24)',
                  shadowOffset: {
                  width: 0,
                      height: 3
              },
              shadowRadius: 6,
                  shadowOpacity: 1
          }
      }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)}>
          <View style={{flex: 1}}>
            {/*<Text>{JSON.stringify(getDecks('JavaScript'))}</Text>*/}
            <MainNavigator/>
          </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
