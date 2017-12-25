/**
 * Created by mbp on 24/12/2017.
 */
import React from 'react'
import { View, Text, StyleSheet,  } from 'react-native'
import {purple, white, gray} from '../utils/colors'
import Card from '../components/Card'


export default function Deck ({title, questions}){
	return (
		<View onclick={this.open} style={[styles.container, styles.center]}>
			<Text style={{fontSize: 30}}>{title}</Text>
			<Text style={{fontSize: 16, color: gray, marginTop: 6}}> {questions.length} cards</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: white,
		borderTopWidth:1,
		borderTopColor: gray,
		paddingTop: 40,
		paddingBottom: 40
		
		
	},
	center: {
		alignItems: "center",
		justifyContent: "center"
	}
})
