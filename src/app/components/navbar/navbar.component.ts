import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight, faCog, faSignOutAlt, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../pages/auth/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  faCog = faCog;
  faSignOut = faSignOutAlt;
  faAngle = localStorage.getItem('sb|sidebar-toggle') === 'true' ? faAngleRight : faAngleLeft;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.toggleSidebar();
  }

  onLoggout() {
    this.service.logout;
  }

  toggleSidebar(): void {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            document.body.classList.toggle('sb-sidenav-toggled');
        }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            this.faAngle = localStorage.getItem('sb|sidebar-toggle') === 'true' ? faAngleLeft : faAngleRight;
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled').toString());
        });
    }
  }
}
