import { db } from "./lib/db.js"

chrome.action.onClicked.addListener(tab=>{
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['./scripts/scrapper.js']
    })
})

chrome.runtime.onConnect.addListener(port=>{
    if(port.name==="safePort"){
        port.onMessage.addListener(async message=>{

            await db.profiles.add(message)
            console.log("datos guardados en indexdb")
            /* fetch("http://localhost:3000/profiles",{
                method: "POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(message)
            }).then(response=>response.json())
                .then(data=>console.log(data))
                .catch(error=>console.log(error)) */
        })
    }
})
