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
export const UPDATE_ANSWER = 'UPDATE_ANSWER'

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
export function updateAnswer(deck, answer){
	console.log('updateAnswer', deck, answer)
	
	return{
		type: UPDATE_ANSWER,
		deck,
		answer
	}
}
