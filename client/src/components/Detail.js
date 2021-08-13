import styled from "styled-components"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from '../axios'

const Detail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get('/movies')

            res.data.map((doc) => {
                if(doc._id === id){
                    setDetail(doc)
                }
            })
        }

        fetchMovies()
    }, [id])

    return (
        <Container>
            <Background>
                <img src={detail.backgroundImg}/>
            </Background>
            <ImageTitle>
                <img src={detail.titleImg}/>
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <PlayArrowIcon fontSize='large'/>
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <PlayArrowIcon fontSize='large'/>
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span></span>
                        <span></span>
                    </AddList>
                    <GroupWatch>
                        <div>
                            <PeopleOutlineIcon fontSize='large'/>
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    {detail.subTitle}
                </SubTitle>
                <Description>
                    {detail.description}
                </Description>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);  
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);

    svg {
        width: 32px;
    }

    &:hover{
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        svg {
            width: 25px;
        }
    }

`;

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const AddList = styled.div`
    margin-right: 16px;
    height: 54px;
    width: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;

    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;

        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
`;

const GroupWatch = styled.div`
    height: 54px;
    width: 54px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #fff;

    div {
        height: 50px;
        width: 50px;
        background: rgb(0, 0, 0);
        border-radius: 50%;
    }

    svg {
        margin-top: 5px;
        width: 100%;
        height: 70%;
    }
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 14px;
    }    
`;

export default Detail
