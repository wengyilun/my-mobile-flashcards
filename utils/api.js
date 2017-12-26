/**
 * Created by mbp on 24/12/2017.
 */
import {AsyncStorage} from 'react-native'
import {formatDeckResults} from './helpers'
export const DECKS_STORAGE_KEY = "Flashcards:decks"

export function reset(){
	//take in a single id argument and return the deck associated with that id.
	//take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
	AsyncStorage.clear()
}
export function getDecks(){
//return all of the decks along with their titles, questions, and answers.
// 	reset()
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
	.then(formatDeckResults)
	// .then((decks)=>{
	// 	console.log('getDecks:decks', decks)
	// })
}

export function saveDeckTitle(title){
	//take in a single title argument and add it to the decks.
	console.log('title is: ',title)
}

export function addCardToDeck(title, card){
	getDecks().then((decks)=>{
		const deck = decks[title]
		
		// const questions = [...deck['questions'], card]
		// deck.questions = questions
		//decks[title] = deck
		// AsyncStorage.setItem(DECKS_STORAGE_KEY,
		// 	JSON.stringify({
		// 		{}
		// 	}));
		const result = 	JSON.stringify({
			...decks,
			[title]: {
				...deck,
				questions:[...deck['questions'], card]
			}
		})
		// AsyncStorage.setItem(DECKS_STORAGE_KEY,
		// 	result
		// );
		console.log('result',result)
		//
		// getDecks()
	})
	// console.log('addCardToDeck-deck', deck)
	//take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
	// const questions = [...deck['questions'], card]
	//
	//
	//return newDeck
}