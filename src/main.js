import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import { createPinia } from 'pinia';
import configureAxios from './axios-config';

import './assets/style/font-awesome.css';
import './assets/style/normalize.css';

import BaseLogo from './components/ui-element/BaseLogo.vue';
import BaseButton from './components/ui-element/BaseButton.vue';
import BaseCard from './components/ui-element/BaseCard.vue';
import BaseLabelRow from './components/ui-element/BaseLabelRow.vue';
import BaseTextBox from './components/ui-element/BaseTextBox.vue';
import BaseDropBox from './components/ui-element/BaseDropBox.vue';
import BaseButtonContainer from './components/ui-element/BaseButtonContainer.vue';
import BaseDatePicker from './components/ui-element/BaseDatePicker.vue';
import BasePagination from './components/ui-element/BasePagination.vue';
import BaseModal from './components/ui-element/BaseModal.vue';
import BaseDialog from './components/ui-element/BaseDialog.vue';
import BaseErrorMessage from './components/ui-element/BaseErrorMessage.vue';
import BaseDateTimePicker from './components/ui-element/BaseDateTimePicker.vue';
import BaseTextArea from './components/ui-element/BaseTextArea.vue';
import BaseTable from './components/ui-element/BaseTable.vue';
import BaseFlexRow from './components/ui-element/BaseFlexRow.vue';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
configureAxios(router);

app.component('base-logo', BaseLogo);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-label-row', BaseLabelRow);
app.component('base-textbox', BaseTextBox);
app.component('base-dropbox', BaseDropBox);
app.component('base-datepicker', BaseDatePicker);
app.component('base-datetimepicker', BaseDateTimePicker);
app.component('base-textarea', BaseTextArea);
app.component('base-button-container', BaseButtonContainer);
app.component('base-pagination', BasePagination);
app.component('base-modal', BaseModal);
app.component('base-dialog', BaseDialog);
app.component('base-error-message', BaseErrorMessage);
app.component('base-table',BaseTable)
app.component('base-flex-row',BaseFlexRow)

app.mount('#app');