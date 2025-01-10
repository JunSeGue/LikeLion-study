import ILens from "./ILens";

export default class Lens implements ILens{
    zoomIn(level: number): void {
        console.log('zoom in');
    }
    zoomOut(level: number) : void {
        console.log('zoom Out');
    }
}