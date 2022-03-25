import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'
export default {
  // module화 돼서 사용될 수 있음을 명시
  namespaced: true,
  // vue의 data와 같다
  // 참조형 데이터는, 하나의 함수로 그 안에서 객체 데이터 반환해야 데이터 불변성 문제가 없음
  state: () => ({
    movies: [], //영화의 목록
    message : '', //에러 시 노출할 메세지
    loading : false
  }),
  // vue의 computed와 같다
  getters: {},

  // methods와 유사. 유일하게 데이터 변이 가능
  mutations: {
    // state를 바꿀건데 payload를 받아서 할거다.
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기로 동작
  actions: {
    async searchMovies({ state, commit }, payload) {
      try {
        const res = await _fetchMovie({ ...payload, page: 1 }) // 요래 주면 page가 payload 안으로 쏙!
        const { Search, totalResults } = res.data

        // mutations의 updateState를 쓸거고, 두번째 인수로 updateState에 payload로 넣어줄 객체를 적어준다.
        commit('updateState', {
          //state의 movies에 Search를 넣을건데, _uniqBy를 imdbID를 기준으로 실행해서 넣겠다.
          movies: _uniqBy(Search, 'imdbID'),
          message : ''
        })

        const total = parseInt(totalResults, 10)  // totalResults가 String이라 int로 변환해줌
        const pageLength = Math.ceil(total / 10) // ex) total = 25, pageLength = 3
        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page++) {

            // payload의 number는 Search.vue에서 넘겨준 10, 20, 30. 
            // 최대 3페이지를 넘지 않기위해 적어준 것.
            if (page > (payload.number / 10)) break 

            const res = await _fetchMovie({ ...payload, page })
            const { Search } = res.data

          //state의 movies에 원래 있던 데이터와, 이번에 새로 받아온 애들을 중복 없이 합쳐서 배열에 넣을거야.
            commit('updateState', {
              movies: [ ...state.movies, ..._uniqBy(Search, 'imdbID') ]
            })
          }

        }
      } catch (message) {
        commit('updateState',{
          movies : [],
          message
        })
      }
    }
  }
}

function _fetchMovie(payload) {
  const { title, type, year, page } = payload
  const OMDB_API_KEY = '7035c60c'
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((res) => { //통신 성공 (status : 200)
        if (res.data.Error) {
          reject(res.data.Error)
        }
        resolve(res) // res : 서버가 넘겨준 객체 데이터
      })
      .catch((err) => { //통신 에러
        reject(err.message)
      })
  })
}