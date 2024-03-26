export default `import Button from "@forms/Button/Button"
...
<div className="flex flex-wrap gap-2">
  <Button isDefault>Default</Button>
  <Button type="button" color="blue">Blue</Button>
  <Button type="button" color="dark">Dark</Button>
  <Button type="button" color="light">White</Button>
  <Button color="success">Success</Button>
  <Button color="failure">Failure</Button>
  <Button color="warning">Warning</Button>
  <Button color="purple">Purple</Button>
</div>

<div className="text-[16px] font-bold mb-4 text-black mt-5">Button pills</div>
<div className="flex flex-wrap gap-2">
  <Button pill isDefault>Default</Button>
  <Button color="blue" pill>Blue</Button>
  <Button color="gray" pill>Gray</Button>
  <Button color="dark" pill>Dark</Button>
  <Button color="light" pill>Light</Button>
  <Button color="success" pill>Success</Button>
  <Button color="failure" pill>Failure</Button>
  <Button color="warning" pill>Warning</Button>
  <Button color="purple" pill>Purple</Button>
</div>

<div className="text-[16px] font-bold mb-4 text-black mt-5">Button sizes</div>
<div className="flex flex-wrap items-start gap-2">
  <Button isDefault size="xs">Extra small</Button>
  <Button isDefault size="sm">Small</Button>
  <Button isDefault size="md">Base</Button>
  <Button isDefault size="lg">Large</Button>
  <Button isDefault size="xl">Extra large</Button>
</div>

<div className="text-[16px] font-bold mb-4 text-black mt-5">Button with loading state</div>
<div className="flex flex-wrap items-start gap-2">
  <Button isDefault size="xs" isLoading loadingText="Loading"></Button>
  <Button size="sm" isLoading loadingText="Loading" gradientDuoTone="purpleToBlue"></Button>
  <Button size="md" isLoading loadingText="Loading" color="red"></Button>
  <Button size="lg" isLoading loadingText="Loading" pill isDefault></Button>
  <Button size="xl" isLoading loadingText="Loading" outline></Button>
</div>
`