import css from './Filter.module.css';

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    // <>
      <div className={css.filter}>
        <p className={css.titleFilter}>Find contacts by name:</p>
        <input
          className={css.input}
          type="text"
          value={filter}
          name="filter"
          onChange={handleFilterChange}
          placeholder="Contact name"
          // disabled={!contacts.length > 0}
        />
      </div>
    // </>
  );
};
