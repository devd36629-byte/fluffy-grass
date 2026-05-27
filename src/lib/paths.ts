const baseUrl = import.meta.env.BASE_URL || '/';

export function withBase(path: string) {
	if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('#') || path.startsWith('mailto:') || path.startsWith('tel:')) {
		return path;
	}

	const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
	const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

	return `${normalizedBase}${normalizedPath}`;
}
