import React, { useEffect, useState } from 'react';
import ProjectList from "./ProjectList";
import { TextControl, SelectControl } from "@wordpress/components";
import ProjectPagination from "./ProjectPagination";
import Skeleton from "./Skeleton";

export default function BlockApp(props) {
	let [keyword, setKeyword] = useState('');
	let [projects, setProjects] = useState([]);
	const [pagination, setPagination] = useState({});
	const [language, setLanguage] = useState('');
	const [languages, setLanguages] = useState([]);
	const [sortOrder, setSortOrder] = useState('asc');  // State for sorting order (asc or desc)

	useEffect(() => {
		wp.api.loadPromise.done(() => {
			getLanguages();
			getProjects();
		});
	}, []);

	// Fetch language terms from the 'project_language' taxonomy
	async function getLanguages() {
		try {
			const response = await fetch('/wp-json/wp/v2/project_language');
			const data = await response.json();

			setLanguages(data);
		} catch (error) {
			console.error("Error fetching languages:", error);
		}
	}

	// Fetch projects with pagination, keyword, language filter, and sorting
	async function getProjects(page = 1, selectedLanguage = '', searchKeyword = '', sortOrder = 'asc') {
		try {
			const projectCollection = new wp.api.collections.Project();
			const params = {
				per_page: 2,
				page: page,
				search: searchKeyword,
				orderby: 'title',  // We are ordering by title
				order: sortOrder,  // Sorting order (asc or desc)
			};

			if (selectedLanguage) {
				params.project_language = selectedLanguage;
			}

			const projectsData = await projectCollection.fetch({ data: params });

			console.log("Fetched via wp.api:", projectsData, projectCollection);
			setProjects([...projectsData]);
			setPagination({ ...projectCollection.state });
		} catch (error) {
			console.error("Error fetching projects via wp.api:", error);
		}
	}

	function handleKeywordChange(keyword) {
		setKeyword(keyword);
		getProjects(1, language, keyword, sortOrder); // Reset to page 1 and fetch filtered results
	}

	function handleLanguageChange(selectedLanguage) {
		setLanguage(selectedLanguage);
		getProjects(1, selectedLanguage, keyword, sortOrder); // Reset to page 1 and fetch filtered results
	}

	function handleSortOrderChange(sortOrder) {
		setSortOrder(sortOrder);
		getProjects(1, language, keyword, sortOrder); // Reset to page 1 and fetch sorted results
	}

	return (
		<div>
			<div>
				<TextControl
					label="Filter Projects"
					value={keyword}
					onChange={handleKeywordChange}  // Update the keyword search
				/>
			</div>

			<div>
				<SelectControl
					label="Filter by Language"
					value={language}
					options={[
						{ label: 'All Languages', value: '' },  // Option to clear the filter
						...languages.map(lang => ({
							label: lang.name,
							value: lang.id,
						}))
					]}
					onChange={handleLanguageChange}  // Update the language filter
				/>
			</div>

			<div>
				<SelectControl
					label="Sort by Title"
					value={sortOrder}
					options={[
						{ label: 'Ascending', value: 'asc' },
						{ label: 'Descending', value: 'desc' },
					]}
					onChange={handleSortOrderChange}  // Update the sort order
				/>
			</div>

			<ProjectList posts={projects} />
			<ProjectPagination
				currentPage={pagination.currentPage}
				totalPages={pagination.totalPages}
				setPage={(page) => getProjects(page, language, keyword, sortOrder)} // Pass the current filters and page
			/>
		</div>
	);
}
