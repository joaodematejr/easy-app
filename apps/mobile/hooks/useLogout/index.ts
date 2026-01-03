import { useAuthStore } from "@/stores/authStore";

export function useLogout() {
  const { logout } = useAuthStore();
  return () => {
    logout();
  };
}
