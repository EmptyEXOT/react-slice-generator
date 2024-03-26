import * as path from "path";

export const templatePaths = {
    entity: {
        slice: path.resolve(__dirname, 'templates', 'entity.slice.rsgt'),
        types: path.resolve(__dirname, 'templates', 'entity.types.rsgt'),
        ui: path.resolve(__dirname, 'templates', 'entity.ui.rsgt'),
        selectors: path.resolve(__dirname, 'templates', 'entity.selectors.rsgt'),
        index: path.resolve(__dirname, 'templates', 'entity.index.rsgt'),
    }
}