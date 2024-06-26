console.log("hello world");

class user {
  public email: string;
  protected coursecontent = 1;
  name: string;
  private readonly city: string = "sargodha";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }

  private delToken() {
    console.log("Tokken deleted");
  }
  get getAppleEmail(): string {
    return `your email is ${this.email}`;
  }
  get getCourseContent(): number {
    return this.coursecontent;
  }

  set courseContent(courseNum) {
    if (courseNum <= 1) {
      throw new Error("course count should be more than 1");
    }
    this.coursecontent = courseNum;
  }
}

class subuser extends user {
  isFamily: boolean = true;
  changeCourseContent() {
    this.courseContent = 4;
  }
}

const waseem = new user("mw@gmail.com", "waseemakram");

// waseem.delToken(); //Property 'delToken' is private and only accessible within class 'user'

// waseem.city;

export {};
