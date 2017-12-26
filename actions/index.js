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
export function addCard (card){
	return {
		type: ADD_CARD,
		card
	}
}
