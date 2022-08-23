import React, { useState } from 'react';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setExpired } from '../store/testingSlice';
import { useEffect } from 'react';

const Timer = ({ durationInMinutes }) => {
    const dispatch = useDispatch();
    const isExpired = useSelector(state => state.testing.isExpired);

    const [totalSeconds, setTotalSeconds] = useState(10);

    useEffect(() => {
        if (totalSeconds > 0) {
            setTimeout(() => setTotalSeconds(totalSeconds - 1), 1000);
        }
        else {
            dispatch(setExpired());
        }
    }, [totalSeconds]);

    return (
        <div
            style={{
                textAlign: 'center',
            }}
        >
            {
                isExpired
                    ? <div>The time allotted for this test has expired</div>
                    : (
                        <div>
                            <TimerOutlinedIcon
                                sx={{
                                    verticalAlign: 'sub',
                                }}
                            />
                            {Math.floor(totalSeconds / 60)}m {totalSeconds % 60}s
                        </div>
                    )
            }
        </div>
    );
};

export default Timer;