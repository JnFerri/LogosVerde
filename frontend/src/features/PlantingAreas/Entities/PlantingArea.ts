export default class PlantingArea {  
  constructor(
    public readonly id: number,
    public name: string,
    public sunshineHours : number | null,
    public projectId : number,
    public createdAt: Date
  ){}
}