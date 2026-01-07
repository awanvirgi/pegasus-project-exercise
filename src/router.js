import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';

import TheLayout from './components/layout/TheLayout.vue';
import SchedulePage from './components/schedule/SchedulePage.vue';
import TrainPage from './components/train/TrainPage.vue';
import Passenger from './components/passenger/PassengerPage.vue';
import BoardingPage from './components/boarding/BoardingPage.vue';
import SchedulePassengerPage from './components/schedulePassenger/SchedulePassengerPage.vue';
import ScheduleForm from './components/schedule/ScheduleForm.vue';
import ScheduleRemove from './components/schedule/ScheduleRemove.vue';
import NotFound from './components/error/NotFound.vue';
import PassengerForm from './components/passenger/PassengerForm.vue';
import PassengerRemove from './components/passenger/PassengerRemove.vue';
import TrainForm from './components/train/TrainForm.vue';
import TrainRemove from './components/train/TrainRemove.vue';
import SchedulePassengerRemove from './components/schedulePassenger/SchedulePassengerRemove.vue';
import AssignBoardingDialog from './components/boarding/AssignBoardingDialog.vue';
import ServerError from './components/error/ServerError.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            component: TheLayout,
            path: '/',

            children: [
                {
                    component: SchedulePage,
                    path: '/schedules',
                    alias: '/',
                    meta: {
                        title: 'Schedules',
                        subTitle: ref('')
                    },
                    children: [
                        {
                            component: ScheduleForm,
                            path: 'form/:id?',
                            props: true
                        },
                        {
                            component: ScheduleRemove,
                            path: 'remove/:id',
                            props: true
                        },
                    ],
                },
                {
                    component: TrainPage,
                    path: '/trains',
                    meta: {
                        title: 'Trains',
                        subTitle: ref('')
                    },
                    children: [
                        {
                            component: TrainForm,
                            path: 'form/:id?',
                            props: true
                        },
                        {
                            component: TrainRemove,
                            path: 'remove/:id',
                            props: true
                        },
                    ]
                },
                {
                    component: Passenger,
                    path: '/passengers',
                    meta: {
                        title: 'Passengers',
                        subTitle: ref('')
                    },
                    children: [
                        {
                            component: PassengerRemove,
                            path: 'remove/:id',
                            props: true
                        },
                        {
                            component: PassengerForm,
                            path: 'form/:id?',
                            props: true
                        },
                    ]
                },
                {
                    component: BoardingPage,
                    path: '/passengers/:username/boarding',
                    props: true,
                    meta: {
                        title: 'Boarding for',
                        subTitle: ref('')
                    },
                    children: [
                        {
                            component: AssignBoardingDialog,
                            path: 'assign/:id',
                            props: true
                        }
                    ]
                },
                {
                    component: SchedulePassengerPage,
                    path: '/schedules/:id/passengers',
                    props: true,
                    meta: {
                        title: 'Passengers of ',
                        subTitle: ref('')
                    },
                    children: [
                        {
                            component: SchedulePassengerRemove,
                            path: ':username/remove',
                            props: true
                        }
                    ]
                }
            ]
        },
        {
            component: ServerError,
            path: '/serverError'
        },
        {
            component: NotFound,
            path: '/:pathMatch(.*)*',
            alias:'/notFound'
        }
    ]
});
export default router;