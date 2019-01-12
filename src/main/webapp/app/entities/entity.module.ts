import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FaeBooAccountDetailsModule } from './account-details/account-details.module';
import { FaeBooProfileModule } from './profile/profile.module';
import { FaeBooFriendModule } from './friend/friend.module';
import { FaeBooAlbumModule } from './album/album.module';
import { FaeBooPhotoModule } from './photo/photo.module';
import { FaeBooVideoModule } from './video/video.module';
import { FaeBooPostModule } from './post/post.module';
import { FaeBooCommentModule } from './comment/comment.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        FaeBooAccountDetailsModule,
        FaeBooProfileModule,
        FaeBooFriendModule,
        FaeBooAlbumModule,
        FaeBooPhotoModule,
        FaeBooVideoModule,
        FaeBooPostModule,
        FaeBooCommentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FaeBooEntityModule {}
