import { create } from "zustand";
import axios from "axios";

interface CardData {
  id: string;
  imageUrl: string;
  title: string;
  isLiked: boolean;
}

interface StoreState {
  cards: CardData[];

  filter: "all" | "liked";
  fetchCards: () => Promise<void>;
  addCard: (card: CardData) => void;
  toggleLike: (id: string) => void;
  deleteCard: (id: string) => void;
  setFilter: (filter: "all" | "liked") => void;
}

export const useStore = create<StoreState>((set) => ({
  cards: [],

  filter: "all",
  fetchCards: async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      const data = response.data.results.map((item: any, index: number) => ({
        id: index.toString(),
        imageUrl: item.picture.large,
        title: `${item.name.first} ${item.name.last}`,
        isLiked: false,
      }));
      set(() => ({
        cards: data,
      }));
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  },
  addCard: (card) =>
    set((state) => ({
      cards: [...state.cards, card],
    })),

  toggleLike: (id) =>
    set((state) => {
      const updatedCards = state.cards.map((card) =>
        card.id === id ? { ...card, isLiked: !card.isLiked } : card
      );
      return {
        cards: updatedCards,
      };
    }),

  deleteCard: (id) =>
    set((state) => ({
      cards: state.cards.filter((card) => card.id !== id),
    })),

  setFilter: (filter) =>
    set(() => ({
      filter,
    })),
}));
