import { ChatOpenRouter } from '@langchain/openrouter'
import CONFIG from '../config/config'

const model = new ChatOpenRouter({
    model: 'nvidia/nemotron-3.5-super-vl:free',
    apiKey: CONFIG.OPENROUTER_API_KEY
})

export async function cleanedBlob(text){
    try {
        const response = await model.invoke([
            {
                role: 'ai',
                content: ''
            }
        ])
    } catch (err) {
        
    }
}