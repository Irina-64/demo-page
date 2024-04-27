import {Api} from './api.js';
import {AppPresenter} from './presenter/app-presenter.js';

const END_POINT = `https://mock.htmlacademy.pro/store`;
const api = new Api(END_POINT);

const mainContainer = document.querySelector(`.main`);

const appPresenter = new AppPresenter(mainContainer, api);
appPresenter.init();
