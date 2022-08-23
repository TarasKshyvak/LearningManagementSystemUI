import React from 'react';

const Home = () => {
    return (
        <div
            style={{
                margin: 0,
                padding: 0,
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <h1>WELLCUM</h1>
            <img
            style={{
                margin: 0,
                padding: 0,
                height: '100vh',
                objectFit: 'contain'
            }}
                src='https://scontent.fiev4-1.fna.fbcdn.net/v/t31.18172-8/15972800_176570626153747_7760699702441656357_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=plHqkgL-hRAAX8-Nd6Y&tn=ZfVMfpPVUl-96Z7w&_nc_ht=scontent.fiev4-1.fna&oh=00_AT8x-8jBDK5tRKp091d87t6vd26fscwgdDakVlcCus2f7g&oe=6321C6CB'
            />
            <img
            style={{
                margin: 0,
                padding: 0,
                height: '100vh',
                objectFit: 'contain'
            }}
                src='https://scontent.fiev4-1.fna.fbcdn.net/v/t31.18172-8/15936447_176571006153709_6327267251394795922_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=K4k2iKVZDLQAX_CSyf-&_nc_ht=scontent.fiev4-1.fna&oh=00_AT-Eq3k_EWfZPUn3F7tAHnxinOaesW1zW1A4YrdJt0_sHQ&oe=62FC8894'
            />
        </div>
    );
};

export default Home;