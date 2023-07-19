import styled from 'styled-components'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ResponsiveContainer = styled.div`
  width: 80%;
  height: 500px;
  border-radius: 3px;
  display: flex;
  background-color: #1b1c22;
  margin: auto;
  padding: 20px;
`
export const ImageContainer = styled.div`
  background-color: transparent;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  color: #f1f5f9;
`
export const Image = styled.img`
  width: 60%;
  margin-top: 30px;
  text-align: center;
`
export const TextAreaContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 10px;
  width: 50%;
`
export const IconContainer = styled.ul`
  padding-left: 0px;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #334155;
`
export const List = styled.li`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`
export const BoldButton = styled.button`
  outline: none;
  background: transparent;
  margin-right: 10px;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
  border: none;
  cursor: pointer;
`
export const ItalicButton = styled.button`
  outline: none;
  background: transparent;
  margin-right: 10px;
  border: none;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`
export const UnderlineButton = styled.button`
  outline: none;
  background: transparent;
  margin-right: 10px;
  border: none;
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`
export const Bold = styled(VscBold)`
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`
export const Italic = styled(GoItalic)`
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`
export const Underline = styled(AiOutlineUnderline)`
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
`
export const InputTextArea = styled.textarea`
  font-family: 'Roboto';
  width: 100%;
  background-size: cover;
  background: transparent;
  border: none;
  height: 378px;
  outline: none;
  font-size: 16px;
  padding: 10px;
  color: #cbd5e1;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`
