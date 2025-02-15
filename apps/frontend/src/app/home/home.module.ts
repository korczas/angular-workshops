import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { ApplyComponent } from './apply/apply.component';

@NgModule({
    declarations: [HomeComponent, ApplyComponent],
    imports: [CommonModule, ButtonModule, HomeRoutingModule],
})
export class HomeModule {}
