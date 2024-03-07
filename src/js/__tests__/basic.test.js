import AddTicket from '../AddTicket';

test('validate 1 test',  () => {

  expect(AddTicket.geolocationValidate("51.50851, -0.12572"))
    .toBe(true);
});


test('validate 2 test',  () => {

  expect(AddTicket.geolocationValidate("[51.50851, -0.12572]"))
    .toBe(false);
});

test('validate 3 test',  () => {

  expect(AddTicket.geolocationValidate("51.50851,-0.12572"))
    .toBe(false);
});
