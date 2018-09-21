import { Routes } from '@angular/router';

import { AddPostComponent }   from './addpost/addpost.component';
import { ViewPostComponent }   from './ViewPost/viewpost.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'addpost',
        pathMatch: 'full',
    },
    {
        path: 'addpost',
        component: AddPostComponent
    },
    {
        path: 'viewpost',
        component: ViewPostComponent
    },
]
