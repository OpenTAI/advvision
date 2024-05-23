import leftArrow from '@/assets/img/leftArrow.png';
import playIcon from '@/assets/img/playIcon.png';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ConfigProvider, Table } from 'antd';
import { useState } from 'react';
import { history } from 'umi';
import dataEn from './index-en.json';

interface dataType {
  key: React.Key;
  name: string;
  paper: string;
  download: string;
  datasetA: string;
  datasetB: string;
  ranking: string;
}

const columns = [
  {
    title: '模型名称',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: dataType, b: dataType) => a.name.length - b.name.length,
  },
  {
    title: '论文',
    dataIndex: 'paper',
    key: 'paper',
    className: 'w-96',
    render: (text: string) => (
      <div className="text-base-blue underline cursor-pointer">{text}</div>
    ),
  },
  {
    title: '模型下载量',
    dataIndex: 'download',
    key: 'download',
    className: 'w-32',
    sorter: (a: dataType, b: dataType) => a.name.length - b.name.length,
  },
  {
    title: '对抗安全性',
    className: '!text-center',
    children: [
      {
        title: '数据集A',
        dataIndex: 'datasetA',
        key: 'datasetA',
        className: '!text-center',
      },
      {
        title: '数据集B',
        dataIndex: 'datasetB',
        key: 'datasetB',
        className: '!text-center',
      },
    ],
  },
  {
    title: '排名',
    dataIndex: 'ranking',
    key: 'ranking',
  },
];

const Leaderboards = () => {
  const [data, setData] = useState(dataEn);

  const { leaderboards } = data;

  return (
    <div>
      <Header />
      <div className="bg-leaderboardsBg3 bg-cover bg-center h-[392px]">
        <div className="font-extralight text-6xl w-168 text-center mx-auto pt-12">
          Rapidly craft compelling rankingusing prompts
        </div>
        <div className="font-light text-xl w-191 text-center mx-auto mt-4">
          OpenTAI Rank is exploring the most advanced language and visual
          models, offering a comprehensive, and neutral evaluation reference for
          the industry and research community.
        </div>
        <div className="bg-white/30 border-base-blue border-2 w-[331px] h-[70px] mt-4 mx-auto text-base-blue font-semibold text-2xl flex items-center justify-center">
          <img src={playIcon} className="w-8 mr-2" />
          Learn how it works
        </div>
      </div>
      <div className="my-24 max-w-320 mx-auto bg-table-bg p-6 border border-[#DFE3E6]">
        <div className="flex items-center font-bold text-xl text-[#11181C]">
          <img
            className="w-[10px] h-4 mr-5 cursor-pointer"
            src={leftArrow}
            onClick={() => history.push('/')}
          />
          Rankings
        </div>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: '#F8F9FA',
                borderColor: '#DFE3E6',
                headerColor: '#11181C',
                headerSplitColor: '#F8F9FA',
                cellPaddingBlock: 10,
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={leaderboards}
            pagination={false}
            rowClassName={'bg-table-bg text-base'}
          />
        </ConfigProvider>
        <div className="py-2 px-3 bg-[#ECEEF0] w-fit mt-4 mx-auto text-[#11181C] text-base font-semibold rounded-md cursor-pointer">
          Load more
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboards;
