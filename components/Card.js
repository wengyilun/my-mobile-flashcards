/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {purple, white} from '../utils/colors'
import TextButton from './TextButton'
import {pink, gray} from '../utils/colors'
import {capitalize} from '../utils/helpers'
import {connect} from "react-redux"
import {updateAnswer} from "../actions"
import {addCardToDeck,  saveAnswer} from "../utils/api"

class Card extends React.Component {
	state ={
		side: 'question',
	}

	flipCard = ()=> {
		if(this.state.side === 'question'){
			this.setState({side:'answer'})
		}else{
			this.setState({side:'question'})
		}
	}
	updateAnswer = (answer)=> {
		this.props.nextCard()
		if(this.props.id <= this.props.total - 1){
			this.props.dispatch(updateAnswer(this.props.deck, this.props.id, answer))
		}
		//debugger
		saveAnswer(this.props.deck, this.props.id, answer)
	}
	
	render(){
		const {id, question, answer, total } =  this.props
		const {side} = this.state
		
		return (
			<View style={styles.container}>
				<Text >{id + 1} / {total}</Text>
				{this.state.side ==='question'
					? 	<Text style={styles.content}>{question}</Text>
					:   <Text  style={styles.content}>{answer}</Text>
				}
				<TextButton
					style={styles.answerLink}
					onPress={this.flipCard}>{capitalize(side)}</TextButton>
				<TextButton
					style={styles.textButton}
					onPress={(e)=>this.updateAnswer('correct')}
					>Correct</TextButton>
				<TextButton
					style={styles.textButton}
					onPress={(e)=>this.updateAnswer('incorrect')}>Incorrect</TextButton>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	answerLink:{
		color: gray,
		textAlign:'center',
		marginTop: 30,
		marginBottom: 30,
		
	},
	content:{
		marginTop: 30,
		textAlign:'center',
		fontSize: 20
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
export default connect()(Card)