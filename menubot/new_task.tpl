%#template for the form for a new task

% include('nav.tpl')
<p>Add a new task to the ToDo list:</p>
<form action="/new" method="GET">
  <input type="number" size="100" maxlength="100" name="id">
  <input type="number" size="100" maxlength="100" name="qty">
  <input type="submit" name="save" value="Add">
</form>
