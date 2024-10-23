import { test, test2 } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Admin() {
  return (
    <div className="pt-56 py-56 px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-white h-[800px]">
        <form action={test2} className="w-fit">
          <Input placeholder="message" name="message" />
          <Button type="submit">Test</Button>
        </form>
      </div>
    </div>
  );
}
