# Crowbar Forms

There's a zillion libraries out there that try to make it easy to deal with forms.

Now there's a zillion and one.  Yay!  This means that there might be one library that works the way you want it to, out of the afforementioned zillion libraries, instead of zero.

The number one goal is to provide HTML forms for a system that is also designed around accepting JSON input via a REST interface and that already has some degree of whole-object JSON validation (say JSON Schema?).  And so this adds a cute little layer atop that and then tries to otherwise get out of your way.

This means that when it generates a form, it takes the present object state, and a form-schema and generates a form.

And then the part that processes your form data takes the encoded form data, the form-schema, and the present object state... and creates an updated JSON state.

Afterwards you want to validate things, but you are doing it with the same JSON validator code that you'd use if the update was sent via your REST API.

## Things I decided not to do

It would be 'nice' to have the form library generate form field names that are unambiguously mappable to JSON structure, instead of requiring the user to provide the mapping.  

## Do I care?

Probably not.  It's not done yet.  It's been lying around on my HD for a long while now and I figured it's a discrete open-sourceable chunk.

## Contributing

I'd say "Patches welcome" but that's too passive-aggressive.

Patches welcome! :)

## License?

BSD, see LICENSE.txt
