/**
 * Created by mbp on 24/12/2017.
 */
import React, {Component } from 'react'
import {connect} from 'react-redux'
import { View, Text } from 'react-native'

class DeckDetailView extends Component{
	render(){
		return(
			<View>
				<Text>Deck Detail View</Text>
			</View>
		)
	}
}

export default connect()(DeckDetailView)

