//비동기 동작. async await 필수!!
export default{
  install(app) {
    app.config.globalProperties.$loadImage = (src) => {
      return new Promise((resolve) => {
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          //완료!
          resolve()
        })
      })
    }
  }
}