import { Application } from './application';

export class AppWithRemarks
{
    app:Application;
    remarks:string;
    
    constructor()
    {
        this.app=new Application();
    }
}