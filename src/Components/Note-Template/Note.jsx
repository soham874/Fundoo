import React from 'react'
import './Note.css'
import { TextField } from '@material-ui/core'
import PaletteIcon from '@material-ui/icons/Palette';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

export default class Note extends React.Component{
    constructor(props){
        super(props)
        this.state={
            HeadingLabel:'Title',
            BodyLabel:'Take a note...'
        }
    }


    render(){
        return(
            <div className="note_palette">
                <TextField 
                    multiline 
                    margin="dense"
                    placeholder = {this.state.HeadingLabel}
                    InputProps={{disableUnderline: true}}
                    InputLabelProps={{shrink: false}}
                />
                <TextField 
                    multiline 
                    margin="dense"
                    placeholder = {this.state.BodyLabel}
                    InputProps={{disableUnderline: true}}
                    InputLabelProps={{shrink: false}}
                />
                <div class={"iconPalette"}>
                    <div style={{display:'flex'}}>
                        <IconButton><PaletteIcon/></IconButton>
                        <IconButton><ArchiveIcon/></IconButton>
                        <IconButton><MoreVertIcon/></IconButton>
                    </div>
                    <div className = "noteSubmit">Close</div>
                </div>
            </div>
        )
    }
}
