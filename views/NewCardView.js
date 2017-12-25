/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import { View, Text } from 'react-native'

class NewCardView extends Component{
	render(){
		return(
			<View>
				<Text>New Card View</Text>
			</View>
		)
	}
}

export default connect()(NewCardView)
