import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {

  //string, number, boolen, date. object, array, null, undefined
  Name = "Angular"
  age = ""

  ngOnInit(){
    alert("hii")
  }
  

}
