

import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs";
//import {Lesson} from "../model/lesson";
import {APIService} from "./api.service";
import {BehaviorSubject} from "rxjs";
import {catchError, finalize} from "rxjs/operators";
import {of} from "rxjs";
import { Lesson } from './model/lesson';



export class LessonsDataSource implements DataSource<Lesson> {

    private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private coursesService: APIService) {

    }

    loadLessons(filter:string,
                sortOrder:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        return this.coursesService.findDetails(filter, sortOrder,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            // .subscribe(lessons => this.lessonsSubject.next(lessons));
        console.log(this.lessonsSubject)
        console.log("hello ");
    }

    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
       console.log( this.lessonsSubject.asObservable());
       return this.lessonsSubject.asObservable();
      // return this.coursesService
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

}

