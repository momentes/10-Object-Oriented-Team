const Manager = require("../lib/Manager");
const name = "James";
const id = "1";
const email = "1@gmail.com";
const officeNumber = "1";
const employee = new Manager(name, id, email, officeNumber);

describe("Manager", () => {
  describe("functions", () => {
    it("should return manager name", () => {
      let result = employee.getName();
      expect(result).toEqual("James");
    });

    it("should return manager ID", () => {
        let result = employee.getId();
        expect(result).toEqual("1");
    });

    it("should return manager email", () => {
        let result = employee.getEmail();
        expect(result).toEqual("1@gmail.com");
    });

    it("should return manager office number", () => {
        let result = employee.getOfficeNumber();
        expect(result).toEqual("1");
    });

    it("should return type Engineer", () => {
      let result = employee.getRole();
      expect(result).toEqual("Manager");
    });
  })});