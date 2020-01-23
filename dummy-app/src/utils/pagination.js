export function paginator(currentPage, totalPages) {
	let pages = [];

	let firstPage;

	if (currentPage <= 3) {
		firstPage = 1;
	} else if (totalPages - currentPage < 2) {
		firstPage = totalPages - 4;
	} else {
		firstPage = currentPage - 2;
	}
	for (let i = firstPage; i <= totalPages; i++) {
		pages.push(i);
		if (pages.length == 5) {
			break;
		}
	}
	return pages;
}
