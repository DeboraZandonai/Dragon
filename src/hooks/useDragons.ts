import { useQuery, useMutation } from '@tanstack/react-query';
import api from '../services/api';
import { queryClient } from '../services/queryClient';

export interface Dragon {
  id: string;
  createdAt: string;
  name: string;
  type: string;
  histories: string;
}

// Buscar lista de dragões
export const useDragons = () => {
  return useQuery<Dragon[]>({
    queryKey: ['dragons'],
    queryFn: async () => {
      const { data } = await api.get('/dragon');
      return data;
    }
  });
};


// Buscar detalhes de um dragão específico
export const useDragon = (id: string) => {
  return useQuery<Dragon>({
    queryKey: ['dragon', id],
    queryFn: async () => {
      const { data } = await api.get(`/dragon/${id}`);
      return data;
    }
  });
};

// Criar um dragão
export const useCreateDragon = () => {
  return useMutation<Dragon, Error, Omit<Dragon, 'id'>>({
    mutationFn: async (dragon) => {
      const { data } = await api.post('/dragon', dragon);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dragons'] });
    }
  });
};

// Atualizar um dragão
export const useUpdateDragon = () => {
  return useMutation<Dragon, Error, Dragon>({
    mutationFn: async (dragon) => {
      const { data } = await api.put(`/dragon/${dragon.id}`, dragon);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dragons'] });
    }
  });
};


// Deletar um dragão
export const useDeleteDragon = () => {
  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/dragon/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dragons'] });
    }
  });
};
