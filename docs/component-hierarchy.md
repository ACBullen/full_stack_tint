# Component Hierarchy

### MainPageContainer
  - AuthFormContainer
    - AuthForm
  - NavBar
  - FeedIndexContainer
    - FeedIndex
      - PostContainer
        - Post

### PostShowContainer
  - PostShow
    - PostLikes

### NewTextFormContainer
  - NewTextForm

### NewQuoteFormContainer
  - NewQuoteForm

### NewImageFormContainer
  - NewImageForm

### NewAudioFormContainer
  - NewAudioForm

### NewVideoFormContainer
  - NewVideoForm

### NewLinkFormContainer
  - NewLinkForm

## Routes
|Path | Component|
|-----|----------|
|"/sign-up" | "AuthFormContainer"|
|"/sign-in" | "AuthFormContainer"|
| "/main" | "MainPageContainer"|
| "/post/:type/:post_id" | "PostShowContainer"|
| "post/text/new" | "NewTextFormContainer"|
| "post/quote/new" | "NewQuoteFormContainer" |
| "post/image/new" | "NewImageFormContainer" |
| "post/audio/new" | "NewAudioFormContainer" |
| "post/video/new" | "NewVideoFormContainer" |
| "post/link/new" | "NewLinkFormContainer" |
