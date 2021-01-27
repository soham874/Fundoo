import React from 'react'
import PaletteIcon from '@material-ui/icons/Palette';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import ImageIcon from '@material-ui/icons/Image'

export default class IconPalette extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    renderColourPalette = () => {
        let colourString 

        // <div className={"colorChoice"} style={{backgroundColor:'#ffffff'}}></div>
        // <div className={"colorChoice"} style={{backgroundColor:'#f28b82'}}></div>
        // <div className={"colorChoice"} style={{backgroundColor:'#fbbc04'}}></div>
        // <div className={"colorChoice"} style={{backgroundColor:'#fff475'}}></div>                       
        // <div className={"colorChoice"} style={{backgroundColor:'green'}}></div>
        // <div className={"colorChoice"} style={{backgroundColor:'green'}}></div>
        // <div className={"colorChoice"} style={{backgroundColor:'green'}}></div>
        // <div className={"colorChoice"} style={{backgroundColor:'green'}}></div>
        // <div className={"colorChoice"} style={{backgroundColor:'green'}}></div>
        // <div className={"colorChoice"} style={{backgroundColor:'green'}}></div>
        // <div className={"colorChoice"} style={{backgroundColor:'green'}}></div>
        // <div className={"colorChoice"} style={{backgroundColor:'green'}}></div>

        return <colourString/>
    }

    render() {
        return (
            <div className={"iconPalette"}>
                <div style={{ display: 'flex', position: 'relative' }}>
                    <IconButton><AddAlertIcon /></IconButton>
                    <IconButton><PersonAddIcon /></IconButton>
                    <div className={"colorPalette"}>
                        {['#ffffff','#f28b82','#fbbc04','#fff475',
                          '#ccff90','#a7ffeb','#cbf0f8','#aecbfa',
                          '#d7aefb','#fdcfe8','#e6c9a8','#e8eaed'].map((current) => (
                            <div className={"colorChoice"} key={current} style={{backgroundColor:current}}></div>
                        ))}
                    </div>
                    <IconButton><PaletteIcon /></IconButton>
                    <IconButton><ImageIcon /></IconButton>
                    <IconButton><ArchiveIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
                <div className="noteSubmit">Close</div>
            </div>

        )
    }
}
