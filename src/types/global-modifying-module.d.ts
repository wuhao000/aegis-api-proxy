import Vue from 'vue';

declare global {
  export interface Window {
    Vue: Vue;
  }
}
