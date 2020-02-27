import React from "react"

const SearchByTeam = ({ onChange, onSubmit, name, value }) => {
  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className ="search">
      <input
        value={value}
        onChange={e => onChange(e)}
        name={name}
        type="text"
      />
        <button type="submit">Search by Team</button>
        </div>
    </form>
  )
}
export default SearchByTeam