/**
 * Created by mbp on 24/12/2017.
 */
import { combineReducers } from 'redux'
import cards from './cards'
import decks from './decks'
import currentDeck from './currentDeck'





const rootReducer  = combineReducers({
	cards,
	decks,
	currentDeck,
})

export default rootReducer