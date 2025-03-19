import { Person } from './person.js';

xdescribe('Modal Component', () => {
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

    xdescribe('Default values ', () => {
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

    xdescribe('Full name', () => {

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
            const { firstName: fn, lastName: ln, middleName: mn } = model;

            //Assert
            expect(result).toBe(`${fn} ${mn[0]} ${ln}`);
        });

        it('When NO middle name returns first and last', () => {
            //arrange
            model.middleName = '';

            //act
            const result = model.fullName;

            //audit
            const { firstName: fn, lastName: ln } = model;

            //assert
            expect(model.fullName).toBe(`${fn} ${ln}`);
        });
    })

    describe('Say my name', () => {

        //Spy is used to track calls to a function and the arguments passed to it
        it('Alerts the name of the user', () => {
            //arrange
            model.firstName = 'Ullas';
            model.lastName = 'Bannur';
            spyOn(window, 'alert');

            //act
            model.sayMyName();

            //assert
            expect(window.alert).toHaveBeenCalled();
            expect(window.alert).toHaveBeenCalledWith(model.fullName);
        });
    });

    describe('Get code name', () => {
        it('When confirmed is a coding god', () => {
            //arrange
            spyOn(window, 'confirm').and.returnValue(true);

            //act
            const result = model.getCodeName(); 

            //assert
            expect(result).toBe('TESTING GOD');

        });
        it('When NOT confirmed is a coding god', () => {
            //arrange
            spyOn(window, 'confirm').and.returnValue(false);

            //act
            const result = model.getCodeName(); 

            //assert
            expect(result).toBe('Scrub skipping tests in his best friend\'s ride!');
        });
    })
});




