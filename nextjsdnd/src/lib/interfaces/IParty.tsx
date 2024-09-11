import ICharacter from "./ICharacter";

export default interface IParty{
    characters:ICharacter[],
    reserve:ICharacter[],
}