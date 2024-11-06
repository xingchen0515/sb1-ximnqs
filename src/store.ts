import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  excerpt: string;
}

interface BlogStore {
  posts: Post[];
  isAuthenticated: boolean;
  addPost: (post: Post) => void;
  deletePost: (id: string) => void;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useStore = create<BlogStore>()(
  persist(
    (set) => ({
      posts: [],
      isAuthenticated: false,
      addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
      deletePost: (id) => set((state) => ({ 
        posts: state.posts.filter(post => post.id !== id) 
      })),
      login: (username, password) => {
        if (username === 'admin' && password === 'admin') {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false })
    }),
    {
      name: 'blog-storage'
    }
  )
);