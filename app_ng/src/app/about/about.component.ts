import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { HtmlLineBreaksPipe } from '../html-line-breaks.pipe';

@Component({
  selector: 'app-about',
  imports: [PageHeaderComponent, HtmlLineBreaksPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header : {
      title : 'About Loc8r',
      strapline : ''
    },
    content : 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };

}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
// })
// export class AboutComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

//   public pageContent = {
//     header : {
//       title : 'About Loc8r',
//       strapline : ''
//     },
//     content : 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.'
//   };

// }

