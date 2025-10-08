import create from "zustand";

export const useStore = create((set) => ({
  inRoom: null,
  messages: [],
  enterRoom: (name) => set({ inRoom: name, messages: [...(get().messages || []), { text: `Entered ${name}`, ts: Date.now() }] }),
  pushMessage: (msg) => set((s) => ({ messages: [...s.messages, { text: msg, ts: Date.now() }] })),
}));

// small helper because get() not directly exported
const get = () => ({ messages: [] });
