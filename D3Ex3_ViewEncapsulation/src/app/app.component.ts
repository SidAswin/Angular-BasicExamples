import { Component, ViewEncapsulation } from '@angular/core';
import { MyComponent } from './my.component';
import { AttributesService } from './attributes.service';

@Component({
  selector: 'app',
  template: `
    <div flex layout-fill layout="column">
      <h1 #h1>Introducing...</h1>
      <div class="md-title">Parent h1 attributes:</div>
      <pre><code>{{service.attributes(h1)}}</code></pre>
      </div>
      <hr>
      <div class="yel"> 
        <my-component></my-component>
      </div>
<!--      <video></video> -->
  `,
    styles: [`
    h1, div, pre {
      color: green ;
    }
    
/deep/ p{
  color:purple;
  font-weight:bold;
}
 :host{
   cursor:move;
 }
  `]
  // ::ng-deep, >>> and /deep/ are one and the same. ViewEncapsulation should be Emulated for this to work
  , encapsulation: ViewEncapsulation.Emulated// Set this as None for other examples to work
})

export class AppComponent {
  service: AttributesService;
  constructor(service: AttributesService) { this.service = service; }
}
