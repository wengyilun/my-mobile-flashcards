/**
 * Created by mbp on 24/12/2017.
 */
import { combineReducers } from 'redux'
import answers from './answers'
import decks from './decks'
import currentDeck from './currentDeck'





const rootReducer  = combineReducers({
	answers,
	decks,
	currentDeck,
})

export default rootReducer