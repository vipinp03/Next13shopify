"use client";
import { Fragment, useEffect, useState, useContext } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
  ChartSquareBarIcon,
  FilterIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import ProductGrid from "./ProductGrid";
import {
  FilterProducts,
  getCollections,
  getCollectionsByHandle,
} from "@/lib/shopify";
import Link from "next/link";
import { getAllTags } from "@/lib/shopify";
import { UserContext } from "@/context/userContext";

const sortOptions = [
  { name: "Price: Low to High", value: false },
  { name: "Price: High to Low", value: true },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function productFilterCollection() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [collectionData, setConllectionData] = useState([]);
  const [collectionProductData, setCollectionProductData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(false);
  const { selectCountry, selectLang } = useContext(UserContext);

  // Fetch all tags
  const FetchAllTags = async () => {
    await getAllTags()
      .then((res) => {
        // Assuming 'response' contains the GraphQL API response
        const products = res.products.edges;

        // Extract tags from the products and flatten them into a single array
        const allTags = products.flatMap(({ node }) => node.tags);

        // Remove empty tags
        const nonEmptyTags = allTags.filter((tag) => tag.trim() !== "");
        // Remove duplicate tags
        const uniqueTags = [...new Set(nonEmptyTags)];
        // Assuming 'uniqueTags' contains the array of unique tags
        const tagOptions = uniqueTags.map((tag) => ({
          value: tag.toLowerCase(),
          label: tag,
          checked: false,
        }));

        const tagObject = {
          id: "tag",
          name: "Tags",
          options: tagOptions,
        };
        setFilters([tagObject]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Fetching filter data
  const GetFilterData = (Filterselect) => {
    FilterProducts(Filterselect, selectedPriceFilter, selectCountry, selectLang)
      .then((res) => {
        setCollectionProductData(res.products.edges);
        console.log("GetFilterData", res.products.edges);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Filter select on change
  const HandelFilterSelection = (e) => {
    let defaultValue = "tag";
    let result = `${defaultValue}:${e.target.value}`;
    if (e.target.checked) {
      const updatedFilter = [...new Set(selectedFilter), result];
      setSelectedFilter(updatedFilter);
    } else {
      // remove unChecked tags
      const newArray = selectedFilter.filter((element) => element !== result);
      setSelectedFilter(newArray);
    }
  };

  //  api call on filter selected change
  useEffect(() => {
    GetFilterData(selectedFilter.join(" "));
  }, [selectedFilter, selectedPriceFilter, selectCountry, selectLang]);

  const handleCollection = async () => {
    await getCollections().then((res) => {
      setConllectionData(res.collections.edges);
      console.log("handleCollection", res.collections.edges);
    });
  };
  const handelCollectionClick = async (data) => {
    const res = await getCollectionsByHandle(data, selectCountry, selectLang);
    setCollectionProductData(res);
  };

  useEffect(() => {
    FetchAllTags();
    handleCollection();
  }, []);

  // PRICE FILTER

  const handePriceFilter = (data) => {
    setSelectedPriceFilter(data);
    console.log("handePriceFilter", data);
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={() => setMobileFiltersOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}

                  <form className="mt-4 border-t border-gray-200">
                    <h3
                      onClick={() => setCollectionProductData([])}
                      className="block px-2 py-3 font-bold cursor-pointer"
                    >
                      All Product
                    </h3>

                    <li className="sr-only font-bold">Collection</li>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900 border-b border-t border-gray-200"
                    >
                      {collectionData.length > 0 &&
                        collectionData.map((item) => (
                          <li
                            onClick={() =>
                              handelCollectionClick(item.node.title)
                            }
                            key={item.node.title}
                            className="block px-2 py-3 cursor-pointer"
                          >
                            {item.node.title}
                          </li>
                        ))}
                    </ul>
                    <h3 className="sr-only">Categories</h3>
                    {/* <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul> */}

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      onChange={(e) => HandelFilterSelection(e)}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Products
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <div
                              className={classNames(
                                option.value === selectedPriceFilter
                                  ? "font-medium text-orange-500"
                                  : "text-gray-700",
                                // active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm cursor-pointer"
                              )}
                              onClick={() => handePriceFilter(option.value)}
                            >
                              {option.name}
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="h-5 w-5" aria-hidden="true" />
              </button> */}
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}

              <form className="hidden lg:block">
                <div onClick={() => setCollectionProductData([])}>
                  {" "}
                  <h1 className=" font-bold cursor-pointer">All Product</h1>
                </div>
                {/* <h1 className="sr-only font-bold">Collection</h1> */}
                <ul
                  role="list"
                  className="space-y-4 border-b border-t border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  <li className="sr-only font-bold">Collection</li>
                  {collectionData.length > 0 &&
                    collectionData.map((item) => (
                      <li
                        key={item.node.title}
                        onClick={() => handelCollectionClick(item.node.title)}
                        className="cursor-pointer"
                      >
                        {item.node.title}
                      </li>
                    ))}
                </ul>
                <h3 className="sr-only">Categories</h3>
                {/* <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  onChange={(e) => HandelFilterSelection(e)}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <ProductGrid collectionProductData={collectionProductData} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default productFilterCollection;
