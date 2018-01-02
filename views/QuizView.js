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
import {timeToString, clearLocalNotification, setLocalNotification} from "../utils/helpers";
import TextButton from "../components/TextButton";
import {clearAnswer} from '../actions'
class QuizView extends Component{
	static navigationOptions = ({navigation}) => {
		return {
			headerBackTitle: 'Quiz',
			title:'Question',
		}
	}
	
	state = {
		currentIndex:0,
		theEnd: false
	}
	nextCard = ()=>{
		// Increment card number
		let idx = this.state.currentIndex
		idx++
		if(idx <= this.props.questions.length - 1){
			this.setState(() => ({  currentIndex: idx }))
		}else{
			this.setState(() => ({theEnd: true}))
			clearLocalNotification()
				.then(setLocalNotification)
		}
	}
	getRate(){
		// Calculate the rate of correct answer
		const dateKey = timeToString()
		const result = this.props.answers[this.props.parentDeck]
		const date = result[dateKey]
		const correctCount =  Object.keys(date).map((key) =>{
			return date[key]
		})
		.reduce((a, c)=>{
			return a + (c === "correct" ? 1 : 0)
		}, 0)
		
		return Math.round((correctCount / this.props.questions.length) * 100)
	}
	startOver = ()=>{
		// Restart the quiz
		clearAnswer(this.props.parentDeck, timeToString())
		this.setState(() =>
			({
				currentIndex:0,
				theEnd: false
			})
		)
	}
	goBack = ()=>{
		// Go back to deck view
		this.props.navigation.goBack()
	}
	render(){
		const {parentDeck, questions, deck} = this.props
		const {currentIndex, theEnd} = this.state
		
		return(
			<View style={styles.container}>
				{theEnd
					?   <View style={{alignSelf: "center"}}>
							<Text style={{fontSize:20, marginBottom: 20,textAlign:"center"}}>Quiz Completed</Text>
							<Text style={{fontSize:24, marginBottom: 40,textAlign:"center" }}>Your got {this.getRate()}% correct!</Text>
							<TextButton style={styles.textButton}
								onPress={this.startOver}>Start Over</TextButton>
							<TextButton style={styles.textButton}
										onPress={this.goBack}>Go Back</TextButton>
						</View>
					: 	<Card
						id={currentIndex}
						deck={deck}
						total={questions.length}
						question={questions[currentIndex]["question"]}
						answer={questions[currentIndex]["answer"]}
						nextCard={this.nextCard}/>
				}
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
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
		deck: state.decks[parentDeck],
		title: state.decks[parentDeck].title,
		questions: state.decks[parentDeck].questions,
		answers: state.answers
	}
}


export default connect(mapStateToProps)(QuizView)
