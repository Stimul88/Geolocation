import AddTicket from '../AddTicket';

test('validate 1 test',  () => {
  const geo = "51.50851, -0.12572"
  const date = geo.split(' ')

  const latitude = parseFloat(date[0]);
  const longitude = parseFloat(date[1]);

  expect(AddTicket.geolocationValidate(latitude, longitude))
    .toBe(true);
});


test('validate 2 test',  () => {
  const geo = "[51.50851, -0.12572]"
  const date = geo.split(' ')

  const latitude = parseFloat(date[0]);
  const longitude = parseFloat(date[1]);

  expect(AddTicket.geolocationValidate(latitude, longitude))
    .toBe(false);
});

test('validate 3 test',  () => {
  const geo = "51.50851,-0.12572"
  const date = geo.split(' ')

  const latitude = parseFloat(date[0]);
  const longitude = parseFloat(date[1]);

  expect(AddTicket.geolocationValidate(latitude, longitude))
    .toBe(false);
});
