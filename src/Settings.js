import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import './slider.css'
import SettingsContext from './SettingsContext'
import BackButton from './BackButton'

const Settings = () => {
    const settingsInfo = useContext(SettingsContext)
    return (

        <div style={{ textAlign: 'left' }}>
            <label>Worked time :{settingsInfo.workMinutes}</label>
            <ReactSlider className={'slider'} thumbClassName={'thumb'} trackclassName={'track'} value={settingsInfo.workMinutes} min={1} max={120}
                onChange={newValue => settingsInfo.setwork(newValue)}></ReactSlider>
            <label>Break time : {settingsInfo.breakminutes}</label>
            <ReactSlider className={'slider-breaktime'} thumbClassName={'thumb'} trackclassName={'track'} value={settingsInfo.breakminutes} min={1} max={120} onChange={newValue => settingsInfo.setbreaktime(newValue)}></ReactSlider>

            <div style={{ textAlign: 'center', marginTop: '100px' }}><BackButton onClick={() => settingsInfo.setShowSettings(false)} /></div>

        </div>

    )
}

export default Settings