/**
 *Fetch API:
 * It comes in web browsers and will allow us to make HTTP requests to endPoints
 * directly without importing any libraries.
 * API link: https://developers.giphy.com/
 */

// Key that no longer works
const apiKey = '5vwhiJPMVfuUzyeV1PyEHw4Hx6HiSQ9u'

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// Chain promises
httpCall
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url

    document.body.append(img)
  })
  .catch(console.warn)
