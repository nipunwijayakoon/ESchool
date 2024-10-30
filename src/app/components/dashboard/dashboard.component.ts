import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { DevstackComponent } from '../devstack/devstack.component';
import { ResponsiveComponent } from '../responsive/responsive.component';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatFormFieldModule, MatInputModule,DevstackComponent, ResponsiveComponent, RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  selectedValue:String="";

  changeValue(selectedValue:String){
    this.selectedValue=selectedValue;
  }

}
