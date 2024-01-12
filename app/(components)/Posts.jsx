import Post from "@/app/components/Post";

const Posts = () => {
  return (
    <div className="md:tw-px-48 md:tw-pt-40">
      <div>
        <p>Practice Advice</p>
        <h1>Featured Posts</h1>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="tw-flex tw-gap-x-2.5">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
