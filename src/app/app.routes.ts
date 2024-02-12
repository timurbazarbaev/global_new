import { Routes } from '@angular/router';
import { WrapperComponent } from './layout/wrapper/wrapper.component';


export const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./page/home/home.component')
                        .then(m => m.HomeComponent)
            },
        ]
    },
];
