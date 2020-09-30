import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Application } from '../models/application';
import { LoanTrack } from '../models/loantrack';

@Injectable()
export class LoanTrackService
{
    constructor(private http1:HttpClient)
    {

    }

    fetchAppfromAPI(tracker:LoanTrack)
    {
        return this.http1.post("http://localhost:61494/api/LoanTrack",tracker);
    }
}