export default function Contact() {
  return (
    <div className="flex container mx-auto mt-16 w-11/12 2xl:w-8/12 xl:w-8/12 lg:w-10/12 md:w-10/12">
      <div>
        <h1 className="text-left font-bold text-3xl mb-10">
          {`Let's grab a coffee`}
        </h1>
        <p className="text-left text-xl text-blueGray-800 mb-3">
          If you like my works or want to connect with me, never hesitate to
          send me an email at{" "}
          <a className="link" href="mailto:junkai@hey.com">
            junkai@hey.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
