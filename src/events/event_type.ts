export class EventType {
  public static readonly CrisisStart = new EventType('CrisisStart');
  public static readonly CrisisEnd = new EventType('CrisisEnd');
  public static readonly CharacterSpawn = new EventType('CharacterSpawn');
  public static readonly Contract = new EventType('Contract');
  public static readonly Attack = new EventType('Attack');

  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}
