/**
 * Created by mbp on 24/12/2017.
 */
import {
RECEIVE_DECKS,
ADD_DECK,
REMOVE_DECK,
ADD_CARD,
UPDATE_ANSWER
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
			let {deck, card} = action
			console.log('card',card)
			console.log('deck', deck)
			return {
			...state,
			[deck]:
				{
					...state[deck],
					"questions": [...state[deck]["questions"], card]
				}
			}
		case UPDATE_ANSWER:  // state[deck].questions[0][]
			const {id, answer } = action
			deck = action.deck
			const date = new Date();
			const dd = date.getDate();
			const mm = date.getMonth()+1; //January is 0!
			const yyyy = date.getFullYear();
			const today = mm + '/' + dd + '/' + yyyy;
			console.log('deck:', deck)
			const res =  {
				...state,
				[ deck]: {
				    ...state[deck],
				    "answers": {...state[deck]["answers"], [today]:[...( typeof state[deck]["answers"][today] === "undefined" ? [] : state[deck]["answers"][today] ), answer]}
				    }
				 }
		
			return res
		default:
			return state
	}
}