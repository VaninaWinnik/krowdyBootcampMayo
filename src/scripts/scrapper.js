import { $, $x } from "../functions/selector";
import SELECTORS from "./selectors";

const fullName = $(SELECTORS.profile.css.fullname).textContent
const experienceItems = $x(SELECTORS.profile.xpath.experiencieItems)
const educationItems = $x(SELECTORS.profile.xpath.educationItems)

experienceItems.forEach(element => {
   console.log($('span[aria-hidden="true"]',element)?.textContent)
});