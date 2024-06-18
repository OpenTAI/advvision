import githubButton from '@/assets/img/GitHubButton.png';
import headImg from '@/assets/img/headImg.png';
import sparkles from '@/assets/img/sparkles.png';
import stars from '@/assets/img/stars.png';
import Footer from '@/components/footer';
import Header from '@/components/header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import dataEn from './index-en.json';

const Homepage = () => {
  AOS.init();
  const [data, setData] = useState(dataEn);

  const {
    whiteBox,
    transferbasedAttack,
    whiteBoxLeaderboards,
    transferAttackLeaderboards,
  } = data;

  return (
    <div>
      <Header />
      <div className="h-16" />
      <div className="max-w-360 mx-auto relative">
        <img
          src={headImg}
          className="h-208 absolute -z-10 object-cover object-top"
        />
        <div className="flex items-center flex-col">
          <div className="mt-16 text-base-blue text-6xl font-extralight max-w-168 text-center leading-18 mx-3">
            Open Trustworthy AI : Trust is the ultimate form of intelligence.
          </div>
          <div className="mt-5 text-3xl font-light leading-9 text-center mx-3">
            Are will find resultant, one painful consequences from.
          </div>
          <div className="bg-base-blue h-19 w-80 text-white text-2xl font-medium flex items-center justify-center mt-8">
            View Leaderboards
          </div>
        </div>
        <div className="bg-worldImg bg-center h-233 bg-cover mx-auto mt-16 relative">
          <div className="text-base-blue text-[42px] font-bold text-center pt-10">
            10 Planets form
          </div>
          <div className="max-w-144 mx-auto text-center mt-2 text-lg text-base-grey">
            This project provide tools and datasets that facilitates large-scale
            adversarial robustness evaluation of foundation vision models.
          </div>
          {/* <div className="border-white border-2 bg-base-blue rounded-full flex items-center text-center text-white absolute text-xs w-16 h-16 left-80 top-44">
            Object Detection
          </div>
          <div className="border-white border-2 bg-base-blue rounded-full flex items-center text-center text-white absolute text-sm w-24 h-24 left-168 top-52">
            Image Captioning
          </div>
          <div className="border-white border-2 bg-base-blue rounded-full flex items-center text-center text-white absolute text-sm w-24 h-24 left-255 top-40">
            Image Classification
          </div>
          <div className="border-white border-2 bg-base-blue rounded-full flex items-center text-center text-white absolute text-sm w-24 h-24 left-44 top-72">
            Face Recognition
          </div>
          <div className="border-white border-2 bg-base-blue rounded-full flex items-center text-center text-white absolute text-xs w-16 h-16 left-96 top-101">
            Crowd Counting
          </div>
          <div className="border-white border-2 bg-base-blue rounded-full flex items-center text-center text-white absolute text-base w-40 h-40 left-210 top-80">
            Medical Image Classification
          </div>
          <div className="border-white border-2 bg-base-blue rounded-full flex items-center text-center text-white absolute text-sm w-24 h-24 left-52 top-144">
            Pose Estimation
          </div>
          <div className="border-white border-2 bg-base-blue rounded-full flex items-center text-center text-white absolute text-base w-40 h-40 left-101 top-168">
            Instance Segmentation
          </div>
          <div className="border-white border-2 bg-base-blue rounded-full flex items-center text-center text-white absolute text-sm w-24 h-24 left-175 top-168">
            Person Re-Identification
          </div>
          <div className="border-white border-2 bg-base-blue rounded-full flex items-center text-center text-white absolute text-sm w-24 h-24 left-[1044px] top-144">
            Semantic Segmentation
          </div> */}
        </div>
        <div className="max-w-320 mx-auto px-3">
          <div className="mt-14">
            <div className="text-base-blue text-5sm font-semibold max-w-191 text-center mx-auto leading-14">
              White-box testing methodology stands as a beacon of excellence in
              proactive security assessment.
            </div>
            <div className="text-light-blue text-base max-w-191 text-center mx-auto mt-4">
              By leveraging this transparent approach, our model not only
              identifies vulnerabilities but also provides actionable
              recommendations for remediation
            </div>
          </div>
          <div className="mt-14">
            <div className="text-base-black text-center font-semibold text-5sm">
              白盒攻击评测
            </div>
            <div className="mt-6">
              <div className="!grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {whiteBox.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-light-grey hover:cursor-pointer hover:shadow-[0px_3px_8px_0px_#A7AEB733] h-64 break-inside-avoid-column grow-[3]"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={index * 100}
                    >
                      <div className="p-6">
                        <img
                          className="w-8"
                          src={require(`@/assets/img/whiteBox/${item.projectIcon}`)}
                        />
                        <div className="mt-8 text-base-blue text-xl font-semibold">
                          {item.projectName}
                        </div>
                        <div className="mt-2 h-24 text-des-blue text-base line-clamp-4">
                          {item.projectDescription}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-base-black text-center font-semibold text-5sm">
              迁移攻击评测
            </div>
            <div className="mt-6">
              <div className="!grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {transferbasedAttack.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-light-green hover:cursor-pointer hover:shadow-[0px_3px_8px_0px_#A7AEB733] h-64 break-inside-avoid-column grow-[3]"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={index * 100}
                    >
                      <div className="p-6">
                        <img
                          className="w-8"
                          src={require(`@/assets/img/transferbasedAttack/${item.projectIcon}`)}
                        />
                        <div className="mt-8 text-base-blue text-xl font-semibold">
                          {item.projectName}
                        </div>
                        <div className="mt-2 h-24 text-des-blue text-base line-clamp-4">
                          {item.projectDescription}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-22">
            <div className="text-base-black text-5sm font-semibold max-w-191 mx-auto text-center">
              Models and Datasets developed by OpenTAI Evaluation Platform
            </div>
            <div className="mt-10">
              <div className="!grid gap-6 grid-cols-1 lg:grid-cols-2">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="bg-GitHubBackground1 h-80 bg-cover bg-no-repeat bg-center border-[#EBF1F5] border py-11 px-12 relative"
                >
                  <div className="text-base-black font-bold text-3xl leading-10">
                    TAI.adv
                  </div>
                  <div className="text-des-blue text-base mt-3 max-w-108 line-clamp-5 h-32">
                    This comprehensive visibility allows for a meticulous
                    examination of security loopholes, enabling us to simulate
                    real-world attack scenarios pinpoint accuracy.
                  </div>
                  <img
                    src={githubButton}
                    className="absolute bottom-11 left-12 w-48 h-12 hover:cursor-pointer  "
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={100}
                  className="bg-GitHubBackground2 h-80 bg-cover bg-no-repeat bg-center border-[#EBF1F5] border py-11 px-12 relative"
                >
                  <div className="text-base-black font-bold text-3xl leading-10">
                    CC1M
                  </div>
                  <div className="text-des-blue text-base mt-3 max-w-108 line-clamp-5 h-32">
                    This comprehensive visibility allows for a meticulous
                    examination of security loopholes, enabling us to simulate
                    real-world attack scenarios pinpoint accuracy.
                  </div>
                  <img
                    src={githubButton}
                    className="absolute bottom-11 left-12 w-48 h-12 hover:cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="my-24">
              <div className="text-base-black font-semibold text-4xl text-center">
                LeaderBoards
              </div>
              <div className="mt-10">
                <div className="!grid gap-6 grid-cols-1 lg:grid-cols-2">
                  <div>
                    <div className="text-base-blue text-sm w-33 h-8 bg-[#edf1fe] flex items-center justify-center">
                      白盒攻击排行榜
                    </div>
                    {whiteBoxLeaderboards.map((item, index) => {
                      return (
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay={index * 2 * 100}
                          key={index}
                          className="mt-4 bg-leaderboardsBg1 min-h-40 bg-cover bg-no-repeat bg-center border-[#EBF1F5] border py-5 px-7 relative"
                        >
                          <div className="text-base-black font-bold text-2xl leading-7">
                            {item.title}
                          </div>
                          <div className="text-base-black text-lg mt-1 max-w-108 flex items-center">
                            <img
                              src={sparkles}
                              className="w-[18px] h-[16px] mr-1"
                            />
                            {item.subtitle}
                          </div>
                          <div className="flex mt-3 justify-between">
                            <div>
                              <span className="text-base-blue text-5xl font-bold mr-1">
                                {item.modelsNum}
                              </span>
                              <span className="text-light-blue text-lg">
                                models included
                              </span>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="flex text-base-black">
                                <img
                                  src={stars}
                                  className="w-[120px] h-[24px] mr-2"
                                />
                                <span className="text-lg leading-6">
                                  {item.star}
                                </span>
                              </div>
                              <div>{item.reviewed}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <div className="text-base-blue text-sm w-33 h-8 bg-[#edf1fe] flex items-center justify-center">
                      迁移攻击排行榜
                    </div>
                    {transferAttackLeaderboards.map((item, index) => {
                      return (
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay={(2 * index + 1) * 100}
                          key={index}
                          className="mt-4 bg-leaderboardsBg2 min-h-40 bg-cover bg-no-repeat bg-center border-[#EBF1F5] border py-5 px-7 relative"
                        >
                          <div className="text-base-black font-bold text-2xl leading-7">
                            {item.title}
                          </div>
                          <div className="text-base-black text-lg mt-1 max-w-108 flex items-center">
                            <img
                              src={sparkles}
                              className="w-[18px] h-[16px] mr-1"
                            />
                            {item.subtitle}
                          </div>
                          <div className="flex mt-3 justify-between">
                            <div>
                              <span className="text-base-blue text-5xl font-bold mr-1">
                                {item.modelsNum}
                              </span>
                              <span className="text-light-blue text-lg">
                                models included
                              </span>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="flex text-base-black">
                                <img
                                  src={stars}
                                  className="w-[120px] h-[24px] mr-2"
                                />
                                <span className="text-lg leading-6">
                                  {item.star}
                                </span>
                              </div>
                              <div>{item.reviewed}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
