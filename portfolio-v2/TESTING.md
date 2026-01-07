# Portfolio Testing Checklist

## 🌐 Application URLs
- **Development Server**: http://localhost:5173/
- **Preview Build**: http://localhost:4173/

## ✅ Testing Checklist

### Navigation & Links
- [ ] Logo link scrolls to Home section
- [ ] "Home" nav link scrolls to Hero section
- [ ] "About" nav link scrolls to About section
- [ ] "Projects" nav link scrolls to Projects section
- [ ] "Experience" nav link scrolls to Experience section
- [ ] "Skills" nav link scrolls to Skills section
- [ ] "Blog" nav link scrolls to Blog section (if implemented)
- [ ] "Contact" nav link scrolls to Contact section
- [ ] All navigation transitions are smooth

### Mobile Menu
- [ ] Hamburger menu button visible on mobile (<768px)
- [ ] Menu opens when clicked
- [ ] Menu closes when clicking a link
- [ ] Menu closes when clicking X button
- [ ] Menu overlay works correctly

### Theme Toggle
- [ ] Sun/Moon icon switches correctly
- [ ] Theme persists after page reload
- [ ] All sections adapt to dark/light mode
- [ ] Theme toggle has smooth animation
- [ ] System preference is detected on first load

### Hero Section
- [ ] 3D shapes render and animate
- [ ] Profile image loads correctly
- [ ] "Get In Touch" button scrolls to Contact
- [ ] "Download Resume" link opens resume PDF
- [ ] GitHub link opens in new tab
- [ ] LinkedIn link opens in new tab
- [ ] Email link opens mail client
- [ ] Scroll indicator animates
- [ ] All text is readable in both themes

### About Section
- [ ] Profile image loads
- [ ] All 4 highlight cards display
- [ ] Hover effects work on cards
- [ ] Text is readable and formatted correctly
- [ ] Social media links work
- [ ] Section animates on scroll

### Projects Section
- [ ] All 4 projects display
- [ ] Category filter buttons work
- [ ] Filtering animations are smooth
- [ ] Project images load correctly
- [ ] Tech tags display for each project
- [ ] GitHub links open in new tab (where available)
- [ ] Demo links open in new tab (where available)
- [ ] Hover effects work on project cards

### Experience Timeline
- [ ] All experience entries display
- [ ] Company logos load correctly
- [ ] Timeline line renders
- [ ] Icons display (work/education)
- [ ] Alternating left/right layout on desktop
- [ ] Stacked layout on mobile
- [ ] Animations trigger on scroll

### Skills Section
- [ ] All programming skills display
- [ ] All software tool skills display
- [ ] Progress bars animate when scrolled into view
- [ ] Percentages are correct
- [ ] Gradient colors render correctly

### Contact Form
- [ ] Name field validation works
- [ ] Email field validation works
- [ ] Phone field (optional) works
- [ ] Message field validation works
- [ ] Form cannot submit when empty
- [ ] Submit button shows loading state
- [ ] Success message appears after submit
- [ ] Form resets after successful submit
- [ ] Error handling works

### Footer
- [ ] Copyright year is correct
- [ ] Quick links work
- [ ] Social media links open in new tab
- [ ] Hover effects work

### Performance & UX
- [ ] Page loads within 3 seconds
- [ ] Smooth scrolling works
- [ ] No console errors
- [ ] No layout shifts
- [ ] Images have proper alt text
- [ ] Animations don't cause jank
- [ ] 3D elements don't slow down page

### Responsive Design
- [ ] Desktop (>1024px) layout works
- [ ] Tablet (768px-1024px) layout works
- [ ] Mobile (375px-768px) layout works
- [ ] Small mobile (320px-375px) layout works
- [ ] No horizontal scrolling
- [ ] Touch targets are large enough on mobile

### Browser Compatibility
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Color contrast is sufficient
- [ ] Screen reader friendly

## 🐛 Known Issues
- Assets folder needs to be copied from old portfolio
- Resume PDF needs to be added to /public/resume/
- Project images need to be verified

## 📝 Notes
- The dev server is running at http://localhost:5173/
- Build output is in the `dist` folder
- Use `npm run build` to create production build
- Use `npm run preview` to preview production build
