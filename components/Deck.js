/**
 * Created by mbp on 24/12/2017.
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {purple, white, gray} from '../utils/colors'
import Card from '../components/Card'


export default function Deck ({title, cards}){
	return (
		<View style={[styles.container, styles.center]}>
			<Text style={{fontSize: 30}}>{title}</Text>
			<Text style={{fontSize: 16, color: gray, marginTop: 6}}>{cards.length} cards</Text>
			{/*{Object.keys(cards).map(card =>{*/}
				{/*return (*/}
					{/*/!*<Card/>*!/*/}
				{/*)*/}
			{/*})}*/}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: white
	},
	center: {
		alignItems: "center",
		justifyContent: "center"
	}
})
