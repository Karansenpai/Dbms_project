import styles from "./page.module.css";
import Image from "next/image";
// import { getPost, getUser } from "@/lib/data";
// import PostUser from "@/components/postUser/postUser";

export default async function SingleBlogPage({ params }: any) {
  const { slug } = params;
  const post = {
    title: "Post",
    date: "Nov 12",
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    img: "/hero.png",
    imageLabel: "Image Text",
  };
  // const post = await getPost(slug);
  return (
    <div className={`p-[10%] ${styles.container}`}>
      <div className={styles.imgContainer}>
        {post.img && (
          <Image className={styles.img} alt="" src={post.img} fill />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Atharva</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>16-07-2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
}
