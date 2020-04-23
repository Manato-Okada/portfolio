import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
 //state:コンポーネントでいうdata
 //statuをskillcategoriesと定義
 state: {
 skillCategories: [],
 loaded:false
 },

 //getters:コンポーネントでいうcomputed的なもの
 //gettersを
 getters: {
 skillName: (state) => (index) =>{
 const skillNameArray =[]
 if(state.skillCategories[index]){
 state.skillCategories[index].skill.forEach((names) => {
 skillNameArray.push(names.name)
 })
 }
 return skillNameArray
 },
 skillScore: (state) => (index) =>{
  const skillScoreArray =[]
  if(state.skillCategories[index]){
  state.skillCategories[index].skill.forEach((names) => {
  skillScoreArray.push(names.score)
  })
  }
  return skillScoreArray
  },
 },

 //mutations:コンポーネントでいうmethod（と言うかsetter）
 //stateを唯一変更できるもの
 mutations: {
 //vuexでは引数をpayloadと呼ぶっぽい
 //payloadはオブジェクトにするべき（いっぱい入れれるし）
 setSkillCategories(state, payload) {
 state.skillCategories = payload.skillCategories;
 state.loaded = true
 },
 },

 //actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
 actions: {
 async updataSkillCategories({commit}) {
 //skillCategoriesの定義
 const skillCategories = [];
 //持ってくるAPIの指定？
  const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills';
  const res = await axios.get(functionsUrl);
  //const res = await axios.get('https://us-central1-portfolio-1b6d7.cloudfunctions.net/skills');
 //res.dataでデータを取得
  res.data.forEach((category) =>{
 skillCategories.push(category);
 });
 commit('setSkillCategories', {skillCategories});
 },
 },
});
