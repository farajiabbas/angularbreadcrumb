import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [ './breadcrumbs.component.css' ]
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbList: any;
  constructor(
    private activatedRout: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.breadcrumbList = this.activatedRout.snapshot.data.breadCrumbs;
  }
}