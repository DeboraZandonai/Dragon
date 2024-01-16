import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '../services/api';

export interface Dragon {
  id: string;
  createdAt: string;
  name: string;
  type: string;
  histories: string;
}

// Buscar lista de dragões
export const useDragons = () => {
  return useQuery<Dragon[]>('dragons', async () => {
    const { data } = await api.get('/dragon');
    return data;
  });
};

// Buscar detalhes de um dragão específico
export const useDragon = (id: string) => {
  return useQuery<Dragon>(['dragon', id], async () => {
    const { data } = await api.get(`/dragon/${id}`);
    return data;
  });
};

// Criar um dragão
export const useCreateDragon = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (dragon: Omit<Dragon, 'id'>) => {
      const { data } = await api.post('/dragon', dragon);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('dragons');
      },
    }
  );
};

// Atualizar um dragão
export const useUpdateDragon = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (dragon: Dragon) => {
      const { data } = await api.put(`/dragon/${dragon.id}`, dragon);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('dragons');
      },
    }
  );
};

// Deletar um dragão
export const useDeleteDragon = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      await api.delete(`/dragon/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('dragons');
      },
    }
  );
};

