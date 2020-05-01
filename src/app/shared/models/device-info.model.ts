export class DeviceInfo {
  constructor(
    public type: 'desktop' | 'tablet' | 'mobile' = null,
    public width: number = null,
  ) {}
}