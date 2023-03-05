import { save } from '@tauri-apps/api/dialog'
import { writeTextFile } from '@tauri-apps/api/fs'

export const downloadHtmlFile = async (html: string) => {
    try {
        const fileName = `webx-${Date.now()}.html`

        console.log('opening save dialog..')

        const filePath = await save({
            filters: [
                {
                    name: fileName,
                    extensions: ['html'],
                },
            ],
        })

        console.log('filePath', filePath)

        const res = await writeTextFile(filePath, html)
    } catch (err) {
        return err 
    }
}