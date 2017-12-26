/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {purple, white} from '../utils/colors'
import TextButton from './TextButton'
import {pink, gray} from '../utils/colors'
import {capitalize} from '../utils/helpers'

export default class Card extends React.Component {
	state ={
		side: 'question',
	}

	flipCard = ()=> {
		if(this.state.side === 'question'){
			this.setState({side:'answer'})
		}else{
			this.setState({side:'question'})
		}
		console.log(this.state.side)
	}
	markCorrect = ()=> {
	
	}
	markIncorrect = ()=> {
	
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
					onPress={this.markCorrect()}>Correct</TextButton>
				<TextButton
					style={styles.textButton}
					onPress={this.markIncorrect()}>Incorrect</TextButton>
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