import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../../model/data';
import { IQuestion } from '../../model/types';
import { Button } from '../../components/Button/Button';
import classes from './question-page.module.scss';
import { Timer } from '../../components/Timer/Timer';
import { BigText } from '../../components/BigText/BigText';
import { changeSolved } from '../../model/store';

const QuestionPage = () => {
    const [question, setQuestion] = useState<IQuestion>(null);
    const [solved, setSolved] = useState(false);
    const [timer, setTimer] = useState(60);
    const [interval, setIntervalId] = useState(null);

    const { ids } = useParams();

    useEffect(() => {
        const [id_theme, id_question] = ids
            .split('=')[1]
            .split('_')
            .map((el) => Number(el));

        console.log(id_theme, id_question);

        const theme = data.find((el) => {
            if (el.id === id_theme) return el;
        });

        const question = theme.questions.find((el) => {
            if (el.id === id_question) return el;
        });

        setQuestion(question);
    }, []);

    useEffect(() => {
        if (question) {
            const intervalId = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            setIntervalId(intervalId);
        }
    }, [question]);

    useEffect(() => {
        if (timer === 0) {
            clearInterval(interval);
            setSolved(true);
        }
    }, [timer]);

    const handlerTimer = useCallback(() => {
        if (interval) {
            clearInterval(interval);
            setIntervalId(null);
        } else {
            const intervalId = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            setIntervalId(intervalId);
        }
    }, [interval]);

    const handlerAnswer = () => {
        const [id_theme, id_question] = ids
            .split('=')[1]
            .split('_')
            .map((el) => Number(el));
        changeSolved([id_theme, id_question]);
    };

    if (!question) return <div>Loading</div>;

    return (
        <div className={classes.container}>
            <Timer>{timer}</Timer>
            <BigText>{question.task}</BigText>
            <Button click={handlerTimer}>
                {interval ? 'Приостановить таймер' : 'Запустить таймер'}
            </Button>
            <Button
                style={{ marginLeft: '20px', marginTop: '20px' }}
                click={handlerAnswer}
            >
                <Link to={'/'}>{'Ответить и вернуться'}</Link>
            </Button>
            {solved && <BigText>{question.answer}</BigText>}
        </div>
    );
};

export default QuestionPage;
