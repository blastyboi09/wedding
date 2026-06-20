export type ProgramFlowItem = {
    time?: string;
    activity: string;
};

export type ProgramFlowSection = {
    title: string;
    items: ProgramFlowItem[];
};

export const programFlowSections: ProgramFlowSection[] = [
    {
        title: 'Preparation',
        items: [
            { time: '6:00 AM - 7:30 AM', activity: 'Preparation of the Bride (take a bath and have breakfast)' },
            { time: '7:30 AM', activity: 'Arrival of HMUA (set-up)' },
            { activity: 'Makeup of all female entourage should be done by 10 AM' },
            { activity: 'Delivery of breakfast crew meal' },
            { time: '7:30 AM - 9:30 AM', activity: 'Make-up and hairstyling of the Bride' },
            { time: '8:00 AM', activity: 'Arrival of Lumturi Events Team' },
            { time: '8:30 AM', activity: 'Delivery of entourage flowers (bridal bouquet and groom boutonniere)' },
            { activity: 'Catering set-up / lights and sounds / other supplier vendors' },
            { time: '8:30 AM', activity: 'Arrival of photo video team' },
            { activity: 'Photoshoot of essentials and details' },
            { time: '9:30 AM - 11:00 AM', activity: 'Beauty shots of the Bride (bridal robe)' },
            { activity: 'Pre-shoot of Bride with female entourage (prep look / getting ready)' },
            { activity: 'Gift giving to female entourage (optional)' },
            { activity: 'HMU of Mother of the Groom and Bride' },
            { time: '9:30 AM', activity: 'Arrival of male entourage' },
            { activity: 'Delivery of lunch crew meals' },
            { time: '10:00 AM - 1:30 PM', activity: 'Pogi shots of Groom and groomsmen (prep look / getting ready)' },
            { activity: 'Change of Groom suit and male entourage ceremony outfit' },
            { activity: 'Photoshoot of Groom and Best Man (dress up)' },
            { activity: 'Photoshoot of Groom and male entourage' },
            { activity: 'Gift giving to male entourage (optional)' },
            { activity: "Gift giving of Bride's gift to Groom (optional)" },
            { activity: "Groom's family picture - parents and siblings" },
            { time: '11:00 AM', activity: 'Retouch of the Bride (hair up and make-up - ceremony look)' },
            { activity: 'Change of bridal gown and female entourage gown' },
            { time: '12:00 PM - 1:30 PM', activity: 'Continuation of shoot of Bride in her bridal gown' },
            { activity: 'Photoshoot of Bride with female entourage' },
            { activity: "Gift giving of Groom's gift to Bride (optional)" },
            { activity: "Bride's family picture - parents and siblings" },
            { time: '1:30 PM', activity: "Travel going to ceremony area of the Groom and Bride's family" },
            { time: '1:45 PM', activity: 'Travel going to ceremony of the Bride' },
            { time: '2:00 PM - 2:30 PM', activity: 'Arrival of officiating minister and guests' },
            { activity: 'Final touches: looks / flowers / symbols' },
            { activity: 'Preparation for the ceremony / distribution of flowers to full entourage' },
            { time: '2:00 PM - 2:45 PM', activity: 'Start of queuing of the members of entourage' },
            { time: '2:45 PM - 3:00 PM', activity: 'Processional' },
            { activity: 'Entourage march song (repeat if necessary)' },
            { activity: 'Bridal walk song' },
        ],
    },
    {
        title: 'Wedding Ceremony',
        items: [
            { time: '3:00 PM - 4:00 PM', activity: 'Wedding ceremony proper' },
            { time: '3:00 PM', activity: 'Delivery of cakes / set-up of grazing table / photobooth at reception venue' },
            { time: '4:00 PM - 4:30 PM', activity: 'Photo opportunity with the newlyweds after the ceremony' },
            { time: '4:30 PM', activity: 'Guests travel to reception venue' },
            { activity: 'Registration and seating arrangement of guests' },
            { activity: 'Opening of grazing table and photobooth / 1st set of band (if applicable)' },
            { activity: 'Delivery of dinner crew meal' },
        ],
    },
    {
        title: 'Post Nup',
        items: [
            { time: '4:30 PM - 5:10 PM', activity: 'Post nup of newlywed couple' },
            { activity: 'Post nup of newlywed couple with entourage' },
            { time: '5:10 PM - 5:30 PM', activity: 'Final look c/o HMUA - reception look' },
            { activity: 'Meal time of the couple (heavy meal or light meal)' },
        ],
    },
    {
        title: 'Reception Proper',
        items: [
            { time: '5:10 PM - 5:30 PM', activity: 'Pre-program of the host (games)' },
            { time: '5:30 PM - 5:40 PM', activity: 'Acknowledgement of principal sponsors and parents' },
            { time: '5:40 PM - 5:55 PM', activity: "Entrance of Groom's squad and Bride's squad (upbeat song / TikTok)" },
            { time: '5:55 PM - 6:10 PM', activity: 'Grand entrance of newlywed couple (upbeat song)' },
            { time: '6:10 PM - 6:15 PM', activity: 'Parents dance (mother and son / father and daughter)' },
            { time: '6:15 PM - 6:20 PM', activity: 'Couple first dance' },
            { time: '6:20 PM - 6:25 PM', activity: 'Prosperity dance (optional)' },
            { time: '6:25 PM - 6:55 PM', activity: 'Meal time (silent queuing of guests / photo opportunity with the couple)' },
            { activity: '2nd set of the band during meal time' },
            { time: '6:55 PM - 7:00 PM', activity: 'Play the AVP of prenup photos and save-the-date video' },
            { time: '7:00 PM - 7:10 PM', activity: 'Cake slicing and wine toasting (MOH and BM speech)' },
            { time: '7:10 PM - 7:15 PM', activity: 'Well wishes / message of principal sponsors and parents' },
            { time: '7:15 PM - 7:25 PM', activity: 'Singles games / garter retrieval' },
            { time: '7:25 PM - 7:35 PM', activity: 'Playing of same-day edit video' },
            { time: '7:35 PM - 7:40 PM', activity: 'Thank you message of newlyweds to their parents, principal sponsors, entourage, families, guests, and suppliers' },
        ],
    },
];

export const programFlowNotes = [
    'This timeline exists to give suppliers a guide of the chronological order of events from preparation to reception.',
    'The times stated above are still subject to change depending on what will happen on the day of the event.',
];
