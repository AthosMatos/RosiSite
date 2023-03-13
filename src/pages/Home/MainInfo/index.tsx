const MainInfo = () =>
{
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                width:'10vw',
                height:'10vw',
                border:'1px solid #CECECE',
                borderRadius:'0.8rem',
            }}>

            </div>
            <p style={{
                fontWeight:'800',
                fontSize:'1.5vw',
                margin:'0.8vw 0',
            }}>
                Home
            </p>
            <p style={{
                fontWeight:'400',
                fontSize:'1vw',
                textAlign:'center',
                maxWidth:'20vw',
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat lacinia sapien sit amet feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc venenatis molestie metus ut rhoncus. Phasellus ac tellus enim. Duis ullamcorper ac orci quis malesuada. Fusce at nisi nec quam dictum luctus. Donec semper mi sed metus scelerisque, a porttitor tortor finibus.
            </p>
        </div>
    )
}

export default MainInfo