import EmailsRepository from '@/api/repository/emailsRepository'
import UsersRepository from '@/api/repository/usersRepository'
import ListEmailTempRepository from '@/api/repository/listEmailTempRepository'
import InboxTempRepository from '@/api/repository/inboxTempRepository'
import ListLangRepository from '@/api/repository/listLangRepository'

const repositories = {
  emails: EmailsRepository,
  users: UsersRepository,
  listEmailTemp: ListEmailTempRepository,
  inboxTemp: InboxTempRepository,
  listLang: ListLangRepository,
}

export const RepositoryFactory = {
  get: name => repositories[name]
}