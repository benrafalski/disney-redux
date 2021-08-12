import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import { useEffect } from 'react'
import axios from '../axios'
import { useDispatch } from 'react-redux'
import { selectNewDisney, selectOriginal, selectRecommended, selectTrending, setMovies } from '../features/movieSlice'
import Movies from './Movies'

const Home = () => {
    const dispatch = useDispatch()

    let recommends = []
    let newDisney = []
    let originals = []
    let trending = []

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get('/movies')
            
            res.data.map((doc) => {
                switch(doc.type) {
                    case 'recommend':
                        recommends = [...recommends, doc]
                        break;
                    case 'new':
                        newDisney = [...newDisney, doc]
                        break;
                    case 'original':
                        originals = [...originals, doc]
                        break;
                    case 'trending':
                        trending = [...trending, doc]
                        break;
                }

                dispatch(setMovies({
                    recommended: recommends,
                    newDisney: newDisney,
                    original: originals,
                    trending: trending
                }))
            })
        }

        fetchMovies()
    }, [])

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Movies selector={selectRecommended} header='Recommended for You'/>
            <Movies selector={selectNewDisney} header='New to Disney+'/>
            <Movies selector={selectOriginal} header='Disney Originals'/>
            <Movies selector={selectTrending} header='Trending'/>
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url('https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/master/public/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
   }
`;

export default Home
