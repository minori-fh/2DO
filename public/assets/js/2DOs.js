$(function() {
    $(".change-complete").on("click", function(event){
        var id = $(this).data("id");
        var newComplete = $(this).data("newcomplete");

        if (newComplete === 1){
            newComplete = 0
        } else if (newComplete === 0){
            newComplete = 1
        }

        var newCompleteState = {
            complete: newComplete
        };

        // Send the PUT request.
        $.ajax("/api/tasks/" + id, {
            type: "PUT",
            data: newCompleteState
        }).then(
            function() {
            console.log("changed complete to", newComplete);
            // Reload the page to get the updated list
            location.reload();
            }
      );
    });

    $(".new-task-form").on("submit", function(event){
        event.preventDefault();

        var newTask= {
            task: $("#newTask").val().trim(),
            complete: "false"
        };

        // Send the POST request.
        $.ajax("/api/tasks", {
            type: "POST",
            data: newTask
        }).then(
            function() {
            console.log("created new task");
            console.log(newTask)
            // Reload the page to get the updated list
            location.reload();
        }
      );
    });

    $(".delete-task").on("click", function(event){
        var id = $(this).data("id");

            // Send the DELETE request.
        $.ajax("/api/tasks/" + id, {
            type: "DELETE"
        }).then(
        function() {
          console.log("deleted task", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );

    });
});

