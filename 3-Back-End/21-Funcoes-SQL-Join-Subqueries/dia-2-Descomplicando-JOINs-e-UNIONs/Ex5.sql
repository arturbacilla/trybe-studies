SELECT 
	M.*,
    T.*
FROM Movies as M
RIGHT JOIN Theater as T
ON M.theater_id = T.id
order by name ASC