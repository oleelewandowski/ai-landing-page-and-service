import * as z from 'zod';

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Providing prompt is required',
  }),
});
