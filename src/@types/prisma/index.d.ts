import {
  PermActions,
  PermissionResource,
} from 'src/casl/casl-ability/casl-ability.service';

declare global {
  namespace PrismaJson {
    type PermissionList = Array<{
      action: PermActions;
      resource: PermissionResource;
      condition?: Record<string, any>;
    }>;
  }
}
