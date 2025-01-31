import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'

const filters = [
    {
        id: 'season',
        name: 'Season',
        options: [
            { value: 'Winter', label: 'Winter'},
            { value: 'Spring', label: 'Spring'},
            { value: 'Summer', label: 'Summer'},
            { value: 'Fall', label: 'Fall'},
        ],
    },
    {
        id: 'genres',
        name: 'Genres',
        options: [
            { value: 'Fantacy', label: 'Fantacy'},
            { value: 'Drama', label: 'Drama'},
            { value: 'Comedy', label: 'Comedy'},
            { value: 'Adventure', label: 'Adventure'},
            { value: 'Action', label: 'Action'},
            { value: 'Sports', label: 'Sports'},
            { value: 'Fantacy', label: 'Fantacy'},
            { value: 'Fantacy', label: 'Fantacy'},
        ],
    },
    {
        id: 'studio',
        name: 'Studio',
        options: [
            { value: 'Fantacy', label: 'Fantacy'},
        ],
    },
    {
        id: 'format',
        name: 'Format',
        options: [
            { value: 'TV Series', label: 'TV Series'},
            { value: 'OVA', label: 'OVA'},
            { value: 'ONA', label: 'ONA'},
            { value: 'Movies', label: 'Movies'},
            { value: 'Specials', label: 'Specials'},
        ],
    },
    {
        id: 'arising-status',
        name: 'Arising Status',
        options: [
            { value: 'Ongoing', label: 'Ongoing'},
            { value: 'Completed', label: 'Completed'},
            { value: 'Coming Soon', label: 'Coming Soon'},
        ],
    },
]
const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]

function Filter() {
    return (
        <div className="hidden lg:block border h-fit pb-10 p-4 rounded-md">
            {/* <h3 className="sr-only">Categories</h3> */}
            {/* <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}
            <Disclosure key="year" as="div" className="py-6">
                    <h3 className="-my-3 flow-root border-b-2">
                        <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-white hover:cursor-pointer hover:text-gray-500">
                            <span className="font-medium">Year</span>
                            <span className="ml-6 flex items-center">
                                <MdKeyboardArrowUp aria-hidden="true" className="size-5 group-data-open:hidden" />
                                <MdKeyboardArrowDown aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                            </span>
                        </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                        <div>
                            <ul className='grid grid-cols-4 gap-4'>
                                <li className='border w-fit p-2 rounded-md'>2025</li>
                                <li className='border w-fit p-2 rounded-md'>2024</li>
                                <li className='border w-fit p-2 rounded-md'>2023</li>
                                <li className='border w-fit p-2 rounded-md'>2022</li>
                                <li className='border w-fit p-2 rounded-md'>2021</li>
                                <li className='border w-fit p-2 rounded-md'>2020</li>
                            </ul>
                            {/* {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex gap-3">
                                    <div className="flex h-5 shrink-0 items-center">
                                        <div className="group grid size-4 grid-cols-1">
                                            <input
                                                defaultValue={option.value}
                                                defaultChecked={option.checked}
                                                id={`filter-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                type="checkbox"
                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                            />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                        {option.label}
                                    </label>
                                </div>
                            ))} */}
                        </div>
                    </DisclosurePanel>
            </Disclosure>
            {filters.map((section) => (
                <Disclosure key={section.id} as="div" className="py-6">
                    <h3 className="-my-3 flow-root border-b-2">
                        <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-white hover:cursor-pointer hover:text-gray-500">
                            <span className="font-medium">{section.name}</span>
                            <span className="ml-6 flex items-center">
                                <MdKeyboardArrowUp aria-hidden="true" className="size-5 group-data-open:hidden" />
                                <MdKeyboardArrowDown aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                            </span>
                        </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex gap-3">
                                    <div className="flex h-5 shrink-0 items-center">
                                        <div className="group grid size-4 grid-cols-1">
                                            <input
                                                defaultValue={option.value}
                                                defaultChecked={option.checked}
                                                id={`filter-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                type="checkbox"
                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                            />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            ))}
        </div>
    )
}

export default Filter