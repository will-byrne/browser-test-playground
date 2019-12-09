import { Selector, t } from 'testcafe';

class Results {
    private message: Selector;
    constructor() {
        this.message = Selector('h2');
    }

    async checkMessage(message: string): Promise<void> {
        await t.expect(this.message.textContent).eql(message);
    }
}

export default new Results();