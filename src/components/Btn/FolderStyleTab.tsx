import styled from 'styled-components';

interface TabButtonProps {
  active?: boolean;
}

const FolderStyleTab = styled.button<TabButtonProps>`
  min-width: 200px;
  height: 49px;
  border: ${(props) => (props.active ? 'none' : '1px solid #d9d9d9')};
  background-color: ${(props) => (props.active ? 'white' : 'transparent')};
  border-top: ${(props) => (props.active ? '1px solid #d9d9d9' : 'none')};
  border-left: ${(props) => (props.active ? '1px solid #d9d9d9' : 'none')};
  color: ${(props) => (props.active ? '#333333' : 'inherit')};
  font-size: 20px;
  font-weight: ${(props) => (props.active ? 600 : 500)};
  line-height: 24.2px;
  cursor: pointer;
`;

export default FolderStyleTab;
