export type SeatingTable = {
    id: string;
    label: string;
    guests: string[];
};

export const seatingTables: SeatingTable[] = [
    {
        id: 'vip-1',
        label: 'VIP 1',
        guests: [],
    },
    {
        id: 'vip-2',
        label: 'VIP 2',
        guests: [],
    },
    {
        id: 'table-1',
        label: 'Table 1',
        guests: [
            'MC Villalobos',
            'Kenneth Arcilla',
            'Jade Mapola',
            'Adrian Tirador',
            'JM Faeldonia',
            'Marjorie Calimoso',
        ],
    },
    { id: 'table-2', label: 'Table 2', guests: [] },
    { id: 'table-3', label: 'Table 3', guests: [] },
    { id: 'table-4', label: 'Table 4', guests: [] },
    { id: 'table-5', label: 'Table 5', guests: [] },
    { id: 'table-6', label: 'Table 6', guests: [] },
    { id: 'table-7', label: 'Table 7', guests: [] },
    { id: 'table-8', label: 'Table 8', guests: [] },
];

export const seatingMapItems = [
    { id: 'projector', label: 'Projector', type: 'fixture' },
    { id: 'stage', label: 'Stage', type: 'fixture' },
    { id: 'cake', label: 'Cake Table', type: 'round-fixture' },
    { id: 'lights', label: 'Lights & Sounds', type: 'fixture' },
    { id: 'vip-1', label: 'VIP 1', type: 'vip' },
    { id: 'vip-2', label: 'VIP 2', type: 'vip' },
    { id: 'table-1', label: 'Table 1', type: 'table' },
    { id: 'table-2', label: 'Table 2', type: 'table' },
    { id: 'table-3', label: 'Table 3', type: 'table' },
    { id: 'table-4', label: 'Table 4', type: 'table' },
    { id: 'table-5', label: 'Table 5', type: 'table' },
    { id: 'table-6', label: 'Table 6', type: 'table' },
    { id: 'table-7', label: 'Table 7', type: 'table' },
    { id: 'table-8', label: 'Table 8', type: 'table' },
    { id: 'buffet', label: 'Buffet', type: 'fixture' },
    { id: 'capacity', label: 'Layout / 75 Pax', type: 'fixture' },
];
