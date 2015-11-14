import './style.css'

import React from 'react'
import {render} from 'react-dom'

import {GridForm, Fieldset, Row, Field} from '../../src'

let App = () => <div className="App">
  <h1><a href="https://github.com/insin/react-gridforms">react-gridforms</a> Demo</h1>
  <ProductForm/>
  <BankApplicationForm/>
</div>

let ProductForm = () => <div>
  <h2>Product Form</h2>
  <GridForm>
    <Fieldset legend="Add to inventory">
      <Row>
        <Field span={3}>
          <label>Product Name</label>
          <input type="text" autofocus/>
        </Field>
        <Field>
          <label>Tags</label>
          <input type="text"/>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Vendor</label>
          <select>
            <option>Select a vendor</option>
            <option>ted</option>
            <option>Magna Phasellus Dolor Incorporated</option>
            <option>Fames Ac Turpis Inc.</option>
            <option>Eu Eros Institute</option>
            <option>Suspendisse Sagittis Associates</option>
            <option>Tempor Lorem PC</option>
            <option>Nulla Facilisi Sed PC</option>
            <option>Dignissim Corp.</option>
            <option>Blandit Ltd</option>
            <option>Dapibus Gravida Aliquam LLP</option>
            <option>Cursus A Inc.</option>
            <option>Tellus PC</option>
            <option>Fusce Mi Foundation</option>
            <option>Dictum Sapien Aenean Associates</option>
            <option>In Tincidunt PC</option>
            <option>Sapien Aenean Ltd</option>
            <option>Libero Foundation</option>
            <option>Egestas Rhoncus Proin Corp.</option>
            <option>Feugiat Nec Diam Institute</option>
            <option>Turpis Foundation</option>
            <option>Pede Malesuada Vel Associates</option>
            <option>Eget Venenatis A PC</option>
            <option>Mollis Vitae Corporation</option>
            <option>Gravida Mauris Incorporated</option>
            <option>Tortor Consulting</option>
            <option>Habitant Morbi Tristique Corporation</option>
            <option>Enim Corp.</option>
            <option>Sed Turpis Nec LLC</option>
            <option>Enim Foundation</option>
            <option>Tincidunt Orci Quis Institute</option>
            <option>Lectus Pede LLC</option>
            <option>Class Corporation</option>
            <option>Erat Volutpat Nulla LLP</option>
            <option>Sed LLC</option>
            <option>Justo Faucibus Associates</option>
            <option>Vel Turpis Foundation</option>
            <option>Tellus Aenean Limited</option>
            <option>Tempus Scelerisque Corporation</option>
            <option>Eleifend LLP</option>
            <option>A Felis Ullamcorper Company</option>
            <option>Neque Non LLC</option>
            <option>Nibh Donec Est PC</option>
          </select>
        </Field>
        <Field>
          <label>Product Type</label>
          <select>
            <option>Select a product type</option>
            <option>et magnis</option>
            <option>Vivamus rhoncus.</option>
            <option>egestas ligula.</option>
            <option>nulla. Cras</option>
            <option>Proin mi.</option>
            <option>turpis non</option>
            <option>ante ipsum</option>
            <option>arcu. Curabitur</option>
            <option>ante. Maecenas</option>
            <option>magna. Phasellus</option>
            <option>Suspendisse aliquet,</option>
            <option>purus gravida</option>
            <option>ac risus.</option>
            <option>mollis non,</option>
          </select>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Product Description</label>
          <textarea></textarea>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>SKU</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Initial Stock Level</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Cost Price</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Wholesale Price</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Retail Price</label>
          <input type="text"/>
        </Field>
      </Row>
    </Fieldset>
  </GridForm>
</div>

let BankApplicationForm = () => <div>
  <h2>Personal Bank Account Initial Application</h2>
  <GridForm>
    <Fieldset legend="Please open an account at">
      <Row>
        <Field>
          <label>Branch Name</label>
          <input type="text" autofocus/>
        </Field>
      </Row>
    </Fieldset>

    <br/><br/>

    <Fieldset legend="Personal Details (Sole/First Accountholder/Minor)">
      <Row>
        <Field>
          <label>Title</label>
          <input id="r1" name="customer-title" type="radio"/><label htmlFor="r1"> Mr.</label>
          <input id="r2" name="customer-title" type="radio"/><label htmlFor="r2"> Mrs.</label>
          <input id="r3" name="customer-title" type="radio"/><label htmlFor="r3"> Ms.</label>
        </Field>
        <Field span="3">
          <label>Full Name</label>
          <input type="text"/>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Date of birth</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Nationality</label>
          <select>
            <option value="Afghanistan" title="Afghanistan">Afghanistan</option>
            <option value="Åland Islands" title="Åland Islands">Aland Islands</option>
            <option value="Albania" title="Albania">Albania</option>
            <option value="Algeria" title="Algeria">Algeria</option>
            <option value="American Samoa" title="American Samoa">American Samoa</option>
            <option value="Andorra" title="Andorra">Andorra</option>
            <option value="Angola" title="Angola">Angola</option>
            <option value="Anguilla" title="Anguilla">Anguilla</option>
            <option value="Antarctica" title="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda" title="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina" title="Argentina">Argentina</option>
            <option value="Armenia" title="Armenia">Armenia</option>
            <option value="Aruba" title="Aruba">Aruba</option>
            <option value="Australia" title="Australia">Australia</option>
            <option value="Austria" title="Austria">Austria</option>
            <option value="Azerbaijan" title="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas" title="Bahamas">Bahamas</option>
            <option value="Bahrain" title="Bahrain">Bahrain</option>
            <option value="Bangladesh" title="Bangladesh">Bangladesh</option>
            <option value="Barbados" title="Barbados">Barbados</option>
            <option value="Belarus" title="Belarus">Belarus</option>
            <option value="Belgium" title="Belgium">Belgium</option>
            <option value="Belize" title="Belize">Belize</option>
            <option value="Benin" title="Benin">Benin</option>
            <option value="Bermuda" title="Bermuda">Bermuda</option>
            <option value="Bhutan" title="Bhutan">Bhutan</option>
            <option value="Bolivia, Plurinational State of" title="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option>
            <option value="Bonaire, Sint Eustatius and Saba" title="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
            <option value="Bosnia and Herzegovina" title="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana" title="Botswana">Botswana</option>
            <option value="Bouvet Island" title="Bouvet Island">Bouvet Island</option>
            <option value="Brazil" title="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory" title="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam" title="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria" title="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso" title="Burkina Faso">Burkina Faso</option>
            <option value="Burundi" title="Burundi">Burundi</option>
            <option value="Cambodia" title="Cambodia">Cambodia</option>
            <option value="Cameroon" title="Cameroon">Cameroon</option>
            <option value="Canada" title="Canada">Canada</option>
            <option value="Cape Verde" title="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands" title="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic" title="Central African Republic">Central African Republic</option>
            <option value="Chad" title="Chad">Chad</option>
            <option value="Chile" title="Chile">Chile</option>
            <option value="China" title="China">China</option>
            <option value="Christmas Island" title="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands" title="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia" title="Colombia">Colombia</option>
            <option value="Comoros" title="Comoros">Comoros</option>
            <option value="Congo" title="Congo">Congo</option>
            <option value="Congo, the Democratic Republic of the" title="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
            <option value="Cook Islands" title="Cook Islands">Cook Islands</option>
            <option value="Costa Rica" title="Costa Rica">Costa Rica</option>
            <option value="Côte d'Ivoire" title="Côte d'Ivoire">Côte d'Ivoire</option>
            <option value="Croatia" title="Croatia">Croatia</option>
            <option value="Cuba" title="Cuba">Cuba</option>
            <option value="Curaçao" title="Curaçao">Curaçao</option>
            <option value="Cyprus" title="Cyprus">Cyprus</option>
            <option value="Czech Republic" title="Czech Republic">Czech Republic</option>
            <option value="Denmark" title="Denmark">Denmark</option>
            <option value="Djibouti" title="Djibouti">Djibouti</option>
            <option value="Dominica" title="Dominica">Dominica</option>
            <option value="Dominican Republic" title="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador" title="Ecuador">Ecuador</option>
            <option value="Egypt" title="Egypt">Egypt</option>
            <option value="El Salvador" title="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea" title="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea" title="Eritrea">Eritrea</option>
            <option value="Estonia" title="Estonia">Estonia</option>
            <option value="Ethiopia" title="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)" title="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands" title="Faroe Islands">Faroe Islands</option>
            <option value="Fiji" title="Fiji">Fiji</option>
            <option value="Finland" title="Finland">Finland</option>
            <option value="France" title="France">France</option>
            <option value="French Guiana" title="French Guiana">French Guiana</option>
            <option value="French Polynesia" title="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories" title="French Southern Territories">French Southern Territories</option>
            <option value="Gabon" title="Gabon">Gabon</option>
            <option value="Gambia" title="Gambia">Gambia</option>
            <option value="Georgia" title="Georgia">Georgia</option>
            <option value="Germany" title="Germany">Germany</option>
            <option value="Ghana" title="Ghana">Ghana</option>
            <option value="Gibraltar" title="Gibraltar">Gibraltar</option>
            <option value="Greece" title="Greece">Greece</option>
            <option value="Greenland" title="Greenland">Greenland</option>
            <option value="Grenada" title="Grenada">Grenada</option>
            <option value="Guadeloupe" title="Guadeloupe">Guadeloupe</option>
            <option value="Guam" title="Guam">Guam</option>
            <option value="Guatemala" title="Guatemala">Guatemala</option>
            <option value="Guernsey" title="Guernsey">Guernsey</option>
            <option value="Guinea" title="Guinea">Guinea</option>
            <option value="Guinea-Bissau" title="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana" title="Guyana">Guyana</option>
            <option value="Haiti" title="Haiti">Haiti</option>
            <option value="Heard Island and McDonald Islands" title="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
            <option value="Holy See (Vatican City State)" title="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras" title="Honduras">Honduras</option>
            <option value="Hong Kong" title="Hong Kong">Hong Kong</option>
            <option value="Hungary" title="Hungary">Hungary</option>
            <option value="Iceland" title="Iceland">Iceland</option>
            <option value="India" title="India">India</option>
            <option value="Indonesia" title="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of" title="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            <option value="Iraq" title="Iraq">Iraq</option>
            <option value="Ireland" title="Ireland">Ireland</option>
            <option value="Isle of Man" title="Isle of Man">Isle of Man</option>
            <option value="Israel" title="Israel">Israel</option>
            <option value="Italy" title="Italy">Italy</option>
            <option value="Jamaica" title="Jamaica">Jamaica</option>
            <option value="Japan" title="Japan">Japan</option>
            <option value="Jersey" title="Jersey">Jersey</option>
            <option value="Jordan" title="Jordan">Jordan</option>
            <option value="Kazakhstan" title="Kazakhstan">Kazakhstan</option>
            <option value="Kenya" title="Kenya">Kenya</option>
            <option value="Kiribati" title="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of" title="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
            <option value="Korea, Republic of" title="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait" title="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan" title="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic" title="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
            <option value="Latvia" title="Latvia">Latvia</option>
            <option value="Lebanon" title="Lebanon">Lebanon</option>
            <option value="Lesotho" title="Lesotho">Lesotho</option>
            <option value="Liberia" title="Liberia">Liberia</option>
            <option value="Libya" title="Libya">Libya</option>
            <option value="Liechtenstein" title="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania" title="Lithuania">Lithuania</option>
            <option value="Luxembourg" title="Luxembourg">Luxembourg</option>
            <option value="Macao" title="Macao">Macao</option>
            <option value="Macedonia, the former Yugoslav Republic of" title="Macedonia, the former Yugoslav Republic of">Macedonia, the former Yugoslav Republic of</option>
            <option value="Madagascar" title="Madagascar">Madagascar</option>
            <option value="Malawi" title="Malawi">Malawi</option>
            <option value="Malaysia" title="Malaysia">Malaysia</option>
            <option value="Maldives" title="Maldives">Maldives</option>
            <option value="Mali" title="Mali">Mali</option>
            <option value="Malta" title="Malta">Malta</option>
            <option value="Marshall Islands" title="Marshall Islands">Marshall Islands</option>
            <option value="Martinique" title="Martinique">Martinique</option>
            <option value="Mauritania" title="Mauritania">Mauritania</option>
            <option value="Mauritius" title="Mauritius">Mauritius</option>
            <option value="Mayotte" title="Mayotte">Mayotte</option>
            <option value="Mexico" title="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of" title="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of" title="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco" title="Monaco">Monaco</option>
            <option value="Mongolia" title="Mongolia">Mongolia</option>
            <option value="Montenegro" title="Montenegro">Montenegro</option>
            <option value="Montserrat" title="Montserrat">Montserrat</option>
            <option value="Morocco" title="Morocco">Morocco</option>
            <option value="Mozambique" title="Mozambique">Mozambique</option>
            <option value="Myanmar" title="Myanmar">Myanmar</option>
            <option value="Namibia" title="Namibia">Namibia</option>
            <option value="Nauru" title="Nauru">Nauru</option>
            <option value="Nepal" title="Nepal">Nepal</option>
            <option value="Netherlands" title="Netherlands">Netherlands</option>
            <option value="New Caledonia" title="New Caledonia">New Caledonia</option>
            <option value="New Zealand" title="New Zealand">New Zealand</option>
            <option value="Nicaragua" title="Nicaragua">Nicaragua</option>
            <option value="Niger" title="Niger">Niger</option>
            <option value="Nigeria" title="Nigeria">Nigeria</option>
            <option value="Niue" title="Niue">Niue</option>
            <option value="Norfolk Island" title="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands" title="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway" title="Norway">Norway</option>
            <option value="Oman" title="Oman">Oman</option>
            <option value="Pakistan" title="Pakistan">Pakistan</option>
            <option value="Palau" title="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied" title="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
            <option value="Panama" title="Panama">Panama</option>
            <option value="Papua New Guinea" title="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay" title="Paraguay">Paraguay</option>
            <option value="Peru" title="Peru">Peru</option>
            <option value="Philippines" title="Philippines">Philippines</option>
            <option value="Pitcairn" title="Pitcairn">Pitcairn</option>
            <option value="Poland" title="Poland">Poland</option>
            <option value="Portugal" title="Portugal">Portugal</option>
            <option value="Puerto Rico" title="Puerto Rico">Puerto Rico</option>
            <option value="Qatar" title="Qatar">Qatar</option>
            <option value="Réunion" title="Réunion">Réunion</option>
            <option value="Romania" title="Romania">Romania</option>
            <option value="Russian Federation" title="Russian Federation">Russian Federation</option>
            <option value="Rwanda" title="Rwanda">Rwanda</option>
            <option value="Saint Barthélemy" title="Saint Barthélemy">Saint Barthélemy</option>
            <option value="Saint Helena, Ascension and Tristan da Cunha" title="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
            <option value="Saint Kitts and Nevis" title="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia" title="Saint Lucia">Saint Lucia</option>
            <option value="Saint Martin (French part)" title="Saint Martin (French part)">Saint Martin (French part)</option>
            <option value="Saint Pierre and Miquelon" title="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="Saint Vincent and the Grenadines" title="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
            <option value="Samoa" title="Samoa">Samoa</option>
            <option value="San Marino" title="San Marino">San Marino</option>
            <option value="Sao Tome and Principe" title="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia" title="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal" title="Senegal">Senegal</option>
            <option value="Serbia" title="Serbia">Serbia</option>
            <option value="Seychelles" title="Seychelles">Seychelles</option>
            <option value="Sierra Leone" title="Sierra Leone">Sierra Leone</option>
            <option value="Singapore" title="Singapore">Singapore</option>
            <option value="Sint Maarten (Dutch part)" title="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
            <option value="Slovakia" title="Slovakia">Slovakia</option>
            <option value="Slovenia" title="Slovenia">Slovenia</option>
            <option value="Solomon Islands" title="Solomon Islands">Solomon Islands</option>
            <option value="Somalia" title="Somalia">Somalia</option>
            <option value="South Africa" title="South Africa">South Africa</option>
            <option value="South Georgia and the South Sandwich Islands" title="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
            <option value="South Sudan" title="South Sudan">South Sudan</option>
            <option value="Spain" title="Spain">Spain</option>
            <option value="Sri Lanka" title="Sri Lanka">Sri Lanka</option>
            <option value="Sudan" title="Sudan">Sudan</option>
            <option value="Suriname" title="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen" title="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="Swaziland" title="Swaziland">Swaziland</option>
            <option value="Sweden" title="Sweden">Sweden</option>
            <option value="Switzerland" title="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic" title="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan, Province of China" title="Taiwan, Province of China">Taiwan, Province of China</option>
            <option value="Tajikistan" title="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of" title="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand" title="Thailand">Thailand</option>
            <option value="Timor-Leste" title="Timor-Leste">Timor-Leste</option>
            <option value="Togo" title="Togo">Togo</option>
            <option value="Tokelau" title="Tokelau">Tokelau</option>
            <option value="Tonga" title="Tonga">Tonga</option>
            <option value="Trinidad and Tobago" title="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia" title="Tunisia">Tunisia</option>
            <option value="Turkey" title="Turkey">Turkey</option>
            <option value="Turkmenistan" title="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands" title="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu" title="Tuvalu">Tuvalu</option>
            <option value="Uganda" title="Uganda">Uganda</option>
            <option value="Ukraine" title="Ukraine">Ukraine</option>
            <option value="United Arab Emirates" title="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom" title="United Kingdom">United Kingdom</option>
            <option value="United States" title="United States">United States</option>
            <option value="United States Minor Outlying Islands" title="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            <option value="Uruguay" title="Uruguay">Uruguay</option>
            <option value="Uzbekistan" title="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu" title="Vanuatu">Vanuatu</option>
            <option value="Venezuela, Bolivarian Republic of" title="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option>
            <option value="Viet Nam" title="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British" title="Virgin Islands, British">Virgin Islands, British</option>
            <option value="Virgin Islands, U.S." title="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna" title="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara" title="Western Sahara">Western Sahara</option>
            <option value="Yemen" title="Yemen">Yemen</option>
            <option value="Zambia" title="Zambia">Zambia</option>
            <option value="Zimbabwe" title="Zimbabwe">Zimbabwe</option>
          </select>
        </Field>
      </Row>
      <Row>
        <Field span="2" data-field-error="Please enter a valid email address">
          <label>E-mail</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Mobile No.</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Existing Bank Account No. (if any)</label>
          <input type="text"/>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>In case of a minor please provide details (Name of parent and natural guardian)</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Name of father/spouse</label>
          <input type="text"/>
        </Field>
      </Row>

      <br/>
      <Fieldset legend="Residential address">
        <Row>
          <Field>
            <label>Flat no. and bldg. name</label>
            <input type="text"/>
          </Field>
          <Field>
            <label>Road no./name</label>
            <input type="text"/>
          </Field>
        </Row>
        <Row>
          <Field span="3">
            <label>Area and landmark</label>
            <input type="text"/>
          </Field>
          <Field>
            <label>City</label>
            <input type="text"/>
          </Field>
        </Row>
        <Row>
          <Field>
            <label>Telephone Residence</label>
            <input type="text"/>
          </Field>
          <Field>
            <label>Office</label>
            <input type="text"/>
          </Field>
          <Field>
            <label>Fax</label>
            <input type="text"/>
          </Field>
          <Field>
            <label>Pin code</label>
            <input type="text"/>
          </Field>
        </Row>
      </Fieldset>
    </Fieldset>
    <br/>

    <Fieldset legend="Mailing Address (If different from the First Accountholder's address)">
      <Row>
        <Field>
          <label>Company name and department/ Flat no. and bldg. name</label>
          <input type="text"/>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Road no./name</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Area and landmark</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>City</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Pin Code</label>
          <input type="text"/>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Telephone Residence</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Office</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Fax</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Mobile No.</label>
          <input type="text"/>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>E-mail</label>
          <input type="text"/>
        </Field>
      </Row>
    </Fieldset>

    <br/><br/>

    <Fieldset legend="Details of Introduction by Existing Customer (If applicable)">
      <Row>
        <Field>
          <label>Customer Name</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Account No.</label>
          <input type="text"/>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Introducer's signature</label>
          <textarea></textarea>
        </Field>
      </Row>
    </Fieldset>

    <br/><br/>

    <Fieldset legend="Account Details">
      <Row>
        <Field>
          <label>Choice of account</label>
          <label><input type="checkbox"/> Savings</label> &nbsp;
          <label><input type="checkbox"/> Current</label> &nbsp;
          <label><input type="checkbox"/> Fixed deposits</label>
        </Field>
        <Field>
          <label>Mode of funding</label>
          <label><input type="checkbox"/> Cash</label> &nbsp;
          <label><input type="checkbox"/> Cheque</label> &nbsp;
          <label><input type="checkbox"/> NEFT</label>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Amount</label>
          <input type="text"/>
        </Field>
      </Row>
      <br/>
      <Fieldset legend="Details of Fixed Deposit">
        <Row>
          <Field>
            <label>Types of deposit</label>
            <label><input type="checkbox"/> Ordinary</label> &nbsp;
            <label><input type="checkbox"/> Cumulative</label>
          </Field>
          <Field>
            <label>Mode of funding</label>
            <label><input type="checkbox"/> Cash</label> &nbsp;
            <label><input type="checkbox"/> Cheque</label> &nbsp;
            <label><input type="checkbox"/> NEFT</label>
          </Field>
        </Row>
        <Row>
          <Field span="2">
            <label>Amount</label>
            <input type="text"/>
          </Field>
          <Field>
            <label>No. of deposits</label>
            <input type="text"/>
          </Field>
          <Field>
            <label>Individual Deposit Amount</label>
            <input type="text"/>
          </Field>
        </Row>
      </Fieldset>
    </Fieldset>

    <br/><br/>
    <Fieldset legend="Personal Details">
      <Row>
        <Field>
          <label>Occupation</label>
          <label><input type="checkbox"/> Non-executive</label> &nbsp;
          <label><input type="checkbox"/> Housewife</label> &nbsp;
          <label><input type="checkbox"/> Retired</label> &nbsp;
          <label><input type="checkbox"/> Student</label> &nbsp;
          <label><input type="checkbox"/> Other</label> &nbsp;
          <label><input type="checkbox"/> Unemployed</label>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Job Title</label>
          <input type="text"/>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Department</label>
          <input type="text"/>
        </Field>
        <Field>
          <label>Nature of business</label>
          <input type="text"/>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Education</label>
          <label><input type="checkbox"/> Under graduate</label> &nbsp;
          <label><input type="checkbox"/> Graduate</label> &nbsp;
          <label><input type="checkbox"/> Others</label>
        </Field>
        <Field>
          <label>Monthly Income</label>
          <label><input type="checkbox"/> Zero Income</label> &nbsp;
          <label><input type="checkbox"/> Less than $10,000</label> &nbsp;
          <label><input type="checkbox"/> $10,000+</label>
        </Field>
      </Row>
      <Row>
        <Field>
          <label>Maritial Status</label>
          <label><input type="checkbox"/> Married</label> &nbsp;
          <label><input type="checkbox"/> Single</label>
        </Field>
        <Field>
          <label>Spouse name</label>
          <input type="text"/>
        </Field>
      </Row>
      <br/>
      <Fieldset legend="Other existing bank accounts, if any">
        <Row>
          <Field>
            <label>Name of the Bank / branch</label>
            <input type="text"/>
          </Field>
          <Field>
            <label>Name of the Bank / branch</label>
            <input type="text"/>
          </Field>
        </Row>
      </Fieldset>
    </Fieldset>
    <br/><br/>
    <Fieldset legend="Reason for Account opening">
      <Row>
        <Field>
          <label>Please specify</label>
          <input type="text"/>
        </Field>
      </Row>
    </Fieldset>
    <br/><br/>
    <Fieldset legend="Terms And Conditions">
      <Row>
        <Field>
          <label></label>
          <label><input type="checkbox"/> I/We confirm having read and understood the account rules of The Banking Corporation Limited ('the Bank'), and hereby agree to be bound by the terms and conditions and amendments governing the account(s) issued by the Bank from time-to-time.</label>
        </Field>
      </Row>
    </Fieldset>
  </GridForm>
</div>

var app = document.querySelector('#app')
if (!app) {
  app = document.createElement('div')
  app.id = 'app'
  document.body.appendChild(app)
}
render(<App/>, app)
