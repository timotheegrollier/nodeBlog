import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';

const About = () => {
    let [connected, setConnected] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setConnected(true)
        }

    })

    return (
        <div>
            <Nav connected={connected}></Nav>
            <h1 className='text-center text-capitalize text-danger mt-2 title-color'>About</h1>
            <div className='text-center mt-3 row justify-content-center'>
                <p className='col-12 col-sm-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus, possimus quaerat sequi dolorum voluptatem facere ducimus cumque, ipsam, saepe natus aperiam nobis dicta iste optio accusamus aliquam? Temporibus veniam impedit accusantium earum error cumque expedita soluta natus officia eaque nostrum est commodi nobis, aliquam blanditiis dignissimos corporis, incidunt minus. Praesentium quam eos assumenda labore nam molestiae eius sed inventore voluptatum corporis, eligendi iure hic, earum at ipsum veniam itaque ipsam ea exercitationem, recusandae explicabo! Impedit non totam quis. Ex impedit iure modi officiis alias incidunt. Assumenda quod quibusdam at maiores eveniet dicta, tempore sapiente delectus exercitationem voluptas, eos incidunt totam similique explicabo impedit quia.</p>
            </div>
        </div>
    );
};

export default About;