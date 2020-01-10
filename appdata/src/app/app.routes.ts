import { Authguard } from './authgard/authguard/auth.guard';
import { Route} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeartComponent } from './heart.component';

export const routes: Route[] = [
    
    {
        path: "Register",
        component: RegisterComponent
    },
    {
        path: "Login",
        component: LoginComponent

    },
    {
        path: "Home",
        component: HeartComponent,
        canActivate:[Authguard]
    }

]