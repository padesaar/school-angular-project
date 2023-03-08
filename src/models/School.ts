export class School {
  name: string;
  address: string;
  phone: string;

  isActive: boolean;


  constructor(name: string, address: string, phone: string, isActive: boolean) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.isActive = isActive;
  }
}
