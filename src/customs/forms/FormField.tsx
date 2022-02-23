import { FC, forwardRef } from "react";
import { getIn, useFormikContext } from "formik";
import TextField from "@mui/material/TextField";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Search, Cancel } from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "./FormField.scss";
import NumberFormat from "react-number-format";
interface clearFieldsST {
  field: string;
  clearValue: any;
}

interface SelectST {
  label: string;
  value: any;
}

type PropsDateField = {
  label?: string;
  name: string;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
};

type PropsTextField = {
  label?: string;
  name: string;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  searchButton?: boolean;
  clearButton?: boolean;
  readonly?: boolean;
  currencyField?: boolean;
  style?: Object;
  clearFields?: clearFieldsST[];
  onClearFields?: () => void;
  onSearchClick?: () => void;
  onBlur?: (value: any) => void;
};

type PropsArrayTextField = {
  arrayPropName: string;
  label?: string;
  index: number;
  propName: string;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  searchButton?: boolean;
  clearButton?: boolean;
  readonly?: boolean;
  currencyField?: boolean;
  style?: Object;
  clearFields?: clearFieldsST[];
  onClearFields?: () => void;
  onSearchClick?: () => void;
  onBlur?: (value: any) => void;
};

type PropsSelectField = {
  label: string;
  name: string;
  options: SelectST[];
  onSelectChange?: (value: any) => void;
};

interface PropsNumberFormat {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const FormTextField: FC<PropsTextField> = ({
  label,
  name,
  variant = "outlined",
  size = "medium",
  searchButton = false,
  clearButton = false,
  readonly = false,
  currencyField = false,
  style,
  clearFields,
  onClearFields,
  onSearchClick,
  onBlur,
}) => {
  const { setFieldValue, touched, setFieldTouched, errors, values } =
    useFormikContext<any>();
  return (
    <>
      <TextField
        id={name}
        label={label}
        value={values[name]}
        variant={variant}
        size={size}
        margin="normal"
        style={{ width: "100%", ...style }}
        onBlur={(e) => {
          setFieldTouched(name);
          if (onBlur) {
            onBlur(e.target.value);
          }
        }}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
        helperText={touched[name] && errors[name]}
        error={Boolean(touched[name] && errors[name])}
        InputProps={{
          endAdornment:
            searchButton || clearButton ? (
              <InputAdornment position="end">
                {searchButton ? (
                  <IconButton
                    type="button"
                    aria-label="Search"
                    onClick={onSearchClick}
                    edge="end"
                  >
                    <Search />
                  </IconButton>
                ) : null}
                {clearButton ? (
                  <IconButton
                    type="button"
                    aria-label="Clear"
                    onClick={() => {
                      clearFields?.forEach((field, index) => {
                        setFieldValue(field.field, field.clearValue);
                      });
                      if (onClearFields) {
                        onClearFields();
                      }
                    }}
                    edge="end"
                  >
                    <Cancel />
                  </IconButton>
                ) : null}
              </InputAdornment>
            ) : null,
          readOnly: readonly,
          inputComponent: currencyField ? (NumberFormatCustom as any) : null,
        }}
      />
    </>
  );
};

export const FormArrayTextField: FC<PropsArrayTextField> = ({
  label = ".",
  arrayPropName,
  index,
  propName,
  variant = "outlined",
  size = "small",
  searchButton = false,
  clearButton = false,
  readonly = false,
  currencyField = false,
  style,
  clearFields,
  onClearFields,
  onSearchClick,
  onBlur,
}) => {
  const { setFieldValue, touched, setFieldTouched, errors, values } =
    useFormikContext<any>();
  const fieldValue = values[arrayPropName][index][propName];
  const fieldName = `${arrayPropName}[${index}].${propName}`;
  const touchedProperty = getIn(touched, fieldName);
  const errorsProperty = getIn(errors, fieldName);
  return (
    <>
      <TextField
        id={fieldName}
        label={label}
        value={fieldValue}
        variant={variant}
        size={size}
        margin="normal"
        style={{ width: "100%", ...style }}
        onBlur={(e) => {
          setFieldTouched(fieldName);
          if (onBlur) {
            onBlur(e.target.value);
          }
        }}
        onChange={async (e) => {
          setFieldValue(fieldName, e.target.value);
        }}
        helperText={touchedProperty && errorsProperty}
        error={Boolean(touchedProperty && errorsProperty)}
        InputProps={{
          endAdornment:
            searchButton || clearButton ? (
              <InputAdornment position="end">
                {searchButton ? (
                  <IconButton
                    type="button"
                    aria-label="Search"
                    onClick={onSearchClick}
                    edge="end"
                  >
                    <Search />
                  </IconButton>
                ) : null}
                {clearButton ? (
                  <IconButton
                    type="button"
                    aria-label="Clear"
                    onClick={() => {
                      clearFields?.forEach((field, index) => {
                        setFieldValue(field.field, field.clearValue);
                      });
                      if (onClearFields) {
                        onClearFields();
                      }
                    }}
                    edge="end"
                  >
                    <Cancel />
                  </IconButton>
                ) : null}
              </InputAdornment>
            ) : null,
          readOnly: readonly,
          inputComponent: currencyField ? (NumberFormatCustom as any) : null,
        }}
      />
    </>
  );
};

export const FormSelectField: FC<PropsSelectField> = ({
  label,
  name,
  options,
  onSelectChange,
}) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue(name, event.target.value);
    if (onSelectChange) {
      onSelectChange(event.target.value);
    }
  };
  return (
    <FormControl size="medium" margin="normal" fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        labelId={name}
        id={name}
        value={values[name]}
        label={label}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const FormDateField: FC<PropsDateField> = ({
  label,
  name,
  variant = "outlined",
  size = "medium",
}) => {
  const { values, setFieldValue } = useFormikContext<any>();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={values[name]}
        onChange={(date) => {
          setFieldValue(name, date);
        }}
        renderInput={(params) => (
          <TextField
            variant={variant}
            size={size}
            margin="normal"
            style={{ width: "100%" }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

const NumberFormatCustom = forwardRef<NumberFormat, PropsNumberFormat>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        style={{ textAlign: "right" }}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
      />
    );
  }
);
