export default `import { useToast } from "@hooks"
...
const { showSuccessToast, showErrorToast, showInfoToast } = useToast()
...
<Button type="button" color="purple" onClick={() => {
  showSuccessToast({
    position: "top-left"
  });
}}>Show Toast Button on the Top Left</Button>

<Button type="button" color="blue" className="mt-3" onClick={() => {
  showSuccessToast({
    position: "top-center"
  });
}}>Show Toast Button on the Top Center</Button>

<Button type="button" color="success" className="mt-3" onClick={() => {
  showSuccessToast({
    position: "top-right"
  });
}}>Show Toast Button on the Top Right</Button>

<Button type="button" color="warning" className="mt-3" onClick={() => {
  showSuccessToast({
    position: "bottom-right"
  });
}}>Show Toast Button on the Bottom Right</Button>

<Button type="button" color="failure" className="mt-3" onClick={() => {
  showSuccessToast({
    position: "bottom-center"
  });
}}>Show Toast Button on the Bottom Center</Button>

<Button type="button" color="dark" className="mt-3" onClick={() => {
  showSuccessToast({
    position: "bottom-left"
  });
}}>Show Toast Button on the Bottom Left</Button>

`