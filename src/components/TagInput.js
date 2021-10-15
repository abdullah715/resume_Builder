import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Card, Col } from 'react-bootstrap';
import ReactTags from 'react-tag-autocomplete';
import sugges from './utils/suggestions'
function tagComponent({ tag, removeButtonText, onDelete }) {
  return (
    <Button type="button" size="sm" variant="success" className={'mx-1 mb-1'} title={removeButtonText} onClick={onDelete}>
      {tag.name} 
    </Button>
  );
}

function SuggestionComponent({ item, query }) {
  return (
    <span id={item.id} className={item.name === query ? 'match' : 'no-match'}>
      {item.name}
    </span>
  );
}

export default function TagInput({fields,setField,sec_name}) {
  const [tags, setTags] = useState([]);


  const [sugg, setSugg] = useState(sugges);


  React.useEffect(_=>{
    console.log("inTAG",fields[sec_name])
    setTags(fields[sec_name])
  },[])

  function onDelete(i) {
    const list = tags;
    list.splice(i, 1);
    setTags(list);
    setField(old=>({...old,[sec_name]:list}))
  }

  function onAddition(tag) {
    tags ? setTags((old) => [...old, tag]) : setTags((old) => [tag])

    const list = tags ? [...tags,tag] : [tag]
    setField(old=>({...old,[sec_name]:list}))
    
  }

  

  React.useEffect(_=>{
    
  },[])

  return (
    <Form.Row>
      <Form.Group as={Col} md="12" controlId="validationCustom03">
        <Form.Label>Skills</Form.Label>
        
        <ReactTags
          placeholderText={'Start Typing'}
          tags={tags}
          tagComponent={tagComponent}
          suggestionComponent={SuggestionComponent}
          classNames={{root:" form-control p-2 tabBar",searchInput:'w-100 p-0 m-0 border-0  '+ (tags.length == 0 ? 'form-control' : '')+' react-tags__searchinput'}}
          suggestions={sugg}
          onDelete={onDelete}
          onAddition={onAddition}
          minQueryLength={1}
          allowNew
          allowBackspace
          inputAttributes={{required:true,multiline:true}}
        />
      </Form.Group>
    </Form.Row>
  );
}
