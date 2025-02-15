import { ObjectValues } from './helpers';

export const food = {
    plants: 'plants',
    meat: 'meat',
    solar: 'solar',
    rocks: 'rocks',
    electricity: 'electricity',
} as const;

export type Food = ObjectValues<typeof food>;
