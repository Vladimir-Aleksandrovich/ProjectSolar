import tabs from "./modules/tabs"; 
import timer from "./modules/timer";
import cards from "./modules/cards";
import modal from "./modules/modal";
import form from "./modules/form";
document.addEventListener("DOMContentLoaded", () => {
    
 tabs(".tab", "body", ".read-more-btn", "active-tab");
 timer(".seconds", ".minutes", ".hours", ".days", "2024-09-01");
 modal(".contact-us-btn", ".modal", ".modal__cross-img");
 cards(".our-experience-section .cards");
 form(".modal__form", ".modal__form #name", ".modal__form #phone", ".modal__cross-img", ".modal");

  
})