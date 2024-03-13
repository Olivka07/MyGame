import { createEvent, createStore } from 'effector';
import { IData } from '../types';
import { data } from '../data';

const initialData = data;
export const changeSolved = createEvent<[number, number]>();
export const $data = createStore<IData[]>(initialData).on(
    changeSolved,
    (state, payload) => {
        return state.map((el) => {
            if (el.id === payload[0]) {
                return {
                    ...el,
                    questions: el.questions.map((quest) => {
                        if (quest.id === payload[1])
                            return {
                                ...quest,
                                solved: true,
                            };
                        return quest;
                    }),
                };
            }
            return el;
        });
    },
);
