import { test, expect } from '@playwright/test';
import config from 'config';
import { ImageController } from '../../src/module/imgur/controller/image.controller';
const TOKEN: string = config.get('authorization');
let imageId: string = "";
const imageByUrl = {
    type: 'image/png',
    url: config.get('testData.images.url'),
    width: 780,
    height: 460,
    size: 10036
}

const imageAsText = {
    content: config.get('testData.images.base64'),
    type: 'image/png',
    width: 1428,
    height: 780,
    size: 84415
}

const imageAsFile = {
    content: config.get('testData.images.file')
}

test('push image as url', async () => {
    const postImageResponse = await ImageController.postImage(imageByUrl.url, TOKEN);
    console.log(postImageResponse.body);
    expect(postImageResponse.status).toEqual(200);
    expect(postImageResponse.body.status).toEqual(200);
    expect(postImageResponse.body.success).toEqual(true);
    expect(postImageResponse.body.data.type).toEqual(imageByUrl.type);
    expect(postImageResponse.body.data.height).toBe(imageByUrl.height);
    imageId = postImageResponse.body.data.deletehash;

  });

  test('push image as base64', async () => {
    const postImageResponse = await ImageController.postImage(imageAsText.content, TOKEN);
    console.log(postImageResponse.body);
    expect(postImageResponse.status).toEqual(200);
    expect(postImageResponse.body.status).toEqual(200);
    expect(postImageResponse.body.data.type).toEqual(imageAsText.type);
    imageId = postImageResponse.body.data.deletehash;
  });

  test.afterEach(async () => {
    if (imageId != "") {
        const deleteImageResponse = await ImageController.deleteImage(imageId, TOKEN);
        expect(deleteImageResponse.status).toEqual(200);
    }
  });
