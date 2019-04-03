import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Lesson} from "../model/lesson";
import { APIService } from '../api.service';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge} from "rxjs";
import {fromEvent} from 'rxjs';
import {LessonsDataSource} from "../lessons.datasource";



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

    lesson:Lesson;

    dataSource: LessonsDataSource;

    displayedColumns= ["firstname",  "email", "work", "street", "city", "state", "zip"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;
    @ViewChild('keywordsInput') keywordsInput;


    constructor(private route: ActivatedRoute,
                private apiService: APIService) {

    }

    ngOnInit() {

       this.lesson = this.route.snapshot.data["lesson"];
         console.log(this);
        this.dataSource = new LessonsDataSource(this.apiService);
        console.log(this.dataSource);
        this.dataSource.loadLessons(0, 3);
        //console.log(this.dataSource.loadLessons(0, 3));
       
    }

    ngAfterViewInit() {
      this.paginator.page
      .pipe(
          tap(() => this.loadLessonsPage())
      )
      .subscribe();

    }

    loadLessonsPage() {
      //console.log(this.dataSource)
        this.dataSource.loadLessons(
           // this.course.id,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }


}
