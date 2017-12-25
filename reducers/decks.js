/**
 * Created by mbp on 24/12/2017.
 */
import {RECEIVE_DECKS} from '../actions'

export default function decks (state={}, action){
	switch(action.type){
		case RECEIVE_DECKS:
			return{
				...state,
				...action.decks
			}
		
		default:
			return state
	}
}