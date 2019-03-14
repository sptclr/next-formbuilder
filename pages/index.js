import React from 'react';
import Head from 'next/head';
import FormBuilder from 'react-form-builder2';

//i think the url must place in static folder in next.js
// import get from '../static/json/GET/dummy-get.json'
// import post from '../static/json/POST/dummy-post.json'

// Form Data
const url = '/api/formdata';
const saveUrl = '/api/formdata';
// User Data
const postUrl = '/api/form';

var items = [{
    key: 'Header',
    name: 'Header Text',
    icon: 'fa fa-header',
    static: true,
    content: 'Placeholder Text...'
  },
  {
    key: 'Paragraph',
    name: 'Paragraph',
    static: true,
    icon: 'fa fa-paragraph',
    content: 'Placeholder Text...'
  },
  {
    key: 'TextInput',
    canHaveAnswer: true,
    name: 'Text Input',
    label: 'Placeholder Label',
    icon: 'fa fa-font',
    field_name: 'text_input_',
  },];

class Index extends React.Component {
    render(){
        return(
            <div>
                <Head>
                    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
                </Head>

                {/* this code works but i don't get it alternate form/preview form to get my json  */}
                {/* <FormBuilder.ReactFormBuilder />  */}

                {/* then i change my code from the above to like this. in this documentation when using props */}
                <FormBuilder.ReactFormBuilder
                    url={url} //i dont know how put the url
                    toolbarItems={items}
                    saveUrl={saveUrl} />

                {/* then I put reactformgenerator under formbuilder, am i wrong? */}
                {/* <FormBuilder.ReactFormGenerator
                    form_action={postUrl}
                    form_method="POST"
                    
                    // for this part I have not understood what arguments I have to fill.
                    // Do I have to make blank files or do something else?
                    // because I also don't understand running the demo in the reactformbuilder master even though I have entered the demo folder and run npm install and npm start but it doesn't work

                    task_id={12} // Used to submit a hidden variable with the id to the form from the database.
                    answer_data={JSON_ANSWERS} // Answer data, only used if loading a pre-existing form with values.
                    authenticity_token={AUTH_TOKEN} // If using Rails and need an auth token to submit form.
                    data={JSON_QUESTION_DATA} // Question data
                /> */}
            </div>
        )
    }
}

export default Index