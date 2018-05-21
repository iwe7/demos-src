import {
  enableProdMode,
  ɵrenderComponent as renderComponent,
  ɵComponentType as ComponentType
} from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
// import { AppComponent } from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

// renderComponent(AppComponent as ComponentType<any>);
