const Intern = require("../lib/Intern");
const name = "James";
const id = "1";
const email = "1@gmail.com";
const school = "Monash";
const employee = new Intern(name, id, email, school);

describe("Intern", () => {
  describe("functions", () => {
    it("should return Intern name", () => {
      let result = employee.getName();
      expect(result).toEqual("James");
    });

    it("should return Intern ID", () => {
        let result = employee.getId();
        expect(result).toEqual("1");
    });

    it("should return Intern email", () => {
        let result = employee.getEmail();
        expect(result).toEqual("1@gmail.com");
    });

    it("should return Intern school", () => {
        let result = employee.getSchool();
        expect(result).toEqual("Monash");
    });

    it("should return type Engineer", () => {
      let result = employee.getRole();
      expect(result).toEqual("Intern");
    });
  })});