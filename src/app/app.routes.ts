import { RouterModule, Routes } from '@angular/router';

import { LaranjalSubsecaoComponent } from './laranjal-subsecao/laranjal-subsecao.component';
import { MacapaSubsecaoComponent } from './macapa-subsecao/macapa-subsecao.component';
import { OiapoqueSubssecaoComponent } from './oiapoque-subssecao/oiapoque-subssecao.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'laranjal', component: LaranjalSubsecaoComponent},
    { path: 'macapa', component: MacapaSubsecaoComponent},
    { path: 'oiapoque', component: OiapoqueSubssecaoComponent},
    { path: 'docs', component: DocsComponent}
];

RouterModule.forRoot(routes)