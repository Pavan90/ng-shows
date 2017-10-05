import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.modules";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {SearchBarComponent} from "./search/search-bar.component";


@NgModule({
    imports:[
        SharedModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations:[
        NavbarComponent,
        SearchBarComponent,
        FooterComponent
    ],
    exports:[
        NavbarComponent,
        SearchBarComponent,
        FooterComponent
    ]
})

export class UiModule{};