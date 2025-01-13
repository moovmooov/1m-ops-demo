import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';

interface SocketStore {
  socket: Socket | null;
  isConnected: boolean;
  output: string[];
  connect: (url?: string) => void;
  disconnect: () => void;
  emitEvent: (eventName: string, data?: any) => void;
  addOutput: (text: string) => void;
}

export const useSocketStore = create<SocketStore>((set, get) => ({
  socket: null,
  isConnected: false,
  output: ["[Welcome to ScyllaDB Tech Demo]\n"],
  
  connect: (url = 'http://localhost:5000') => {
    const { socket } = get();
    if (socket) return;

    console.log('Initializing socket connection...');
    const newSocket = io(url, {
      transports: ['websocket'],
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    newSocket.on('connect', () => {
      console.log('Socket connected successfully');
      set({ isConnected: true });
    });

    newSocket.on('disconnect', () => {
      console.log('Socket disconnected');
      set({ isConnected: false });
    });

    newSocket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      set({ isConnected: false });
    });

    newSocket.on('playbook_output', (data: { output: string }) => {
      console.log('Received playbook output:', data);
      get().addOutput(data.output);
    });

    set({ socket: newSocket });
  },

  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.close();
      set({ socket: null, isConnected: false });
    }
  },

  emitEvent: (eventName: string) => {
    const { socket, isConnected } = get();
    if (socket && isConnected) {
      console.log(`Emitting event: ${eventName}`);
      socket.emit(eventName);
    } else {
      console.error(`Cannot emit event ${eventName}: socket not connected`);
    }
  },

  addOutput: (text: string) => {
    set((state) => ({
      output: [...state.output, text],
    }));
  },
})); 