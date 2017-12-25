/**
 * Created by mbp on 24/12/2017.
 */
import {AsyncStorage} from 'react-native'
import {formatDeckResults} from './helpers'
export const DECKS_STORAGE_KEY = "Flashcards:decks"

export function getDecks(){
//return all of the decks along with their titles, questions, and answers.
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then(formatDeckResults)
}
export function getDeck(id){
	//take in a single id argument and return the deck associated with that id.
}

export function saveDeckTitle(title){
	//take in a single title argument and add it to the decks.
}

export function addCardToDeck(title, card){
	//take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
}