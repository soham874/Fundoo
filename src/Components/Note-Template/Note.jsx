import React from 'react'
import './Note.css'
import { TextField } from '@material-ui/core'
import IconPalette from '../Icon-Palette/iconsPalette'

export default class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            HeadingLabel: '',
            BodyLabel: '',
            backgroundColor: '#ffffff',
            isOpen: false,

            title : React.createRef(),
            body : React.createRef(),
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

            //setting card display off
            this.changeCard(false)

            //collecting data in form data format
            let formdata= new FormData()
            formdata.set('title',this.state.HeadingLabel)
            formdata.set('description',this.state.BodyLabel)
            formdata.set('color',this.state.backgroundColor)

            //resetting the fields
            this.setState({HeadingLabel:'',BodyLabel:'',backgroundColor:'#ffffff'})

            //returning the formdata
            return this.props.parentCallback(formdata)
        }
    }

    updateBodyValue = (e) => {
        this.setState({BodyLabel : e.target.value})
    }

    updateTitleValue = (e) => {
        this.setState({HeadingLabel : e.target.value})
    }

    //displays Title input
    headerInput = () => {
        if (this.state.isOpen)
            return (
                <TextField
                    multiline
                    fullWidth
                    ref={this.state.title}
                    margin="dense"
                    placeholder='Title'
                    value={this.state.HeadingLabel}
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: false }}
                    onChange={this.updateTitleValue}
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
                    ref={this.state.body}
                    multiline
                    fullWidth
                    margin="dense"
                    placeholder='Take a note...'
                    value={this.state.BodyLabel}
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: false }}
                    onChange={this.updateBodyValue}
                />
                {this.paletteDiv()}
            </div>
        )
    }
}
