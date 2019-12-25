// ./src/components/Faq/Faq.js
import React from 'react';

export default class Faq extends React.Component {
    render() {
        const  { children } = this.props;
        const list = React.Children.map(children, child => {
                const { displayName } = child.type;
                if(displayName !== 'FaqItem') {
                    throw new Error('Incorrect child!')
                }

                const { header } = child.props;
                return (
                    <div title={ header }>{ child }</div>
                )
            }
        )
        
        return (
            <section>
                <p>Ilość elementów: 
                    { React.Children.count(children) }</p>
                { list }
            </section>
        )
    }
}