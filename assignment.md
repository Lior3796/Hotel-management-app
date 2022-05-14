# CardLatch Interview

### Project description

This project is an important part of a big hotel management system,

This project shows the hotel employees the status of the hotel, including rooms state and guests.

### Instructions

You need to create a Nodejs microservice that exposes several requested APIs, you will need to use spring data, spring security and twillo in this project,
please make sure you cover your code with tests.

The database you're going to use is mongo, The connection URI is

> mongodb+srv://username:password@cluster0.ofaxg.mongodb.net/interview?retryWrites=true&w=majority

### Collections

- rooms:
  - \_id
  - number
  - capacity
- guests

  - \_id
  - name
  - room

- entries
  - \_id
  - room
  - time

### APIs

> GET /rooms/availeable
> <br>
> return all availeable rooms ( rooms with no guests )
> <br> > `reception, manager, owner allowed`

> GET /guests/families
> <br>
> return all guests that stays in rooms with capacity greater then two
> <br> > `no restrictions`

> GET /rooms/couples
> <br>
> return all rooms with two guests stays in it so the manager can send bottles of wine as a gift
> <br> > `manager, owner allowed`

> POST /status
> <br>
> sends SMS to the owner of the hotel with cuurent percentage of taken rooms (use twillo)
> <br> > `only owner allowed`

### Security

As you can see in the APIs section, you need three types of users:

- reception
- manager
- owner

<br>
<br>
<strong><em>good luck !</em></strong>
