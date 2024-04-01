import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { TbArrowBack, TbX } from 'react-icons/tb'

import { MainLinks } from '@/components/navigation/mobile-menu/main-links'

export const MobileMenu = ({
  menuData,
  mobileMenuOpen,
  setMobileMenuOpen
}: any) => {
  const [isBrandsSelected, setIsBrandsSelected] = useState(false)
  const [isRangesSelected, setIsRangesSelected] = useState(false)
  const [isStylesSelected, setIsStylesSelected] = useState(false)
  const [isColoursSelected, setIsColoursSelected] = useState(false)
  const [isMainMenu, setIsMainMenu] = useState(true)

  const handleBackToMainMenu = () => {
    setIsBrandsSelected(false)
    setIsStylesSelected(false)
    setIsColoursSelected(false)
    setIsRangesSelected(false)
    setIsMainMenu(true)
  }

  const handleCloseMenu = () => {
    handleBackToMainMenu()
    setMobileMenuOpen(false)
  }

  const handleSelectedCategory = (category: string) => {
    switch (category) {
      case 'brands':
        setIsBrandsSelected(true)
        setIsRangesSelected(false)
        setIsStylesSelected(false)
        setIsColoursSelected(false)
        setIsMainMenu(false)
        break
      case 'ranges':
        setIsBrandsSelected(false)
        setIsRangesSelected(true)
        setIsStylesSelected(false)
        setIsColoursSelected(false)
        setIsMainMenu(false)
        break
      case 'styles':
        setIsBrandsSelected(false)
        setIsRangesSelected(false)
        setIsStylesSelected(true)
        setIsColoursSelected(false)
        setIsRangesSelected(false)
        setIsMainMenu(false)
        break
      case 'colours':
        setIsBrandsSelected(false)
        setIsRangesSelected(false)
        setIsStylesSelected(false)
        setIsColoursSelected(true)
        setIsMainMenu(false)
        break
      default:
        setIsBrandsSelected(false)
        setIsRangesSelected(false)
        setIsStylesSelected(false)
        setIsColoursSelected(false)
        setIsMainMenu(true)
    }
  }

  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-40 flex lg:hidden'
        onClose={setMobileMenuOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay
            className='fixed inset-0 bg-black/25'
            onClick={() => handleCloseMenu()}
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-stone-50 px-5 py-10 shadow'>
            <MainLinks
              menuData={menuData}
              handleSelectedCategory={handleSelectedCategory}
              isBrandsSelected={isBrandsSelected}
              setIsBrandsSelected={setIsBrandsSelected}
              isRangesSelected={isRangesSelected}
              setIsRangesSelected={setIsRangesSelected}
              isStylesSelected={isStylesSelected}
              setIsStylesSelected={setIsStylesSelected}
              isColoursSelected={isColoursSelected}
              setIsColoursSelected={setIsColoursSelected}
              setMobileMenuOpen={setMobileMenuOpen}
              isMainMenu={isMainMenu}
              setIsMainMenu={setIsMainMenu}
              handleCloseMenu={handleCloseMenu}
            />
            <TbX
              onClick={() => handleCloseMenu()}
              className='absolute right-2.5 top-2.5 size-5'
            />
            {!isMainMenu && (
              <TbArrowBack
                onClick={() =>
                  isRangesSelected
                    ? handleSelectedCategory('brands')
                    : handleBackToMainMenu()
                }
                className='absolute left-2.5 top-2.5 size-5'
              />
            )}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
