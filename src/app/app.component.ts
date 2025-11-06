import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from "./shared/component/menu-lateral/menu-lateral.component";
import { ToolBarComponent } from "./shared/component/tool-bar/tool-bar.component";
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuLateralComponent, ToolBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'labPCP';
  showMenuLateral = true;

  constructor(private router: Router) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // lista de rotas que NÃO devem mostrar o menu lateral
          const hiddenRoutes = ['/login'];
          this.showMenuLateral = !hiddenRoutes.includes(event.urlAfterRedirects);
        }
      });
  }

}
