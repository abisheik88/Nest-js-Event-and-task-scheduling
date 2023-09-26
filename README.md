<h1>Events and Task scheduling</h1>

<p> This repository is about how I work in events and Task scheduling of Nest JS</p>

<h3> Events </h3>

- To start with Event we have to install a package which coming with NestJs

<p><b> npm i @nestjs/event-emitter </b></p>

- Then in app.module.ts in import property import them as <b>EventEmitterModule.forRoot()</b>

-The module can take some options objects.

- Just go and open the app.controller.ts -> HERE we create a post method where we can create a method for createuser()

- Then in app.service.ts we create a respective method for the post method.

-In SERVICE file we use the logger for application message logging.

- Assume a scenario when user is created. our application should send a mail to the user tells that the user was created successfully welcome message.

- But this operations should not make the user to wait so what we are going to is to decouple these operations using EVENTS.

-To use the event emitter we just inject the event emitter at top of the service file as
<b>constructor(private eventEmitter: EventEmitter2) {}</b> -> this EventEmitter2 is imported from @nestjs/event-emitter

-To use the event emitter, just use it inside the createuser function where just we use the below method

<code>this.eventEmitter.emit(
'order.created', //this is the key name which we given
new OrderCreatedEvent({
orderId: 1,
}),
);</code>

-Then if we wand to

<h3>Task Scheduling</h3>

-To start with Task Scheduling Install the below nestjs package

<p><b>npm install --save @nestjs/schedule</b></p>
<p><b>npm install --save -dev @types/cron</b></p>

- Then in app.module.ts in import property import them as <b>ScheduleModule.forRoot()</b>

-The module can take some options objects.
