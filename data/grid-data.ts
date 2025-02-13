interface GridItem {
  id: string; // Assuming each item has a unique ID
  title: string;
  description: string;
  img: string;
  link: string;
}
export const myGridItemsData: GridItem[] = [
  {
    id: "item1",
    title: "Item One",
    description: "Description of item one.",
    img: "/images/item1.jpg",
    link: "/item-one",
  },
  {
    id: "item2",
    title: "Item Two",
    description: "Description of item two.",
    img: "/images/item2.jpg",
    link: "/item-two",
  },
  // ... more items
];