SELECT 
    M.title, B.rating AS rating
FROM
    Movies AS M
        INNER JOIN
			BoxOffice AS B ON M.id = B.movie_id
ORDER BY rating DESC
