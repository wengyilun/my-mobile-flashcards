/**
 * Created by mbp on 24/12/2017.
 */
import {RECEIVE_DECKS} from '../actions'

export default function decks (state={}, action){
	switch(action.type){
		case RECEIVE_DECKS:
			const s = {
				...state,
				...action.decks
			}
			console.log(' s:', s)
			return s
		
		default:
			return state
	}
}