/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import { View, Text } from 'react-native'

class NewCardView extends Component{
	render(){
		return(
			<View>
				<Text>New Card View</Text>
				<Text>{JSON.stringify(this.props.parentDeck)}</Text>
			</View>
		)
	}
}


function mapStateToProps(state, {navigation}){
	const {parentDeck} = navigation.state.params
	
	return {
		parentDeck,
		title: state.decks[parentDeck].title,
		questions: state.decks[parentDeck].questions
	}
}


export default connect(mapStateToProps)(NewCardView)
