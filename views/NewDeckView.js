/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {capitalize} from "../utils/helpers";
import TextButton from '../components/TextButton'
import {gray, purple, white} from "../utils/colors";
import {saveDeckTitle} from '../utils/api'

class NewDeckView extends Component{
	state={
		title: ''
	}
	onAddDeck = ()=>{
		saveDeckTitle(this.state.title)
	}
	render(){
		return(
			<View style={[styles.container]}>
				<Text style={{textAlign:'center', fontSize: 30, marginBottom: 20}}>NEW DECK</Text>
				<Text style={{textAlign:'center'}}>What is the title of your new deck?</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={(input) => this.setState({title: input})}/>
				<TextButton
					style={styles.textButton}
					onPress={this.onAddDeck}>Submit</TextButton>
			</View>
		)
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
	textInput:{
		borderRadius:4,
		marginTop:10,
		marginRight: 20,
		marginLeft: 20,
		marginBottom: 10,
		color: gray,
		padding: 10,
		textAlign: "center",
		borderColor:gray,
		height: 50,
		borderWidth: 1
	},
	textButton:{
		marginTop:20,
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
export default connect()(NewDeckView)
