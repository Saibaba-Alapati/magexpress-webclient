// import React from 'react'
// import {Editor} from '@tinymce/tinymce-react'
// class TextEditor extends React.Component {
//     handleEditorChange = (e: { target: { getContent: () => any; }; }) => {
//         console.log('Content was updated:', e.target.getContent());
//     }
//     render(){
//         return (
//             <Editor
//             init={{
//                 skin: 'oxide-dark',
//                 content_css: 'dark',
//                 placeholder:"Addcomment...",
//                 inline:true,
//                 plugins: 'link image code autoresize',
//                 toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
//             }}
//             onChange={this.handleEditorChange}
//         />
//         )
//     }
// }

// export default TextEditor;


import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class TextEditor extends React.Component {
    handleEditorChange = (e: { target: { getContent: () => any; }; }) => {
        console.log(
        'Content was updated:',
        e.target.getContent()
        );
    }

render() {
    return (
        <Editor
            init={{
                skin: 'oxide-dark',
                content_css: 'dark',
                placeholder:"Addcomment...",
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image',
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                ],
                toolbar:
                    // eslint-disable-next-line no-multi-str
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help'
            }}
            onChange={this.handleEditorChange}
        />
    );
    }
}

export default TextEditor;
