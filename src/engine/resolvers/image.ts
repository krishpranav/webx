import spinner from '../../assets/spinner.gif'
import { DalleImage } from '../../providers/openai/types'

export async function resolveImage(
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
        console.log('resolveImages> found image: ', {alt , src})
        if (alt) {
            console.log('resolveImages> found image:', alt)
            try {
                images[i].src = spinner.src
            } catch (err) {
                console.log('resolveImages> failed to replace an image, weired', err)
            }
        }
    }
}