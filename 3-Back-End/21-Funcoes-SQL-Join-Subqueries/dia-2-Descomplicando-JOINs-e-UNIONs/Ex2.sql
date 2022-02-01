SELECT 
	M.title,    
    B.domestic_sales,
    B.international_sales,
	(B.domestic_sales + B.international_sales)
FROM Movies as M
INNER JOIN BoxOffice as B
ON M.id = B.movie_id
WHERE B.domestic_sales < B.international_sales