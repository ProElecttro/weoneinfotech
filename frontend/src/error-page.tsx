import "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();

  return (
    <div id="error-page">
      <h1 style={{ fontSize: "24px" }}>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
