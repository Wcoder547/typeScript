console.log("hello world");

interface user {
  readonly userid: number;
  name: string;
  id: number;
  google_id?: boolean; //optional
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string): number;
}

interface user {
  githubToken: string;
}

interface admin extends user {
  role: "Fullstack" | "front-end" | "back-end";
}
const waseem: user = {
  userid: 21,
  name: "waseemakram",
  id: 2211,
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon(name: "disc0101") {
    return 12;
  },
};
