import fs from "fs";
import {join} from "path";
import {parseTemplate} from "../templates/entity/parseTemplate";
import {toCamelCase} from "../lib/toCamelCase";
import {capitalize} from "../lib/capitalize";
import {templatePaths} from "../paths";

export function generateEntity(name: string) {
    try {
        if (!fs.existsSync(join(process.cwd(), 'src', 'entity'))) {
            handleError(`Entity slice doesn't exist`)
            return;
        }

        if (fs.existsSync(join(process.cwd(), toCamelCase(name)))) {
            handleError('Entity with such name already exists')
            return
        }

        fs.mkdirSync(join(process.cwd(), 'src', 'entity', name));
        fs.mkdirSync(join(process.cwd(), 'src', 'entity', name, 'model'));
        fs.mkdirSync(join(process.cwd(), 'src', 'entity', name, 'ui'));
        fs.writeFileSync(join(process.cwd(), 'src', 'entity', name, 'model', toCamelCase( `${name}Slice.ts`)), parseTemplate(name, templatePaths.entity.slice))
        fs.writeFileSync(join(process.cwd(), 'src', 'entity', name, 'model', 'types.ts'), parseTemplate(name, templatePaths.entity.types))
        fs.writeFileSync(join(process.cwd(), 'src', 'entity', name, 'model', 'selectors.ts'), parseTemplate(name, templatePaths.entity.selectors))
        fs.writeFileSync(join(process.cwd(), 'src', 'entity', name, 'ui', capitalize(toCamelCase( `${name}.tsx`))), parseTemplate(name, templatePaths.entity.ui))
        fs.writeFileSync(join(process.cwd(), 'src', 'entity', name, 'index.ts'), parseTemplate(name, templatePaths.entity.index))
    } catch (err: any) {
        handleError(err)
    }
}

function handleError(error: string) {
    console.error("\x1b[31m%s\x1b[0m", error)
    return;
}