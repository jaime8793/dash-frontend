import { createUploadthing } from "uploadthing/next";
import { createRouteHandler } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    ({ file }) => {
      console.log("File uploaded:", file);
      return { fileUrl: file.url };
    }
  ),
};
// ✅ Use createRouteHandler instead of createNextRouteHandler
export const { POST } = createRouteHandler({
  router: ourFileRouter,
});
