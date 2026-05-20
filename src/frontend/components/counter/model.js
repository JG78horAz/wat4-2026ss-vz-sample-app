<<<<<<< HEAD
import Math from '../../utils/math.js';
=======
import { Math } from '../../utils/math.js';
>>>>>>> bde9f08a17344d3a3f9049650f5bebc3c7447435

export class CounterModel {
    #value;
    get value() { return this.#value; }

    get isPrime() { return Math.isPrime(this.#value); }

    constructor(apiService) {
        this.apiService = apiService;
        this.subscribers = [];
    }

    async initialize() {
        this.#value = await this.apiService.getValue();
        this.notifySubscribers();
    }

    async increment() {
        this.#value = await this.apiService.increment();
        this.notifySubscribers();
    }

    async decrement() {
        this.#value = await this.apiService.decrement();
        this.notifySubscribers();
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    notifySubscribers() {
        this.subscribers.forEach(callback => callback());
    }
}
