import { useState } from 'react';
import NavBar from '../Components/NavBar';
import './FAQ.css';

function FAQ () {
    return (
        <div>
            <NavBar />
            <h1 className='faqTitle'>Frequently Asked Questions</h1>
            <div className='tableDiv'>
                <table className='faqTable'>
                    <tbody>
                        <tr>
                            <td>Question</td>
                            <td>Answer</td>
                        </tr>
                        <tr>
                            <td>How cool is this app?</td>
                            <td>It's pretty freaking cool.. if you ask me!</td>
                        </tr>
                        <tr>
                            <td>How cool is this app?</td>
                            <td>It's pretty freaking cool.. if you ask me!</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FAQ;
