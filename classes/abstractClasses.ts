console.log("waseem akram");

abstract class TakePhoto {
  constructor(public cameramood: string, public filter: boolean) {}
  abstract getsepia(): void;
  getReelTime(): number {
    return 8;
  }
}

class instagram extends TakePhoto {
  constructor(
    public cameramood: string,
    public filter: boolean,
    public burst: number
  ) {
    super(cameramood, filter);
    this.burst = burst;
  }
  getsepia(): void {
    console.log("sepia");
  }
}

const insta = new instagram("test", true, 3);
insta.getReelTime();
// const hc = new TakePhoto("test", true);
