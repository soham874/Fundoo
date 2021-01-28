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
            display: 'none',
            // displayRef: React.createRef()
        }
        
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
      }
    
    handleCallback = (inputString) => {
        this.setState({backgroundColor:inputString})
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            alert('You clicked outside of me!');
        }
    }


    changeCard = ( ) => {
        this.setState({display:(this.state.display === 'none'?'flex':'none')})
    }

    render() {
        return (
            <div 
            className="note_palette" 
            style={{backgroundColor:this.state.backgroundColor}}
            onClick={this.changeCard}
            ref={this.setWrapperRef}
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
                <IconPalette 
                    // ref={this.state.displayRef}
                    display={this.state.display} 
                    parentCallback={this.handleCallback}/>
            </div>
        )
    }
}
