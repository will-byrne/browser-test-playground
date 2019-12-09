const formCommands = {
    checkMessage: async function(message: string): Promise<void> {
        return this.waitForElementVisible('@message')
            .assert
            .containsText('@message', message);
    },
};

export = {
    commands: [formCommands],
    url: 'http://localhost:3000',
    elements: {
        message: {
            selector: 'h2'
        },
    },
};
