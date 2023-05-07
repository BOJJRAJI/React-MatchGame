import './index.css'

const TabItem = props => {
  const {tabDetails, isActiveTab, changeTab} = props
  const {displayText, tabId} = tabDetails
  const className = isActiveTab ? 'active-tab' : 'tab'

  function onChangeTab() {
    changeTab(tabId)
  }
  return (
    <li>
      <button className={className} type="button" onClick={onChangeTab}>
        <h1 className="tab-name">{displayText}</h1>
      </button>
    </li>
  )
}

export default TabItem
