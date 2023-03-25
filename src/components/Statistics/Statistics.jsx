import css from './Statistics.module.css';
import randColor from './randColor';


const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.stat_list}>

            {stats.map(({ label, percentage, id }) => (
                <li className={css.item} key={id}
                style={{ backgroundColor: randColor() }}>
                    
                    <span className={css.label}>{label}</span>
                    <span className="percentage"> {percentage}%</span>
                </li>
            ))}
  </ul>
</section>
};

export default Statistics;