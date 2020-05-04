export class ChronoStatusTime {
  constructor(
    public chrono: number,
    public label: 'hrs' | 'min' | 'seg'
  ) { }
}