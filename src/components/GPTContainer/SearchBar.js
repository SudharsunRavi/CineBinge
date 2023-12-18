import { useSelector } from "react-redux"
import languages from "../../utils/languageConstants"
import { useRef } from "react"
import openai from "../../utils/openAI"

const SearchBar=()=>{

    const searchRef=useRef(null)
    const user_language=useSelector((store)=>store.language.selectedLanguage)

    const handleSearch=async()=>{
        //console.log(searchRef.current.value)

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: "Act as movie recommendation system and suggest 15 movies for the query:"+searchRef.current.value+"Have it comma separated, for example: Soorarai Pottru, Leo, etc etc" }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices)
    }
  

    return(
        <div className="bg-black flex justify-start my-44 mx-28">
            <form onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchRef} type="text" placeholder={languages[user_language].searchBarPlaceholder} className="bg-gray-800 text-white p-2 w-[420px] rounded-lg"/>
                <button type="submit" className="bg-red-500 text-white p-2 rounded-lg ml-3" onClick={handleSearch}>{languages[user_language].search}</button>
            </form>
        </div>
    )
}

export default SearchBar