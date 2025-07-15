import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Hello, a message from {name}!</h1>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}
