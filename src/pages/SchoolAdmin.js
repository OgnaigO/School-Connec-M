import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {
  EuiCard,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiBasicTable,
  EuiIcon,
  EuiPageTemplate,
} from '@elastic/eui';
import logo from '../assets/logo1.png';

const columns = [
  {
    field: 'name',
    name: 'Tên sự kiện/hoạt động',
    render: (name) => (
      <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
        {name}
      </a>
    ),
  },
  {
    field: 'organization',
    name: 'Đơn vị tổ chức',
  },
  {
    field: 'email',
    name: 'Email',
  },
  {
    field: 'date',
    name: 'Thời gian diễn ra',
  },
  {
    field: 'location',
    name: 'Địa điểm tổ chức',
  },
];

const items = [
  {
    name: 'Giải bóng đá khối 10',
    organization: 'Phòng thể thao',
    email: 'backhoa@gmail.com',
    date: '30/02/2024',
    location: 'Sân vận động',
  },
  {
    name: 'Giải bóng đá khối 11',
    organization: 'Phòng thể thao',
    email: 'backhoa@gmail.com',
    date: '30/02/2024',
    location: 'Sân vận động',
  },
  {
    name: 'Giải bóng đá khối 12',
    organization: 'Tuyền Chí Lê',
    email: 'backhoa@gmail.com',
    date: '30/02/2024',
    location: 'Sân vận động',
  },
  {
    name: 'Hội thi văn nghệ 20/10',
    organization: 'Ngọc Chí Lê',
    email: 'backhoa@gmail.com',
    date: '30/02/2024',
    location: 'Sân vận động',
  },
];

const attendanceData = [
  { name: 'Có mặt', value: 70 },
  { name: 'Vắng mặt', value: 30 },
];

const COLORS = ['#FF8008', '#EEEEEE'];

function Dashboard() {
  return (
    <div>
      {/* Header */}
      <EuiPageTemplate.Header
        paddingSize="m"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px 24px',
          width: '1440px',
          height: '88px',
          background: '#F7F8FC',
          boxShadow: 'inset 0px -1px 0px #D3DAE6',
          flex: 'none',
          alignSelf: 'stretch',
          flexGrow: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '24px 0px',
            gap: '12px',
            width: '1392px',
            height: '88px',
            background: 'rgba(255, 255, 255, 0.01)',
            boxShadow: 'inset 0px -1px 0px #D3DAE6',
            flex: 'none',
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '0px',
              width: '190px',
              height: '40px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            <EuiText>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '34px',
                  lineHeight: '40px',
                  color: '#1A1C21',
                }}
              >
                Trang chủ
              </h2>
            </EuiText>
          </div>
        </div>
      </EuiPageTemplate.Header>

      {/* Grid Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gridTemplateRows: 'auto 1fr',
          gap: '20px',
          padding: '40px',
          background: '#FFFFFF',
          height: '100vh',
          boxSizing: 'border-box',
        }}
      >
        {/* Điểm danh */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px',
            gap: '16px',
            background: '#FFFFFF',
            boxShadow:
              '0px 0.9px 4px -1px rgba(0, 0, 0, 0.08), 0px 2.6px 8px -1px rgba(0, 0, 0, 0.06)',
            borderRadius: '6px',
            gridColumn: '1 / 2',
            gridRow: '1 / 3',
          }}
        >
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={attendanceData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>Điểm danh</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <div>
              <span style={{ color: '#FF8008', fontWeight: 'bold' }}>Có mặt:</span> 1000
            </div>
            <div>
              <span style={{ color: '#CCCCCC', fontWeight: 'bold' }}>Tổng số:</span> 3000
            </div>
          </div>
        </div>

        {/* Quản lý trường học */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px',
            background: '#FFFFFF',
            boxShadow:
              '0px 0.9px 4px -1px rgba(0, 0, 0, 0.08), 0px 2.6px 8px -1px rgba(0, 0, 0, 0.06)',
            borderRadius: '8px',
            gridColumn: '2 / 3',
            gridRow: '1 / 2',
          }}
        >
          <img src={logo} alt="Logo" style={{ width: '80px' }} />
          <div>
            <EuiText size="s" style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              THPT Bách Khoa
            </EuiText>
            <EuiText size="s" color="subdued">
              <p>Địa chỉ: Số 1, Đường Đại Cồ Việt, phường Bách Khoa, Hà Nội</p>
              <p>Email: <a href="mailto:backhoa@gmail.com">backhoa@gmail.com</a></p>
            </EuiText>
          </div>
          <a
            href="#"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Thông tin chi tiết
          </a>
        </div>

        {/* Quản lý tài khoản và Dữ liệu tài chính */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '5fr 2fr',
            gap: '20px',
            gridColumn: '2 / 3',
            gridRow: '2 / 3',
          }}
        >
          {/* Quản lý tài khoản */}
          <EuiCard
            title={
              <a
                href="/account-management"
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <EuiIcon type="users" style={{ marginRight: '8px' }} />
                <EuiText size="m" style={{ fontWeight: 'bold' }}>Quản lý tài khoản</EuiText>
              </a>
            }
            description={
              <div>
                <EuiFlexGroup justifyContent="spaceAround" gutterSize="l">
                  <EuiFlexItem grow={false}>
                    <h4>Học sinh</h4>
                    <p><b>1,000,000</b></p>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <h4>Giáo viên</h4>
                    <p><b>1,000,000</b></p>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <h4>Lớp học</h4>
                    <p><b>1,000</b></p>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </div>
            }
            style={{
              padding: '20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
            }}
          />

          {/* Dữ liệu tài chính */}
          <EuiCard
            title={
              <a
                href="/financial-data"
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <EuiIcon type="documentation" style={{ marginRight: '8px' }} />
                <EuiText size="m" style={{ fontWeight: 'bold' }}>Dữ liệu tài chính</EuiText>
              </a>
            }
            description={
              <div>
                <EuiFlexGroup justifyContent="spaceAround" gutterSize="l">
                  <EuiFlexItem grow={false}>
                    <h4>Đã thu</h4>
                    <p><b>100 triệu VNĐ</b></p>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <h4>Phải thu</h4>
                    <p><b>1 tỉ VNĐ</b></p>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </div>
            }
            style={{
              padding: '20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
            }}
          />
        </div>

        {/* Bảng Sự kiện */}
        <EuiFlexGroup gutterSize="l" style={{ marginTop: '20px', gridColumn: '1 / 3' }}>
          <EuiFlexItem grow={true}>
            <EuiCard
              title={
                <a
                  href="/all-events"
                  style={{
                    color: '#007bff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <EuiIcon type="bell" style={{ marginRight: '8px' }} />
                  <EuiText size="m" style={{ fontWeight: 'bold' }}>Sự kiện</EuiText>
                </a>
              }
              description={
                <div style={{ marginTop: '10px' }}>
                  <EuiBasicTable items={items} columns={columns} />
                </div>
              }
              style={{
                padding: '20px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                width: '100%',
              }}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </div>
  );
}

export default Dashboard;
