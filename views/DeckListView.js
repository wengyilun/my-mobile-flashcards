/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import Deck from '../components/Deck'
import { getDecks } from '../utils/helpers'
import {purple, white, gray} from '../utils/colors'

class DeckListView extends Component{
	state = {
		ready: false
	}
	
	componentDidMount () {
		const {dispatch} = this.props
		
		
	}
	
	render(){
		return(
			<View style={styles.container}>
				{/*<Text>{JSON.stringify(getDecks('JavaScript'))}</Text>*/}
				<Deck title='React'
				      cards={[{id: 0, question: 'What is?', answer:'It is '}]} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: gray
	},
})
function mapStateToProps (decks) {
	return {
		decks
	}
}
export default connect(mapStateToProps)(DeckListView)

