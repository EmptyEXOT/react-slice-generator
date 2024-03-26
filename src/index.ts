#! /usr/bin/env node
import {Command} from '@commander-js/extra-typings';
import figlet from 'figlet';
import {generateEntity} from "./commands/generate";

console.log(figlet
    .textSync(
        'RSG',
    )
)

const program = new Command()
    .name('React Slice Generator')
    .version('1.0.0')
    .description('Template generator for React-based apps')

program
    .command('entity').description('generates entity')
    .argument('<sliceName>')
    .action((sliceName) => {
        generateEntity(sliceName)
    })

const options = program.opts();
export type Options = typeof options;

program.parse()

//>rtg -g entity user