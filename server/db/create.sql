
create table USERS(
    userId SERIAL primary key ,
    email varchar(50) unique,
    userName varchar(50),
    password varchar(50) default null,
    phone varchar(13) default null
);

create table CLASSROOM(
  classroomid SERIAL primary key,
  classroomName varchar(50) not null,
  classroomLeaderid INT not null,
  studentCount INT default 1,
  foreign key(classroomLeaderid) references USERS(userId) on delete cascade
);

create table ENROLLMENT(
    userId INT,
    classroomid INT,
    Enr_date DATE not null default now(),
    post_access BOOLEAN default true,
    primary key(userId,classroomid),
    foreign key(userId) references USERS(userId) on delete cascade,
    foreign key(classroomid) references CLASSROOM(classroomid) on delete cascade
);