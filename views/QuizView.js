/**
 * Created by mbp on 24/12/2017.
 */
/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import { View, Text } from 'react-native'

class QuizView extends Component{
	render(){
		return(
			<View>
				<Text>QuizView</Text>
			</View>
		)
	}
}

export default connect()(QuizView)
