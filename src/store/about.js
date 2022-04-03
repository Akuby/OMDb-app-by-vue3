import image from '../assets/emoji.png'
export default {
  namespaced : true,
  state : () => {
    return {
      name : 'Akuby',
      email : 'hryu9004@gmail.com',
      blog : 'working on!',
      phone : '+82-10-1234-5678',
      image : image
    }
  }
}