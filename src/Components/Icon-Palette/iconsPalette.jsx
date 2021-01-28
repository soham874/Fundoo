import React from 'react'
import PaletteIcon from '@material-ui/icons/Palette';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import ImageIcon from '@material-ui/icons/Image'

const colorArray = ['#ffffff', '#f28b82', '#fbbc04', '#fff475',
'#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa',
'#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed']

export default class IconPalette extends React.Component {
    constructor(props){
        super(props)
        this.state={
            display: 'none'
        }
    }

    colorChoose = (color) => {
        return this.props.parentCallback(color)
    }

    paletteDisplay = () => {
        this.setState({display:(this.state.display === 'none'?'flex':'none')})
    }

    render() {
        return (
            <div 
                className={"iconPalette"}
                style = {{display:this.props.display,flexDirection:'row',flexWrap:'wrap'}}
                >
                <div style={{ display: 'flex', position: 'relative' }}>
                    <IconButton><AddAlertIcon /></IconButton>
                    <IconButton><PersonAddIcon /></IconButton>
                    <div 
                        className={"colorPalette"} 
                        style={{display:this.state.display}}
                        onMouseLeave={() => this.paletteDisplay()}
                    >
                        {colorArray.map((current) => (
                                <div
                                    className={"colorChoice"}
                                    key={current}
                                    style={{ backgroundColor: current }}
                                    onClick={() => this.colorChoose(current)}
                                />
                            ))}
                    </div>
                    <IconButton 
                        onMouseEnter={() => this.paletteDisplay()}
                        onMouseLeave={() => this.paletteDisplay()}
                    ><PaletteIcon /></IconButton>
                    <IconButton><ImageIcon /></IconButton>
                    <IconButton><ArchiveIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
                <div className="noteSubmit">Close</div>
            </div>

        )
    }
}
