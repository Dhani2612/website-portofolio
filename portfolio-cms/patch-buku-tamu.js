import {getCliClient} from 'sanity/cli'

const client = getCliClient()

const patch = {
  id: "GNi82xCo1eRS3egKAio0Mf",
  set: {
    title_en: "Digital Guestbook System | Public Relations UPNVY",
    desc_en: "Information system for recording and managing data of guests visiting the Public Relations division of UPN \"Veteran\" Yogyakarta."
  }
};

async function run() {
  console.log('Patching Buku Tamu title_en and desc_en...');
  try {
    await client.patch(patch.id).set(patch.set).commit();
    console.log(`Patched ${patch.id}`);
  } catch (err) {
    console.error(`Failed to patch ${patch.id}:`, err.message);
  }
  console.log('Done!');
}

run();
