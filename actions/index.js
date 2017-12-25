/**
 * Created by mbp on 24/12/2017.
 */
/**
 * Created by mbp on 17/12/2017.
 */
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_ENTRY = 'ADD_ENTRY'

export function receiveDecks (decks){
	return {
		type: RECEIVE_DECKS,
		decks
	}
}
