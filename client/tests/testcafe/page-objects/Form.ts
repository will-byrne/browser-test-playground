import { Selector, t } from 'testcafe';

class Form {
    private lorum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare, ipsum id fermentum aliquam, orci nisi vestibulum lectus, eget vestibulum sapien orci ac dolor. Sed venenatis at metus in pulvinar. Sed et neque a leo consectetur aliquet sit amet sit amet purus. Cras laoreet consectetur diam, vitae maximus leo eleifend nec. Donec quam libero, faucibus nec pellentesque ac, porttitor nec justo. Vestibulum a dictum felis, a euismod odio. Proin eleifend lectus eget enim efficitur condimentum tempus quis arcu. Ut lobortis sed dui sit amet tempor.';
    private form: Selector;
    private readonly nameInput: Selector;
    private readonly ageInput: Selector;
    private colourInput: Selector;
    private commentsBox: Selector;
    private submitButton: Selector;
    private colourOptions: Selector;

    constructor() {
        this.form = Selector('form');
        this.nameInput = Selector('input[name=name]');
        this.ageInput = Selector('input[name=age]');
        this.colourInput = Selector('select');
        this.colourOptions = this.colourInput.find("option");
        this.commentsBox = Selector('textarea');
        this.submitButton = Selector('button');
    }

    async formVisible(): Promise<void> {
        await t.expect(this.form.visible).ok();
    }

    async setName(name: string = 'Sparkles the Unicorn'): Promise<void> {
        await t.typeText(this.nameInput, name);
    }

    async setAge(age: number = 9000): Promise<void> {
        await t.typeText(this.ageInput, age.toString());
    }

    async setFavouriteColour(colour: 'Red' | 'blue' | 'green' | 'glitter' = 'glitter'): Promise<void> {
        await t.click(this.colourInput)
            .click(this.colourOptions.withAttribute('value', colour))
    }

    async setComments(comment: string = this.lorum): Promise<void> {
        await t.typeText(this.commentsBox, comment);
    }

    async submit(): Promise<void> {
        await t.click(this.submitButton);
    }
}

export default new Form();