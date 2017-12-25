/**
 * Created by mbp on 24/12/2017.
 */

import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'

export function setDummyDecks(deck){
	const decks = {
		React: {
			title: 'React',
			questions: [
				{
					question: 'What is React?',
					answer: 'A library for managing user interfaces'
				},
				{
					question: 'Where do you make Ajax requests in React?',
					answer: 'The componentDidMount lifecycle event'
				}
			]
		},
		JavaScript: {
			title: 'JavaScript',
			questions: [
				{
					question: 'What is a closure?',
					answer: 'The combination of a function and the lexical environment within which that function was declared.'
				}
			]
		},
	}
	return typeof deck === 'undefined'
		? decks
		: decks[deck]
}

export function formatDeckResults (results){
	return results === null
		? setDummyDecks()
		: results
}