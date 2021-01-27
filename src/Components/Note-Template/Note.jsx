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
            backgroundColor: '#ffffff'
        }
    }

    change = (e) => {
        console.log(e)
    }

    handleCallback = (inputString) => {
        console.log(inputString)
        this.setState({backgroundColor:inputString})
    }

    render() {
        return (
            <div className="note_palette" style={{backgroundColor:this.state.backgroundColor}}>
                <TextField
                    multiline
                    margin="dense"
                    placeholder={this.state.HeadingLabel}
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: false }}
                    onChange={this.change}
                />
                <TextField
                    multiline
                    margin="dense"
                    placeholder={this.state.BodyLabel}
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: false }}
                    onChange={this.change}
                />
                <IconPalette parentCallback={this.handleCallback}/>
            </div>
        )
    }
}
