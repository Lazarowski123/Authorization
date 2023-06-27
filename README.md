# Authorization

## Steps:

### 1 Step:
first we check the correctness of the data, if the data is correct, we log in and move on

### 2 Step:
after logging in, the returned token from the server is saved in localstorage

### 3 Step:
after clicking on the client, the client's data will be downloaded. to do this we use HttpInterceptor

### 4 Step:
after logout, the token is removed from localstorage

### *:
the application is protected in the event of deleting the token from localstorage or in the event of logging out of one of the tabs with the application, the rest of the tabs after refreshing will return us to the login panel

## In this project I use:

- Reactive forms
- JWT
- HttpInterceptor
- CanActivate Guard
- Angular material

