export const PALETTE = {
  bg: '#F7F1E6', // warm beige
  surface: '#FFF9F1',
  surface2: '#F1E4D7',
  text: '#3E2A1C', // soft brown (dark)
  text2: '#6B4F3A',
  border: '#E6D4C2',
  chip: '#E9D8C6',
  chipActive: '#D6B89C',
  shadow: '#000',
};

export const CATEGORIES = [
  { key: 'all', label: 'All Categories', emoji: '📦' },
  { key: 'tshirts', label: 'T-Shirt', emoji: '👕' },
  { key: 'bags', label: 'Bags', emoji: '👜' },
  { key: 'cards', label: 'Cards', emoji: '🃏' },
  { key: 'books', label: 'Books', emoji: '📚' },
  { key: 'accessories', label: 'Accessories', emoji: '💍' },
];

export const PRODUCTS = [
  {
    id: 'p1',
    name: 'FSL Starter Cards (50 signs)',
    price: 299,
    category: 'cards',
    emoji: '🃏',
    imageEmoji: '🤟',
    description:
      'A friendly starter deck to practice everyday FSL signs with clear prompts and spaced repetition tips.',
  },
  {
    id: 'p2',
    name: 'Learn FSL Tote Bag (Beginner)',
    price: 249,
    category: 'bags',
    emoji: '👜',
    imageEmoji: '👜',
    description:
      'Carry your learning everywhere. Durable canvas tote with a gentle, inclusive message.',
  },
  {
    id: 'p3',
    name: '“Sign With Me” T‑Shirt',
    price: 399,
    category: 'tshirts',
    emoji: '👕',
    imageEmoji: '👕',
    description:
      'Soft, beginner-friendly design that invites conversation and supports Deaf culture.',
  },
  {
    id: 'p4',
    name: 'Pocket FSL Phrase Book',
    price: 349,
    category: 'books',
    emoji: '📚',
    imageEmoji: '📘',
    description:
      'Common phrases, polite starters, and daily essentials with practice notes for beginners.',
  },
  {
    id: 'p5',
    name: 'Alphabet Cards: A–Z',
    price: 189,
    category: 'cards',
    emoji: '🃏',
    imageEmoji: '🔤',
    description:
      'Build confidence with finger-spelling practice cards, designed to be clear and approachable.',
  },
  {
    id: 'p6',
    name: 'Handshape Keychain Set',
    price: 159,
    category: 'accessories',
    emoji: '💍',
    imageEmoji: '🔑',
    description:
      'Mini handshape reminders you can clip to your bag—quick cues for everyday practice.',
  },
  {
    id: 'p7',
    name: 'Canvas Bag: “Respect Deaf Culture”',
    price: 289,
    category: 'bags',
    emoji: '👜',
    imageEmoji: '🧏',
    description:
      'A gentle statement piece that celebrates inclusion and supports learning on the go.',
  },
  {
    id: 'p8',
    name: 'Cozy Learning Tee (Inclusive Fit)',
    price: 429,
    category: 'tshirts',
    emoji: '👕',
    imageEmoji: '🫶',
    description:
      'Comfort-first shirt with a welcoming vibe—made for learners, allies, and community.',
  },
  {
    id: 'p9',
    name: 'Everyday Signs Mini Book',
    price: 219,
    category: 'books',
    emoji: '📚',
    imageEmoji: '📗',
    description:
      'Short lessons and practice prompts to help you use signs in real-life daily moments.',
  },
  {
    id: 'p10',
    name: 'Sticker Pack: Handshapes',
    price: 99,
    category: 'accessories',
    emoji: '💍',
    imageEmoji: '✨',
    description:
      'Cute, emoji-inspired stickers to make learning playful—decorate notebooks, bottles, and more.',
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) ?? null;
}

export function formatPeso(amount) {
  const n = Number(amount);
  if (Number.isNaN(n)) return '₱—';
  try {
    return `₱${n.toLocaleString('en-PH')}`;
  } catch {
    return `₱${n}`;
  }
}

