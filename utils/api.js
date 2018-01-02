/**
 * Created by mbp on 24/12/2017.
 */
import {AsyncStorage} from 'react-native'
import {formatDeckResults, timeToString} from './helpers'

export const DECKS_STORAGE_KEY = "@Flashcards:decks"
export const ANSWERS_STORAGE_KEY = "@Flashcards:answers"

export function reset(){
	AsyncStorage.clear()
}
export function getDecks(){
	//return all of the decks along with their titles, questions, and answers.
	// reset()
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
	.then(res => JSON.parse(res))
}

export function saveDeckTitle(deck){
	//take in a single title argument and add it to the decks.
	AsyncStorage.mergeItem(DECKS_STORAGE_KEY,
		JSON.stringify(deck)
	)
	//take in a single title argument and add it to the answers.
	AsyncStorage.mergeItem(ANSWERS_STORAGE_KEY,
		JSON.stringify({[deck.title]:{}})
	)
}

export function addCardToDeck(title, card){
	getDecks().then((decks)=>{
		const deck = decks[title]
		const result = 	JSON.stringify({
			...decks,
			[title]: {
				...deck,
				questions:[...deck['questions'], card],
			}
		})
		AsyncStorage.setItem(DECKS_STORAGE_KEY,
			result
		);
	})
}

export function saveAnswer(deck, id, answer){
	const date = timeToString()
	const deckTitle = deck.title
	getAnswers().then((answers)=>{
		const deckObj = answers[deckTitle] || {};
		const dateArray = deckObj[date] || {};

		const result = 	JSON.stringify({
			...answers,
			[deckTitle]: {
				...answers[deckTitle],
				[date]:{
					...dateArray,
					[id]: answer
				}
			}
		})
		try {
			AsyncStorage.setItem(ANSWERS_STORAGE_KEY, result)
			console.log('result', result)
		}catch (error) {
			console.log(error)
		}
	})
}

export function getAnswers(){
	try {
		return AsyncStorage.getItem(ANSWERS_STORAGE_KEY)
		.then(res => JSON.parse(res))
	} catch (error) {
		 console.log(error)

	}
}