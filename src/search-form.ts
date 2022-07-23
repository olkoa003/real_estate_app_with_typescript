import { renderBlock } from './lib.js'


const currentDate = new Date(); // current date generation
const minDateFormatted = currentDate.toISOString().split('T')[0];
const maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0);
const maxDateFormatted = new Date(maxDate.setDate(maxDate.getDate() + 1)).toISOString().split('T')[0];
const inDate = new Date(currentDate.setDate(currentDate.getDate() + 1));

// passing as args into the function
const inDateFormatted = inDate.toISOString().split('T')[0];
const outDateFormatted = new Date(inDate.setDate(inDate.getDate() + 2)).toISOString().split('T')[0];

export function renderSearchFormBlock(arrival: string = inDateFormatted, departure: string = outDateFormatted) {
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Saint-Petersburg" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Date of arrival</label>
            <input id="check-in-date" type="date" value=${arrival} min=${minDateFormatted} max=${maxDateFormatted} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Date of deprature</label>
            <input id="check-out-date" type="date" value=${departure} min=${minDateFormatted} max=${maxDateFormatted} name="checkin" />
          </div>
          <div>
            <label for="max-price">Max price for a stay</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div>
            <button>Search</button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>`
  )
}