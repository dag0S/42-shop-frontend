export const getReviewWordWithEnding = (reviewCount: number) => {
	const absCount = Math.abs(reviewCount);
	const lastDigit = absCount % 10;
	const lastTwoDigits = absCount % 100;

	if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
		return `${reviewCount} отзывов`;
	}

	if (lastDigit === 1) {
		return `${reviewCount} отзыв`;
	}

	if (lastDigit >= 2 && lastDigit <= 4) {
		return `${reviewCount} отзыва`;
	}

	return `${reviewCount} отзывов`;
};
