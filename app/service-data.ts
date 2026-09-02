export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  included: string[];
  prepare: string[];
  bestFor: string[];
};

export const services: Service[] = [
  {
    slug: 'truck-loading',
    number: '01',
    title: 'Truck loading',
    shortTitle: 'Load your truck',
    summary: 'Careful, space-smart loading for rental trucks, trailers, PODS, and storage containers.',
    intro: 'Rashad helps carry, stage, and load your belongings so the weight is balanced and the space is used well. You provide the truck or container; he brings the labor and core moving gear.',
    included: ['Carrying boxes and furniture', 'Organizing items inside the truck or container', 'Dolly, moving blankets, and basic tools', 'Basic furniture disassembly when needed'],
    prepare: ['Reserve and pick up the right-size truck', 'Have boxes sealed and walkways clear', 'Point out fragile, heavy, or high-priority items', 'Confirm parking, stairs, and elevator access'],
    bestFor: ['Apartments and homes', 'Rental trucks and trailers', 'PODS and storage containers'],
  },
  {
    slug: 'unloading',
    number: '02',
    title: 'Unloading & placement',
    shortTitle: 'Unload & place',
    summary: 'Boxes and furniture carried inside and placed in the rooms where you want them.',
    intro: 'Get the truck emptied without leaving everything stacked at the door. Rashad unloads, carries, and places items by room so settling in starts with less chaos.',
    included: ['Unloading trucks, trailers, and containers', 'Room-by-room placement', 'Dolly and moving blankets', 'Basic furniture reassembly when arranged'],
    prepare: ['Label boxes by room', 'Clear the path from truck to home', 'Reserve loading zones or elevators', 'Choose furniture placement before arrival'],
    bestFor: ['Local move-ins', 'Long-distance arrivals', 'Storage unit clean-outs'],
  },
  {
    slug: 'heavy-lifting',
    number: '03',
    title: 'Heavy lifting',
    shortTitle: 'Lift the heavy stuff',
    summary: 'An extra set of hands for bulky furniture, appliances, and room-to-room moves.',
    intro: 'Sometimes you do not need a full move—you just need capable help with the hard part. Share the item, dimensions, stairs, and path so Rashad can confirm the safest plan.',
    included: ['Couches, mattresses, and bulky furniture', 'Appliance moving when conditions allow', 'Room-to-room rearranging', 'Dolly and moving blankets'],
    prepare: ['Measure doorways and tight turns', 'Disconnect appliances in advance', 'Clear the full travel path', 'Disclose unusual weight or damage'],
    bestFor: ['Single-item moves', 'Furniture rearranging', 'Garage and storage projects'],
  },
  {
    slug: 'furniture-assembly',
    number: '04',
    title: 'Furniture assembly',
    shortTitle: 'Build it back',
    summary: 'Basic furniture disassembly and reassembly during your move, with a toolbox brought to the job.',
    intro: 'Beds, tables, and other basic furniture often move more safely in pieces. Rashad can handle straightforward disassembly and reassembly as part of your moving help.',
    included: ['Basic beds, tables, and shelving', 'Disassembly before loading', 'Reassembly after placement', 'A basic moving-day toolbox'],
    prepare: ['Keep manufacturer hardware and instructions handy', 'Photograph complicated setups beforehand', 'Identify damaged or missing parts', 'Ask ahead about specialty furniture'],
    bestFor: ['Beds and tables', 'Apartment moves', 'Furniture that will not fit through doors'],
  },
  {
    slug: 'rental-truck-driving',
    number: '05',
    title: 'Rental truck driving',
    shortTitle: 'Help drive',
    summary: 'Local or long-distance rental-truck driving support when confirmed before move day.',
    intro: 'If driving the rental truck is the part you do not want to handle, include the route and truck details in your request. Availability and requirements are confirmed directly before the job.',
    included: ['Pre-arranged local or long-distance driving', 'Route and timing review', 'Pickup and destination coordination', 'Driving support paired with moving labor when agreed'],
    prepare: ['Share the rental company and truck size', 'Confirm the rental agreement allows an additional driver', 'Provide the full route and timing', 'Keep fuel, toll, and rental costs in your plan'],
    bestFor: ['Customers uncomfortable with large trucks', 'One-way rentals', 'Local and long-distance moves'],
  },
];

export const serviceAreas = ['Houston', 'Katy', 'Cypress', 'Sugar Land', 'Pearland', 'Spring', 'Humble', 'The Woodlands'];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
