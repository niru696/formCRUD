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

   // dataSource: LessonsDataSource;
dataSource;
    displayedColumns= ["firstname",  "email", "work", "street", "city", "state", "zip"];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;
   


    constructor(private route: ActivatedRoute, private loadService: LessonsDataSource ,
                private apiService: APIService) {

    }

    ngOnInit() {

      //  this.lesson = this.route.snapshot.data["lesson"];
      //    console.log(this);
        //this.dataSource = new LessonsDataSource(this.apiService);
        console.log(this.dataSource);
        //this.dataSource.loadLessons('', 'asc', 1, 5);
        //console.log(this.dataSource.loadLessons(0, 3));
        this.loadLessonsPage();
       
    }

    ngAfterViewInit() {
      // this.paginator.page
      // .pipe(
      //     tap(() => this.loadLessonsPage())
      // )
      // .subscribe();

      // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

      // fromEvent(this.input.nativeElement,'keyup')
      //     .pipe(
      //         debounceTime(150),
      //         distinctUntilChanged(),
      //         tap(() => {
      //             this.paginator.pageIndex = 0;

      //             this.loadLessonsPage();
      //         })
      //     )
      //     .subscribe();

      // merge(this.sort.sortChange, this.paginator.page)
      // .pipe(
      //     tap(() => this.loadLessonsPage())
      // )
      // .subscribe();
      

    }

    @ViewChild('keywordsInput') keywordsInput;

    loadLessonsPage() {
      //console.log(this.dataSource)
        this.loadService.loadLessons(
           // this.course.id,
           this.input.nativeElement.value,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize).subscribe(lessons => {
              this.dataSource.lessons=lessons;
              console.log(lessons);
            });
    }


}
