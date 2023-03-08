export class School {
  id: number;
  name: string;
  address: string;
  phone: string;

  active: boolean;
  createDate: Date;
  lastModifiedDate: Date;


  constructor(id: number, name: string, address: string, phone: string, active: boolean, createDate: Date, lastModifiedDate: Date) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.active = active;
    this.createDate = createDate;
    this.lastModifiedDate = lastModifiedDate;
  }
}
