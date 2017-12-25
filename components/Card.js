/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {purple, white} from '../utils/colors'
import TextButton from './TextButton'

export default class Card extends React.Component {
	state ={
		side: 'question',
		nextSide: ''
	}

	flipCard = ()=> {
		if(this.state.side === 'question'){
			this.state.nextSide = 'Answer'
		}else{
			this.state.nextSide = 'Question'
		}
	}
	markCorrect = ()=> {
	
	}
	markIncorrect = ()=> {
	
	}
	
	render(){
		const {id, question, answer } =  this.props
		const {nextSide} = this.state
		
		return (
			<View style={styles.container}>
				<Text>{id}</Text>
				<Text>{question}</Text>
				<Text>{answer}</Text>
				<TextButton onPress={this.flipCard()}>{nextSide}</TextButton>
				<TextButton onPress={this.markCorrect()}>Correct</TextButton>
				<TextButton onPress={this.markIncorrect()}>Incorrect</TextButton>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: white
	},
})
