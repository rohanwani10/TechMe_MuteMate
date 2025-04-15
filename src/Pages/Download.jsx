import React from 'react';

export default function Download() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Download MuteMate
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of users who are breaking communication barriers with our innovative app.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.techme.mutemate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414c-.5516 0-1-.449-.9997-1 0-.5516.4484-1 .9997-1 .5517 0 1 .4484 1 1 0 .5506-.4483 1-1 1zm-12.046 0c-.5516 0-1-.449-.9997-1 0-.5516.4484-1 .9997-1 .5517 0 1 .4484 1 1 0 .5506-.4483 1-1 1zm12.4045-6.02l1.9973-3.4592a.4165.4165 0 00-.1523-.5676.416.416 0 00-.5676.1526l-1.995 3.459c-1.3877-.5296-2.9326-.5296-4.3203 0L8.833 5.4472a.4162.4162 0 00-.5677-.1526.4157.4157 0 00-.1523.5676l1.9973 3.4592c-2.53 1.959-3.5567 5.1223-2.5328 8.0729l.0068.0165a.415.415 0 00.3906.2759h10.125a.415.415 0 00.3906-.2759l.0068-.0165c1.0405-2.9634-.0423-6.1234-2.5723-8.0729zm-6.8815 4.5264c-.5516 0-1-.449-.9997-1 0-.5516.4484-1 .9997-1 .5517 0 1 .4484 1 1 0 .5506-.4483 1-1 1zm12.046 0c-.5516 0-1-.449-.9997-1 0-.5516.4484-1 .9997-1 .5517 0 1 .4484 1 1 0 .5506-.4483 1-1 1z" />
            </svg>
            Download on Google Play
          </a>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            System Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Minimum Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Android 8.0 or higher</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">2GB RAM</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">500MB free storage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Android 10.0 or higher</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">4GB RAM</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">1GB free storage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah M.</h4>
                  <p className="text-gray-600">Deaf User</p>
                </div>
              </div>
              <p className="text-gray-600">
                "MuteMate has completely transformed how I communicate with my colleagues. The real-time translation is incredibly accurate and has made my work life so much easier."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">David R.</h4>
                  <p className="text-gray-600">Family Member</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As someone learning sign language to communicate with my deaf sister, MuteMate's learning platform has been invaluable. The interactive lessons make learning fun and effective."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Emily T.</h4>
                  <p className="text-gray-600">Educator</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I use MuteMate in my classroom to help bridge the communication gap between my deaf and hearing students. It's an amazing tool that promotes inclusivity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Communication?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Download MuteMate today and start breaking down communication barriers.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.techme.mutemate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414c-.5516 0-1-.449-.9997-1 0-.5516.4484-1 .9997-1 .5517 0 1 .4484 1 1 0 .5506-.4483 1-1 1zm-12.046 0c-.5516 0-1-.449-.9997-1 0-.5516.4484-1 .9997-1 .5517 0 1 .4484 1 1 0 .5506-.4483 1-1 1zm12.4045-6.02l1.9973-3.4592a.4165.4165 0 00-.1523-.5676.416.416 0 00-.5676.1526l-1.995 3.459c-1.3877-.5296-2.9326-.5296-4.3203 0L8.833 5.4472a.4162.4162 0 00-.5677-.1526.4157.4157 0 00-.1523.5676l1.9973 3.4592c-2.53 1.959-3.5567 5.1223-2.5328 8.0729l.0068.0165a.415.415 0 00.3906.2759h10.125a.415.415 0 00.3906-.2759l.0068-.0165c1.0405-2.9634-.0423-6.1234-2.5723-8.0729zm-6.8815 4.5264c-.5516 0-1-.449-.9997-1 0-.5516.4484-1 .9997-1 .5517 0 1 .4484 1 1 0 .5506-.4483 1-1 1zm12.046 0c-.5516 0-1-.449-.9997-1 0-.5516.4484-1 .9997-1 .5517 0 1 .4484 1 1 0 .5506-.4483 1-1 1z" />
            </svg>
            Download Now
          </a>
        </div>
      </section>
    </div>
  );
} 