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
            isOpen: false
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    //create a node rerpresenting the React DOM "node"
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    //returns values to parent Dashboard
    handleCallback = (inputString) => {
        this.setState({ backgroundColor: inputString })
    }

    //start event listener when note palette is activated
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    //closes the event lsitener when clicked outside
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    //checks location of click when click listener is active
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.changeCard(false)
        }
    }

    //displays Title input
    headerInput = () => {
        if (this.state.isOpen)
            return (
                <TextField
                    multiline
                    fullWidth
                    margin="dense"
                    placeholder={this.state.HeadingLabel}
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: false }}
                />
            )
    }

    //displays icon palette
    paletteDiv = () => {
        if (this.state.isOpen)
            return (
                <IconPalette
                    parentCallback={this.handleCallback} 
                />
            )
    }

    //controls display of divs
    changeCard = (status) => {
        this.setState({isOpen:status})
    }

    render() {
        return (
            <div
                className="note_palette"
                style={{ backgroundColor: this.state.backgroundColor }}
                onClick={() => { this.changeCard(true) }}
                ref={this.setWrapperRef}
            >
                {this.headerInput()}
                <TextField
                    multiline
                    fullWidth
                    margin="dense"
                    placeholder={this.state.BodyLabel}
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: false }}
                />
                {this.paletteDiv()}
            </div>
        )
    }
}
