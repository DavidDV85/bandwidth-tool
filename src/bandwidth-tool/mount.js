/*
Copyright 2020 DigitalOcean

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

require('babel-polyfill');
const Vue = require('vue').default;
const App = require('./templates/app.vue');
const i18n = require('./i18n');

document.head.title = i18n.templates.app.title;

new Vue({
    render: h => h(App),
}).$mount('#app');
