
// Nilai awal 
const initialState={
  nama:'Raf',
  alamat:[],
  kota:'dki',
  pekerjaan:'IT'
}

// REDUCER
// const rootReducer = (state= initialState, action) =>{
  const biodataReducer=(state=initialState,action)=>{
  switch (action.type) {
      case 'CHANGE_BIODATA':
        return {
            ...state,
            nama: action.names,
            kota: action.kota,
            pekerjaan: action.pekerjaan
        };
      case 'ADD_ADDRESS':
        return {
          ...state,
          alamat: [
            ...state.alamat,
            {
              id: action.id,
              propinsi: action.propinsi,
              kabupaten: action.kabupaten,
              kecamatan: action.kecamatan
            }
          ]
        };
      case 'DELETE_ADDRESS':
            let old_state=[...state.alamat]
            let newState=old_state.filter(val => val.id !== action.id)
            return{
                ...state,
                alamat:newState
            }
      case 'UPDATE_ADDRESS':
            let old_state2=[...state.alamat]
            let filterState=old_state2.filter(val => val.id !== action.id)
            let newState2={
              id: action.id,
              propinsi: action.propinsi,
              kabupaten: action.kabupaten,
              kecamatan: action.kecamatan
            }
            return{
                ...state,
                alamat:[...filterState,newState2]
            }
      case 'DELETE_ALL_ADDRESS':
              return {
                ...state,
                alamat: []
              };
      case 'CHANGE_JOB':
              return{
                  ...state,
                  nama:action.nama
              }
      default:
        return state
    }
    // return state
}
export default biodataReducer