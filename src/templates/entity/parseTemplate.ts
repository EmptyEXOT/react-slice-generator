import fs from "fs";
import {capitalize} from "../../lib/capitalize";
import {toCamelCase} from "../../lib/toCamelCase";

export const parseTemplate = (name: string, templatePath: string) => {
    const template = fs.readFileSync(templatePath, 'utf8')
    return template.toString()
        .replaceAll('<<name>>', toCamelCase(name))
        .replaceAll('<<Name>>', capitalize(toCamelCase(name)))
}