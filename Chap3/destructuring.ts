namespace destructuringNS {
  interface Employee {
    name: string;
    age: number;
    address: string;
    country: string;
  }

  const getEmployee = (id: number): Employee =>
    ({
      name: 'John',
      age: 35,
      address: '123 St',
      country: 'United States'
    });

  const { name: fullName, age } = getEmployee(22);
  console.log('employee', fullName, age);

  const getEmployeeWorkInfo = (id: number): [number, string, string] =>
    ([
      id, 'Office St', 'France'
    ]);

  const [id, officeAddress] = getEmployeeWorkInfo(33); // assign variable depending on index
  console.log('employee', id, officeAddress);
}