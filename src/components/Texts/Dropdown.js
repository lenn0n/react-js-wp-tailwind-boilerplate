export default `import Dropdown from "@components/Dropdown/Dropdown"
...
const dropdownExampleList = [
  { label: "Dashboard", type: 'item', onClick: () => { console.log("This is the default dropdown.") } },
  { label: "Settings", type: 'item', onClick: () => { console.log("This is the default dropdown.") } },
  { label: "Earnings", type: 'item', onClick: () => { console.log("This is the default dropdown.") } },
  { type: 'divider' },
  { label: "Separated Link", type: 'item', onClick: () => { } },
]
...
  <div className="mb-3">
    <Dropdown
      label="Dropdown with ClassName"
      size="sm"
      className="bg-primary"
      list={dropdownExampleList}
    />
  </div>
  <Dropdown
    label="Dropdown with ClassName and LG Size"
    size="lg"
    placement="right"
    className="bg-green-500"
    list={dropdownExampleList}
  />
  <div className="flex flex-wrap gap-4 mt-4">
    <Dropdown
      label="Dropdown Top"
      size="sm"
      placement="top"
      list={dropdownExampleList}
    />
    <Dropdown
      label="Dropdown Bottom"
      size="sm"
      placement="bottom"
      list={dropdownExampleList}
    />
    <Dropdown
      label="Dropdown Right"
      size="sm"
      placement="right"
      list={dropdownExampleList}
    />
    <Dropdown
      label="Dropdown Left"
      size="sm"
      placement="left"
      list={dropdownExampleList}
    />
    <Dropdown
      label="Dropdown Left Start"
      size="sm"
      placement="left-start"
      list={dropdownExampleList}
    />
    <Dropdown
      label="Dropdown Right Start"
      size="sm"
      placement="right-start"
      list={dropdownExampleList}
    />
  </div>
`