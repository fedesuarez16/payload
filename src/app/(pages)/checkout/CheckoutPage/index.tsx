// eslint-disable-next-line simple-import-sort/imports
import React, { Fragment, useEffect } from 'react'
// eslint-disable-next-line prettier/prettier
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Settings } from '../../../../payload/payload-types'
import { Button } from '../../../_components/Button'
import { LoadingShimmer } from '../../../_components/LoadingShimmer'
import { useAuth } from '../../../_providers/Auth'
import { useCart } from '../../../_providers/Cart'
import { CheckoutItem } from '../CheckoutItem'

import classes from './index.module.scss'

export const CheckoutPage: React.FC<{
  settings: Settings
}> = props => {
  const {
    settings: { productsPage },
  } = props

  const { user } = useAuth()
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)
  const { cart, cartIsEmpty, cartTotal } = useCart()

  useEffect(() => {
    if (user !== null && cartIsEmpty) {
      router.push('/cart')
    }
  }, [router, user, cartIsEmpty])

  if (!user) return null

  const handleWhatsAppClick = () => {
    const cartItems = cart?.items
      ?.map(item => {
        if (typeof item.product === 'object') {
          const { product, quantity } = item
          return `Product: ${product.title}, Quantity: ${quantity}`
        }
        return ''
      })
      // eslint-disable-next-line prettier/prettier
      .filter(Boolean)
      .join('\n')

    const message = `Hello, I would like to order the following items:\n${cartItems}\nTotal: ${cartTotal.formatted}`
    const whatsappUrl = `https://wa.me/+541133370937?text=${encodeURIComponent(message)}`
    window.location.href = whatsappUrl
  }

  return (
    <Fragment>
      {cartIsEmpty && (
        <div>
          {'Your '}
          <Link href="/cart">cart</Link>
          {' is empty.'}
          {typeof productsPage === 'object' && productsPage?.slug && (
            <Fragment>
              {' '}
              <Link href={`/${productsPage.slug}`}>Continue shopping?</Link>
            </Fragment>
          )}
        </div>
      )}
      {!cartIsEmpty && (
        <div className={classes.items}>
          <div className={classes.header}>
            <p>Products</p>
            <div className={classes.headerItemDetails}>
              <p></p>
              <p className={classes.quantity}>Quantity</p>
            </div>
            <p className={classes.subtotal}>Subtotal</p>
          </div>

          <ul>
            {cart?.items?.map((item, index) => {
              if (typeof item.product === 'object') {
                const {
                  quantity,
                  product,
                  product: { title, meta },
                } = item

                if (!quantity) return null

                const metaImage = meta?.image

                return (
                  <Fragment key={index}>
                    <CheckoutItem
                      product={product}
                      title={title}
                      metaImage={metaImage}
                      quantity={quantity}
                      index={index}
                    />
                  </Fragment>
                )
              }
              return null
            })}
            <div className={classes.orderTotal}>
              <p>Order Total</p>
              <p>{cartTotal.formatted}</p>
            </div>
          </ul>
        </div>
      )}
      {!cartIsEmpty && (
        <div className={classes.checkout}>
          <Button onClick={handleWhatsAppClick} label="Order via WhatsApp" />
        </div>
      )}
    </Fragment>
  )
}
