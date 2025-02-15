import { ObjectValues } from './helpers';

export const species = {
    human: 'human',
    reptilian: 'reptilians',
    spaceDwarf: 'space dwarf',
    machine: 'machine',
} as const;

export type Species = ObjectValues<typeof species>;
