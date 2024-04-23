import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const userCanInviteSomeoneElese = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')
const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log('🚀 ~ userCanInviteSomeoneElese:', userCanInviteSomeoneElese)
console.log('🚀 ~ userCanDeleteOtherUsers:', userCanDeleteOtherUsers)
console.log('🚀 ~ userCannotDeleteOtherUsers:', userCannotDeleteOtherUsers)
