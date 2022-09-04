import * as yup from 'yup';
export const validationsForm = yup.object().shape({

    title: yup.string().typeError('').matches(/[йцукенгшщзфівапролджячсмитьбюєхї]+/ , 'Лише кирилиця').required(`Обов'язково`).min(2, 'Закороткий').max(20, 'Задовгий'),
    text: yup.string().typeError('').matches(/[йцукенгшщзфівапролджячсмитьбюєхї]+/ , 'Лише кирилиця').required(`Обов'язково`).min(2, 'Закороткий').max(250, 'Задовгий'),
    link: yup.string().url('Посилання має бути лінком').required(`Обов'язково`),
    file: yup.mixed().nullable().required(`Завантажте картинку меньше 1MB `).test('size', 'Файл занадто великий', (value) => {
        return value && value.size <= 1024 * 1024;
    })
});
