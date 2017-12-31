/**
 * Created by mbp on 24/12/2017.
 */
/**
 * Created by mbp on 17/12/2017.
 */
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'
export const ADD_ANSWER = 'ADD_ANSWER'
export const CLEAR_ANSWER = 'CLEAR_ANSWER'

export function receiveDecks (decks){
	return {
		type: RECEIVE_DECKS,
		decks
	}
}
export function addToDecks (deck){
	return {
		type: ADD_DECK,
		deck
	}
}
export function removeDeck (deck){
	return {
		type: REMOVE_DECK,
		deck
	}
}

// CARD
export function addCard (deck, card){
	return {
		type: ADD_CARD,
		deck,
		card
	}
}
// QUIZ
export function updateAnswer(deck, id, answer){
	console.log('updateAnswer', deck, id, answer)
	
	return{
		type: ADD_ANSWER,
		deck,
		id,
		answer
	}
}
export function clearAnswer(title, dateKey){
	return{
		type: CLEAR_ANSWER,
		title,
		dateKey
	}
}
