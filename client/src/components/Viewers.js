import styled from "styled-components"

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img style={{ width:'60%', height:'50%' }} src='https://luckychickenproductions.com/img/brands/disney.png'/>
                <video 
                    autoPlay 
                    muted
                    loop={true} 
                    playsInline={true}
                >
                    <source
                        src='/videos/1564674844-disney.mp4'
                        type='video/mp4'
                    />
                </video>
            </Wrap>
            <Wrap>
                <img style={{ width:'60%', height:'50%' }} src='https://logos-world.net/wp-content/uploads/2020/11/Marvel-Logo-2012-2014.png' alt='marvel'/> 
                <video 
                    autoPlay 
                    muted
                    loop={true} 
                    playsInline={true}
                >
                    <source
                        src='/videos/1564676115-marvel.mp4'
                        type='video/mp4'
                    />
                </video>
            </Wrap>
            <Wrap>
                <img style={{ width:'60%', height:'50%' }} src='https://assets.cdn.watchdisneyfe.com/delta/assets/natgeo/national-geographic.svg'/>
                <video 
                    autoPlay 
                    muted 
                    loop={true} 
                    playsInline={true}
                >
                    <source
                        src='/videos/1564676296-national-geographic.mp4'
                        type='video/mp4'
                    />
                </video>
            </Wrap>
            <Wrap>
                <img style={{ width:'80%', height:'50%' }} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0da5d569-0f3d-47c4-98d9-2ac29218c2a0/ddhyct3-2b54dee6-9d02-428a-ba5f-00f804b30539.png/v1/fill/w_1280,h_442,strp/white_pixar_animation_studios_logo_by_trustamann_ddhyct3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDQyIiwicGF0aCI6IlwvZlwvMGRhNWQ1NjktMGYzZC00N2M0LTk4ZDktMmFjMjkyMThjMmEwXC9kZGh5Y3QzLTJiNTRkZWU2LTlkMDItNDI4YS1iYTVmLTAwZjgwNGIzMDUzOS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PORQutXiZh5vTcBNl6VrAdKTBY9ak7dmf0_nrKiDFEg' alt='pixar'/> 
                <video 
                    autoPlay 
                    muted
                    loop={true} 
                    playsInline={true}
                >
                    <source
                        src='/videos/1564676714-pixar.mp4'
                        type='video/mp4'
                    />
                </video>
            </Wrap>
            <Wrap>
                <img style={{ width:'60%', height:'50%' }} src='https://www.freepnglogos.com/uploads/star-wars-logo-1.png'/>
                <video 
                    autoPlay 
                    muted
                    loop={true} 
                    playsInline={true}
                >
                    <source
                        src='/videos/1608229455-star-wars.mp4'
                        type='video/mp4'
                    />
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: -56.25%;
    display: block;
    text-align: center;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        text-align: center;
        margin: auto;
        height: 90%;
        width: 90%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        opacity: 0;
        z-index: 0;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }
`;

export default Viewers
