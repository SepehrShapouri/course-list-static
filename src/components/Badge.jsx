const Badge = ({tag}) => {
    return ( 
        <span className={`courseDetail__badge ${tag === "completed" ? 'completed' : ''}`}>{tag}</span>
     );
}
 
export default Badge;