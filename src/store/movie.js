export default {
  // module화 돼서 사용될 수 있음을 명시
  namespaced : true,
  // vue의 data와 같다
  state : () => ({
      movies: [] //영화의 목록
    }),
  // vue의 computed와 같다
  getters : {
    movieIds(state) {
      return state.movies.map( m => m.imdbID ) // ID로만 이뤄진 배열 반환
    }
  },
  // methods와 유사
  // 유일하게 데이터 변이 가능
  mutations : {
    resetMovies(state){
      state.movies = []
    }
  },
  // 비동기로 동작
  actions : {
    searchMovies() {

    }
  }
}