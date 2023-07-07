const Employee = require("../lib/Employee");
const name = "James";
const id = "1";
const email = "1@gmail.com";
const employee = new Employee(name, id, email);

describe("Employee", () => {
  describe("functions", () => {
    it("should return Employee name", () => {
      let result = employee.getName();
      expect(result).toEqual("James");
    });

    it("should return Employee ID", () => {
        let result = employee.getId();
        expect(result).toEqual("1");
    });

    it("should return Employee email", () => {
        let result = employee.getEmail();
        expect(result).toEqual("1@gmail.com");
    });

    it("should return type Employee", () => {
      let result = employee.getRole();
      expect(result).toEqual("Employee");
    });
  })});