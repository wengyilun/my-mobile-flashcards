/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import {white, purple} from '../utils/colors'
import TextButton from '../components/TextButton'
import Deck from '../components/Deck'

class DeckDetailView extends Component{
	// static navigationOptions = ({navigation}) => {
	// 	const { key } = navigation.state.params
	// 	return {
	// 		title: key.title,
	// 		questions: key.questions
	// 	}
	// }
	addCard = ()=> {
		this.props.navigation.navigate(
			'NewCardView', {parentDeck: this.props.entryId})
	}
	startQuiz = ()=> {
		this.props.navigation.navigate(
			'QuizView', {parentDeck: this.props.entryId})
	}
	render(){
		const {title, questions} = this.props
		return(
			<View>
				<Deck title={title} questions={questions}/>
				<TextButton
					onPress={this.addCard}
					style={[styles.textButton]}>
					Add Card
				</TextButton>
				<TextButton onPress={this.startQuiz}
				style={styles.textButton}>
					Start Quiz
				</TextButton>
			</View>
		)
	}
}

function mapStateToProps(state, {navigation}){
	const {entryId} = navigation.state.params
	
	return {
		entryId,
		title: state.decks[entryId].title,
		questions: state.decks[entryId].questions
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
	textButton:{
		backgroundColor: purple,
		borderRadius:10,
		marginRight: 20,
		marginLeft: 20,
		marginBottom: 20,
		color: white,
		padding: 10,
		textAlign: "center"
	}
})

export default connect(mapStateToProps)(DeckDetailView)

