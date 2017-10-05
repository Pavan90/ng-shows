import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.modules";

import {FeaturedShowComponent} from "./featured-show.component";
import {ShowDetailsComponent} from "./show-details.component";
import {FeaturedService} from "./featured.service";

@NgModule({
    imports:[
        SharedModule
    ],
    declarations:[
        FeaturedShowComponent,
        ShowDetailsComponent
    ],
    exports:[
        FeaturedShowComponent,
        ShowDetailsComponent
    ],
    providers:[
    FeaturedService
    ]
})

export class FeaturedModule{};