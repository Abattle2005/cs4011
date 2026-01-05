import { Component, OnInit, Input } from '@angular/core';
import { HtmlLineBreaksPipe } from '../html-line-breaks.pipe';

@Component({
  selector: 'app-sidebar',
  imports: [HtmlLineBreaksPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }
}

