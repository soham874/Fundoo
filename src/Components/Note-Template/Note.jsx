import React from 'react'
import './Note.css'
import { TextField } from '@material-ui/core'
import IconPalette from '../Icon-Palette/iconsPalette'

export default class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            HeadingLabel: 'Title',
            BodyLabel: 'Take a note...',
            backgroundColor: '#ffffff',
            display: 'none'
        }
    }


    handleCallback = (inputString) => {
        this.setState({backgroundColor:inputString})
    }


    changeCard = () => {
        this.setState({display:(this.state.display === 'none'?'flex':'none')})
    }

    render() {
        return (
            <div 
            className="note_palette" 
            style={{backgroundColor:this.state.backgroundColor}}
            onMouseEnter = {this.changeCard}
            onMouseLeave = {this.changeCard}
            >
                <TextField
                    style={{display:this.state.display}}
                    multiline
                    fullWidth
                    margin="dense"
                    placeholder={this.state.HeadingLabel}
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: false }}
                />
                <TextField
                    multiline
                    fullWidth
                    margin="dense"
                    placeholder={this.state.BodyLabel}
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: false }}
                />
                <IconPalette display={this.state.display} parentCallback={this.handleCallback}/>
            </div>
        )
    }
}
