import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesLocalModule } from './infrastructure/uploader/local/files.module';
import { DocumentFilePersistenceModule } from './infrastructure/persistence/document/document-persistence.module';

const infrastructurePersistenceModule = DocumentFilePersistenceModule;

const infrastructureUploaderModule = FilesLocalModule;

@Module({
  imports: [infrastructurePersistenceModule, infrastructureUploaderModule],
  providers: [FilesService],
  exports: [FilesService, infrastructurePersistenceModule],
})
export class FilesModule {}
