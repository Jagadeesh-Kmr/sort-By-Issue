const SortBy = props => {
  const {sortByData, onClickTabId} = props
  console.log(sortByData)
  const onClickTab = () => {
    onClickTabId(sortByData.id)
  }

  return (
    <>
      <li className="tab-li">
        <button type="button" onClick={onClickTab}>
          {sortByData.id}
        </button>
      </li>
    </>
  )
}

export default SortBy
