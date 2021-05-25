import { Entity, PrimaryColumn, CreateDateColumn, Column } from 'typeorm';

@Entity("messages")
class Message {
  
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;
  
  @Column()
  text: string;
  
  user_id: string;
  
  @CreateDateColumn()
  created_at: Date;

  

};

export { Message };