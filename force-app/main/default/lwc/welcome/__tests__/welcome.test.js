import { createElement } from 'lwc';
import Welcome from 'c/welcome';

describe('c-welcome', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        const element = createElement('c-welcome', {
            is: Welcome
        });
        document.body.appendChild(element);
        const div = element.shadowRoot.querySelector("div");
        expect(div.textContent).toBe("Hello, World!");
    });
});