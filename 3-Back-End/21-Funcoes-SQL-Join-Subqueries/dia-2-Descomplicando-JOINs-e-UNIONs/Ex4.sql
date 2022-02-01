SELECT 
	T.*,
    M.*
FROM Theater as T
LEFT JOIN Movies as M
ON M.theater_id = T.id
ORDER BY name ASC;