import { Component, OnInit } from '@angular/core';
import { fromEvent, of, Subject } from 'rxjs';
import { concatMap, delay, first, map, mergeMap, switchMap, takeLast, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor(private userService: UserService) { }

  count:number = 0;
  startClick = new Subject<void>();
  counter:any;

  ngOnInit() {

    // const obs$1 = fromEvent(document, 'click');
    // const obs$1 = interval(1000);
    // const finalObs$ = obs$1.pipe(
    //   switchMap(event => obs$2)
    // );

    let i = 0;
    let j = 0;
    let k = 0;

    of('Angular', 'ReactJS', 'VueJS').pipe(
      mergeMap(el => of(1,2).pipe(
      delay(2000),
      map(num => el + num)
    ))
    ).subscribe(res => console.log("mergeMap res", i+=1, ": ", res));

    of('Angular', 'ReactJS', 'VueJS').pipe(
      switchMap(el => of(1,2).pipe(
      delay(2000),
      map(num => el + num)
    ))
    ).subscribe(res => console.log("switchMap res", j+=1, ": ", res));
    
    of('Angular', 'ReactJS', 'VueJS').pipe(
      concatMap(el => of(1,2).pipe(
      delay(2000),
      map(num => el + num)
    ))
    ).subscribe(res => console.log("concatMap res", k+=1, ": ", res));

    
    let m = 0;
    let n = 0;
    let r = 0;

    of('Angular', 'ReactJS', 'VueJS').pipe(
      mergeMap(el => of(1,2).pipe(
      map(num => el + num)
    ))
    ).subscribe(res => console.log("mergeMap NO DELAY res", m+=1, ": ", res));

    of('Angular', 'ReactJS', 'VueJS').pipe(
      switchMap(el => of(1,2).pipe(
      map(num => el + num)
    ))
    ).subscribe(res => console.log("switchMap NO DELAY res", n+=1, ": ", res));
    
    of('Angular', 'ReactJS', 'VueJS').pipe(
      concatMap(el => of(1,2).pipe(
      delay(2000),
      map(num => el + num)
    ))
    ).subscribe(res => console.log("concatMap NO DELAY res", r+=1, ": ", res));


    //switchMap
    let switchMapSample = this.userService.getAllUsers().pipe(
      switchMap(users => {
        return this.userService.getUserById(1).pipe(
          tap(singleUser => {
            console.log(users)
            console.log(singleUser)
          })
        )
      })
    ).subscribe(res => console.log("switchMap res: ", res));

    let sourceForFirstOperator = fromEvent(document, 'click');
    sourceForFirstOperator.pipe(first()).subscribe(() => {
      console.log('Document is clicked only once.');
    });

    const sourceTakeWhile = fromEvent(document, 'click');
    sourceTakeWhile.pipe(takeWhile(() => this.count < 3)).subscribe(() => {
      // console.log('Document is only allowed to be clicked on 3 times.');
      console.log(`There have been $this.count clicks`);
      this.count++;
    });

    const sourceTakeLast = of('Angular', 'ReactJS', 'VueJS');
    sourceTakeLast.pipe(takeLast(1)).subscribe(res => console.log("sourceTakeLast res: ", res));

    // sourceClick.pipe(takeUntil(this.startClick))

    const sourceTakeWhile2 = fromEvent(document, 'click');
    this.counter = sourceTakeWhile2.pipe(takeWhile(() => this.count > 0)).subscribe(() => {
      console.log(`There have been $this.count clicks`);
      this.count++;
    });

  }

  ngOnDestroy(){
    this.counter.unsubscribe();
  }
  
  }


