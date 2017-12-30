/**
 * Created by mbp on 24/12/2017.
 */
/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet} from 'react-native'
import Card from '../components/Card'
import {purple, white} from "../utils/colors";

class QuizView extends Component{
	static navigationOptions = ({navigation}) => {
		return {
			headerBackTitle: 'Quiz',
			title:'Question'
		}
	}
	render(){
		return(
			<View style={styles.container}>
				{ this.props.questions.map((q, idx)=>(
					<Card
						 key={idx}
						 id={idx}
						 deck={this.props.parentDeck}
						 total={this.props.questions.length}
						 question={q.question}
						 answer={q.answer}/>
					))}
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
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
function mapStateToProps(state, {navigation}){
	const {parentDeck} = navigation.state.params
	return {
		parentDeck,
		title: state.decks[parentDeck].title,
		questions: state.decks[parentDeck].questions
	}
}


export default connect(mapStateToProps)(QuizView)
