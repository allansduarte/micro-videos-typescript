import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id";

export type CategoryProperties = {
    name: string,
    description?: string
    is_active?: boolean,
    created_at?: Date
};

export class Category {
    public readonly id: UniqueEntityId;

    constructor(public readonly props: CategoryProperties, id?: string) {
        this.id = id || new UniqueEntityId();
        this.props.description = this.props.description ?? null;
        this.props.is_active = this.props.is_active ?? true;
        this.props.created_at = this.props.created_at ?? new Date();
    }

    get name() { return this.props.name; }

    get description() { return this.description; }

    private set description(value: string) { this.props.description = value ?? null; }

    get is_active() { return this.is_active; }

    private set  is_active(value: boolean) { this.props.is_active = value ?? true; }

    get created_at() { return this.props.created_at; }

    private set created_at(value: boolean) { this.props.created_at = value ?? new Date(); }
}
