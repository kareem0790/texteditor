import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  ImageContainer,
  ImageHeading,
  TextAreaContainer,
  Image,
  IconContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  Bold,
  Italic,
  Underline,
  InputTextArea,
  List,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
  }

  onChangeBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onChangeItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onChangeUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state

    return (
      <AppContainer>
        <ResponsiveContainer>
          <ImageContainer>
            <ImageHeading>Text Editor</ImageHeading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextAreaContainer>
            <IconContainer>
              <List>
                <BoldButton
                  bold={bold}
                  data-testid="bold"
                  type="button"
                  onClick={this.onChangeBold}
                >
                  <Bold size={25} bold={bold} />
                </BoldButton>
              </List>
              <List>
                <ItalicButton
                  italic={italic}
                  data-testid="italic"
                  type="button"
                  onClick={this.onChangeItalic}
                >
                  <Italic size={25} italic={italic} />
                </ItalicButton>
              </List>
              <List>
                <UnderlineButton
                  underline={underline}
                  data-testid="underline"
                  type="button"
                  onClick={this.onChangeUnderline}
                >
                  <Underline size={25} underline={underline} />
                </UnderlineButton>
              </List>
            </IconContainer>
            <InputTextArea
              rows="15"
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </TextAreaContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default TextEditor
