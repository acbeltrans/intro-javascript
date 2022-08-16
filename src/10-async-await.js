/**
 * Async-Await:
 * The async and await keywords allow promise-based asynchronous behavior to be
 * written in a cleaner style, avoiding the need to explicitly configure promise
 * chains.
 */

const getGif = async () => {
  try {
    // Key that no longer works
    const apiKey = '5vwhiJPMVfuUzyeV1PyEHw4Hx6HiSQ9u'
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
    )
    const { data } = await resp.json()

    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    // Error handling
    console.error(error)
  }
}

getGif()
