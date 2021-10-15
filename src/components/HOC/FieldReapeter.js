import React from 'react';
import { Button } from 'react-bootstrap';

export default function WithFieldReapeat(
  WrappedComponent,
  field,
  setField,
  handleChange,
  sec_name
) {
  function addMore() {
    let curField = field[sec_name];
    // get the keys in the Section
    let keyObject = Object.keys(curField[0]).reduce((agg, each) => {
      agg = { ...agg, [each]: '' };
      return agg;
    }, {});

    setField((old) => ({ ...old, [sec_name]: [...curField, keyObject] }));
  }

  function removeOne(idx) {
    let curField = field[sec_name];
    if (curField.length > 1) {
      curField.splice(idx, 1);
      console.log(curField);
      setField((old) => ({ ...old, [sec_name]: [...curField] }));
    }
  }

  return (
    <div>
      {field[sec_name].map((each, idx) => {
        return (
          <div
            style={{
              padding: '8px',
              background: idx % 2 == 0 ? '#eeeff1' : '',
            }}
          >
            <WrappedComponent
              field={field}
              handleChange={handleChange}
              sec_name={sec_name}
              idx={idx}
              remover={removeOne}
            />
          </div>
        );
      })}

      <Button variant="warning" className="float-right my-2 mx-2" size={'sm'} onClick={addMore}>
        {' '}
        + Add {sec_name}
      </Button>
    </div>
  );
}
