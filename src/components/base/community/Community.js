import React, { useState } from 'react'

function Community({ObjectForContent}) {
  const [content, setContent] = useState(true);

  const hideContent= () =>{
    setContent(!content)
  }

  const truncateContent = (content, wordCount) => {
  if (!content) return ''; // Handle case where content is undefined or null
  
  const words = content.split(' ');
  const truncatedWords = words.slice(0, wordCount);
  const truncatedContent = truncatedWords.join(' ');
  
  return truncatedContent;
};

  return (
       <div className='community-content'>
          {/* <h1>{ObjectForContent?.community} Community</h1> */}
          <p>
            {content && <div dangerouslySetInnerHTML={{ __html: ObjectForContent?.content?.slice(0, 2000) }}/>}

            <p className={`content${content ? "hide" : "show"}`}>
             <div dangerouslySetInnerHTML={{ __html: ObjectForContent?.content }}/>
            </p>

                        </p>
            <div>
            <button className='bttn-read-more-community' onClick={hideContent}>{content ? "Read more" : "Read Less"}</button>
            <p></p>
            </div>
        </div>
  )
}

export default Community