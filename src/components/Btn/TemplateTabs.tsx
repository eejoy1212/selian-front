import * as React from 'react';
import { BanManageActiveTab, BanManageInActiveTab, BanManageTabs } from '../../content/BanManage';
import { useNavigate, useLocation } from 'react-router-dom';

export interface ITemplateTabsProps {}

export function TemplateTabs(props: ITemplateTabsProps) {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져오기 위해 useLocation 훅 사용

  // 각 탭에 해당하는 경로
  const tabs = [
    { label: '배송 템플렛', path: '/delivery-template' },
    { label: '마켓 등록 템플릿', path: '/market-template' },
    { label: '이미지 템플릿', path: '/img-template' },
    { label: '마진 템플릿', path: '/margin-template' },
    { label: '태그 템플릿', path: '/tag-template' },
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
