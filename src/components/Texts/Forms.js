export default `import Input from "@forms/Input/Input"
import Button from "@forms/Button/Button"
import Checkbox from "@forms/Checkbox/Checkbox"
import Mobile from "@forms/Mobile/Mobile"
import Select from "@forms/Select/Select"
import DatePicker from "@forms/DatePicker/DatePicker"
...
<Input
  handleInputChange={handleInputChange}
  value={formData?.email ?? ''}
  label="Email Address"
  name="email"
  type="email"
  placeholder="admin@opsoftware.dev"
  color="warning"
  required
  helperText={<>This is not a valid email address.</>}
/>
<Input
  handleInputChange={handleInputChange}
  value={formData?.password ?? ''}
  label="Password"
  name='password'
  type="password"
  required
  color="success"
/>
<Mobile
  inputName="mobile"
  selectName="country_id"
  inputValue={formData?.mobile ?? ""}
  selectValue={formData?.country_id ?? ""}
  countryNameKey="name"
  countryFlagKey="iso2"
  countryCodeKey="countrycode"
  countryValue="id"
  options={testOptions}
  handleInputChange={handleInputChange}
  handleSelectChange={handleSelectChange}
  required
/>
<Select
  label="Gender"
  name="gender"
  color="info"
  optionName="name"
  value={formData?.gender ?? ""}
  defaultLabel="Select One"
  optionValue="id"
  options={[
    { name: "Male", id: 1 },
    { name: "Female", id: 2 },
  ]}
  handleSelectChange={handleSelectChange}
  required
/>
<DatePicker
  label="Date Range"
  name="daterange"
  value={formData?.daterange}
  handleDateRangeChange={handleDateRangeChange}
/>
<div className="flex justify-between">
  <Checkbox
    label="Remember me"
    name="remember_me"
    value={formData?.remember_me ?? ""}
    handleCheckBoxChange={handleCheckBoxChange}
  />
  <div 
  className="font-bold text-primary" 
  role="button">Forgot Password?</div>
</div>
<Button
  type="submit"
  isLoading={formLoading}
  className="bg-gradient-to-b from-primary to-sub-primary"
>Submit</Button>
...
`