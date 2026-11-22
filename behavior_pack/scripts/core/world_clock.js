// Pure game-time counter. Bedrock tick speed is not assumed to be perfectly constant.
export class WorldClock {
  constructor(dayMinutes = 120, elapsedSeconds = 0) {
    this.dayMinutes = Math.max(1, Number(dayMinutes) || 120);
    this.elapsedSeconds = Math.max(0, Number(elapsedSeconds) || 0);
  }
  advance(realSeconds) {
    const seconds = Number(realSeconds);
    if (Number.isFinite(seconds) && seconds > 0) this.elapsedSeconds += Math.min(seconds, 60);
  }
  get day() { return Math.floor(this.elapsedSeconds / (this.dayMinutes * 60)); }
  get fractionOfDay() { return (this.elapsedSeconds % (this.dayMinutes * 60)) / (this.dayMinutes * 60); }
  snapshot() { return { dayMinutes: this.dayMinutes, elapsedSeconds: this.elapsedSeconds }; }
}
