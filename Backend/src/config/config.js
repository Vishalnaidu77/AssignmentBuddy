import 'dotenv/config'

if(!process.env.OPENROUTER_API_KEY){
    console.error('OPENROUTER_API_KEY is not defined in environment variables.');
}

const CONFIG = {
    OPENROUTER_API_KEY : process.env.OPENROUTER_API_KEY
}

export default CONFIG;