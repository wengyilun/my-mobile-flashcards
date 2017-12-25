/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet, ScrollView,  } from 'react-native'
import Deck from '../components/Deck'
import { getDecks } from '../utils/api'
import {purple, white, gray} from '../utils/colors'
import {receiveDecks } from '../actions'
import {AppLoading } from 'expo'

class DeckListView extends Component{
	state = {
		ready: false
	}
	
	componentDidMount () {
		const {dispatch} = this.props
		
		getDecks()
		.then((decks) => dispatch(receiveDecks(decks)))
		.then(({decks}) => {
			console.log(decks)
		})
		.then(() => this.setState(() => ({ready: true})))
	}
	
	render(){
		const {decks} = this.props
		const {ready} = this.state
		
		if(ready === false){
			return <AppLoading/>
		}
		return(
			<ScrollView style={styles.container}>
				<Text style={[styles.center, {fontSize: 30}]}>DECKS</Text>
				{Object.keys(decks).map((deck) =>
					<Deck key={deck} title={decks[deck].title} questions={decks[deck].questions} />)}
			</ScrollView>
			
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center',
	},
})
function mapStateToProps (state) {
	return {
		decks: state.decks
	}
}
export default connect(mapStateToProps)(DeckListView)

