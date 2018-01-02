/**
 * Created by mbp on 24/12/2017.
 */

import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import {Notifications, Permissions} from 'expo'
const NOTIFICATION_KEY = "@Flashcards:notificaitons"

export function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1)
}

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
	return decks
}

export function formatDeckResults (results){
	console.log('result:',results)
	return results === null
		? setDummyDecks()
		: results
}

export function getDateKey(){
	const date = new Date();
	const dd = date.getDate();
	const mm = date.getMonth()+1;
	const yyyy = date.getFullYear();
	const today = mm +  dd + yyyy;

	return today
}

export function timeToString (time = Date.now()) {
	const date = new Date(time)
	const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
	return todayUTC.toISOString().split('T')[0]
}

export function clearLocalNotification(){
	return AsyncStorage.removeItem(NOTIFICATION_KEY)
	.then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification(){
	return {
		title: "Practice Makes Better",
		body: "Don't forget to study flashcard today",
		ios: {
			sound: true,
		},
		android:{
			sound: true,
			priority: 'high',
			sticky:false,
			vibrate: true
		}
	}
}

export function setLocalNotification(){
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then((data) => {
			if(data === null){
				Permissions.askAsync(Permissions.NOTIFICATIONS)
					.then((status) => {
						if(status === "granted"){
							Notifications.cancelAllScheduledNotificationsAsync()
							
							let tomorrow = new Date()
							tomorrow.setDate(tomorrow.getDate() + 1)
							tomorrow.setHours(20)
							tomorrow.setMinutes(0)
							
							Notifications.scheduleLocalNotificationAsync(
								createNotification(),
								{
									time: tomorrow,
									repeat: 'day',
								}
							)
							
							AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
						}
					})
			}
		})
}