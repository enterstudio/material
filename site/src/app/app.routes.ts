import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';
import {
    ButtonDirectivesComponent,
    CheckboxDirectivesComponent,    
    FabDirectivesComponent,
    RadioDirectivesComponent,
    TabDirectivesComponent,
    TextfieldDirectivesComponent,
    ToolbarDirectivesComponent } from './components';

export const routes: Routes = [
    {path: '', redirectTo: 'directives', pathMatch: 'full'},
    {path: 'directives', children: [
        {path: '', pathMatch: 'full', component: OverviewComponent},
        {path: ButtonDirectivesComponent.DOC_HREF, component: ButtonDirectivesComponent},
        {path: CheckboxDirectivesComponent.DOC_HREF, component: CheckboxDirectivesComponent},
        {path: FabDirectivesComponent.DOC_HREF, component: FabDirectivesComponent},
        {path: RadioDirectivesComponent.DOC_HREF, component: RadioDirectivesComponent},
        {path: TabDirectivesComponent.DOC_HREF, component: TabDirectivesComponent},
        {path: TextfieldDirectivesComponent.DOC_HREF, component: TextfieldDirectivesComponent},
        {path: ToolbarDirectivesComponent.DOC_HREF, component: ToolbarDirectivesComponent}
    ]}
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(routes);
