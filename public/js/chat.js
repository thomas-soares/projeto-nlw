document.querySelector("#start_chat").addEventListener("click", (event) => {
  const socket = io();

  const chat_help = document.getElementById("chat_help");
  chat_help.style.display = "none";

  const chat_in_help = document.getElementById("chat_in_help");
  chat_in_help.style.display = "block";

  const email = document.getElementById("email").value;
  const text = document.getElementById("txt_help").value;

  socket.on("connect", () => {
    const params = {
      emails,
      text
    };

    socket.emit("client_first_access", params, (call, err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(call);
      }
    });
  });

  socket.on("client_list_all_messages", (messages) => {
    var template_client = document.getElementById("message-user-template").innerHTML;
    var template_admin = document.getElementById("admin-template").innerHTML;

    messages.forEach(message => {
      if (message.admin_id === null) {
        const rendered = Mustache.render(template_client, {
          message: message.text,
          email
        });

        document.getElementById("messages").innerHTML += rendered;
      }
    });
  });
});
