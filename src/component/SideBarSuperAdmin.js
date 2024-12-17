import React, { useState } from 'react';
import { EuiIcon, EuiListGroup, EuiListGroupItem, EuiText, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { Link } from 'react-router-dom';

export default function SideBarteacher() {
  // State để điều khiển mở rộng/collapse các mục
  const [isOpen, setIsOpen] = useState(true);

  // Hàm toggle trạng thái mở rộng
  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      width: '300px', 
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      padding: '24px 0 0 0',
      backgroundColor: '#fff',
      boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
    }}>
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

      {/* Quản lý trường học */}
      <EuiListGroup gutterSize="none" style={{ padding: '4px 8px' }}>
        <EuiListGroupItem
          label={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Icon toggle */}
              <EuiIcon 
                type={isOpen ? "arrowDown" : "arrowRight"} 
                size="m" 
                style={{ marginRight: '8px', cursor: 'pointer' }} 
                onClick={toggleList} 
              />
              <span style={{ fontWeight: 'bold' }}>Quản lý trường học</span>
            </div>
          }
        />
        
        {/* Danh sách trường học - hiển thị khi mở */}
        {isOpen && (
          <EuiListGroupItem 
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Gạch dọc và ngang */}
              <div style={{
                borderLeft: '3px solid lightgray',
                height: '32px',
                marginRight: '8px',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  transform: 'translate(-50%, -50%)',
                  borderTop: '1px solid lightgray',
                  width: '10px'
                }}></div>
              </div>
                <EuiIcon type="clock" size="m" style={{ marginRight: '8px' }} />
                <Link to="/notifications" style={{ color: 'black' }}>Danh sách trường học</Link>
              </div>
            }
            style={{ marginLeft: '24px' }}
          />
        )}
      </EuiListGroup>
    </div>
  );
}
