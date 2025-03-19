import { Person } from './person.js';

describe('Modal Component', () => {
    it('opens on click', () => {
        //assert
        expect(true).toBe(true);
    })
})

// Test suite
describe(`${Person.name} class`, () => {

    let model;
    beforeEach(() => {
        //arrange
        model = new Person();
    });

    describe('default values ', () => {
        it('First name defaults to empty string', () => {

            // Assert: Verify the result
            expect(model.firstName).toBe('');
        });

        it('Middle name defaults to empty string', () => {

            //assert
            expect(model.middleName).toBe('');
        });

        it('Last name defaults to empty string', () => {

            //assert
            expect(model.lastName).toBe('');
        });
    })

    describe('Full name', () => {

        beforeEach(() => {

            // Arrange: Setup the test
             model = new Person({
                firstName: 'Tina',
                lastName: 'Rego'
             })
        })

        it('Middle initial when middle name is not empty', () => {
            // Arrange
            model.middleName = 'Benita';

            //Act 
            const result = model.fullName;

            //Audit: we are checking against the model itself
            const {firstName: fn, lastName: ln, middleName:mn} = model;

            //Assert
            expect(result).toBe(`${fn} ${mn[0]} ${ln}`);
        });

        it('When NO middle name returns first and last', () => {
            //arrange
            model.middleName = '';

            //act
            const result = model.fullName;

            //audit
            const {firstName: fn, lastName: ln} = model;

            //assert
            expect(model.fullName).toBe(`${fn} ${ln}`);
        });
    })
}); 




