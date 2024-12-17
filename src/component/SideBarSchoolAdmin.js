import React from 'react';
import { EuiIcon, EuiListGroup, EuiListGroupItem, EuiText, EuiFlexGroup, EuiFlexItem, EuiCollapsibleNavGroup } from '@elastic/eui';
import { Link } from 'react-router-dom';  // Đảm bảo đã cài đặt react-router-dom

export default function SideBar() {
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
        <EuiListGroupItem label={<Link to="/student"style={{ color: 'black' }}>Trang chủ</Link>} style={{ fontWeight: 'bold' }} />
      </EuiListGroup>

      {/* Hoạt động - chia thành các mục nhỏ */}
      <EuiListGroup gutterSize="none" style={{ padding: '4px 8px' }}>
        <EuiListGroupItem label={<Link to="/activities"style={{ color: 'black' }}>Hoạt động</Link>} style={{ fontWeight: 'bold' }} />
        
        {/* Mục Thông tin */}
        <EuiListGroupItem label={<><EuiIcon type="bell" size="m" /> <Link to="/notifications"style={{ color: 'black' }}>Thông tin</Link></>} />
        
        {/* Mục Sự kiện */}
        <EuiListGroupItem label={<><EuiIcon type="starFilled" size="m" /> <Link to="/events"style={{ color: 'black' }}>Sự kiện</Link></>} />
        
        {/* Mục Thông báo */}
        <EuiListGroupItem label={<><EuiIcon type="article" size="m" /> <Link to="/news"style={{ color: 'black' }}>Thông báo</Link></>} />
      </EuiListGroup>

      {/* Quản lý học tập */}
      <EuiCollapsibleNavGroup 
        isCollapsible 
        initialIsOpen={true} 
        title={<EuiText style={{ fontWeight: 'bold' }}>Học tập</EuiText>} 
        style={{ borderBlockStart: 'none' }}
      >
        <EuiListGroup flush gutterSize="none">
          <EuiListGroupItem label={<><EuiIcon type="calendar" size="m" /> <Link to="/schedule"style={{ color: 'black' }}>Thời khóa biểu</Link></>} />
          <EuiListGroupItem label={<><EuiIcon type="users" size="m" /> <Link to="/my-classes"style={{ color: 'black' }}>Học sinh</Link></>} />
          <EuiListGroupItem label={<><EuiIcon type="training" size="m" /> <Link to="/student-records"style={{ color: 'black' }}>Giáo viên</Link></>} />
        </EuiListGroup>
      </EuiCollapsibleNavGroup>

      {/* Tài chính */}
      <EuiCollapsibleNavGroup 
        isCollapsible 
        initialIsOpen={true} 
        title={<EuiText style={{ fontWeight: 'bold' }}>Tài Chính</EuiText>} 
        style={{ borderBlockStart: 'none' }}
      >
        <EuiListGroup flush gutterSize="none">
          <EuiListGroupItem label={<> <Link to="/schedule"style={{ color: 'black' }}>Công nợ</Link></>} />
        </EuiListGroup>
      </EuiCollapsibleNavGroup>

      <EuiCollapsibleNavGroup 
        isCollapsible 
        initialIsOpen={true} 
        title={<EuiText style={{ fontWeight: 'bold' }}>Cài đặt</EuiText>} 
        style={{ borderBlockStart: 'none' }}
      >
        <EuiListGroup flush gutterSize="none">
        <EuiListGroupItem label={<> <EuiIcon type="gear" size="m" /><Link to="/schedule"style={{ color: 'black' }}> Quản lý tài khoản</Link></>} />
        <EuiListGroupItem label={<> <EuiIcon type="gear" size="m" /><Link to="/schedule"style={{ color: 'black' }}> Quản lý lớp học</Link></>} />

        </EuiListGroup>
      </EuiCollapsibleNavGroup>
    </>
  );
}
