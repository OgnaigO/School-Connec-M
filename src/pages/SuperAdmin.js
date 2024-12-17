import React, { useState } from 'react';
import {
    EuiPageTemplate,
    EuiStat,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPanel,
    EuiBasicTable,
    EuiSpacer,
    EuiText,
    EuiButtonEmpty,
    EuiPagination,
    EuiSelect,
    EuiFormRow,
} from '@elastic/eui';

export default function Dashboard() {
    const stats = [
        { title: '1,000,000', description: 'Trường học' },
        { title: '1,000,000', description: 'Giáo viên' },
        { title: '1,000,000', description: 'Học sinh' },
        { title: '100GB/200TB', description: 'Dữ liệu đã dùng', color: '#BD271E' },
        { title: '1,000,000', description: 'Statistic description' },
    ];

    const schoolColumns = [
        { 
            field: 'name', 
            name: 'Tên trường học', 
            render: (name) => (
                <a href={`/school/${name}`} style={{ textAlign: 'right', display: 'block' }}>
                    {name}
                </a>
            ),
        },
        { 
            field: 'address', 
            name: 'Địa chỉ', 
            render: (address) => <div style={{ textAlign: 'right' }}>{address}</div>,
            headerProps: { style: { textAlign: 'right' } },
            align: 'right'
        },
        { 
            field: 'email', 
            name: 'Email', 
            render: (email) => <div style={{ textAlign: 'right' }}>{email}</div>,
            headerProps: { style: { textAlign: 'right' } },
            align: 'right'
        },
        { 
            field: 'phone', 
            name: 'Số điện thoại', 
            render: (phone) => <div style={{ textAlign: 'right' }}>{phone}</div>,
            headerProps: { style: { textAlign: 'right' } },
            align: 'right'
        },
        { 
            field: 'principal', 
            name: 'Hiệu trưởng', 
            render: (principal) => <div style={{ textAlign: 'right' }}>{principal}</div>,
            headerProps: { style: { textAlign: 'right' } },
            align: 'right'
        },
    ];

    const schoolItems = Array.from({ length: 50 }, (_, i) => ({
        name: `THPT Bách Khoa ${i + 1}`,
        address: 'Số 1 Đại Cồ Việt, Hà Nội',
        email: 'bachkhoa@gmail.com',
        phone: '0112113114',
        principal: 'Lê Chí Tuyển',
    }));

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const onPageChange = (newPageIndex) => {
        setPageIndex(newPageIndex);
    };

    const onPageSizeChange = (e) => {
        setPageSize(Number(e.target.value));
        setPageIndex(0); // Reset to the first page when page size changes
    };

    return (
        <EuiPageTemplate>
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

            {/* Thống kê */}
            <EuiPageTemplate.Section style={{ backgroundColor: '#FFFFFF', padding: 0 }}>
                <EuiFlexGroup
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        padding: '0px',
                        width: '1120px',
                        height: '44px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                    }}
                    gutterSize="none"
                >
                    {stats.map((stat, index) => (
                        <EuiFlexItem
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                width: '200px',
                                height: '44px',
                                flex: 'none',
                                order: index,
                                flexGrow: 0,
                            }}
                        >
                            <EuiStat
                                title={stat.title}
                                description={stat.description}
                                titleColor={stat.color || 'default'}
                                titleSize="s"
                                style={{
                                    textAlign: 'left',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '22px',
                                    lineHeight: '24px',
                                    color: '#1A1C21',
                                }}
                                descriptionElement="p"
                                descriptionStyle={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: '#343741',
                                }}
                            />
                        </EuiFlexItem>
                    ))}
                </EuiFlexGroup>
            </EuiPageTemplate.Section>

            {/* Danh sách trường học */}
            <EuiPageTemplate>
                <EuiPanel paddingSize="l">
                    <EuiSpacer size="m" />
                    <EuiBasicTable
                        tableLayout="auto"
                        columns={schoolColumns}
                        items={schoolItems.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)}
                        rowHeader="name"
                    />
                    {/* Pagination */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px 0px 0px',
                            width: '1392px',
                            height: '48px',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <EuiText size="s">Rows per page:</EuiText>
                            <EuiFormRow style={{ marginLeft: '8px' }}>
                                <EuiSelect
                                    options={[
                                        { value: 5, text: '5' },
                                        { value: 10, text: '10' },
                                        { value: 20, text: '20' },
                                    ]}
                                    value={pageSize}
                                    onChange={onPageSizeChange}
                                />
                            </EuiFormRow>
                        </div>
                        <EuiPagination
                            pageCount={Math.ceil(schoolItems.length / pageSize)}
                            activePage={pageIndex}
                            onPageClick={onPageChange}
                        />
                    </div>
                </EuiPanel>
            </EuiPageTemplate>
        </EuiPageTemplate>
    );
}
