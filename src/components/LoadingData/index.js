import React from 'react'

export default function Loading(){
	return(<>
				<div className="loading-spinner">
					<div className="spinner-border text-success" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
				<style jsx>{`
					.loading-spinner .spinner-border{
						margin-left: 4em;
						margin-top: 2em;
					}
				`}</style>
			</>);

}