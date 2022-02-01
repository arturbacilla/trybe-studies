SELECT 
	M.title,
	(B.domestic_sales + B.international_sales) AS 'Total Sales'    
FROM Movies as M
INNER JOIN BoxOffice as B
ON M.id = B.movie_id