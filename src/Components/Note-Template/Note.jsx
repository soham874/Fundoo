import React from 'react'
import './Note.css'
import { TextField } from '@material-ui/core'
import IconPalette from '../Icon-Palette/iconsPalette'

export default class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            HeadingLabel: 'Title',
            BodyLabel: 'Take a note...'
        }
    }

    change = (e) => {
        console.log(e)
    }

    render() {
        return (
            <div className="note_palette">
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
                <IconPalette/>
            </div>
        )
    }
}
