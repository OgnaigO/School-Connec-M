import React from 'react';
import { EuiIcon, EuiListGroup, EuiListGroupItem, EuiText, EuiFlexGroup, EuiFlexItem, EuiCollapsibleNavGroup } from '@elastic/eui';
import { Link } from 'react-router-dom';  // Đảm bảo đã cài đặt react-router-dom

export default function SideBarteacher() {
  return (
    <>
      {/* Phần tiêu đề SCM */}
      <EuiFlexGroup alignItems="center" gutterSize="m" responsive={false} style={{ padding: '4px 8px' }}>
        <EuiFlexItem grow={false} style={{ padding: '5px', border: '1px solid gray', borderRadius: '50%', boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>
          <EuiIcon type="gear" />
        </EuiFlexItem>
        <EuiText><strong>SCM</strong></EuiText>
      </EuiFlexGroup>

      {/* Trang chủ */}
      <EuiListGroup gutterSize="none" style={{ padding: '4px 8px' }}>
  <EuiListGroupItem 
    label={<Link to="/superadmin" style={{ color: 'black' }}>Trang chủ</Link>} 
    style={{ fontWeight: 'bold' }} 
  />
  </EuiListGroup>


      {/* Hoạt động - chia thành các mục nhỏ */}
      <EuiListGroup gutterSize="none" style={{ padding: '4px 8px' }}>
        <EuiListGroupItem label={<Link to="/activities" style={{ color: 'black' }}>Quản lý trường học</Link>} style={{ fontWeight: 'bold' }} />
        
        {/* Mục Thông tin */}
        <EuiListGroupItem label={<><EuiIcon type="clock" size="m" /> <Link to="/notifications" style={{ color: 'black' }}>Danh sách trường học</Link></>} />
      </EuiListGroup>
    </>
  );
}
