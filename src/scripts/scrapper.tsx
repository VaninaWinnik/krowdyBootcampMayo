import autoscrolling from "../functions/autoscrolling.js"
import { $, $x } from "../functions/selector.js";
import waitForElement from "../functions/waitForElement.js";
import SELECTORS from "./selectors.js";
import Education from "../model/model.education"
import Experience from "../model/model.experience"

interface ProfileProps {
  fullName: string,
  contactInfo: string,
  experience: Experience[],
  education: Education[],
}

function AddProfiles (props: ProfileProps): void {
   const { fullName, ...rest } = props
   
   waitForElement('h1')
   .then(()=>{
      autoscrolling(30).then(()=>{
         const fullName = $(SELECTORS.profile.css.fullname).textContent
         const experienceItems = $x(SELECTORS.profile.xpath.experiencieItems)
         const educationItems = $x(SELECTORS.profile.xpath.educationItems)
         
         const pruebaExperience = experienceItems
                                    .map(element => $('span[aria-hidden="true"]',element)?.textContent);
         
         
         const pruebaEducation = educationItems
                                    .map(element=> $('span[aria-hidden="true"]',element)?.textContent)

         let port = chrome.runtime.connect({name:"safePort"})
         port.postMessage({fullName,pruebaExperience, pruebaEducation})

      })
   })
   .catch(()=>{console.log("intentelo mas tarde")})
}

export default AddProfiles
