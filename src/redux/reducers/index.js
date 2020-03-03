import {combineReducers} from 'redux';
import CounterReducers from './CounterReducers'
import KataReducer from './KataReducer'
import ParkirReducer from './ParkirReducer'

const reducers=combineReducers({
    Count:CounterReducers,
    Kata:KataReducer,
    Parkir:ParkirReducer
})
export default reducers;
//redux punya reducer tempat penyimpanan data atau state global sm action, action untuk ubah isi reducer returnnya objek
