
import api from ".";
import { AxiosError } from "axios";
import type { Category, NewCategoryInput } from "my-types";

// Define la forma de la respuesta del backend
interface ApiResponse<T> {
  payload: T;
}


export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const res = await api.get<ApiResponse<Category[]>>("/category");

    return res.data.payload;
  } catch (error) {
    const err = error as AxiosError;

    console.error("Error fetching categories:", err.message);

    // Puedes lanzar el error para manejarlo en UI
    throw err;
  }
};

export const createCategory = async (data: NewCategoryInput): Promise<Category> => {
  try {
    const res = await api.post<ApiResponse<Category>>("/category", data);

    return res.data.payload;
  } catch (error) {
    const err = error as AxiosError;

    console.error("Error creating category:", err.message);

    throw err;
  }
};

export const updateCategory = async (id: number, data: NewCategoryInput): Promise<Category> => {
  try {
    const res = await api.patch<ApiResponse<Category>>(`/category/${id}`, data);

    return res.data.payload;
  } catch (error) {
    const err = error as AxiosError;

    console.error("Error updating category:", err.message);

    throw err;
  }
};

export const deleteCategory = async (id: number): Promise<void> => {
  try {
    await api.delete(`/category/${id}`);
  } catch (error) {
    const err = error as AxiosError;

    console.error("Error deleting category:", err.message);

    throw err;
  }
};


