export interface Rollout {
    ID:number,
    rolloutName:string,
    rolloutType:number,
    rolloutTypeDesc:string,
    transportRequest:string,
    startDate:Date,
    endDate: Date
    statusID:number,
    statusDesc:string,
}