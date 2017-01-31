import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
    }

    events() {
      this.menuIcon.click(this.toggleTheMenu.bind(this)); //use bind to have this keyword below have same instance as events's this keyword
    }

    toggleTheMenu() {
      this.menuContent.toggleClass("site-header__menu-content--is-visible");
      this.siteHeader.toggleClass("site-header--is-expanded");
      this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }

  }



export default MobileMenu;
