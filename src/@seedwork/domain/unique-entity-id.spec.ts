import InvalidUuidError from "../errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id";
import { validate as uuidValidate } from "uuid";


describe("Unique Entity ID", () => {
    it("should throw error when uuid is invalid", () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype, "validate");
        expect(() => new UniqueEntityId("fake-id")).toThrow(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalled();
    });

    it("should accept an uuid", () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype, "validate");
        const uuid = "9ad5d80a-7efa-4813-b694-cd739a964a5d"
        const vo = new UniqueEntityId(uuid);

        expect(vo.id).toBe(uuid);
        expect(validateSpy).toHaveBeenCalled();
    });

    it("should create a valid uuid", () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype, "validate");
        const vo = new UniqueEntityId();

        expect(uuidValidate(vo.id)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalled();
    });
});
