import React, {useState} from 'react';
import logo from './instagramlogo.png'
import './Posts';
import Posts from './Posts';
import './App.css'
const App = () => {
    const[posts, setPosts]=useState([
        {
            username:'anuj.2701',
            caption:'such a beautiful scene',
            imgUrl:'https://wallpapercave.com/wp/wp6384379.jpg'

        },
        {
            username:'josh461',
            caption:'new jeep climber',
            imgUrl:'https://wallpapercave.com/wp/wp8839303.jpg' 
        },
        {
            username:'shaun77',
            caption:'CLicked by me',
            imgUrl:'https://wallpapercave.com/wp/J4dFcAD.jpg'
        }
    ])
    return (<>

        <div className='app'>
            <div className='app_header' >

                <img className='app_headerImage'
    
                    src={logo} />
            </div>
            

            {
                posts.map(posts =>(
                    <Posts username={posts.username} caption={posts.caption} imgUrl={posts.imgUrl}/>
                ))
            }
            {/* <Posts username='anuj.2701' caption='such a beautiful scene' imgUrl='https://wallpapercave.com/wp/wp6384379.jpg' />
            <Posts username='josh461' caption='new jeep climber' imgUrl='https://wallpapercave.com/wp/wp8839303.jpg'/>
            <Posts username='shaun77' caption='CLicked by me' imgUrl='https://wallpapercave.com/wp/J4dFcAD.jpg'/> */}


        </div>
    </>)
}
export default App;
