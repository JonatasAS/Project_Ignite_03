import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import { NewTransactionModal } from '../NewTransactionModal'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova Transição</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
