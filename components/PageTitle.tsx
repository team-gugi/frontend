'use client';

import React from 'react';

interface IPageTitleProps {
  title: string;
}

const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <>
      <div className="flex px-24 py-14">
        <h1 className="text-20 text-SemiBlack font-semibold">{title}</h1>
      </div>
    </>
  );
};
export default PageTitle;
