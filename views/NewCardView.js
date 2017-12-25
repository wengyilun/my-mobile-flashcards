/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import TextButton from '../components/TextButton'
import {addCardToDeck} from '../utils/api'
import {purple, white, gray} from "../utils/colors";
class NewCardView extends Component{
	static navigationOptions = ({navigation}) => {
		return {
			headerBackTitle: navigation.state.params.entryId,
			title:'Add Card'
		}
	}
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
	}
	render(){
		return(
			<View>
				<TextInput
					style={styles.textInput}
					placeholder="Enter the question"
				/>
				<TextInput placeholder="Enter the answer"
						   style={styles.textInput}
						   onChangeText={(a) => this.setState({answer: a})}
				/>
				<TextButton
					style={styles.textButton}
					onPress={this.addCard}>
					Submit
				</TextButton>
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
