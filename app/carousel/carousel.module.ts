import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.modules";

import {CarouselContainerComponent} from "./carousel-container.component";
import {CarouselImageComponent} from "./carousel-image.component";
import {CarouselService} from "./carousel.service";
@NgModule({
    imports:[
        SharedModule
    ],
    declarations:[
        CarouselImageComponent,
        CarouselContainerComponent
    ],
    exports:[
        CarouselImageComponent,
        CarouselContainerComponent
    ],
    providers:[
        CarouselService
    ]
})

export class CarouselModule{};