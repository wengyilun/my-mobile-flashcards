import {ADD_ANSWER} from "../actions";
/**
 * Created by mbp on 24/12/2017.
 */
import {getDateKey} from '../utils/helpers'

export default function answers (state={}, action){
	switch(action.type){
		case ADD_ANSWER:
			const { id, answer, deck} = action
			const date = getDateKey()
			const deckTitle =  deck.title
			const deckObj = state[deck.title] || {};
			const dateArray = deckObj[date] || {};
			
			const res =  {
				...state,
				[deckTitle]: {
					...deckObj,
				    [date]:{
						...dateArray,
						[id]: answer
					}
				}
			}
			return res
			
		case 'RESET_ANSWER':
			const {title, dateKey} = action
			return  {
				...state,
				[deckTitle]: {
					...state[deckTitle],
					[dateKey]:{}
				}
		}
			
		default:
			return state
	}
}
