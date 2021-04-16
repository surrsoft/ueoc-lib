import UeocEmpty from '../../ueoc/UeocEmpty';
import { UeocTextElem } from '../../ueoc';
import { UeocBorder } from '../../ueoc';
import LayoutMain from '../../components/LayoutMain';
import styles from './example.module.css'

interface Props {

}

export default function Example(props: Props) {
  return <>
    <LayoutMain>
      <div> /example ; UeocTextElem</div>

      <UeocEmpty h={16}/>
      <div className={styles.atitle}>текст с рамкой</div>
      {
        new UeocTextElem()
          .text('text')
          .border(new UeocBorder().th(1).color('#000000'))
          .build()
      }
      <pre>{`
        new UeocTextElem()
          .text('111')
          .border(new UeocBorder().th(1).color('#000000'))
          .build()`}
      </pre>

      <UeocEmpty h={16}/>
      <div className={styles.atitle}>плюс с paddings 8px слева и справа</div>
      {
        new UeocTextElem()
          .text('text')
          .border(new UeocBorder().th(1).color('#000000'))
          .utPaddingL(8)
          .utPaddingR(8)
          .build()
      }
      <pre>{`
        new UeocTextElem()
          .text('text')
          .border(new UeocBorder().th(1).color('#000000'))
          .utPaddingL(8)
          .utPaddingR(8)
          .build()
          `}
      </pre>

      <UeocEmpty h={16}/>
      <div className={styles.atitle}>плюс с заливкой цветом</div>
      {
        new UeocTextElem()
          .text('text')
          .border(new UeocBorder().th(1).color('#000000'))
          .utPaddingL(8)
          .utPaddingR(8)
          .bgColor('#ffff00')
          .build()
      }
      <pre>{`
        new UeocTextElem()
          .text('text')
          .border(new UeocBorder().th(1).color('#000000'))
          .utPaddingL(8)
          .utPaddingR(8)
          .bgColor('#ffff00')
          .build()
          `}
      </pre>


    </LayoutMain>
  </>
}
