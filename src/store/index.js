import Vue from "vue";
import Vuex from "vuex";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db, auth } from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    food: [],
  },
  getters: {
    completedFood(state) {
      return state.food.filter((foods) => foods.completed);
    },
    completedFoodCount(state, getters) {
      return getters.completedFood.length;
    },
  },
  mutations: {
    GET_FOOD(state, payload) {
      state.food = payload;
    },
  },
  actions: {
    async get_food({ commit }) {
      try {
        const q = query(
          collection(db, "food"),
          where("uid", "==", auth.currentUser.uid)
        );
        onSnapshot(q, (querySnapshot) => {
          const food = [];
          querySnapshot.forEach((doc) => {
            food.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          commit("GET_FOOD", food);
        });
      } catch (error) {}
    },

    async add_foods({ commit }, foods) {
      try {
        await addDoc(collection(db, "food"), {
          name: foods.name,
          price: foods.price,
          service: foods.service,
          amountofpeople: foods.amountofpeople,
          completed: foods.completed,
          date: foods.date,
          description: foods.description,
          src: foods.src,
          notes: foods.notes,
          pay: foods.pay,
          uid: auth.currentUser.uid,
        });
      } catch (error) {}
    },
    async delete_foods({ commit }, id) {
      try {
        const docRef = doc(db, "food", id);
        await deleteDoc(docRef);
      } catch (error) {}
    },
    async update_foods({ commit }, foods) {
      try {
        const docRef = doc(db, "food", foods.id);
        await updateDoc(docRef, {
          name: foods.name,
          price: foods.price,
          service: foods.service,
          amountofpeople: foods.amountofpeople,
          completed: foods.completed,
          date: foods.date,
          description: foods.description,
          src: foods.src,
          notes: foods.notes,
          pay: foods.pay,
        });
      } catch (error) {}
    },
  },
  modules: {},
});
