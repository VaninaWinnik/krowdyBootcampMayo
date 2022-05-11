const SELECTORS = {
    profile:{
        css:{
            fullname: "h1"

        },
        xpath:{
            educationItems: "(//section[.//span[contains(text(),'Educación')]]//ul)[1]/li",
            experiencieItems: "(//section[.//span[contains(text(),'Experiencia')]]//ul)[1]/li"
        }
    }
}

export default SELECTORS