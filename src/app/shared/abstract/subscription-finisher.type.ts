import { Observable, Subject, BehaviorSubject, ReplaySubject, Subscription } from 'rxjs';

export type CompletableObservable = Observable<any> | Subject<any> | BehaviorSubject<any> | ReplaySubject<any> | Subscription;