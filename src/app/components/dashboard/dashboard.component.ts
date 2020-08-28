import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

import MediumEditor from 'medium-editor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(
    public authService: AuthService
  ) { }

  @ViewChild('medium') media: ElementRef;
  ngAfterViewInit() {
    const edit = this.media.nativeElement;
    const editor = new MediumEditor(edit);

    editor.subscribe('editableInput', function (eventObj, editable) {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, edit]);
    });
  }

  ngOnInit() { }
}
