/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet, ScrollView,  TouchableOpacity} from 'react-native'
import Deck from '../components/Deck'
import { getDecks } from '../utils/api'
import {purple, white, gray} from '../utils/colors'
import {receiveDecks } from '../actions'
import {AppLoading } from 'expo'

class DeckListView extends Component{
	state = {
		ready: false
	}
	
	fetchDecks(){
		const {dispatch} = this.props
		getDecks().then((res) => {
			// const obj = JSON.parse(res)
			console.log('JSON.parse(decks):',res)
		    dispatch(receiveDecks(res))
		// .then(({decks}) => {
		// 	console.log('componentDidMount:decks',decks)
		})
		.then(() => this.setState(() => ({ready: true})))
		.catch((error) => {
			console.warn('Error getting decks: ', error)
		})
	}
	
	componentDidMount () {
		this.fetchDecks()
	}
	
	componentWillReceiveProps(nextProps){
		// if(this.props.decks && this.props.decks !== nextProps){
		// 	this.fetchDecks()
		// }
	}
	
	render(){
		const {decks} = this.props
		const {ready} = this.state
		
		if(ready === false){
			return <AppLoading/>
		}
		return(
			<ScrollView style={styles.container}>
				<Text style={{textAlign:'center', fontSize: 30}}>DECKS</Text>
				{Object.keys(decks).map((deck) =>
					<TouchableOpacity
						key={deck}
						onPress={() => this.props.navigation.navigate(
						'DeckDetailView', {entryId: deck})}>
						<Deck title={decks[deck].title} questions={decks[deck].questions} />
					</TouchableOpacity>
					)}

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
		textAlign:'center'
	},
})
function mapStateToProps (state) {
	console.log('deck hanged decks:',state.decks)
	return {
		decks: state.decks
	}
}
export default connect(mapStateToProps)(DeckListView)

