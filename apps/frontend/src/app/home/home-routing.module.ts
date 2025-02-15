import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'apply',
        component: ApplyComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
