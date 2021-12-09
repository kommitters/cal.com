import { CreditCardIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function AppStoreCategories(props: any) {
  return (
    <div className="mb-16">
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {props.categories.map((category: any) => (
          <Link key={category.name} href={"/apps/categories/" + category.name}>
            <a className="flex px-6 py-4 bg-gray-100 rounded-sm">
              <div className="flex w-12 h-12 mr-4 bg-white rounded-sm">
                <CreditCardIcon className="self-center w-6 h-6 mx-auto" />
              </div>
              <div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} apps</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
