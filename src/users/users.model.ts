import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @Column({ type: DataType.STRING, unique: true })
  declare email: string;
  @Column({ type: DataType.STRING })
  declare password: string;
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare banned: boolean;
  @Column({ type: DataType.STRING, allowNull: true })
  declare banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
