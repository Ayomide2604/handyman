import React from "react";

const Search = () => {
	return (
		<div className="top-search bg-secondary">
			<div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
				<form
					className="search-form"
					
					method="GET"
					acceptCharset="utf-8"
				>
					<div className="input-group">
						<span className="input-group-addon cursor-pointer">
							<button
								className="search-form_submit fas fa-search text-white"
								type="submit"
							/>
						</span>
						<input
							type="text"
							className="search-form_input form-control"
							name="s"
							autoComplete="off"
							placeholder="Type & hit enter..."
						/>
						<span className="input-group-addon close-search mt-1">
							<i className="fas fa-times" />
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Search;
