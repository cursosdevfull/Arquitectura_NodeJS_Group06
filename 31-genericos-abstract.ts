abstract class AbstractEntity<Entity, TypeId> {
  insert(entity: Entity): Promise<Entity> {
    console.log("inserted");
    return Promise.resolve(entity);
  }

  update(id: TypeId, entity: Entity): Promise<Entity> {
    return Promise.resolve(entity);
  }
}

class Medic {
  constructor(
    public readonly id: string,
    public name: string,
    public lastname: string
  ) {}
}

class MedicInfrastructure extends AbstractEntity<Medic, string> {}

const medic = new Medic("123", "Javier", "Prado");
const infra = new MedicInfrastructure();

infra.insert(medic);
