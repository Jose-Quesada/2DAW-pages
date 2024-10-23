import { NgModule } from "@angular/core";
import { ContadorComponent } from "./components/app.component";

@NgModule({
  declarations:[
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ]

})

export class CounterModule{

}
