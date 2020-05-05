import { ChronoStatusTimeLabelType } from '../types/chrono-status-time-label.type';
export class ChronoStatusTime {
  constructor(
    public chrono?: number,
    public label: ChronoStatusTimeLabelType = 'seg'
  ) { }
}