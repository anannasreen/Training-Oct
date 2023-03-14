type StatusProps = {
  status: "loading" | "success" | "error";
  //   status: string;
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
      {/* <h2>Loading...</h2>
      <h2>Data fetched successfully!</h2>
      <h2>Error fetching data</h2> */}
    </div>
  );
};
