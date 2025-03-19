import { Person } from './person.js';

describe('Modal Component', () => {
    it('opens on click', () => {
        //assert
        expect(true).toBe(true);
    })
})

// Test suite
describe(`${Person.name} class`, () => {

    describe('default values ', () => {
        it('First name defaults to empty string', () => {
            // Arrange: Set up the initial conditions
            const data = { firstName: null };

            // Act: Perform the action
            const model = new Person(data);

            // Assert: Verify the result
            expect(model.firstName).toBe('');
        });

        it('Middle name defaults to empty string', () => {
            //arrange 
            const data = { middleName: null };

            //act
            const model = new Person(data);

            //assert
            expect(model.middleName).toBe('');
        });

        it('Last name defaults to empty string', () => {
            //arrange 
            const data = { lastName: null };

            //act
            const model = new Person(data);

            //assert
            expect(model.lastName).toBe('');
        });
    })

});



