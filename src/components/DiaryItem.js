import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import MyButton from './MyButton';

const DiaryItem = ({ id, emotion, content, date }) => {
   const navigate = useNavigate();

   const options = { year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long' };
   const strDate = new Date(parseInt(date)).toLocaleDateString('ko-KR', options);

   const goDetail = () => {
      navigate(`/diary/${id}`);
   };

   const goEdit = () => {
      navigate(`/edit/${id}`);
   };

   return (
      <div className="DiaryItem">
         <div onClick={goDetail} className={['emotion_img_wrapper', `emotion_img_wrapper_${emotion}`].join(' ')}>
            <img src={process.env.PUBLIC_URL + `/assets/emotion${emotion}.png`} />
         </div>
         <div onClick={goDetail} className="info_wrapper">
            <div className="diary_date">{strDate}</div>
            <div className="diary_content_preview">{content.slice(0, 100)}</div>
         </div>
         <div className="btn_wrapper">
            <MyButton onClick={goEdit} text={<FaRegEdit />} />
         </div>
      </div>
   );
};

export default React.memo(DiaryItem);
