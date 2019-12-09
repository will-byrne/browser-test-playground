const lorum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare, ipsum id fermentum aliquam, orci nisi vestibulum lectus, eget vestibulum sapien orci ac dolor. Sed venenatis at metus in pulvinar. Sed et neque a leo consectetur aliquet sit amet sit amet purus. Cras laoreet consectetur diam, vitae maximus leo eleifend nec. Donec quam libero, faucibus nec pellentesque ac, porttitor nec justo. Vestibulum a dictum felis, a euismod odio. Proin eleifend lectus eget enim efficitur condimentum tempus quis arcu. Ut lobortis sed dui sit amet tempor.'

const formCommands = {
    formVisible: async function(): Promise<void> {
        return this.waitForElementVisible("@form");
    },
    setName: async function(name: string = 'Sparkles the Unicorn'): Promise<void> {
        return this.setValue("@nameInput", name)
    },
    setAge: async function(age: number = 9000): Promise<void> {
        return this.setValue("@ageInput", age);
    },
    setFavouriteColour: async function(colour: 'red' | 'blue' | 'green' | 'glitter' = 'glitter'): Promise<void> {
        return this.setValue('@colourInput', colour);
    },
    setComments: async function(comment: string = lorum): Promise<void> {
        return this.setValue("@commentsBox", comment);
    },
    submit: async function(): Promise<void> {
        return this.click('@submitButton');
    },
};

export = {
    commands: [formCommands],
    url: 'http://localhost:3000',
    elements: {
        form: {
            selector: 'form'
        },
        nameInput: {
            selector: 'input[name=name]'
        },
        ageInput: {
            selector: 'input[name=age]'
        },
        colourInput: {
            selector: 'select'
        },
        commentsBox: {
            selector: 'textarea'
        },
        submitButton: {
            selector: 'button'
        },
    },
};
