import React, { useEffect } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/lib/codemirror.css';

const Codearea = () => {
    useEffect(() => {
        async function init() {
            CodeMirror.fromTextArea(document.getElementById('realtimeEditor'), {
                mode: { name: 'javascript', json: true }, // Corrected typo in 'name'
                theme: 'dracula',
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true,
            });
        }

        init();
    }, []);

    return <textarea id="realtimeEditor"></textarea>;
};

export default Codearea;
