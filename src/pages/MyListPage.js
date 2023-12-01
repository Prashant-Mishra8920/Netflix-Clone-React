import React from 'react'
import NetflixIconOverlay from '../components/NetflixIconOverlay'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';
import { useSelector } from 'react-redux';
import MyList from '../components/MyList';


const MyListPage = () => {
  const dispatch = useDispatch();

  const items = useSelector(state=>state.item)

  console.log(items)
  return (
    <div>
      <MyList list={items.movies}/>
    </div>
  )
}

export default MyListPage