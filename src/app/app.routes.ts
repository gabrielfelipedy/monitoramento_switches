import { RouterModule, Routes } from '@angular/router';

import { LaranjalSubsecaoComponent } from './laranjal-subsecao/laranjal-subsecao.component';
import { OiapoqueSubssecaoComponent } from './oiapoque-subssecao/oiapoque-subssecao.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'laranjal', component: LaranjalSubsecaoComponent},
    { path: 'oiapoque', component: OiapoqueSubssecaoComponent}
];

RouterModule.forRoot(routes)