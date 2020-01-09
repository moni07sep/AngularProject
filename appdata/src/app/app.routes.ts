import { Route} from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Route[] = [
    
    {
        path: "Register",
        component: RegisterComponent
    },
    {
        path: "Login",
        component: LoginComponent

    }
]