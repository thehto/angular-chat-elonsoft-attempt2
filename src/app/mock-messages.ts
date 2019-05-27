import { Message } from './message'
export const MESSAGES: Message[] = [ 
    {id:1, author:'Dave', authorid:1, text:'hello this is chat', date: new Date().toLocaleTimeString()} ,
    {id:2, author:'John', authorid:2, text:'Nice! im so exited!', date: new Date().toLocaleTimeString()} ,
    {id:3, author:'Roxy', authorid:3, text:'Well we just built another one. There is thousands of same chats', date: new Date().toLocaleTimeString()} ,
    {id:4, author:'John', authorid:2, text:'Yea, but that one is ours. This is so awesome!', date: new Date().toLocaleTimeString()} ,
    {id:5, author:'Dave', authorid:1, text:'guys just try not to fuckin spam here', date: new Date().toLocaleTimeString()} 
]\