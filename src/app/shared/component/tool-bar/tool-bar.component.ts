import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent implements OnInit {

  userLog: string | undefined;
  
  ngOnInit() {
    var name = JSON.parse(localStorage.getItem("userData")!);
    this.userLog = name.login;
  }
  

}
