import React from 'react';
import {
    EuiPageTemplate,
    EuiStat,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPanel,
    EuiBasicTable,
    EuiSpacer,
    EuiText,
    EuiFieldSearch,
    EuiFormControlLayout,
    EuiIcon,
    EuiSelect,
    EuiButtonEmpty,
} from '@elastic/eui';

export default function Dashboard() {
    // Dữ liệu thống kê
    const stats = [
        { title: '1,000,000', description: 'Trường học' },
        { title: '1,000,000', description: 'Giáo viên' },
        { title: '1,000,000', description: 'Học sinh' },
        { title: '100GB/200TB', description: 'Dữ liệu đã dùng', color: 'danger' },
        { title: '1,000,000', description: 'Statistic description' },
    ];

    // Dữ liệu danh sách trường học
    const schoolColumns = [
        { field: 'name', name: 'Tên trường học' },
        { field: 'address', name: 'Địa chỉ' },
        { field: 'email', name: 'Email' },
        { field: 'phone', name: 'Số điện thoại' },
        { field: 'principal', name: 'Hiệu trưởng' },
    ];

    const schoolItems = Array.from({ length: 10 }, (_, i) => ({
        name: 'THPT Bách Khoa',
        address: 'Số 1 Đại Cồ Việt, Hà Nội',
        email: 'bachkhoa@gmail.com',
        phone: '0112113114',
        principal: 'Lê Chí Tuyển',
    }));

    return (
        <EuiPageTemplate>
            {/* Header */}
            <EuiPageTemplate.Header 
                paddingSize="m"
                pageTitle={
                    <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup gutterSize="s" alignItems="center">
                                <EuiFlexItem grow={false}>
                                    <EuiText><h2>Trang chủ</h2></EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiSelect
                                        options={[
                                            { value: 'tp', text: 'Tỉnh/Thành phố' },
                                            { value: 'hanoi', text: 'Hà Nội' },
                                            { value: 'hcm', text: 'Hồ Chí Minh' },
                                        ]}
                                        aria-label="Tỉnh/Thành phố"
                                    />
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiSelect
                                        options={[
                                            { value: 'district', text: 'Quận/Huyện' },
                                            { value: 'dongda', text: 'Đống Đa' },
                                            { value: 'thanhxuan', text: 'Thanh Xuân' },
                                        ]}
                                        aria-label="Quận/Huyện"
                                    />
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiSelect
                                        options={[
                                            { value: 'He', text:'Hệ Đào Tạo'},
                                            { value: 'TH', text:'Tiểu Học' },
                                            { value: 'THCS', text: 'Trung Học Cơ Sở' },
                                            { value: 'THPT', text: 'Trung Học Phổ Thông' },
                                        ]}
                                        aria-label="Hệ đào tạo"
                                    />
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiButtonEmpty color="primary" href="#" style={{ textDecoration: 'underline' }}>
                                Năm học: 2024-2025
                            </EuiButtonEmpty>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                }
            />

            {/* Thống kê */}
            <EuiPageTemplate.Section color="plain">
                <EuiFlexGroup gutterSize="l">
                    {stats.map((stat, index) => (
                        <EuiFlexItem key={index} style={{ textAlign: 'center' }}>
                            <EuiStat
                                title={stat.title}
                                description={stat.description}
                                titleColor={stat.color || 'default'}
                            />
                        </EuiFlexItem>
                    ))}
                </EuiFlexGroup>
            </EuiPageTemplate.Section>

            <EuiSpacer size="l" />

            {/* Danh sách trường học */}
            <EuiPageTemplate.Section color="plain">
                <EuiPanel paddingSize="l">
                    <EuiText>
                        <h3 style={{ fontWeight: 'bold', color: '#0070F3' }}>Danh sách trường học</h3>
                    </EuiText>
                    <EuiSpacer size="m" />
                    <EuiBasicTable
                        tableLayout="auto"
                        columns={schoolColumns}
                        items={schoolItems}
                        rowHeader="name"
                    />
                </EuiPanel>
            </EuiPageTemplate.Section>
        </EuiPageTemplate>
    );
}
