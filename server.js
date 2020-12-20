const USERNAME = process.env.POSTGRESS_USERNAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${USERNAME}`)
    console.log('Containers rule!');
    await sleep(5000);
  }
}

main();
