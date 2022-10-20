import { Category} from './category';
import { omit } from 'lodash';
import UniqueEntityId from '../../../@seedwork/domain/unique-entity-id';

describe('Category Entity', () => {
    test('should be a valid entity', () => {
        let category: Category = new Category({name: "Movie"});
        let props = omit(category.props, 'created_at');

        expect(props).toStrictEqual({name: "Movie", description: null, is_active: true});
        expect(category.props.created_at).toBeInstanceOf(Date);

        let created_at = new Date();
        category = new Category({name: "Movie", description: "Some description", is_active: false, created_at});
        expect(category.props).toStrictEqual({name: "Movie", description: "Some description", is_active: false, created_at})
    });

    test('getter of name field', () => {
        const category: Category = new Category({name: "Movie"});
        expect(category.props.name).toEqual("Movie")
    });

    test('getter and setter of description field', () => {
        let category: Category = new Category({name: "Movie"});
        expect(category.props.description).toBeNull();

        category = new Category({name: "Movie", description: "Some description"});
        expect(category.props.description).toEqual("Some description");

        category = new Category({name: "Movie"});
        category["description"] = "other description";
        expect(category.props.description).toEqual("other description");

        category["description"] = undefined;
        expect(category.props.description).toBeNull();
    });

    test('getter and setter of is_active field', () => {
        let category: Category = new Category({name: "Movie"});
        expect(category.props.is_active).toBeTruthy();

        category = new Category({name: "Movie", is_active: false});
        expect(category.props.is_active).toBeFalsy();

        category = new Category({name: "Movie"});
        category["is_active"] = false;
        expect(category.props.is_active).toBeFalsy();
    });

    test('getter and setter of created_at field', () => {
        let category: Category = new Category({name: "Movie"});
        expect(category.props.created_at).toBeInstanceOf(Date);

        let created_at = new Date();
        category = new Category({name: "Movie", created_at});
        expect(category.props.created_at).toBe(created_at);
    });

    test('id field', () => {
        type CategoryData = {props: CategoryProperties; id?: UniqueEntityId};

        const data: CategoryData[] = [
            {props: {name: "Movie"}},
            {props: {name: "Movie"}, id: null},
            {props: {name: "Movie"}, id: undefined},
            {props: {name: "Movie"}, id: new UniqueEntityId()}
        ];

        data.forEach(i => {
            const category: Category = new Category(i.props, i.id as any);
        
            expect(category.id).not.toBeNull();
            expect (category.id).toBeInstanceOf(UniqueEntityId);
        });
    });
});
