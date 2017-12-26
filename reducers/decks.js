/**
 * Created by mbp on 24/12/2017.
 */
import {
RECEIVE_DECKS,
ADD_DECK,
REMOVE_DECK,
ADD_CARD
} from '../actions'

export default function decks (state={}, action){
	switch(action.type){
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks
			}
		
		case ADD_DECK:
		   return{
				...state,
				...action.deck
		   }
		
		case REMOVE_DECK:
		   return state.filter((deck)=> (deck.title !== action.deck.title))
		
		case ADD_CARD:
			const {card} = action
			return{
			...state,
			[card.title]:
				{
					...[card.title],
					"questions": [...[card.title]["questions"], card]
				}
		}
		
		default:
			return state
	}
}