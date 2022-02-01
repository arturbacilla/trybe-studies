SELECT 
	M.*,
    B.rating as rating
FROM Movies as M
INNER JOIN BoxOffice as B
	ON M.id = B.movie_id
Where B.rating > 8
Order by rating DESC