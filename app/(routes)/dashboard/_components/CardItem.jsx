import React from 'react';

const CardItem = ({ title, value, Icon, bg }) => (
  <div className="p-7 border rounded-2xl flex items-center justify-between">
    <div>
      <h2 className="text-sm">{title}</h2>
      <h2 className="font-bold text-2xl">{value}</h2>
    </div>
    <Icon className={`${bg} p-3 h-12 w-12 rounded-full text-white`} />
  </div>
);

export default CardItem;
