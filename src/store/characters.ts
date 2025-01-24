import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export interface CharacterListData {
  info: {
    count: number;
    pages: number;
  };
  results: Array<CharacterData>;
}

interface CharacterListParams {
  page: number;
  name: string;
}

interface CharacterData {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: string;
  image: string;
  url: string;
  created: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

export default new Vuex.Store({
  state: {
    data: [] as CharacterListData["results"],
    characterData: null as CharacterData | null,
    isLoading: false,
    total: 0,
  },
  mutations: {
    SET_DATA(state, payload: CharacterListData["results"]) {
      state.data = payload;
    },
    SET_LOADING(state, payload: boolean) {
      state.isLoading = payload;
    },
    SET_TOTAL(state, payload: number) {
      state.total = payload;
    },
    SET_CHARACTER_DATA(state, payload: CharacterData) {
      state.characterData = payload;
    },
  },
  actions: {
    async getData({ commit }, params: CharacterListParams) {
      commit("SET_LOADING", true);
      try {
        const { data } = await axios.get<CharacterListData>(
          "https://rickandmortyapi.com/api/character", //https://rickandmortyapi.com/api/character/2
          { params }
        );
        commit("SET_DATA", data.results);
        commit("SET_TOTAL", data.info.count);
      } catch (error) {
        commit("SET_DATA", []);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async getCharacterData({ commit }, id: number) {
      commit("SET_LOADING", true);
      try {
        const { data } = await axios.get<CharacterData>(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        commit("SET_CHARACTER_DATA", data);
      } catch (error) {
        commit("SET_CHARACTER_DATA", null);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
});
