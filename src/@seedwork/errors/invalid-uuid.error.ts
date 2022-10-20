export default class InvalidUuidError extends Error {
    constructor(message?: string) {
        super(message || 'ID muste be a valid UUID');
        this.name = 'InvalidUuidError';
    }
}
