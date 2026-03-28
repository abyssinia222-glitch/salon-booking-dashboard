export interface Business {
  id: number;
  name: string;
  address: string;
  city: string;
}

export const businesses: Business[] = [
  { id: 1, name: "Glamour Studio", address: "123 Main St", city: "Chicago" },
  { id: 2, name: "The Mane Event", address: "456 Oak Ave", city: "Chicago" },
  { id: 3, name: "Shear Perfection", address: "789 Elm Rd", city: "Evanston" },
  { id: 4, name: "Luxe Cuts", address: "321 Pine Blvd", city: "Chicago" },
  { id: 5, name: "Style & Grace", address: "654 Maple Dr", city: "Oak Park" },
];
