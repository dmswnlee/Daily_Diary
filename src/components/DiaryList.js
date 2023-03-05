import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import DiaryItem from './DiaryItem';
import MyButton from './MyButton';

const sortOptionList = [
   { value: 'latest', name: '최신순' },
   { value: 'oldest', name: '오래된 순' },
];

const filterOptionList = [
   { value: 'all', name: '전부다' },
   { value: 'good', name: '좋은 감정만' },
   { value: 'bad', name: '나쁜 감정만' },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
   return (
      <select className="ControlMenu" value={value} onChange={e => onChange(e.target.value)}>
         {optionList.map((it, idx) => (
            <option key={idx} value={it.value}>
               {it.name}
            </option>
         ))}
      </select>
   );
});

const DiaryList = ({ diaryList }) => {
   const navigate = useNavigate();
   // 필터 정렬
   const [sortType, setSortType] = useState('latest');
   const [filter, setFilter] = useState('all');

   // 정렬된 함수 반환
   const getProcessedDiaryList = () => {
      const filterCallback = item => {
         if (filter === 'good') {
            return parseInt(item.emotion) <= 3;
         } else {
            return parseInt(item.emotion) > 3;
         }
      };

      const compare = (a, b) => {
         if (sortType === 'latest') {
            return parseInt(b.date) - parseInt(a.date);
         } else {
            return parseInt(a.date) - parseInt(b.date);
         }
      };

      const copyList = JSON.parse(JSON.stringify(diaryList));
      const filteredList = filter === 'all' ? copyList : copyList.filter(it => filterCallback(it));

      const sortedList = filteredList.sort(compare);
      return sortedList;
   };

   return (
      <div className="DiaryList">
         <div className="menu_wrapper">
            <div className="left_col">
               <p>총 <span>{diaryList.length}</span> 개의 일기가 작성되었습니다.</p>
            </div>
            <div className="right_col">
               <ControlMenu 
                  value={sortType} 
                  onChange={setSortType} 
                  optionList={sortOptionList} 
               />
               <ControlMenu 
                  value={filter} 
                  onChange={setFilter} 
                  optionList={filterOptionList} 
               />
            </div>
         </div>
         <div>
            {getProcessedDiaryList().map(it => (
               <DiaryItem key={it.id} {...it} />
            ))}
         </div>
         <div className="bottom_btn">
            <MyButton 
               type={'positive'} 
               text={<FaPlus />} 
               onClick={() => navigate('/new')} 
            />
         </div>
      </div>
   );
};

DiaryList.defaultProps = {
   diaryList: [],
};

export default DiaryList;
