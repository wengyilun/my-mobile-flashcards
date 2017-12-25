/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import TextButton from '../components/TextButton'
import {addCardToDeck} from '../utils/api'
class NewCardView extends Component{
	state={
		question: '',
		answer:''
	}
	addCard = ()=>{
		addCardToDeck(this.props.parentDeck, {
			question: this.state.question,
			answer: this.state.answer,
		})
		this.props.goBack()
		// this.props.navigation.navigate(
		// 	'DeckDetailView', {entryId: this.props.parentDeck})
	}
	render(){
		return(
			<View>
				<TextInput
					placeholder="Enter the question"
					onChangeText={(q) => this.setState({question: q})}
				/>
				<TextInput placeholder="Enter the answer"
						   onChangeText={(a) => this.setState({answer: a})}
				/>
				<TextButton onPress={this.addCard}>
					Submit
				</TextButton>
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
function mapDispatchToProps (dispatch, { navigation }) {
	// const { entryId } = navigation.state.params
	
	return {
		goBack: () => navigation.goBack(),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCardView)
