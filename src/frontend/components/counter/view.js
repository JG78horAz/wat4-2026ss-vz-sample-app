export class CounterView {
    #shadowRoot;
    get shadowRoot() { return this.#shadowRoot; }
    set shadowRoot(shadowRoot) { this.#shadowRoot = shadowRoot; }

    constructor(model) {
        this.model = model;
        this.model.subscribe(() => this.render());
    }

    onIncrement() {
        throw new Error("controller not set");
    }

    onDecrement() {
        throw new Error("controller not set");
    }

    render() {
        this.#shadowRoot.innerHTML = `
            <style>
                .highlight { background-color: yellow; }
            </style>
            <div>
<<<<<<< HEAD
                <h2>Counter: <span id="counter-value" data-testid="counter-value">0</span></h2>
                <button id="increment">Increment</button>
                <button id="decrement">Decrement</button>
                <p>isPrime: <span id="is-prime" data-testid="is-prime"></span></p>
=======
                <h2>Counter: <span id="counter-value">0</span></h2>
                <button id="increment">Increment</button>
                <button id="decrement">Decrement</button>
                <p>isPrime: <span id="is-prime"></span></p>
>>>>>>> bde9f08a17344d3a3f9049650f5bebc3c7447435
            </div>
        `;

        const valueElement = this.#shadowRoot.getElementById("counter-value");
        const incrementButton = this.#shadowRoot.getElementById("increment");
        const decrementButton = this.#shadowRoot.getElementById("decrement");
        const isPrimeElement = this.#shadowRoot.getElementById("is-prime");

        valueElement.innerHTML = this.model.value;
        incrementButton.addEventListener("click", () => this.onIncrement());
        decrementButton.addEventListener("click", () => this.onDecrement());
        isPrimeElement.innerHTML = this.model.isPrime;
        isPrimeElement.classList.toggle("highlight", this.model.isPrime)
    }
}
