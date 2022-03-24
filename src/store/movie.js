import axios from 'axios'
export default {
  // module화 돼서 사용될 수 있음을 명시
  namespaced : true,
  // vue의 data와 같다
  // 하나의 함수로 안에서 객체 데이터 반환해야 => 데이터 불변성 문제가 없음
  state : () => ({
      movies: [] //영화의 목록
    }),
  // vue의 computed와 같다
  getters : {},
  // methods와 유사
  // 유일하게 데이터 변이 가능
  mutations : {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state){
      state.movies = []
    }
  },
  // 비동기로 동작
  actions : {
    async searchMovies(context, payload) {
        const { title, type, number, year } = payload
        const OMDB_API_KEY = '7035c60c'
        const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
        const { Search , totalResults } = res.data
        console.log(Search)
        context.commit('updateState', {
          movies : Search
        })
    }
  }
}