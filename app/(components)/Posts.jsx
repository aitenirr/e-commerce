import Post from "@/app/components/Post";

const Posts = () => {
  return (
    <section className="md:tw-px-[70px] ">
      <div className="tw-flex tw-flex-col tw-text-center">
        <h5 className="tw-text-[14px] tw-font-bold tw-text-[#23A6F0] tw-pt-20 ">
          Practice Advice
        </h5>
        <h1 className=" tw-font-bold  tw-pt-4 tw-pb-4">
          Featured <br /> Posts
        </h1>
        <p className=" tw-text-[14px] tw-font-normal tw-text-[#737373] tw-pb-5">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className=" tw-gap-x-[50px] tw-flex tw-flex-col md:tw-flex  md:tw-flex-row">
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default Posts;
