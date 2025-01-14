import { DfMenuService } from "@/services/DfMenuService";

const Page = async() => {
  const service = new DfMenuService();
  const menues = await service.getList();
  
  return (
    <div>
      <pre>{JSON.stringify(menues, null,2)}</pre>
    </div>
  );
};
export default Page;