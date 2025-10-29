import React, { useState, useEffect } from 'react';

const API_ENDPOINT = 'http://localhost:3001/movies';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Hàm bất đồng bộ (async/await) để gọi API
    const fetchMovies = async () => {
        try {
            const response = await fetch(API_ENDPOINT); // Mặc định là GET

            // Kiểm tra lỗi HTTP (ví dụ: 404, 500)
            if (!response.ok) {
                throw new Error(`Lỗi HTTP: ${response.status}`);
            }

            const data = await response.json(); // Chuyển đổi phản hồi sang JSON
            setMovies(data);
        } catch (error) {
            console.error("Lỗi khi tải danh sách phim:", error);
        } finally {
            setLoading(false); // Dù thành công hay thất bại cũng dừng loading
        }
    };

    // Gọi hàm fetchMovies() khi component được mount lần đầu
    useEffect(() => {
        fetchMovies();
    }, []);

    if (loading) {
        return <div>Đang tải dữ liệu phim...</div>;
    }
    const handleCreate = async (newMovieData) => {
        // json-server tự tạo ID, ta không cần cung cấp
        const url = 'http://localhost:3001/movies';

        try {
            const response = await fetch(url, {
                method: 'POST', // Phương thức POST
                headers: {
                    'Content-Type': 'application/json', // Báo cho server biết dữ liệu là JSON
                },
                body: JSON.stringify(newMovieData), // Chuyển đổi đối tượng JS thành chuỗi JSON
            });

            if (!response.ok) {
                throw new Error('Thêm phim thất bại.');
            }

            const createdMovie = await response.json();
            console.log("Phim đã được tạo:", createdMovie);

            // Sau khi tạo thành công, gọi lại fetchMovies() để cập nhật danh sách
            fetchMovies();

        } catch (error) {
            console.error("Lỗi khi thêm phim:", error);
        }
    };

    // Sử dụng:
    // handleCreate({ title: 'New Sci-Fi', description: '...', genreId: 1, year: 2025, duration: 90 });
    const handleUpdate = async (id, updatedFields) => {
        const url = `http://localhost:3001/movies/${id}`;

        try {
            const response = await fetch(url, {
                method: 'PATCH', // Sử dụng PATCH để chỉ cập nhật các trường được gửi đi
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFields),
            });

            if (!response.ok) {
                throw new Error(`Cập nhật phim ID ${id} thất bại.`);
            }

            console.log(`Phim ID ${id} đã được cập nhật.`);
            fetchMovies(); // Cập nhật lại giao diện

        } catch (error) {
            console.error("Lỗi khi cập nhật phim:", error);
        }
    };

    // Sử dụng:
    // handleUpdate(2, { title: 'Laugh Out Loud 2.0', duration: 110 });
    const handleDelete = async (id) => {
        const url = `http://localhost:3001/movies/${id}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });

            // Đối với DELETE, ta thường chỉ kiểm tra response.ok, không cần đọc body
            if (!response.ok) {
                throw new Error(`Xóa phim ID ${id} thất bại.`);
            }

            console.log(`Phim ID ${id} đã được xóa.`);

            // Cập nhật state bằng cách lọc bỏ phim đã xóa
            setMovies(movies.filter(movie => movie.id !== id));
            // Hoặc gọi lại fetchMovies();

        } catch (error) {
            console.error("Lỗi khi xóa phim:", error);
        }
    };

    // Sử dụng:
    // handleDelete(4);

    return (
        <div>
            <h2>Danh sách Phim ({movies.length} phim)</h2>
            {movies.map(movie => (
                <div key={movie.id}>
                    <strong>{movie.title}</strong> ({movie.year}) - Thể loại ID: {movie.genreId}
                </div>
            ))}
        </div>
    );

};

export default MovieList;
