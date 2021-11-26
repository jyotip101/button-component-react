import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <>
      <div className='contanear'>
        <h1>Button</h1>
        <div className='but-items'>
          <Button cName={'btn-1'} defaultBtn={`<Button />`} />
          <Button cName={'btn-1 btn-1-1'} defaultBtn={`&:hover, &:focus`} />
        </div>

        <div className='but-items'>
          <Button cName={'btn-2'} defaultBtn={`<Button variant=”outline” />`} />
          <Button cName={'btn-2 btn-2-1'} defaultBtn={`&:hover, &:focus`} />
        </div>

        <div className='but-items'>
          <Button cName={'btn-3'} defaultBtn={`<Button variant=text />`} />
          <Button cName={'btn-3 btn-3-1'} defaultBtn={`&:hover, &:focus`} />
        </div>

        <div className='but-items'>
          <Button
            cName={'btn-4 '}
            defaultBtn={`<Button disableShadow />`}
            disabled={'disabled'}
          />
        </div>

        <div className='but-items'>
          <Button
            cName={'btn-5'}
            defaultBtn={`<Button disabled />`}
            text={`Disabled`}
          />
          <Button
            cName={'btn-5 btn-5-1'}
            defaultBtn={`<Button variant=”text” disabled />`}
            text={`Disabled`}
          />
        </div>
        <div className='but-items'>
          <Button
            cName={'btn-6'}
            defaultBtn={`<Button startIcon=”local_grocery_store” />`}
            iconstart={'local_grocery_store'}
          />
          <Button
            cName={'btn-6'}
            defaultBtn={`<Button endIcon=”local_grocery_store” />`}
            iconend={`local_grocery_store`}
          />
        </div>

        <div className='but-items'>
          <Button cName={'btn-7'} defaultBtn={`<Button size=”sm” />`} />
          <Button cName={'btn-7-1'} defaultBtn={`<Button size=”md” />`} />
          <Button cName={'btn-7-2'} defaultBtn={`<Button size=”lg” />`} />
        </div>

        <div className='but-items'>
          <Button cName={'btn-8'} defaultBtn={`<Button color=”default” />`} />
          <Button cName={'btn-8-1'} defaultBtn={`<Button color=”primary” />`} />
          <Button
            cName={'btn-8-2'}
            defaultBtn={`<Button color=”secondary” />`}
            text={`Secondary`}
          />
          <Button
            cName={' btn-8-3'}
            defaultBtn={`<Button color=”danger”  />`}
            text={`Danger`}
          />
        </div>

        <div className='but-items'>
          <Button cName={'btn-9 '} defaultBtn={`&:hover, &:focus`} />
          <Button cName={'btn-9-1'} text={`Default`} />
          <Button cName={'btn-9-2'} text={`Secondary`} />
          <Button cName={'btn-9-3'} text={`Danger`} />
        </div>
        <footer>
          <p>
            created by <a href='https://github.com/jyotip101'>jyoti_p</a> -
            devChallenges.io
          </p>
        </footer>
      </div>
    </>
  )
}

export default ButtonList
