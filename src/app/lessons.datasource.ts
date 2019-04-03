

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

    constructor(private apiService: APIService) {

    }

    loadLessons(
                pageIndex:number,
                size:number) {

        this.loadingSubject.next(true);
        console.log('*******');
    console.log(this.apiService.findDetails(pageIndex, size));
        this.apiService.findDetails(pageIndex, size).pipe(
            //console.log(this.)
            
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
                
            )
            .subscribe(lessons => this.lessonsSubject.next(lessons));
            
            console.log( this.lessonsSubject);
            console.log('*******'); 
            

    }

    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
    
        console.log("Connecting data source " );
        console.log(this.lessonsSubject)
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

}

