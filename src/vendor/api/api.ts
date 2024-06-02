import axios, { AxiosResponse } from "axios";
import { IServerResponse } from "../types/types";

// Определяем интерфейс для ответа сервера

const url = "https://logiclike.com/docs/courses.json";

// Функция для выполнения GET-запроса
async function fetchListSpec(): Promise<IServerResponse> {
  try {
    const response: AxiosResponse = await axios.get(url);
    return {
      data: response.data,
    };
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
    throw error;
  }
}

// Экспортируем функцию get
export { fetchListSpec };
