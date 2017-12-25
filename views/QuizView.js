/**
 * Created by mbp on 24/12/2017.
 */
/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import { View, Text } from 'react-native'

class QuizView extends Component{
	render(){
		return(
			<View>
				<Text>QuizView</Text>
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


export default connect(mapStateToProps)(QuizView)
