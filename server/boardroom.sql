USE master
IF EXISTS(select * from sys.databases where name='BoardRoom')
DROP DATABASE BoardRoom

CREATE DATABASE BoardRoom;
GO

USE BoardRoom;
GO

CREATE TABLE Users
(UserID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
FullName VARCHAR(120) NOT NULL,
Username VARCHAR(120) NOT NULL,
Passwd VARCHAR(120) NOT NULL
)

CREATE TABLE Rooms
(
RoomID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
RoomName VARCHAR(120) NOT NULL
)

CREATE TABLE Bookings
(
BookingID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
UserID INT NOT NULL,
RoomID INT NOT NULL,
StartTime DATETIME NOT NULL,
EndTime DATETIME NOT NULL,
RoomStatus INT DEFAULT 0,
FOREIGN KEY (UserID) REFERENCES Users(UserID),
FOREIGN KEY (RoomID) REFERENCES Rooms(RoomID)
)

INSERT INTO [dbo].[Users]
           ([FullName],
            [Username],
             [Passwd])
VALUES ('Brandon Ngwenya', 'Bbdnet2003', 'Pass'),
       ('Meghan Westvig','Bbdnet2005', 'Pass')
GO
-- add as many as we need.


INSERT INTO Rooms (RoomName)
VALUES ('JAVA'),
('C#'),
('PASCAL')
-- Add more as we find list.
;
--USE BoardRoom;
--GO
--SELECT * FROM Users

--SELECT * FROM Rooms

--SELECT * FROM sys.database_files

--SELECT * FROM Bookings

USE BoardRoom
GO

INSERT INTO dbo.Bookings([UserID],[RoomID],[StartTime],[EndTime])
VALUES (1,1,getdate(),getdate()), (2,3,getdate(),getdate()), (2,3,getdate(),getdate()), (2,1,getdate(),getdate()), (1,5,getdate(),getdate())

CREATE PROCEDURE GetBookingsForRoom @RoomID int
AS
SELECT * FROM Bookings
WHERE RoomID = @RoomID
GO


USE [BoardRoom]
GO
--querry certain room
CREATE PROCEDURE [dbo].[GetBookingsForRoomR] @RoomID int
AS
SELECT Bookings.*, Users.FullName, Rooms.RoomName FROM Bookings
INNER JOIN Users on Users.UserID = Bookings.UserID
INNER JOIN Rooms on Rooms.RoomID = Bookings.RoomID
WHERE Bookings.RoomID = @RoomID
GO

--querry certain user
CREATE PROCEDURE [dbo].[GetBookingsForRoomU] @UserID int
AS
SELECT Bookings.*, Users.FullName, Rooms.RoomName FROM Bookings
INNER JOIN Users on Users.UserID = Bookings.UserID
INNER JOIN Rooms on Rooms.RoomID = Bookings.RoomID
WHERE Bookings.UserID = @UserID
GO

--query all the rooms
CREATE PROCEDURE [dbo].[GetBookingsForAllRooms]
AS
SELECT Bookings.*, Users.FullName, Rooms.RoomName FROM Bookings
INNER JOIN Users on Users.UserID = Bookings.UserID
INNER JOIN Rooms on Rooms.RoomID = Bookings.RoomID
WHERE RoomStatus = 0
GO

--update complete bookings
CREATE PROCEDURE [dbo].[UpdatePassedBookings]
AS
UPDATE [dbo].[Bookings]
SET RoomStatus = 2
WHERE StartTime > getdate()
GO

--checking into boardroom
CREATE PROCEDURE [dbo].[UpdateCompleteBookings] @BookingID int, @UserID int
AS
UPDATE [dbo].[Bookings]
SET RoomStatus = 1
WHERE BookingID = @BookingID AND UserID = @UserID
GO

--Delete or cancel booking
CREATE PROCEDURE [dbo].[CancelBookings] @BookingID int, @UserID int
AS
DELETE FROM Bookings
WHERE BookingID = @BookingID AND UserID = @UserID
GO

CREATE PROCEDURE [dbo].[login] @username varchar(120), @pass varchar(120)
AS
SELECT COUNT(*) FROM Users WHERE Username=@username AND Passwd=@pass
GO

CREATE PROCEDURE [dbo].[login1] @username varchar(120), @pass varchar(120)
AS
SELECT userID FROM Users WHERE Username=@username AND Passwd=@pass
GO

Use BoardRoom
Go
SELECT * FROM Users

	
--exec login "Bbdnet2005","Pass"

--exec login1 "Bbdnet20051","Pass"

--Add a booking
CREATE PROCEDURE [dbo].[AddBooking] @UserID int, @RoomID int, @Start datetime, @End datetime
AS
INSERT INTO dbo.Bookings([UserID],[RoomID],[StartTime],[EndTime])
VALUES (@UserID, @RoomID, @Start, @End)
GO

--querry certain room dd-mm-yyyy
CREATE PROCEDURE [dbo].[GetBookingsForRoomR1] @RoomID int, @Date date
AS
SELECT Bookings.*, Users.FullName, Rooms.RoomName FROM Bookings
INNER JOIN Users on Users.UserID = Bookings.UserID
INNER JOIN Rooms on Rooms.RoomID = Bookings.RoomID
WHERE Bookings.RoomID = @RoomID AND CONVERT(varchar(10),Bookings.StartTime, 105) = CONVERT(varchar(10),@Date, 105)
GO
