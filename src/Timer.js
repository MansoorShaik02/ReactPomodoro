import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Playbutton from './Playbutton';
import PauseButton from './PauseButton';
import SettingsIcon from './SetingsIcon';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';
function Timer() {
    const red = '#f54e4e';
    const green = '#4aec8c';
    const pink = '#ffc0cb'
    const [secondsleft, setsecondsleft] = useState(0)
    const secondsleftref = useRef(secondsleft)
    const [isPause, setisPause] = useState(true)
    const [mode, setmode] = useState('work')
    const settingsInfo = useContext(SettingsContext)
    const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakminutes * 60
    const percentage = Math.round(secondsleft / totalSeconds * 100)
    const minutes = Math.floor(secondsleft / 60)
    let seconds = secondsleft % 60

    if (seconds < 10) seconds = '0' + seconds
    const modeRef = useRef(mode);

    const isPauseref = useRef(isPause)
    function switchmode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work'
        setmode(nextMode)
        modeRef.current = nextMode;
        setsecondsleft(nextMode === 'work' ? settingsInfo.workMinutes = 60 : settingsInfo.breakminutes * 60)
        secondsleftref.current = nextMode === 'work' ? settingsInfo.workMinutes = 60 : settingsInfo.breakminutes * 60;
    }
    function tick() {
        secondsleftref.current--;
        setsecondsleft(secondsleftref.current)
    }
    function initTimer() {
        setsecondsleft(settingsInfo.workMinutes = 60)
    }
    useEffect(() => {
        initTimer();
        const interval = setInterval(() => {
            if (isPauseref.current) {
                return
            }
            if (secondsleftref.current === 0) {
                return switchmode()
            }

            tick()
        }, 1000);
        return () => clearInterval(interval);
    }, [settingsInfo])



    return (<div>
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={percentage} maxValue={2} minValue={1} text={minutes + ':' + seconds} styles={buildStyles({ textColor: '#fff', pathColor: mode === 'work' ? red : green, trailColor: pink })} />

        </div>
        <div style={{ marginTop: '20px' }}>

            {isPause
                ? <Playbutton onClick={() => { setisPause(false); isPauseref.current = false; }} />
                : <PauseButton onClick={() => { setisPause(true); isPauseref.current = true; }} />}

        </div>
        <>

            <SettingsIcon onClick={() => settingsInfo.setShowSettings(true)} />

        </ >
    </div >);
}

export default Timer;