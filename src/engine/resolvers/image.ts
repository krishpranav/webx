import spinner from '../../assets/spinner.gif'
import { DalleImage } from '../../providers/openai/types'

export async function resolveImages(
  model: string,
  apiKey: string,
  useMockData: boolean
) {
  if (useMockData) {
    return ''
  }
  const images = document.getElementsByTagName('img')

  for (let i = 0; i < images.length; i++) {
    const src = images[i].src
    const alt = images[i].alt
    console.log('resolveImages> found image:', { alt, src })
    if (alt) {
      console.log('resolveImages> found image:', alt)
      try {
        images[i].src = spinner.src
        const response = await fetch(
          `/api/image?prompt=${encodeURIComponent(
            alt
          )}&model=${encodeURIComponent(model)}&apiKey=${encodeURIComponent(
            apiKey
          )}`
        )
        const { url, prompt, width, height } =
          (await response.json()) as DalleImage

        console.log(
          'resolveImages> replacing src with url and deleting alt',
          url
        )
        images[i].src = url
        images[i].removeAttribute('alt')
      } catch (err) {
        console.log('resolveImages> failed to replace an image, weird', err)
      }
    }
  }

}