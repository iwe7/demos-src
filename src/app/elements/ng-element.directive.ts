import {
  Directive,
  Input,
  ViewContainerRef,
  ComponentFactory,
  ɵisPromise,
  ɵisObservable,
  ComponentRef,
  Injector,
  ElementRef,
  ChangeDetectorRef,
  Renderer2,
  OnInit,
  OnChanges,
  SimpleChanges
} from "@angular/core";

import {
  NgElementConstructor,
  NgElementStrategy,
  NgElement
} from "@angular/elements";
import { of } from "rxjs";
import { switchMap, filter, map, debounceTime } from "rxjs/operators";
import { GlobalService } from "./global";

@Directive({
  selector: "[ngElement]"
})
export class NgElementDirective implements OnInit, OnChanges {
  @Input() ngElement: ComponentFactory<any>;
  constructor(private view: ViewContainerRef, private global: GlobalService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if ("ngElement" in changes) {
      this.global.ElementsLoad.subscribe(res => {
        this.createElement();
      });
    }
  }

  private createElement() {
    if (ɵisObservable(this.ngElement)) {
      this.ngElement
        .pipe(
          switchMap(res => {
            return of(res).pipe(
              filter(res => !!res),
              filter(res => {
                return !!this.global.ElementsMap.get(res);
              }),
              map(selector => document.createElement(selector)),
              filter(res => !!res),
              map(res => res.ngElementStrategy),
              filter(res => !!res),
              map(res => res.componentFactory),
              filter(res => !!res)
            );
          })
        )
        .subscribe((componentFactory: any) => {
          this.view.createComponent(componentFactory);
        });
    } else {
      console.error("error", this.ngElement);
    }
  }
}
