import { AuthService } from 'src/app/services/auth.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  islogin:boolean=false;
  constructor(public _AuthService:AuthService ) {
     _AuthService.userData.subscribe((data)=>{
      if(data){
        this.islogin=true;
      }
      else{
        this.islogin=false;
      }

    })
   }

  ngOnInit(): void {
  }


  @HostListener("window:scroll")
  navShow() {
    let navBar = document.querySelector("nav")
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 1200) {
      navBar?.classList.add("nav-show")
    } else {
      navBar?.classList.remove("nav-show")
    }
  }

  addActiveClass(event: any) {
    let navLinks = document.querySelectorAll(".nav-link")
    for (let i = 0; i < navLinks.length; i++) { navLinks[i].classList.remove("active") }
    event.target.classList.add("active")
    window.scrollTo(0, 0)
  }
  scrollTop() {
    window.scrollTo(0, 0)
  }


}
