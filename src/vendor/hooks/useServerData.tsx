import { useState, useEffect } from "react";
import { fetchListSpec } from "../api/api";
import { IServerDataState, IServerResponse } from "../types/types";

export function useServerData(): IServerDataState {
  const [state, setState] = useState<IServerDataState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IServerResponse = await fetchListSpec();
        setState({
          data: response.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error,
        });
      }
    };
    fetchData();
  }, []);

  return state;
}

// export { useServerData, IServerDataState };
