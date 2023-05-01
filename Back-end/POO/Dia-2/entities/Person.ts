class Person {
  private _age = Person.getAge(this._birthDate);

  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {
    this.validatePerson()
  }

  public get name(): string {
    return this._name;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public get age(): number {
    return this._age;
  }

  public set name(nome: string) {
    this.validateName(nome);
    this._name = nome;
  }

  public set birthDate(data: Date) {
    this.validateDate(data);
    this._birthDate = data;
  }

  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error("O nome deve ter mais de 2 caracteres");
    }
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }

  private validateDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error("A data não pode ser uma data futura");
    }
    if (Person.getAge(date) > 120/*idade maxima*/) {
      throw new Error("A pessoa não pode possuir mais de 120 anos");
    }
  }

  private validatePerson(): void {
    this.validateDate(this.birthDate);
    this.validateName(this.name)
  }

}

export default Person;