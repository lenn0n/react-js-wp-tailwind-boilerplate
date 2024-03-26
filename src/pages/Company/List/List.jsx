import React from 'react';

import CompanyListTable from './Table/Table';
import CreateCompany from './CreateCompany/CreateCompany';
import PageLayout from '@components/Layout/PageLayout/Layout';
import PageHeader from '@components/Layout/PageLayout/Header';
import PageSubHeader from '@components/Layout/PageLayout/SubHeader';

function List() {
	return (
		<>
			<PageHeader title="Companies">
				<CreateCompany />
			</PageHeader>
			<PageLayout>
				<PageSubHeader title="Company List" />
				<CompanyListTable />
			</PageLayout>
		</>
	)
}

export default List;
