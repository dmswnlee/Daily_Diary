import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { DiaryStateContext } from '../App';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

import { getStringDate } from '../util/date';
import { emotionList } from '../util/emotion';

const Diary = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const diaryList = useContext(DiaryStateContext);
   const [data, setData] = useState();

   useEffect(() => {
      const titleElement = document.getElementsByTagName('title')[0];
      titleElement.innerHTML = `디디 - ${id}번 일기`
   },[])

   useEffect(() => {
      const targetDiary = diaryList.find(it => parseInt(it.id) === parseInt(id));

      if (targetDiary) {
         // 일기 존재할 때
         setData(targetDiary);
      } else {
         // 일기가 없을 때
         alert('없는 일기 입니다.');
         navigate('/', { replace: true });
      }
   }, [id, diaryList]);

   if(!data){
      return <div className='DiaryPage'>로딩중 입니다...</div>
   }else{
      const curEmotionData = emotionList.find((it)=> parseInt(it.emotion_id) === parseInt(data.emotion))
      console.log(curEmotionData);
      return (
         <div className='DiaryPage'>
            <MyHeader 
               headText={`${getStringDate(new Date(data.date))}`} 
               leftChild={<MyButton text={<FaChevronLeft />} onClick={() => navigate(-1)} />}
               rightChild={<MyButton text={'수정'} onClick={() => navigate(`/edit/${data.id}`)} />}
            />
            <article>
               <section>
                  <h4>오늘의 감정 : 
                     <span className={['emotion_descript', `emotion_descript_${data.emotion}`].join(' ')}>
                        {curEmotionData.emotion_descript}
                     </span>
                  </h4>
                  <div className='diary_img_wrapper'>
                     <img src={curEmotionData.emotion_img} />
                  </div>
               </section>
               <section>
                  <h4>오늘의 일기</h4>
                  <div className='diary_content_wrapper'>
                     <p>{data.content}</p>
                  </div>
               </section>
            </article>
         </div>
      );
   }
};

export default Diary;
