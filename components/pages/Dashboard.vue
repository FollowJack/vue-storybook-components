<template>
  <div class="bg-gray-50">
    <!-- NAVBAR -->
    <div class="flex flex-1">
      <MenuBarElement class="bg-white w-full justify-between items-center h-16">
        <template #left>
          <div class="flex">
            <ButtonElement
              class="mr-2 lg:hidden"
              size=""
              @click:button="handleSidebarMenuToggle"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-stroke-gray cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </ButtonElement>
            <LinkElement
              href="/"
              :border="false"
              class="flex items-center whitespace-nowrap"
            >
              <svg
                class="w-8 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                />
              </svg>
              DEVParadise
            </LinkElement>
          </div>
        </template>
        <template #right>
          <AvatarElement size="medium">DE</AvatarElement>
        </template>
      </MenuBarElement>
    </div>
    <div class="absolute top-16 right-0 bottom-0 left-0 flex">
      <!-- SIDEBAR MENU -->
      <SidebarMenuElement
        :is-initial-open="isSidebarMenuOpen"
        class="lg:static shadow rounded-b bg-white lg:bg-gray-50"
      >
        <template #middle>
          <SidebarItemElement href="#" is-active>
            <template #icon
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </template>
            <template #text> Dasboard </template>
          </SidebarItemElement>
          <SidebarItemElement href="#">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </template>
            <template #text> Search </template>
          </SidebarItemElement>
          <SidebarItemElement href="#">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </template>
            <template #text> Insights </template>
          </SidebarItemElement>
          <SidebarItemElement href="#">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
            </template>
            <template #text> Docs </template>
          </SidebarItemElement>
          <SidebarItemElement href="#">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </template>
            <template #text> Products </template>
          </SidebarItemElement>
          <SidebarItemElement href="#" disabled>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </template>
            <template #text> Settings </template>
          </SidebarItemElement>
          <SidebarItemElement href="#" class="relative">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </template>
            <template #text>
              Messages
              <BadgeElement
                variant="primary"
                class="absolute top-0 left-0 mt-2 ml-2"
              />
            </template>
          </SidebarItemElement>
        </template>
        <template #bottom>
          <SidebarItemElement href="#" variant="black">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </template>
            <template #text> Account </template>
          </SidebarItemElement>
        </template>
      </SidebarMenuElement>
      <!-- MAIN CONTENT -->
      <main class="flex flex-col flex-1 bg-gray-50">
        <!-- SUB NAVBAR -->
        <MenuBarElement class="flex-col md:flex-row justify-between">
          <template #left>
            <!-- BREADCRUMBS -->
            <BreadcrumbsElement :breadcrumbs="breadcrumbs" :current="current" />
          </template>
        </MenuBarElement>
        <div class="overflow-y-auto flex flex-col flex-1">
          <div class="min-h-full flex flex-col">
            <!-- STATS -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
              <CardMetricElement :percent="2.1" top="87.249€" bottom="Sales">
                <template #icon>
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M68.4 192A20.38 20.38 0 0048 212.2a17.87 17.87 0 00.8 5.5L100.5 400a40.46 40.46 0 0039.1 29.5h232.8a40.88 40.88 0 0039.3-29.5l51.7-182.3.6-5.5a20.38 20.38 0 00-20.4-20.2H68.4zm193.32 160.07A42.07 42.07 0 11304 310a42.27 42.27 0 01-42.28 42.07z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M160 192l96-128 96 128"
                    />
                  </svg>
                </template>
              </CardMetricElement>
              <CardMetricElement :percent="3.48" top="2.356" bottom="New Users">
                <template #icon>
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M68.4 192A20.38 20.38 0 0048 212.2a17.87 17.87 0 00.8 5.5L100.5 400a40.46 40.46 0 0039.1 29.5h232.8a40.88 40.88 0 0039.3-29.5l51.7-182.3.6-5.5a20.38 20.38 0 00-20.4-20.2H68.4zm193.32 160.07A42.07 42.07 0 11304 310a42.27 42.27 0 01-42.28 42.07z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M160 192l96-128 96 128"
                    />
                  </svg>
                </template>
              </CardMetricElement>
              <CardMetricElement
                :percent="-4.71"
                top="350.897"
                bottom="Traffic"
              >
                <template #icon>
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M68.4 192A20.38 20.38 0 0048 212.2a17.87 17.87 0 00.8 5.5L100.5 400a40.46 40.46 0 0039.1 29.5h232.8a40.88 40.88 0 0039.3-29.5l51.7-182.3.6-5.5a20.38 20.38 0 00-20.4-20.2H68.4zm193.32 160.07A42.07 42.07 0 11304 310a42.27 42.27 0 01-42.28 42.07z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M160 192l96-128 96 128"
                    />
                  </svg>
                </template>
              </CardMetricElement>
              <CardMetricElement
                :percent="7.35"
                top="563M"
                bottom="Capital Gains"
              >
                <template #icon>
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M68.4 192A20.38 20.38 0 0048 212.2a17.87 17.87 0 00.8 5.5L100.5 400a40.46 40.46 0 0039.1 29.5h232.8a40.88 40.88 0 0039.3-29.5l51.7-182.3.6-5.5a20.38 20.38 0 00-20.4-20.2H68.4zm193.32 160.07A42.07 42.07 0 11304 310a42.27 42.27 0 01-42.28 42.07z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M160 192l96-128 96 128"
                    />
                  </svg>
                </template>
              </CardMetricElement>
            </div>
            <!-- TABLES -->
            <div class="flex flex-col lg:flex-row px-2 pb-2 lg:space-x-2">
              <div class="flex-1 p-4 bg-white rounded">
                <div class="flex justify-between items-baseline">
                  <TextElement variant="headline3">User Signups</TextElement>
                  <LinkElement href="#">View all</LinkElement>
                </div>
                <TextElement as="p" color="gray" class="mb-2"
                  >Our latest users</TextElement
                >
                <TableElement class="bg-secondary" responsive>
                  <template #header>
                    <TableCellElement as="th">Name</TableCellElement>
                    <TableCellElement as="th">Email</TableCellElement>
                    <TableCellElement as="th">Status</TableCellElement>
                  </template>
                  <template #body>
                    <tr>
                      <TableCellElement>Deni Horvat</TableCellElement>
                      <TableCellElement>hi@devparadise.io</TableCellElement>
                      <TableCellElement
                        ><BadgeElement variant="success"
                          >CONFIRMED</BadgeElement
                        ></TableCellElement
                      >
                    </tr>
                    <tr>
                      <TableCellElement>Steve Jobs</TableCellElement>
                      <TableCellElement>s.jobs@apple.com</TableCellElement>
                      <TableCellElement
                        ><BadgeElement variant="success"
                          >CONFIRMED</BadgeElement
                        ></TableCellElement
                      >
                    </tr>
                    <tr>
                      <TableCellElement>John Doe</TableCellElement>
                      <TableCellElement>j.doe@example.com</TableCellElement>
                      <TableCellElement
                        ><BadgeElement>PENDING</BadgeElement></TableCellElement
                      >
                    </tr>
                  </template>
                </TableElement>
              </div>
              <div class="flex-1 p-4 bg-white rounded">
                <div class="flex justify-between items-baseline">
                  <TextElement variant="headline3">Social Traffic</TextElement>
                  <LinkElement href="#">View all</LinkElement>
                </div>
                <TextElement as="p" color="gray" class="mb-2"
                  >Our latest users</TextElement
                >
                <TableElement class="bg-secondary" responsive>
                  <template #header>
                    <TableCellElement as="th">Referal</TableCellElement>
                    <TableCellElement as="th">Visitors</TableCellElement>
                  </template>
                  <template #body>
                    <tr>
                      <TableCellElement>Facebook</TableCellElement>
                      <TableCellElement>1.480</TableCellElement>
                    </tr>
                    <tr>
                      <TableCellElement>Google</TableCellElement>
                      <TableCellElement>4.807</TableCellElement>
                    </tr>
                    <tr>
                      <TableCellElement>Instagram</TableCellElement>
                      <TableCellElement>3.687</TableCellElement>
                    </tr>
                    <tr>
                      <TableCellElement>Twitter</TableCellElement>
                      <TableCellElement>2.645</TableCellElement>
                    </tr>
                  </template>
                </TableElement>
              </div>
            </div>
            <!-- FOOTER -->
            <FooterElement
              :has-container="false"
              class="bg-white m-2 p-4 shadow rounded mt-auto"
            >
              <template #left>
                <div class="mb-2 lg:mb-0">
                  <LinkElement
                    class="block"
                    href="tel:+49 17699111575"
                    target="_blank"
                    ><TextElement
                      as="p"
                      variant="copy-medium"
                      color="primary"
                      weight="bold"
                    >
                      Contact
                    </TextElement>
                  </LinkElement>
                </div>
              </template>
              <template #right>
                <div class="lg:flex lg:w-full lg:justify-end">
                  <IconGroupElement color="black" size="small" />
                </div>
              </template>
              <template #bottom>
                <div class="flex flex-col lg:flex-row lg:justify-between mt-4">
                  <div class="flex items-center">
                    <TextElement
                      as="p"
                      variant="copy-small"
                      color="black"
                      class="mr-1"
                      >Built &amp; designed with</TextElement
                    >
                    <i fill="currentColor" class="text-red-500">
                      <svg
                        fill="currentColor"
                        height="14"
                        width="14"
                        viewBox="0 0 1792 1792"
                      >
                        <path
                          d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
                        ></path>
                      </svg>
                    </i>
                    <TextElement
                      as="p"
                      variant="copy-small"
                      color="black"
                      class="mx-1"
                      >by</TextElement
                    >
                    <LinkElement href="https://devparadise.io">
                      <TextElement as="span" variant="copy-small" color="black">
                        DevParadise
                      </TextElement>
                    </LinkElement>
                  </div>
                  <div class="flex items-center space-x-2">
                    <TextElement variant="copy-small" color="black"
                      >© {{ new Date().getFullYear() }} All rights reserved.
                    </TextElement>
                  </div>
                </div>
              </template>
            </FooterElement>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isSidebarMenuOpen = ref(false)

const breadcrumbs = [
  {
    text: '',
    link: '#',
  },
  {
    text: 'E-Commerce',
    link: '#',
  },
]

const current = {
  text: 'E-Commerce',
  link: '#',
}

function handleSidebarMenuToggle() {
  isSidebarMenuOpen.value = !isSidebarMenuOpen.value
}
</script>
