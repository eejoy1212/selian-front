import * as React from 'react';
import { BanManageActiveTab, BanManageInActiveTab, BanManageTabs } from '../../content/BanManage';
import { useNavigate, useLocation } from 'react-router-dom';

export interface ISiteApiTabsProps {}

export function SiteApiTabs(props: ISiteApiTabsProps) {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져오기 위해 useLocation 훅 사용

  // 각 탭에 해당하는 경로
  const tabs = [
    { label: '스마트 스토어', path: '/smart-store' },
    { label: '쿠팡', path: '/coupang' },
    { label: '11번가', path: '/eleven' },
    { label: 'G마켓', path: '/gmarket' },
    { label: '옥션', path: '/auction' },
    { label: '인터파크', path: '/interpark' },
    { label: '롯데온', path: '/lotte-on' },
  ];

  return (
    <BanManageTabs>
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path; // 현재 경로와 탭 경로 비교
        const TabComponent = isActive ? BanManageActiveTab : BanManageInActiveTab; // 활성화 여부에 따른 컴포넌트 선택
        return (
          <TabComponent
            key={tab.path}
            onClick={() => {
              navigate(tab.path);
            }}
          >
            {tab.label}
          </TabComponent>
        );
      })}
    </BanManageTabs>
  );
}
