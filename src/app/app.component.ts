import {Component, Compiler, SystemJsNgModuleLoader, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
    private viewRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private loader: SystemJsNgModuleLoader,
    private compiler: Compiler
  ) {}

  ngOnInit() {
    let modulePath: string = 'app/summary/summary.module#SummaryModule';
    let componentName: string = 'SummaryComponent';

    this.loader
      .load(modulePath) // load the module and its components
      .then(modFac => {
        // need to use Compiler to resolve the module's embedded components
        this.compiler
          .compileModuleAndAllComponentsAsync<any>(modFac.moduleType)
          .then(factory => {
            let cmpFactory: any;
            // now look for the module's main component so we can instantiate it
            for(let i = factory.componentFactories.length - 1; i >= 0; i--) {
              if(factory.componentFactories[i].componentType.name === componentName) {
                cmpFactory = factory.componentFactories[i];
              }
            }
            return cmpFactory;
          })
          .then(cmpFactory => {
            // need to instantiate the Module so we can use it as the provider for the new component
            let modRef = modFac.create(this.viewRef.parentInjector);
            let compRef = this.viewRef.createComponent(cmpFactory, 0, modRef);
            // done, now Module and main Component are known to NG2
          });
      });
  }

}
