An initial test to see if node is dropping events.
===

To run the test, you will need to login to whatever box you're running this on,
on two separate terminals: one to watch output, one to run the test.

To run the test, first create a fifo: `mkfifo output_watcher`

Now, on your second terminal run: `cat output_watcher`

Then, run the test: `node eventer.js | tee output_watcher | wc -l`

If the last number on both terminals don't match, then you're losing events.
