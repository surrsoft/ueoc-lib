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
      <div className={styles.atitle}>text with border</div>
      {
        new UeocTextElem()
          .text('text with border')
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
      <div className={styles.atitle}>Hello</div>
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


    </LayoutMain>
  </>
}
